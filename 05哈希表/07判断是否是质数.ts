/**
 * 判断是否是质数
 * @param num
 */
function isPrime(num: number): boolean {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//优化 开根号后最新因数就是不是质数
function isPrimeTwo(num: number): boolean {
  const min = Math.sqrt(num);
  for (let i = 2; i <= min; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(8));

export {};
