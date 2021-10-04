export default function proverb(...consequences) {
  const first = consequences[0];
  let qualifier;
  let curr;
  let next;
  let proverb;

  while (consequences.length > 1) {
    curr = consequences.shift();
    next = consequences[0];
    if (typeof next === "object") {
      qualifier = next.qualifier;
    } else {
      proverb = `${
        proverb ? `${proverb}\n` : ``
      }For want of a ${curr} the ${next} was lost.`;
    }
  }
  proverb = `${proverb}\nAnd all for the want of a${
    qualifier ? ` ${qualifier}` : ``
  } ${first}.`;
  return proverb;
}
