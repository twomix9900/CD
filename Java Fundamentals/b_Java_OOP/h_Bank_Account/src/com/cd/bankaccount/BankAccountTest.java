package com.cd.bankaccount;

public class BankAccountTest {

	public static void main(String[] args) {
		BankAccount b = new BankAccount();
		b.depositChecking(1000);
		b.depositSaving(1000);
		System.out.println(b.getTotalBalance());
		System.out.println(b.getCheckingBalance());
		System.out.println(b.getSavingBalance());
		
	}

}
