import { verifyArgs } from "../utils/argsvalidator";

describe("test verifyArgs function", () => {
    it("should return error token", () => {
        let data = [];
        let resp = verifyArgs(data);
        expect(resp[0]).toBe("ERROR TOKEN UNDEFINED");
    });
    
    it("should return error token", () => {
        let data = ['a', 'a', 'a'];
        let resp = verifyArgs(data);
        expect(resp[0]).toBe("ERROR TOKEN UNDEFINED");
    });
    
    it("should return defaults", () => {
        let data = ['a', 'a', 'adsvdva'];
        let resp = verifyArgs(data);
        expect(resp[3]).toBe(5);
        expect(resp[4]).toBe(1);
        expect(resp[5]).toBe(6);
    });
    
    it("should return defaults", () => {
        let data = ['a', 'a', 'adsvdva', 10];
        let resp = verifyArgs(data);
        expect(resp[3]).toBe(10);
        expect(resp[4]).toBe(1);
        expect(resp[5]).toBe(6);
    });
    
    it("should return defaults", () => {
        let data = ['a', 'a', 'adsvdva', 36, 20];
        let resp = verifyArgs(data);
        expect(resp[3]).toBe(36);
        expect(resp[4]).toBe(20);
        expect(resp[5]).toBe(6);
    });
    
    it("should return defaults", () => {
        let data = ['a', 'a', 'adsvdva', 36, 20 , 5];
        let resp = verifyArgs(data);
        expect(resp[3]).toBe(36);
        expect(resp[4]).toBe(20);
        expect(resp[5]).toBe(5);
    });
});