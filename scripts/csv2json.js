import { decompressParseCSV } from '../src/lib/csv2json.mjs';
import { readFileSync, writeFileSync } from 'node:fs';

const inPrefix = `${process.env.PWD}/in/sde/`;
const outPrefix = `${process.env.PWD}/out/sde/`;
Object.defineProperty(String.prototype, 'toNumberOrNull', {
	value: function toNumberOrNull() {
		return this ? Number(this) : null;
	},
	writable: true,
	configurable: true,
});
Object.defineProperty(String.prototype, 'toBoolean', {
	value: function toBoolean() {
		return this && this === '1';
	},
	writable: true,
	configurable: true,
});

/**
 * @typedef {Object} ParsingType
 * @property {string} name
 * @property {function | undefined} mapper
 * @property {function | undefined} filter
 */

/**
 * @typedef {import('../src/lib/model/model-types').invTypes} invTypes
 * @typedef {import('../src/lib/model/model-import-types').invTypesImport} invTypesImport
 * */

/**
 * @type {ParsingType}
 */
const invTypes = {
	name: 'invTypes',
	/** @type {(v: invTypesImport) => invTypes} */
	mapper: (v, _, __) => {
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
			graphicID: v.graphicID?.toNumberOrNull(),
		};
	},
};

/**
 * @typedef {import('../src/lib/model/model-types').dgmTypeAttributes} dgmTypeAttributes
 * @typedef {import('../src/lib/model/model-import-types').dgmTypeAttributesImport} dgmTypeAttributesImport
 * */

/**
 * @type {ParsingType}
 */
const dgmTypeAttributes = {
	name: 'dgmTypeAttributes',
	/** @type {(v: dgmTypeAttributesImport) => dgmTypeAttributes} */
	mapper: (v, _, __) => {
		return {
			typeID: Number(v.typeID), //pk
			attributeID: Number(v.attributeID), //pk
			valueInt: v.valueInt?.toNumberOrNull(),
			valueFloat: v.valueFloat?.toNumberOrNull(),
		};
	},
};

/**
 * @typedef {import('../src/lib/model/model-types').invGroups} invGroups
 * @typedef {import('../src/lib/model/model-import-types').invGroupsImport} invGroupsImport
 * */

/**
 * @type {ParsingType}
 */
const invGroups = {
	name: 'invGroups',
	/** @type {(v: invGroupsImport) => invGroups} */
	mapper: (v, _, __) => {
		return {
			groupID: Number(v.groupID), // pk
			categoryID: v.categoryID?.toNumberOrNull(),
			groupName: v.groupName,
			iconID: v.iconID?.toNumberOrNull(),
			useBasePrice: v.useBasePrice?.toBoolean(),
			anchored: v.anchored?.toBoolean(),
			anchorable: v.anchorable?.toBoolean(),
			fittableNonSingleton: v.fittableNonSingleton?.toBoolean(),
			published: v.published?.toBoolean(),
		};
	},
};

/** @type {Array<ParsingType>} */
[invTypes, dgmTypeAttributes, invGroups].forEach(({ name, mapper, filter }) => {
	const result = decompressParseCSV(
		new Uint8Array(readFileSync(`${inPrefix}${name}.csv.bz2`)),
		mapper,
		filter
	);
	writeFileSync(`${outPrefix}${name}.json`, JSON.stringify(result));
});
