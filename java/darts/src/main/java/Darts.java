class Darts {

    private double x;
    private double y;

    Darts(double x, double y) {
      this.x = x;
      this.y = y;
    }

    int score() {

      int score = 0;
      double distanceFromCentre = Math.hypot(this.x, this.y);

      if (distanceFromCentre <= 1) {
        score = 10;
      } else if (distanceFromCentre <= 5) {
        score = 5;
      } else if (distanceFromCentre <= 10) {
        score = 1;
      }

      return score;
    }

}
