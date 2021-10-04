const conversions = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}

export default function toRoman(decimal) {

  let digits = decimal
    .toString()
    .split('')
    .map( digit => parseInt(digit) )
    .reverse();
  
  let roman = '';

  if (decimal > 999) {
    roman = convertThousands(digits[3]);
  }

  if (decimal > 99) {
    roman = roman + convertHundreds(digits[2]);
  }

  if (decimal > 9) {
    roman = roman + convertTens(digits[1]);
  }

  roman = roman + convertOnes(digits[0]);

  return roman;
}

function convertThousands(thousands) {
  let romanThousands;

  switch (thousands) {
    case 1:
    case 2:
    case 3:
      romanThousands = conversions[1000].repeat(thousands);
      break;
    default:
      throw new Error("Cannot convert numbers greater than 3000.");
  }

  return romanThousands;
}

function convertHundreds(hundreds) {
  let romanHundreds = '';

  switch (hundreds) {
    case 1:
    case 2:
    case 3:
      romanHundreds = conversions[100].repeat(hundreds);
      break;
    case 4:
      romanHundreds = conversions[100] + conversions[500];
      break;
    case 5:
      romanHundreds = conversions[500];
      break;
    case 6:    
    case 7:
    case 8:
      romanHundreds = conversions[500] + conversions[100].repeat(hundreds - 5);
      break;
    case 9:
      romanHundreds = conversions[100] + conversions[1000];
  }

  return romanHundreds;
}

function convertTens(tens) {
  let romanTens = '';

  switch (tens) {
    case 1:
    case 2:
    case 3:
      romanTens = conversions[10].repeat(tens);
      break;
    case 4:
      romanTens = conversions[10] + conversions[50];
      break;
    case 5:
      romanTens = conversions[50];
      break;
    case 6:    
    case 7:
    case 8:
      romanTens = conversions[50] + conversions[10].repeat(tens - 5);
      break;
    case 9:
      romanTens = conversions[10] + conversions[100];
  }

  return romanTens;
}

function convertOnes(ones) {
  let romanOnes = '';

  switch (ones) {
    case 1:
    case 2:
    case 3:
      romanOnes = conversions[1].repeat(ones);
      break;
    case 4:
      romanOnes = conversions[1] + conversions[5];
      break;
    case 5:
      romanOnes = conversions[5];
      break;
    case 6:    
    case 7:
    case 8:
      romanOnes = conversions[5] + conversions[1].repeat(ones - 5);
      break;
    case 9:
      romanOnes = conversions[1] + conversions[10];
  }

  return romanOnes;
}