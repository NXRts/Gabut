const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
};

const findPrimes = (max) => {
    let primes = [];
    for (let i = 0; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
};

const start = Date.now();
const primes = findPrimes(100000000);
const end = Date.now();

console.log(`Ditemukan ${primes.length} bilangan prima dari 0 hingga 5.000.000.`);
console.log(`Bilangan prima: ${primes.join(', ')}`);
console.log(`Waktu yang dibutuhkan: ${(end - start) / 1000} detik.`);
