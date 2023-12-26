import { Buffer } from 'buffer';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line no-undef
globalThis.Buffer = Buffer;
import Bunzip from 'seek-bzip';

const csvRegex = /(?:^|,)(?:"[^"]*(?:""[^"]*)*"|[^,]*)/g;
/**
 * @template T
 * @param {Uint8Array} arrayBuffer
 * @param {undefined | ((value: {[key: string]: string}) => T)} mapper
 * @param {undefined | ((value: {[key: string]: string}) => value is {[key: string]: string})} filter
 * @returns {Array<T>}
 */
export function decompressParseCSV(arrayBuffer, mapper, filter) {
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
	let result = rows.slice(1).map((row) => {
		const columns = row.match(csvRegex);
		let /**@type {any}*/ obj = {};
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
	if (filter) result = result.filter(filter);
	if (mapper) result = result.map(mapper);
	return result;
}
