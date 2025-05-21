import { Component } from '@angular/core';
import { HeaderComponent } from '../../../common/header/header.component';
import { FooterComponent } from '../../../common/footer/footer.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

}
