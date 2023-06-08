import { Stack } from "./stack";
/**
 * 题目：有效的括号
 */
function isValid(value: string) {
  const stack = new Stack<string>();
  const valueList = value.split("");
  let index = 0;
  while (index < valueList.length) {
    const v = valueList[index];
    switch (v) {
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      case "(":
        stack.push(")");
        break;
      default:
        if (v !== stack.pop()) return false;
        break;
    }
    index++;
  }
  return true;
}

console.log(isValid("[{()}]"));
console.log(isValid("[{([)}]"));
