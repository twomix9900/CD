public class Maps {
  public static void main (String[] args) {
    HashMap<String, String> userMap = new HashMap<String, String>();
    userMap.put("nninja@cd.com", "Nancy Ninja");
    userMap.put("ssamurai@cd.com", "Sam Samurai");
    userMap.put("wwizard@cd.com", "Walter Wizard");

    String name = userMap.get("nninja@cd.com");
    System.out.println("The full name is: " + name);

    // get the keys by using the keySet method
    Set<String> keys = userMap.keySet();
    for(String key : keys) {
      System.out.println(key);
      System.out.println(userMap.get(key));
    }
  }
}