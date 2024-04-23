import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Web3 from 'web3';
import { Transaction } from '../models/transaction.model';

declare let window: any; // Declare window object

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8076/api/test/transactions'; // Define the API URL for transactions
  private web3: any; // Declare a private property to hold the Web3 instance

  constructor(private http: HttpClient) { // Constructor with HttpClient dependency injection
    this.initWeb3(); // Call the method to initialize Web3
  }

  private async initWeb3() { // Private method to initialize Web3 asynchronously
    try {
      if (window.ethereum) { // Check if MetaMask is installed
        this.web3 = new Web3(window.ethereum); // Initialize Web3 with MetaMask's provider
        await window.ethereum.enable(); // Request account access if needed
      } else if (window.web3) { // Check if Mist/Mist legacy is installed
        this.web3 = new Web3(window.web3.currentProvider); // Initialize Web3 with Mist's provider
      } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!'); // Log message for non-Ethereum browsers
        return;
      }
    } catch (error) {
      console.error('Error initializing Web3:', error); // Log error if Web3 initialization fails
    }
  }

  async sendTransaction(transaction: Transaction): Promise<void> { // Method to send a transaction
    if (!this.web3) { // Check if Web3 is initialized
      console.error('Web3 not initialized.'); // Log error if Web3 is not initialized
      return;
    }

    try {
      const accounts = await this.web3.eth.getAccounts(); // Get the user's accounts from MetaMask
      const transactionObject = { // Create transaction object
        from: accounts[0], // Sender's address
        to: transaction.toAddress, // Receiver's address
        value: this.web3.utils.toWei(transaction.amount.toString(), 'ether') // Convert transaction amount to wei
      };
      const result = await this.web3.eth.sendTransaction(transactionObject); // Send the transaction
      console.log('Transaction sent:', result); // Log the transaction hash

      // Save transaction data to the backend
      await this.http.post(this.apiUrl, transaction).toPromise(); // Send transaction data to the backend API
    } catch (error) {
      console.error('Error sending transaction:', error); // Log error if transaction sending fails
    }
  }

  getAllTransactions(): Observable<Transaction[]> { // Method to fetch all transactions
    return this.http.get<Transaction[]>(this.apiUrl); // Return an observable of transactions fetched from the backend
  }
  getUserTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl);
  }
}
