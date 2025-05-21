import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { RouterModule ,Router} from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
   constructor(private router:Router){}

   pagemenu(){
    this.router.navigate(['booktable'])
   }
}
