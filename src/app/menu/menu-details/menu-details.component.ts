import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-menu-details',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterModule],
  templateUrl: './menu-details.component.html',
  styleUrl: './menu-details.component.scss'
})
export class MenuDetailsComponent {

}
