import { Component } from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
