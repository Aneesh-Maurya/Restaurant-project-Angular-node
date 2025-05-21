import { Component } from '@angular/core';
import { HeaderComponent } from '../../../common/header/header.component';
import { FooterComponent } from '../../../common/footer/footer.component';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss'
})
export class MyAccountComponent {

}
