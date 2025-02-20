const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let binArray = expr.match(/.{10}/g);
  let morseArray = binArray.map((i) =>
    i.replace(/00/g, "").replace(/10/g, ".").replace(/11/g, "-")
  );

  let decryptedArray = morseArray.map((i) =>
    i === "**********" ? " " : MORSE_TABLE[i]
  );
  return decryptedArray.join("");
}

const expr =
  "0000000011001010101000000000100011101111**********0000111011000000001000000000100010111110**********00000011110000000010**********00000010100000001110**********000000001100101010100000000010**********00111010100000001011000010101000000000100000001111000000001000000011100000000011";

console.log(decode(expr));

module.exports = {
  decode,
};
