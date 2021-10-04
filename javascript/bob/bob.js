class Bob {
  hey(message) {
    if (Bob.getsTheSilentTreatment(message)) {
      return 'Fine. Be that way!';
    }

    if (this.hasAtLeastOneLetter(message) && Bob.isYelledAt(message) && Bob.isQuestioned(message)) {
      return 'Calm down, I know what I\'m doing!';
    }

    if (this.hasAtLeastOneLetter(message) && Bob.isYelledAt(message)) {
      return 'Whoa, chill out!';
    }

    if (Bob.isQuestioned(message)) {
      return 'Sure.';
    }

    return 'Whatever.';
  }

  static isYelledAt(message) {
    return message === message.toUpperCase(); // message is all caps
  }

  static isQuestioned(message) {
    return /\?$/.test(message); // message ends with a question
  }

  static getsTheSilentTreatment(message) {
    return !message.trim(); // message is not empty
  }

  hasAtLeastOneLetter(message) {
    return /[a-zA-Z]/.test(message);
  }

}

export default Bob;
