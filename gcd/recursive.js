//欧几里得算法，求两个正整数的最大公因数
// 1. m / n 令r为余数
// 2. 余数为0，如果r==0，算法中止，最大公因数是n
// 3. 令m=n，n=r，返回步骤1

const util = require('../util')

function gcd(params){
  let m = params.m, n = params.n
  if(m < n){
    return gcd({m:n,n:m})
  }
  else{
    let r = m % n
    if(r == 0){
      return n
    } else {
      return gcd({m:n,n:r})
    }
  }
}

util.run(gcd, {m:2166, n: 6099}, 100)


