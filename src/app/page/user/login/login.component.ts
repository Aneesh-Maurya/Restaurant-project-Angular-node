import { Component } from '@angular/core';
import { HeaderComponent } from '../../../common/header/header.component';
import { FooterComponent } from '../../../common/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
 imports: [HeaderComponent,FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
