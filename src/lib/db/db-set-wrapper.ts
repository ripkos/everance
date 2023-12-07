import { Buffer } from 'buffer';
import { Dexie, type IndexableType, type Table } from 'dexie';
globalThis.Buffer = Buffer;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Bunzip = require('seek-bzip');
const decoder = new TextDecoder('utf-8')


// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
async function fetchDecompressJSON(url: string//, table: Table<any, IndexableType>
    ): Promise<any[]> {
	const response = await fetch(url);
	const arrayBuffer: Uint8Array = new Uint8Array(await response.arrayBuffer());
    console.time();
	const decompressed = Bunzip.decode(arrayBuffer);
    const result = JSON.parse(decoder.decode(decompressed));
    console.timeEnd();
    console.log(result);
    /*
     db.open().then(async (dbopen)=> {
         const myTable = dbopen.table('test');
         if (myTable) {
              //await myTable.bulkPut(result);
              await myTable.put(result[0]);
         }
     })
     */
     const db = new Dexie('everance');
     db.version(2).stores({
        test: '++id'
    });
    console.time('a');
    db.open().then(() => {
        const myTable = db.table('test');
        if (myTable) {
            myTable.toArray().then((data: any[]) => {
                console.timeEnd('a');
                console.log('Data added successfully');
                console.log(data);
            }).catch((error) => {
                console.error('Error adding data:', error);
            });
        }
    }).catch((error) => {
        console.error('Error opening database:', error);
    });

    /*
    
     db.open().then(() => {
        const myTable = db.table('test');
        if (myTable) {
            myTable.bulkPut(result).then(() => {
                console.log('Data added successfully');
            }).catch((error) => {
                console.error('Error adding data:', error);
            });
        }
    }).catch((error) => {
        console.error('Error opening database:', error);
    });
    */
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

        
		this.items = await fetchDecompressJSON(this.source//, db.table(this.source)
        );
		this._isInitialized = true;
	}
}
