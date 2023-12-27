/// <reference lib="WebWorker" />
declare const self: SharedWorkerGlobalScope;
import type { invTypes, dgmTypeAttributes, invGroups } from '$lib/model/model-types';
interface LooseObject {
	[key: string]: unknown;
}
export type Msg = {
	type: MsgType;
	params: unknown;
};

export type SkillData = {
	order: number;
	id: number;
	name: string | null | undefined;
	primary: number | null | undefined;
	secondary: number | null | undefined;
	sp: number | null | undefined;
	level: string | null | undefined;
};
export type SPCalculatorResponseDTO = {
	skills: SkillData[];
	sum: number;
};

export enum MsgType {
	SPCalculator
}

function mapOneToMany<K, One extends LooseObject, Many extends LooseObject>(
	oneNavigationProperty: string,
	oneArray: One[],
	manyNavigationProperty: string,
	manyArray: Many[],
	manyPK: string
) {
	const manyMap = new Map<K, Many>();
	manyArray.forEach((many) => {
		manyMap.set(many[manyPK] as K, many);
	});
	oneArray.forEach((oneObj) => {
		const key = oneObj[manyPK] as K;
		const manyObj = manyMap.get(key);
		if (manyObj) {
			let arr: Array<One> | null | undefined = manyObj[oneNavigationProperty] as Array<One>;
			if (!arr) {
				arr = [];
			}
			arr.push(oneObj);
			(manyObj as LooseObject)[oneNavigationProperty] = arr;
			(oneObj as LooseObject)[manyNavigationProperty] = manyObj;
		}
	});
}

let invTypesArr: Array<invTypes> = [];
let dgmTypeAttributesArr: Array<dgmTypeAttributes> = [];
let invGroupsArr: Array<invGroups> = [];
function sdej(url: string) {
	return `/sde/${url}.json`;
}
async function fetchParse(url: string) {
	const res = await fetch(sdej(url));
	return await res.json();
}
let isInit = false;
let isError = false;
async function init() {
	//fetch
	invTypesArr = await fetchParse('invTypes');
	dgmTypeAttributesArr = await fetchParse('dgmTypeAttributes');
	invGroupsArr = await fetchParse('invGroups');
	mapOneToMany('dgmTypeAttributes', dgmTypeAttributesArr, 'invTypes', invTypesArr, 'typeID');
	mapOneToMany('invTypes', invTypesArr, 'invGroups', invGroupsArr, 'groupID');
}

const invGroupsSkillCategoryID = 16;
const dgmTypeAttributesPrimaryID = 180;
const dgmTypeAttributesSecondaryID = 181;
const dgmTypeAttributesModifierID = 275;

const sqrt32 = Math.sqrt(32);
const powers: Map<string, number> = new Map<string, number>([
	['0', 0],
	['1', 1],
	['2', sqrt32],
	['3', 32],
	['4', 32 * sqrt32],
	['5', 1024]
]);
function levelToSP(level: string, modifier: number): number {
	if (!'12345'.includes(level)) {
		throw new Error('Only supports levels 1-5!');
	}
	const currentLevel = Math.round(250 * modifier * (powers.get(level) as number));
	const prevLevel = Math.round(
		250 * modifier * (powers.get((Number(level) - 1).toFixed(0)) as number)
	);
	return Math.round(currentLevel - prevLevel);
}

function calculateSP(inputString: string): SPCalculatorResponseDTO {
	let sum = 0;
	const returnArray: Array<SkillData> = [];
	inputString
		.trimEnd()
		.split('\n')
		.map((str) => ({
			name: str.substring(0, str.length - 2),
			level: Number(str.substring(str.length - 1)).toFixed(0)
		}))
		.forEach((x,idx) => {
			try {
				const iT = invTypesArr.find(
					(iT) =>
						iT.invGroups?.categoryID === invGroupsSkillCategoryID &&
						iT.typeName &&
						iT.typeName === x.name
				);
				if (iT) {
					const primary = iT.dgmTypeAttributes?.find(
						(x) => x.attributeID === dgmTypeAttributesPrimaryID
					)?.valueFloat;
					const secondary = iT.dgmTypeAttributes?.find(
						(x) => x.attributeID === dgmTypeAttributesSecondaryID
					)?.valueFloat;
					const modifier = iT.dgmTypeAttributes?.find(
						(x) => x.attributeID === dgmTypeAttributesModifierID
					)?.valueFloat;
					const sp = levelToSP(x.level, modifier as number);
					sum += sp;
					returnArray.push({
						order: idx,
						id: iT.typeID,
						name: iT.typeName,
						primary: primary,
						secondary: secondary,
						sp: sp,
						level: x.level
					});
				} else {
					returnArray.push({
						order: idx,
						id: -1,
						name: x.name,
						level: x.level,
						primary: null,
						secondary: null,
						sp: null,
					});
				}
			} catch (e) {
				console.log(e);
				returnArray.push({
					order: idx,
					id: -1,
					name: x.name,
					level: x.level,
					primary: null,
					secondary: null,
					sp: null,
				});
			}
		});
	return { skills: returnArray, sum: sum };
}

self.onconnect = async (e) => {
	if (!isInit)
		try {
			await init();
			isInit = true;
		} catch (e) {
			isInit = false;
			isError = true;
		}
	const port = e.ports[0];
	port.onmessage = (msg) => {
		const data: Msg = msg.data;
		switch (data.type) {
			case MsgType.SPCalculator:
				port.postMessage({
					type: MsgType.SPCalculator,
					params: calculateSP(data.params as string)
				});
		}
	};
};
