export default class Raindrops {
  constructor() {}

  convert(num) {
    const sounds = {
      3: "Pling",
      5: "Plang",
      7: "Plong"
    };

    let str = "";

    for (var factor in sounds) {
      str = num >= factor && num % factor === 0 ? str + sounds[factor] : str;
    }

    return str ? str : num.toString();
  }
}
