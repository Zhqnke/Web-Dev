import { Component , Input } from '@angular/core';
import { ProductInfo } from '../../model/product-info';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [CommonModule ,RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() productInfo! : ProductInfo ; 

  getWhatsAppLink(): string {
    return `https://wa.me/?text=${encodeURIComponent(this.productInfo.name + ' - ' + this.productInfo.link)}`;
  }
  getTelegramLink(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.productInfo.link)}&text=${encodeURIComponent(this.productInfo.name)}`;
  }
}
