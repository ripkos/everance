/* eslint-disable @typescript-eslint/no-unused-vars */
export class InvTypes {
	constructor(
		public typeID: number,
		public groupID: number,
		public typeName: string,
		public description: string,
		public mass: number,
		public volume: number,
		public capacity: number,
		public portionSize: number,
		public raceID: number,
		public basePrice: number,
		public published: boolean,
		public marketGroupID: number,
		public iconID: number,
		public soundID: number,
		public graphicID: number
	) {}
}
