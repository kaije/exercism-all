class DiffieHellman {
  constructor(p, g) {
    this.p = p;
    this.g = g;
    this.validatePrimes(p, g);
  }
  getPublicKeyFromPrivateKey(privateKey) {
    this.validatePrivateKey(privateKey);
    return this.g**privateKey % this.p
  }
  getSharedSecret(privateKeyA,publicKeyB) {
    return publicKeyB**privateKeyA % this.p
  }
  validatePrimes(p, g) {
    if (p < 1 || g > 100) {
      throw new Error("Constructor arguments out of range");
    }
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error("Constructor arguments must be prime");
    }
  }
  validatePrivateKey(privateKey) {
    if (privateKey < 0) {
      throw new Error("Private key cannot be negative");
    }
    if (privateKey === 0) {
      throw new Error("Private key cannot be 0");
    }
    if (privateKey === 1) {
      throw new Error("Private key cannot be 1");
    }
    if (privateKey === this.p || privateKey > this.p) {
      throw new Error("Private key must be smaller than modulator");
    }
  }
  isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
      if (number % start++ < 1) {
        return false;
      }
    }
    return number > 1;
  }
}

export { DiffieHellman };
