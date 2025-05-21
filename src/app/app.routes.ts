import { Routes } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './page/about/about.component';
import { BooktableComponent } from './page/booktable/booktable.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './page/portfolio-details/portfolio-details.component';
import { MyAccountComponent } from './page/user/my-account/my-account.component';
import { LoginComponent } from './page/user/login/login.component';
import { ForgotPasswordComponent } from './page/user/forgot-password/forgot-password.component';
import { RegisterComponent } from './page/user/register/register.component';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './page/terms-conditions/terms-conditions.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';
import { ShopComponent } from './shop/shop/shop.component';
import { ShopDetailsComponent } from './shop/shop-details/shop-details.component';
import { CartComponent } from './shop/cart/cart.component';
import { ChackoutComponent } from './shop/chackout/chackout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
export const routes: Routes = [
 {path:"",component:HomeComponent},
 {path:'about',component:AboutComponent},
 {path:"booktable",component:BooktableComponent},
 {path:"portfolio",component:PortfolioComponent},
 {path:"portfolio_details",component:PortfolioDetailsComponent},
 {path:'my_account',component:MyAccountComponent},
 {path:'login',component:LoginComponent},
 {path:'forgotpassword',component:ForgotPasswordComponent},
 {path:'register',component:RegisterComponent},
 {path:'privacy_policy',component:PrivacyPolicyComponent},
 {path:'terms_condition',component:TermsConditionsComponent},
 {path:'menu',component:MenuComponent},
 {path:'menu_details',component:MenuDetailsComponent},
 {path:'shop',component:ShopComponent},
 {path:'shop_details',component:ShopDetailsComponent},
 {path:'cart',component:CartComponent},
 {path:'checkout',component:ChackoutComponent},
 {path:'contact_us',component:ContactUsComponent},
 {path:'menu_category',component:MenuCategoryComponent},


];
