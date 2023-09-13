import { ALPHABET_UKR } from "./libs/constants";

class EncryptionService {
  public encode(phrase: string, key: string) {
    let encryptedPhrase = "";

    phrase
      .toLowerCase()
      .split("")
      .forEach((char, index) => {
        const charIndex = ALPHABET_UKR.indexOf(char);
        const keyCharIndex = ALPHABET_UKR.indexOf(key[index % key.length]);
        const charSum = charIndex + keyCharIndex;
        const resultChar = charSum % ALPHABET_UKR.length;
        encryptedPhrase += ALPHABET_UKR[resultChar];
      });

    return encryptedPhrase;
  }

  public decode(phrase: string, key: string) {
    let decryptedPhrase = "";

    phrase
      .toLowerCase()
      .split("")
      .forEach((char, index) => {
        const charIndex = ALPHABET_UKR.indexOf(char);
        const keyCharIndex = ALPHABET_UKR.indexOf(key[index % key.length]);
        const charDiff = charIndex - keyCharIndex + ALPHABET_UKR.length;
        const resultChar = charDiff % ALPHABET_UKR.length;
        decryptedPhrase += ALPHABET_UKR[resultChar];
      });

    return decryptedPhrase;
  }
}

export { EncryptionService };
