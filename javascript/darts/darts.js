function solve(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return null;
  }

  const target = {
    inner: {
      radius: 1,
      score: 10
    },
    middle: {
      radius: 5,
      score: 5
    },
    outer: {
      radius: 10,
      score: 1
    }
  };

  const distanceFromCentre = Math.sqrt(x ** 2 + y ** 2);

  return distanceFromCentre <= target.inner.radius
    ? target.inner.score
    : distanceFromCentre <= target.middle.radius
    ? target.middle.score
    : distanceFromCentre <= target.outer.radius
    ? target.outer.score
    : 0;
}

export { solve };
