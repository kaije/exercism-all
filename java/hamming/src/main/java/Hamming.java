import java.util.stream.IntStream;

class Hamming {

  private String leftStrand;
  private String rightStrand;
  private int hammingDistance;

  Hamming(String leftStrand, String rightStrand) {
    this.validateInput(leftStrand, rightStrand);
    this.leftStrand = leftStrand;
    this.rightStrand = rightStrand;
    this.hammingDistance = -1;
  }

  int getHammingDistance() {
    if (this.hammingDistance < 0) {
      this.hammingDistance = calculateHammingDistance();
    }
    return this.hammingDistance;
  }

  private void validateInput(String leftStrand, String rightStrand) {
    if (leftStrand.length() == rightStrand.length()) {
      return;
    }
    if (leftStrand.isEmpty()) {
      throw new IllegalArgumentException("left strand must not be empty.");
    }
    if (rightStrand.isEmpty()) {
      throw new IllegalArgumentException("right strand must not be empty.");
    }
    throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
  }

  private int calculateHammingDistance() {
      return (int) IntStream.range(0, this.leftStrand.length())
      .filter(i -> this.leftStrand.charAt(i) != this.rightStrand.charAt(i))
      .count();
  }
}
