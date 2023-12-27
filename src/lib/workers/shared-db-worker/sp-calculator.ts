import type { invTypes } from '$lib/model/model-types';

export type SPCalculatorResponseDTO = {
	skills: SkillData[];
	sum: number;
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

export function calculateSP(inputString: string, invTypesArr: invTypes[]): SPCalculatorResponseDTO {
	let sum = 0;
	const returnArray: Array<SkillData> = [];
	inputString
		.trimEnd()
		.split('\n')
		.map((str) => ({
			name: str.substring(0, str.length - 2),
			level: Number(str.substring(str.length - 1)).toFixed(0)
		}))
		.forEach((x, idx) => {
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
						sp: null
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
					sp: null
				});
			}
		});
	return { skills: returnArray, sum: sum };
}
