import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
