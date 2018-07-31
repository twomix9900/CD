import java.lang.Math;
public class Pythagorean {
  public double calculateHypotenuse(int legA, int legB) {
    int sqrtValue = (legA * legA) + (legB * legB);
    return Math.sqrt(sqrtValue);
  }
}