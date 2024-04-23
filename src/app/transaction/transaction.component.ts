import { Component } from '@angular/core';
import { TransactionService } from '../_services/transaction.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  transaction: Transaction = {
    fromAddress: '',
    toAddress: '',
    transactionHash:'',
    amount: 0,
    id: 0
  };

  constructor(private transactionService: TransactionService) { }

  async onSubmit(): Promise<void> {
    if (!this.transaction.fromAddress || !this.transaction.toAddress || this.transaction.amount <= 0 || this.transaction.transactionHash) {
      console.error('Invalid transaction data.');
      return;
    }

    await this.transactionService.sendTransaction(this.transaction);
  }
}
