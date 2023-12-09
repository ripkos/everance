import { Buffer } from 'buffer';
import { Dexie, type IndexableType, type Table } from 'dexie';
import type { InvTypes } from './models/inv-types';
globalThis.Buffer = Buffer;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Bunzip = require('seek-bzip');
const decoder = new TextDecoder('utf-8');

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
async function fetchDecompressJSON(
	url: string //, table: Table<any, IndexableType>
): Promise<any[]> {
	const response = await fetch(url);
	const arrayBuffer: Uint8Array = new Uint8Array(await response.arrayBuffer());
	console.time('a');
	const decompressed = Bunzip.decode(arrayBuffer);
	const result = JSON.parse(decoder.decode(decompressed));
	console.timeEnd('a');
	console.log(result);
	console.time('b');
	const filtered2 = result.filter((x) => x.typeID?.startsWith('1111'));
	console.timeEnd('b');
	console.log(filtered2);

	let db = new Dexie('everance');
	let data;
	db.delete();

	db = new Dexie('everance');
	db.version(1).stores({
		test: '++id,typeID,groupID'
	});
	await db.open();
	let myTable = db.table('test');
	await myTable.bulkPut(result);
	db.close();

	await db.open();
	myTable = db.table('test');
	console.time('d');
	data = await myTable.where('typeID').startsWith('1111').toArray();
	console.timeEnd('d');
	console.log('Where');
	console.log(data);

	await db.open();
	myTable = db.table('test');
	db.open();
	console.time('c');
	data = (await myTable.toArray()).filter((x) => x.typeID?.startsWith('1111'));
	console.timeEnd('c');
	db.close();
	console.log(data);

	return result;
	//return JSON.parse(decoder.decode(decompressed));
}

export class DbSetWrapper<T extends object> {
	private _isInitialized: boolean = false;
	public get isInitialized(): boolean {
		return this._isInitialized;
	}
	public items: Array<T> = new Array<T>();
	constructor(private source: string) {}

	async init() {
		if (this._isInitialized) {
			return;
		}

		this.items = await fetchDecompressJSON(
			this.source //, db.table(this.source)
		);
		this._isInitialized = true;
	}
}
