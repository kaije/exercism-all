export default class SecretHandshake {
  constructor(number) {
    this.number = number;
    if (isNaN(this.number)) { 
      throw new Error('Handshake must be a number');
    }
  }

  commands() {
    const handshakeEvents = [
      [1 << 0, 'wink'],
      [1 << 1, 'double blink'],
      [1 << 2, 'close your eyes'],
      [1 << 3, 'jump']
    ];
    const commandArray = [];

    for (const [mask, event] of handshakeEvents) {
      if ((this.number & mask) !== 0) {
        commandArray.push(event);
      }
    }

    if ((this.number & 10000) !== 0) {
      commandArray.reverse();
    }

    return commandArray;
  }
}
