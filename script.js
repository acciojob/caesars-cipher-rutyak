// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedString) {
  var decodedString = "";

  for (var i = 0; i < encodedString.length; i++) {
    var char = encodedString[i];
    var charCode = encodedString.charCodeAt(i);

    // Check if the character is an uppercase letter
    if (charCode >= 65 && charCode <= 90) {
      // Decode the character by shifting it back 13 places
      var decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      var decodedChar = String.fromCharCode(decodedCharCode);
      decodedString += decodedChar;
    } else {
      // Pass non-alphabetic characters as they are
      decodedString += char;
    }
  }

  return decodedString;
}

window.rot13 = rot13;
