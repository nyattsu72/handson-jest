import { exportAllDeclaration } from "@babel/types";
import { TestScheduler } from "jest";
import { add, addString } from "./index";

test("add 1 + 2 to equal 3", () => {
  expect(add(undefined, 2)).toBe(NaN);
});

//Task01
/*
・aとbが"a"、"b"の時"ab"となる
・aが"a", bが1の時"a1"が返る
・aが1、bが1の時-1が返る
*/

describe("addString", () => {
  test("add a + b to equal ab", () => {
    expect(addString("a", "b")).toMatch("ab");
  });

  //toMatch toBe

  test("add a + 1 to match a1", () => {
    expect(addString("a", 1)).toBe("a1");
  });

  // if = false else return -1
  test("add 1 + 1 return -1", () => {
    expect(addString(1, 1)).toEqual(-1);
  });
});
