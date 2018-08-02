package com.cd.calculator;
import java.util.*;

public class Calculator {
	private ArrayList <Object> operands = new ArrayList<Object>();
	private Double tempNumber1 = null;
	private Double tempNumber2 = null;
	private Object tempOperand = null;
	private Object temp = null;
	private double result;
	
	public void performOperation(Double value) {
		operands.add(value);
	}
	
	public void performOperation(String operand) {
		operands.add(operand);
	}
	
	
	public double getResults() {
		for (Object element : operands) {
			if (element instanceof Double && tempNumber1 == null) {
				tempNumber1 = (Double) element;
			} else if (element instanceof Double && tempNumber1 != null && tempNumber2 == null) {
				tempNumber2 = (Double) element;
			} else if (element instanceof String && tempOperand != null) {
				tempOperand = element;
			}
			
			if (tempNumber1 != null && tempNumber2 != null && tempOperand != null) {
				if (tempOperand == "+") {
					
				}
			}
//			if (element == "=") {
//				System.out.println("This should be = " + element);
//			} else if (element instanceof String) {
//				System.out.println("String " + element);
//			} else if (element instanceof Double ){
//				System.out.println("Double " + element);
//			} else  {
//				System.out.println("This should never be printed");
//			}
		}
		result = 42;
		return result;
	}
	
}
