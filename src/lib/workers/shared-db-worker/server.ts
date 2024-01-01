//#region imports
/// <reference lib="WebWorker" />
import type { invTypes, dgmTypeAttributes, invGroups } from '$lib/model/model-types';
import { calculateSP, type SPCalculatorResponse } from './sp-calculator';
//#endregion

//#region type declarations
export type MsgRequest = {
	type: MsgType;
	params: string;
};

export type MsgResponse = {
	type: MsgType;
	params: SPCalculatorResponse;
};

export enum MsgType {
	SPCalculator,
}
//#endregion

//#region helper functions
function mapOneToMany<Key, One, Many>(
	oneArray: One[],
	manyArray: Many[],
	oneKeyGetter: (o: One) => Key,
	manyKeyGetter: (m: Many) => Key,
	oneToManyRelationshipSetter: (o: One, m: Many) => void
) {
	const manyMap = new Map<Key, Many>();
	manyArray.forEach((many) => {
		manyMap.set(manyKeyGetter(many), many);
	});
	oneArray.forEach((one) => {
		const key = oneKeyGetter(one);
		const many = manyMap.get(key);
		if (many) {
			oneToManyRelationshipSetter(one, many);
		}
	});
}

async function fetchParse(url: string) {
	const res = await fetch(`/sde/${url}.json`);
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
	mapOneToMany(
		dgmTypeAttributesArr,
		invTypesArr,
		(dTA) => dTA.typeID,
		(iT) => iT.typeID,
		(dTA, iT) => {
			dTA.invTypes = iT;
			if (iT.dgmTypeAttributes) iT.dgmTypeAttributes.push(dTA);
			else iT.dgmTypeAttributes = [dTA];
		}
	);
	mapOneToMany(
		invTypesArr,
		invGroupsArr,
		(iT) => iT.groupID,
		(iG) => iG.groupID,
		(iT, iG) => {
			iT.invGroups = iG;
			if (iG.invTypes) iG.invTypes.push(iT);
			else iG.invTypes = [iT];
		}
	);
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
		const data: MsgRequest = msg.data;
		switch (data.type) {
			case MsgType.SPCalculator:
				port.postMessage({
					type: MsgType.SPCalculator,
					params: calculateSP(data.params as string, invTypesArr),
				});
		}
	};
};
//#endregion
