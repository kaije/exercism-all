export default class Acronyms {
  static parse(name) {
    const words = name
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([^a-zA-Z ])/g, ' ')
      .split(' ');

    const acronym = words
      .map( word => word.charAt(0).toUpperCase())
      .join('');

    return acronym;
  }
}
