import { verifyTemp } from "../utils/tempcal"
describe("test add function", () => {
    it("should return lower", () => {
        let data = { data: 10.00 };
      expect(verifyTemp(data, 5.00, 1.00)).toBe("lower");
    });
    
    it("should return higher", () => {
        let data = { data: 5.00 };
        expect(verifyTemp(data, 5.00, 1.00)).toBe("higher");
    });
});