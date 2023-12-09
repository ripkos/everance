/* eslint-disable @typescript-eslint/no-unused-vars */
export class InvTypes {
	constructor(
		public typeID: string | number,
		public groupID: string | number,
		public typeName: string,
		public description: string,
		public mass: string | number,
		public volume: string | number,
		public capacity: string | number,
		public portionSize: string | number,
		public raceID: string | number,
		public basePrice: string | number,
		public published: string | boolean,
		public marketGroupID: string | number,
		public iconID: string | number,
		public soundID: string | number,
		public graphicID: string | number
	) {}
}
