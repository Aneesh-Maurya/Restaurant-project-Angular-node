import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-chackout',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './chackout.component.html',
  styleUrl: './chackout.component.scss'
})
export class ChackoutComponent {

}
