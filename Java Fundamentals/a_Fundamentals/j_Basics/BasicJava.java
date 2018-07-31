import java.util.ArrayList;
import java.lang.Math;

public class BasicJava {
  public void printOneTo255 () {
    for (int i = 1; i < 256; i++) {
      System.out.println(i);
    }
  }

  public void printOddsBetweenOneAnd255() {
    for (int i = 1; i < 256; i += 2) {
      System.out.println(i);
    }
  }

  public void printSum() {
    int sum = 0;
    for (int i = 0; i < 256; i++) {
      sum += i;
      System.out.println("Sum: " + sum + ", recent number added: " + i);
    }
  }

  public <T> iterateThroughArray(T[] array) {
    for (T i : array) {
      System.out.println(i);
    }
  }

  public void findMax(int[] array) {
    int max = array[0];
    for (int i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    System.out.println("max = " + max);
  }

  public void getAverage(int[] array) {
    int sum = 0;
    for (int i = 0; i < array.length; i++) {
      sum += array[i];
    }
    System.out.println(sum/array.length);
  }

  public void arrayWithOddNumbers() {
    ArrayList<Integer> result = new ArrayList<Integer>();
    for (int i = 1; i < 256; i += 2) {
      result.add(i);
    }
    System.out.println(result);
  }

  public void greaterThanY(int[] array, int num) {
    int count = 0;
    for (int i = 0; i < array.length; i++) {
      if (array[i] > num) {
        count++;
      }
    }
    System.out.println(count);
  }

  public void squareTheValues(int[] array) {
    ArrayList<Integer> result = new ArrayList<Integer>();
    for (int i = 0; i < array.length; i++) {
      result.add(array[i] * array[i]);
    }
    System.out.println(result);
  }

  public void eliminateNegativeNumbers(int[] array) {
    ArrayList<Integer> result = new ArrayList<Integer>();
    for (int i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        result.add(0);
      } else {
        result.add(array[i]);
      }
    }
    System.out.println(result);
  }

  public void minMaxAverage(int[] array) {
    ArrayList<Integer> result = new ArrayList<Integer>();
    int sum = 0;
    int max = array[0];
    int min = array[0];
    for (int i = 0; i < array.length; i++) {
      sum += array[i];
      if (array[i] > max) {
        max = array[i];
      } else if (array[i] < min) {
        min = array[i];
      }
    }
    result.add(max);
    result.add(min);
    result.add(sum/array.length);
    System.out.println(result);
  }

  public void shiftValuesInArray(int[] array) {
    ArrayList<Integer> result = new ArrayList<Integer>();
    for (int i = 1; i < array.length; i++) {
      result.add(array[i]);
    }
    result.add(0);
    System.out.println(result);
  }
}