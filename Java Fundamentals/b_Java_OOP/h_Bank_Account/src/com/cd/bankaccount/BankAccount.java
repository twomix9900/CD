package com.cd.bankaccount;
import java.util.*;
import java.lang.*;

public class BankAccount {
	private String accountNumber;
	private double checkingBalance;
	private double savingBalance;
	public char[] getCheckingBalance;
	private static int accountCounter = 0;
	private static double totalMoneyStored = 0.00;
	
	BankAccount() {
		accountCounter++;
		this.accountNumber = Double.toString(this.generateAccountNumber());
		accountCounter++;
	}
	
	public double generateAccountNumber() {
		return Math.floor(Math.random() * 9000000000D) + 1000000000D;
	}
	
	public double getCheckingBalance() {
		return this.checkingBalance;
	}
	
	public double getSavingBalance() {
		return this.savingBalance;
	}
	
	public void depositChecking(double amount) {
		this.checkingBalance += amount;
		totalMoneyStored += amount;
	}
	
	public void depositSaving(double amount) {
		this.savingBalance += amount;
		totalMoneyStored += amount;
	}
	
	public void withdrawChecking(double amount) {
		if (amount >= this.checkingBalance) {
			this.checkingBalance -= amount;
			totalMoneyStored -= amount;
		} else {
			System.out.println("Insufficient funds!");
		}
	}
	
	public void withdrawSaving(double amount) {
		if (amount >= this.savingBalance) {
			this.savingBalance -= amount;
			totalMoneyStored -= amount;
		} else {
			System.out.println("Insufficient funds!");
		}
	}
	
	public double getTotalBalance() {
		return this.savingBalance + this.checkingBalance;
	}
	
}
