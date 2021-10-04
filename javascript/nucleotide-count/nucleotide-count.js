class NucleotideCounts {
  constructor() {}
  static parse(strand) {
    const nucleotides = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    };
    const invalid = new RegExp(`[^${Object.keys(nucleotides).join("")}]`);
    if (strand.match(invalid)) {
      throw new Error("Invalid nucleotide in strand");
    }
    Object.keys(nucleotides).forEach(nucleotide => {
      const matched = strand.match(new RegExp(nucleotide, "g"));
      if (matched) {
        nucleotides[nucleotide] = matched.length;
      }
    });
    return Object.values(nucleotides).join(" ");
  }
}

export { NucleotideCounts };
