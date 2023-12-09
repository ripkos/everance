/**
 * Usage = FILENAME=name node scripts/csv2json.js
 */

import { Buffer } from 'buffer';
// eslint-disable-next-line no-undef
globalThis.Buffer = Buffer;
import Bunzip from 'seek-bzip';
import { readFileSync } from 'node:fs';
/*
This regular expression is used to match fields in a CSV file where some fields may be enclosed in double quotes.
> /(?:^|,) - This non-capturing group (?: ... ) matches the start of the string ^ or a comma ,. It’s used to find the beginning of a new field.
> (?:"[^"]*(?:""[^"]*)*"|[^,]*) - This is a non-capturing group that matches:
> "[^"]*(?:""[^"]*)*" - A field that starts with a double quote " followed by any number of non-quote characters [^"]*, 
then any number of sequences of two double quotes "" followed by any number of non-quote characters [^"]*, 
and ending with a double quote ". The (?:""[^"]*)* part allows escaped double quotes within the field.
> |: Logical OR operator, which allows for an alternative match.
> [^,]*: Any number of characters that are not a comma, which matches unquoted fields.
> /g: The g flag at the end of the regex indicates that it should match all occurrences within the string, not just the first one.
*/
const csvRegex = /(?:^|,)(?:"[^"]*(?:""[^"]*)*"|[^,]*)/g;
fetchDecompressParseCSV(process.env.FILENAME);
function fetchDecompressParseCSV(filename) {
	const response = readFileSync(filename);
	const arrayBuffer = new Uint8Array(response);
	const decompressed = Bunzip.decode(arrayBuffer);
	const csvData = new TextDecoder('utf-8').decode(decompressed);
	const rows = csvData.match(/(?:\r\n|\n|^)(?:"[^"]*(?:""[^"]*)*"|[^"\r\n]*)*(?=\r\n|\n|$)/g);
	if (!rows) {
		throw new Error('No rows found in CSV data');
	}
	const headers = rows[0]
		.match(csvRegex)
		?.map((header) => header.trim().replace(/^,|"$/g, '').replace(/""/g, '"'));
	if (!headers) {
		throw new Error('No headers found in CSV data');
	}
	const result = rows.slice(1).map((row) => {
		const columns = row.match(csvRegex);
		const obj = {};
		columns?.forEach((column, index) => {
			let value = column.trim();
			if (value.startsWith(',')) {
				value = value.slice(1);
			}
			if (value.startsWith('"') && value.endsWith('"')) {
				value = value.slice(1, -1).replace(/""/g, '"');
			}
			obj[headers[index]] = value;
		});
		return obj;
	});
	process.stdout.write(JSON.stringify(result));
}
//FILENAME=invGroups node scripts/csv2json.js | bzip2 > test.bz2
