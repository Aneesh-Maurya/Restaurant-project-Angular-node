import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-booktable',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterModule],
  templateUrl: './booktable.component.html',
  styleUrl: './booktable.component.scss'
})
export class BooktableComponent {
 constructor(private router:Router){}

   pagemenu(){
    this.router.navigate(['booktable'])
   }
}
