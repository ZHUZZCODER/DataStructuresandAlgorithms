import { Stack } from "./stack";
/**
 * 题目：十进制转换成二进制
 */
function transformBinary(value: number) {
  const stack = new Stack<number>();
  let v = 0;
  while (value > 0) {
    v = value % 2;
    stack.push(v);
    value = Math.floor(value / 2);
  }
  let binary = "";
  while (!stack.isEmpty()) {
    binary += stack.pop();
  }
  return binary;
}
const result = transformBinary(15);
console.log("result=", result);
