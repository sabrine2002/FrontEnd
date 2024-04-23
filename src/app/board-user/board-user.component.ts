import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../_services/transaction.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.scss']
})
export class BoardUserComponent implements OnInit {
  transactions: Transaction[] = [];
  errorMessage = '';

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getUserTransactions();
  }

  getUserTransactions(): void {
    this.transactionService.getUserTransactions().subscribe(
      transactions => {
        this.transactions = transactions;
      },
      error => {
        this.errorMessage = 'Error retrieving transactions: ' + error.message;
      }
    );
  }
}
