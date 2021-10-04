class TwelveDays {
  constructor() {
    this.gifts = {
      1: { day: "first", gift: "a Partridge in a Pear Tree" },
      2: { day: "second", gift: "two Turtle Doves" },
      3: { day: "third", gift: "three French Hens" },
      4: { day: "fourth", gift: "four Calling Birds" },
      5: { day: "fifth", gift: "five Gold Rings" },
      6: { day: "sixth", gift: "six Geese-a-Laying" },
      7: { day: "seventh", gift: "seven Swans-a-Swimming" },
      8: { day: "eighth", gift: "eight Maids-a-Milking" },
      9: { day: "ninth", gift: "nine Ladies Dancing" },
      10: { day: "tenth", gift: "ten Lords-a-Leaping" },
      11: { day: "eleventh", gift: "eleven Pipers Piping" },
      12: { day: "twelfth", gift: "twelve Drummers Drumming" }
    };
  }
  sing() {
    return this.verse(1, 12);
  }
  verse(start, end) {
    let lyrics;
    if (!end) {
      lyrics = this.getVerse(start);
    } else {
      let curr = start;
      while (curr <= end) {
        lyrics = lyrics
          ? `${lyrics}\n${this.getVerse(curr)}`
          : this.getVerse(curr);
        curr++;
      }
    }
    return lyrics;
  }
  getVerse(id) {
    return `On the ${
      this.gifts[id].day
    } day of Christmas my true love gave to me: ${this.getList(id)}.\n`;
  }
  getList(id) {
    let list = "";
    for (let i = id; i >= 1; i--) {
      list = list.length > 0 ? `${list}, ` : list;
      list = `${list}${i === 1 && id > 1 ? `and ` : ``}${this.gifts[i].gift}`;
    }
    return list;
  }
}

export { TwelveDays };
