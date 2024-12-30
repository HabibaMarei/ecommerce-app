import { Component, inject, OnInit } from '@angular/core';
import { OrdersService } from '../../core/services/orders.service';
import { Iorder } from '../../core/interfaces/iorder';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit {
  private _OrdersService = inject(OrdersService);
  orderList: Iorder[] = []
  ngOnInit(): void {
    const userDataString = localStorage.getItem('userData');
    let userId: string | null = null;

    if (userDataString) {
      const userData = JSON.parse(userDataString); 
      userId = userData.id; 
    }

    if (userId) {
      this._OrdersService.getAllOrders(userId).subscribe({
        next: (res) => {
          console.log(res);
          this.orderList = res
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      console.error('User ID not found in localStorage');
    }
  }
}
