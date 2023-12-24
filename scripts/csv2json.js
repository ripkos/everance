import { decompressParseCSV } from '../src/lib/csv2json.mjs';
import { readFileSync, writeFileSync } from 'node:fs';

const inPrefix = `${process.env.PWD}/in/sde/`
const outPrefix = `${process.env.PWD}/out/sde/`;

String.prototype.toNumberOrNull = (value) => (value ? Number(value) : null);
String.prototype.toBoolean = (value) => (value && value === '1');

/**
 * @typedef {Object} ParsingType
 * @property {string} name
 * @property {function | undefined} mapper
 * @property {function | undefined} filter
 */

/**
 * @typedef {import('../src/lib/model/model-types').invTypes} invTypes
 * @typedef {import('../src/lib/model/model-import-types').invTypes} invTypesImport
 * */

/**
 * @type {ParsingType}
 */
const invTypes = {
	name: 'invTypes',
	/** @type {(v: invTypesImport) => invTypes} */
	mapper: (v) => {
		return {
			typeID: Number(v.typeID),
			groupID: v.groupID?.toNumberOrNull(),
			typeName: v.typeName ?? null,
			description: v.description ?? null,
			mass: v.typeID?.toNumberOrNull(),
			volume: v.volume?.toNumberOrNull(),
			capacity: v.capacity?.toNumberOrNull(),
			portionSize: v.portionSize?.toNumberOrNull(),
			raceID: v.raceID?.toNumberOrNull(),
			basePrice: v.basePrice?.toNumberOrNull(),
			published: v.published?.toBoolean(),
			marketGroupID: v.marketGroupID?.toNumberOrNull(),
			iconID: v.iconID?.toNumberOrNull(),
			soundID: v.soundID?.toNumberOrNull(),
			graphicID: v.graphicID?.toNumberOrNull()
		};
	}
};

/** @type {Array<ParsingType>} */
[
	invTypes
].forEach( ({name, mapper, filter}) => {
	const result = decompressParseCSV(new Uint8Array(readFileSync(`${inPrefix}${name}.csv.bz2`)),mapper,filter);
	writeFileSync(`${outPrefix}${name}.json`, JSON.stringify(result))
});
