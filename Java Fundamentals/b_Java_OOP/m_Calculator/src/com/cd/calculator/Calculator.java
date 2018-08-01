package com.cd.calculator;
import java.util.*;

public class Calculator {
	private ArrayList <Object> operands = new ArrayList<Object>();
	private double result;
	
	public void performOperation(Double value) {
		operands.add(value);
	}
	
	public void performOperation(String operand) {
		operands.add(operand);
	}
	
	
	public double getResults() {
		for (Object element : operands) {
			if (element == "=") {
				System.out.println("This should be = " + element);
			} else if (element instanceof String) {
				System.out.println("String " + element);
			} else if (element instanceof Double ){
				System.out.println("Double " + element);
			} else  {
				System.out.println("This should never be printed");
			}
		}
		result = 42;
		return result;
	}
	
}
