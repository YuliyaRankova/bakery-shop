import {div, echo, getRandomNumber, reverseArray} from "../src/utils/tools";
import {isCategoryExist} from "../src/firebase/firebaseDBService";
import {getApps, deleteApp} from "firebase/app";

describe("BakeryShop.tools", () =>{

    let arr:number[];

    beforeEach(() =>{
        arr = [1,2,3]
    })

    test('getRandomNumber test', () =>{
        expect(getRandomNumber(1,1)).toBe(1);
        expect(getRandomNumber(1,10)).toBeLessThan(10);
        expect(getRandomNumber(1,10)).not.toBeGreaterThan(10);
        expect(getRandomNumber(9,10)).toBe(9);
    })

    test("reverse array", () => {
        expect(reverseArray(arr)).toEqual([3,2,1])
    })

    test("div", () => {
        expect(div(10,5)).toBe(2);
        expect(div(12,5)).not.toBe(2);
        expect(() => div(5,0)).toThrow("Division by zero")
    })

    test("async function echo", ()=>{
          expect(echo("Hello")).resolves.toBe("Hello");
          expect(()=> echo("")).rejects.toThrow("Error")
    })
})


describe('BakeryShop.dbService', () => {

    afterAll(async () => {
        await Promise.all(getApps().map(deleteApp));
    })

    test('isCategoryExist', () => {
        expect(isCategoryExist('bread')).resolves.toBeTruthy()
        expect(isCategoryExist('milk')).resolves.not.toBeTruthy()
    })
})


