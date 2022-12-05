import { collections } from '../service/database.service'

export class RespCtrl {
    public async addEntry(resp: any){
        const value = (await collections.hvac?.insertOne(resp));
        return value.insertedId;
    }
}