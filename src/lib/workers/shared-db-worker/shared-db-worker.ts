//#region imports
/// <reference lib="WebWorker" />
import type { invTypes, dgmTypeAttributes, invGroups } from '$lib/model/model-types';
import type { LooseObject } from '$lib/utils/helpers';
import { calculateSP } from './sp-calculator';
//#endregion

//#region type declarations
export type Msg = {
	type: MsgType;
	params: unknown;
};

export enum MsgType {
	SPCalculator
}
//#endregion

//#region helper functions
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
function sdej(url: string) {
	return `/sde/${url}.json`;
}
async function fetchParse(url: string) {
	const res = await fetch(sdej(url));
	return await res.json();
}
//#endregion

//#region state
let isInit = false;
let isError = false;
//#endregion

//#region in-memory db
let invTypesArr: Array<invTypes> = [];
let dgmTypeAttributesArr: Array<dgmTypeAttributes> = [];
let invGroupsArr: Array<invGroups> = [];
//#endregion

//#region initialization
async function init() {
	invTypesArr = await fetchParse('invTypes');
	dgmTypeAttributesArr = await fetchParse('dgmTypeAttributes');
	invGroupsArr = await fetchParse('invGroups');
	mapOneToMany('dgmTypeAttributes', dgmTypeAttributesArr, 'invTypes', invTypesArr, 'typeID');
	mapOneToMany('invTypes', invTypesArr, 'invGroups', invGroupsArr, 'groupID');
}
declare const self: SharedWorkerGlobalScope;
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
					params: calculateSP(data.params as string, invTypesArr)
				});
		}
	};
};
//#endregion
