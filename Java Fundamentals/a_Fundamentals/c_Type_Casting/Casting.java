class Casting {
  public static void main(String[] args) {
      double d = 35.25;
      double dd = 35.99;
      
      // casting the double d into a int
      int i = (int) d;
      
      // casting the double dd into a int
      int ii = (int) dd;
      System.out.println(i);
      System.out.println(ii);
  }

  public static void main2(String[] args) {
    long start = System.currentTimeMillis();
    Integer sum = 0;
    for (int i = 0; i < Integer.MAX_VALUE; i++) {
        sum += i;
    }
    System.out.println("Sum: " + sum);
    long end = System.currentTimeMillis();
    double total = (double) (end - start) / 1000;
    System.out.println("Time of execution: " + total + " seconds");

    //Sum: 1073741825
    //Time of execution: 6.477 seconds
  }

  public static void main3(String[] args) {
    long start = System.currentTimeMillis();
    int sum = 0;
    for (int i = 0; i < Integer.MAX_VALUE; i++) {
        sum += i;
    }
    System.out.println("Sum: " + sum);
    long end = System.currentTimeMillis();
    double total = (double) (end - start) / 1000;
    System.out.println("Time of execution: " + total + " seconds");
    
    // Sum: 1073741825
    // Time of execution: 0.763 seconds
  }
}
