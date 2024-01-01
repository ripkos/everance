import type { invTypes } from '$lib/model/model-types';

export type SPCalculatorResponse = {
	skills: SkillData[];
	sum: number;
};

export type SkillData = {
	order: number;
	id: number;
	name: string | null;
	primary: number | null;
	secondary: number | null;
	sp: number | null;
	level: string | null;
};

const iGsSkillCategoryID = 16;
const dTAsPrimaryID = 180;
const dTAsSecondaryID = 181;
const dTAsModifierID = 275;

const sqrt32 = Math.sqrt(32);
const powers: Map<string, number> = new Map<string, number>([
	['0', 0],
	['1', 1],
	['2', sqrt32],
	['3', 32],
	['4', 32 * sqrt32],
	['5', 1024],
]);
function levelToSP(level: string, modifier: number): number {
	const currentLevelPower = powers.get(level);
	const prevLevelPower = powers.get((Number(level) - 1).toFixed(0));
	if (!prevLevelPower || !currentLevelPower) {
		throw new Error('Only supports levels 1-5!');
	}
	const baseWithModifier = 250 * modifier;
	const currentLevel = Math.round(baseWithModifier * currentLevelPower);
	const prevLevel = Math.round(baseWithModifier * prevLevelPower);
	return Math.round(currentLevel - prevLevel);
}

export function calculateSP(inputString: string, invTypesArr: invTypes[]): SPCalculatorResponse {
	let sum = 0;
	const inputStringMapped = inputString
		.trimEnd()
		.split('\n')
		.map((str) => ({
			name: str.substring(0, str.length - 2),
			level: Number(str.substring(str.length - 1)).toFixed(0),
		}));
	const invTypesArrFiltered = invTypesArr.filter(
		(iT: invTypes) => iT.invGroups?.categoryID === iGsSkillCategoryID
	);
	const mapSkill = (x: { name: string; level: string }, idx: number) => {
		try {
			const iT = invTypesArrFiltered.find((iT) => iT.typeName === x.name);
			if (iT?.dgmTypeAttributes) {
				const dTA = iT.dgmTypeAttributes;
				const primary = dTA.find((x) => x.attributeID === dTAsPrimaryID)?.valueFloat ?? null;
				const secondary = dTA.find((x) => x.attributeID === dTAsSecondaryID)?.valueFloat ?? null;
				const modifier = dTA.find((x) => x.attributeID === dTAsModifierID)?.valueFloat ?? null;
				const sp = modifier ? levelToSP(x.level, modifier) : 0;
				sum += sp;
				return {
					order: idx,
					id: iT.typeID,
					name: iT.typeName,
					primary: primary,
					secondary: secondary,
					sp: sp,
					level: x.level,
				};
			}
		} catch (e) {
			// TODO If Debug Mode
			//console.log(e);
		}
		return {
			order: idx,
			id: -1,
			name: x.name,
			level: x.level,
			primary: null,
			secondary: null,
			sp: null,
		};
	};
	return { skills: inputStringMapped.map(mapSkill), sum: sum };
}
