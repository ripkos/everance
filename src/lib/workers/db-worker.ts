/// <reference lib="WebWorker" />
declare const self: SharedWorkerGlobalScope;
import type { invTypes } from "$lib/model/model-types"

export type Msg = {
    type: MsgType;
    params: unknown;
}

export enum MsgType {
    TEST
}
const arr: Array<string> = ['Ala', 'ma', 'kota'];

function findTest(str: string) : Array<string> {
    return arr.filter(x=>x.includes(str));
}

self.onconnect = (e) => {
    const port = e.ports[0];
    port.onmessage = (msg) => {
        const data: Msg = msg.data
        switch (data.type){
            case MsgType.TEST:
                port.postMessage({type: MsgType.TEST, params: findTest(data.params as string)})
        }
    }
};