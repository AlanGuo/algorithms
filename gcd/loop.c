#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int gcd(int m, int n) {
  int r = -1;
  while(r != 0 ){
    r = m > n ? m % n : n % m;
    if(r == 0){
      return m;
    } else {
      m = r;
    }
  }
}

