const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
};

const findPrimes = (start, end) => {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
};

document.getElementById('startButton').addEventListener('click', () => {
    const startRange = parseInt(document.getElementById('startRange').value);
    const endRange = parseInt(document.getElementById('endRange').value);

    if (isNaN(startRange) || isNaN(endRange) || startRange > endRange) {
        alert("Masukkan rentang angka yang valid.");
        return;
    }

    const start = performance.now();
    const primes = findPrimes(startRange, endRange);
    const end = performance.now();

    document.getElementById('resultCount').innerText = `Ditemukan ${primes.length} bilangan prima dari ${startRange} hingga ${endRange}.`;
    document.getElementById('timeTaken').innerText = `Waktu yang dibutuhkan: ${(end - start) / 1000} detik.`;
    document.getElementById('primeNumbers').innerText = `Bilangan prima: ${primes.join(', ')}`;
});
