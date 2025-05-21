import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss'
})
export class TermsConditionsComponent {

}
