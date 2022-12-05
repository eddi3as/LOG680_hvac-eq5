import { RespCtrl } from "../controller/respCtrl";
import * as dotenv from 'dotenv';
dotenv.config();/**/
import { connectToDatabase } from "../service/database.service";

let ctrl = new RespCtrl();

describe("test add function", () => {
    
    it("should return lower", async () => {
        let conn = await connectToDatabase();
        let test = { data: 50.00, date: new Date(), message:"Jest" };
        let resp = await ctrl.addEntry(test);
        console.log(resp.id);
        expect(resp.id).not.toBeNull();
    });
    
});