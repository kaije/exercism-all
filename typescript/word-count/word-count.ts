export default class Words {
  count(input: string): Map<string, number> {
    const counts = new Map();

    const words = input
      .trim()
      .toLowerCase()
      .split(/\s+/);

    words.forEach(word => counts.set(word, counts.get(word) + 1 || 1));

    return counts;
  }
}
