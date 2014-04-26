function nextPrime(n) {
  var smaller;
  n = Math.floor(n);

  if (n >= 2) {
    console.log("greater than 2");
    smaller = 1;
    while (smaller * smaller <= n) {
      n++;
      smaller = 2;
      while ((n % smaller > 0) && (smaller * smaller <= n)) {
        smaller++;
      }
    }
    console.log(n);
    return n;
  } else {
    console.log("less than 2");
    return 2;
  }
}

// module.exports.nextPrime = nextPrime;