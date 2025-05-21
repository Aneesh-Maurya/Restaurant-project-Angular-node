import { Component } from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-menu-category',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterModule],
  templateUrl: './menu-category.component.html',
  styleUrl: './menu-category.component.scss'
})
export class MenuCategoryComponent {

}
