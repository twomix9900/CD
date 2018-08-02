package com.cd.triesassignment;
import java.util.HashMap;
import java.util.Set;
public class Node {
    public HashMap<Character, Node> children;
    public boolean isCompleteWord;
    private HashMap<Character, Node> temp;
    
    public Node() {
        this.children = new HashMap<Character, Node>();
        this.isCompleteWord = false;
    }
    
    void printAllKeys() {
    	if (temp == null) {
    		temp = this.children;
    	} 
    	System.out.println("temp = " + temp);
		Set<Character> keys = temp.keySet();
		System.out.println("keys = " + keys);
		for(Character key : keys) {
			System.out.println(key);
			System.out.println("temp get key = " + temp.get(key));
			if (temp.get(key) != null) {
				temp = temp.get(key).children;
				System.out.println("New temp = " + temp);
				this.printAllKeys();
			}
		}
    }
}