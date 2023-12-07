import { DbSetWrapper } from './db-set-wrapper';
import type { InvTypes } from './models/inv-types';

function toSDE(source: string) {
	return `sde/${source}.json.bz2`;
}
class DbService {
	invTypes = new DbSetWrapper<InvTypes>(toSDE('invTypes'));
}

const dbService = new DbService();

export default dbService;
