class HighScores {
  constructor(input) {
    this.scores = input;
    this.latest = this.scores.slice(-1)[0];
    this.highest = Math.max(...this.scores);
    this.top = this.scores
      .map(value => value)
      .sort((a, b) => a - b)
      .reverse()
      .slice(0, 3);
    this.report =
      this.latest === this.highest
        ? `Your latest score was ${this.latest}. That's your personal best!`
        : `Your latest score was ${this.latest}. That's ${this.highest -
            this.latest} short of your personal best!`;
  }
}

export { HighScores };
