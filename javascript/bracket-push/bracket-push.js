function bracketPush(str) {
  const openingBrackets = ["{", "[", "("];
  let brackets = str.split("");
  let openedBrackets = [];

  return brackets.every(element => {
    if (openingBrackets.includes(element)) {
      openedBrackets.push(element);
      return true;
    } else {
      let open = openedBrackets.length > 0 ? openedBrackets.pop() : undefined;
      let close = element;
      if (!open) {
        return false;
      } else {
        return matched(open, close);
      }
    }
  }) && openedBrackets.length === 0;
}

function matched(open, close) {
  switch (open) {
    case "{":
      return close === "}";
    case "(":
      return close === ")";
    case "[":
      return close === "]";
    default:
      return false;
  }
}

export { bracketPush };
