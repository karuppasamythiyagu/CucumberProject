package org.pojo;

import java.io.IOException;
import java.util.HashSet;

import org.base.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class A  extends BaseClass{
	
	public static void main (String[ ] args){
		HashSet names = new HashSet ();
		names.add("banana");
		names.add("cherry");
		names.add("apple");
		names.add("kiwi");
		names.add("banana");
		System.out.println (names);
		}
}
