import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-shop-details',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './shop-details.component.html',
  styleUrl: './shop-details.component.scss'
})
export class ShopDetailsComponent {

}
