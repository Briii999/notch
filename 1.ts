function isValidDonationCode(code: string | null): boolean {
  if (code === null) return false;

  const match = /^DON-(\d{8})$/.exec(code);
  if (!match) return false;

  const digits = match[1].split("").map(Number);

  let sum = 0;
  for (let i = 0; i < 7; i++) {
    sum += digits[i] * (i + 1);
  }

  const checksum = sum % 10;
  return checksum === digits[7];
}

console.log("Result:");
console.log(isValidDonationCode("DON-12345670")); // true
console.log(isValidDonationCode("DON-12345678")); // false
console.log(isValidDonationCode("DON-00000000")); // true
console.log(isValidDonationCode("DON-12345")); // false
console.log(isValidDonationCode("ABC-12345670")); // false
console.log(isValidDonationCode(null)); // false
