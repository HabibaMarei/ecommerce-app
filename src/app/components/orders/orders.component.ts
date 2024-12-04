import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OrdersService } from '../../core/services/orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  private _OrdersService = inject(OrdersService)
  private _ActivatedRoute = inject(ActivatedRoute)
  cartId: any = ""
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.cartId = param.get('id')
      }
    })
  }

  orderForm: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  })

  submitOrderForm() {
    this._OrdersService.createCreditOrder(this.cartId, this.orderForm.value).subscribe({
      next: (res) => {
        console.log(res);
        window.open(res.session.url, '_self')
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
