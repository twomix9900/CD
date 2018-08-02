package com.cd.triesassignment;

public class TrieTest {
    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insertWord("car");
        trie.insertWord("card");
        trie.insertWord("chip");
        trie.insertWord("trie");
        trie.insertWord("try");
        
//        System.out.println(trie.isPrefixVaild("tr"));
//        System.out.println(trie.isPrefixVaild("ca"));
//        System.out.println(trie.isPrefixVaild("ty"));
//        
//        System.out.println(trie.isWordValid("car"));
//        System.out.println(trie.isWordValid("try"));
//        System.out.println(trie.isWordValid("boy"));
//        System.out.println(trie.isWordValid("cat"));
        
        trie.root.printAllKeys();
    }
}