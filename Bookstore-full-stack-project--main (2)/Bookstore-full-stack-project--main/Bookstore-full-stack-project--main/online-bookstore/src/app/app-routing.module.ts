import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './component/app-home/app-home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminhomeComponent } from './component/admin/adminhome/adminhome.component';
import { AdminLoginGuardService } from './component/gurad/admin-login-guard.service';
import { UserhomeComponent } from './component/user/userhome/userhome.component';
import { ClientLoginGuardService } from './component/gurad/client-login-guard.service';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactComponent } from './component/contact/contact.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { ListCategoryComponent } from './component/list-category/list-category.component';
import { AddbookComponent } from './component/add-book/addbook.component';
import { ListbookComponent } from './component/list-book/listbook.component';
import { AdmindashboardComponent } from './component/admin/admindashboard/admindashboard.component';
import { ListorderComponent } from './component/admin/listorder/listorder.component';
import { BookPageComponent } from './component/user/book-page/book-page.component';
import { AddreviewComponent } from './component/add-review/addreview.component';
import { ListreviewComponent } from './component/list-review/listreview.component';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { AdminOrderListComponent } from './component/admin-order-list/admin-order-list.component';

const routes: Routes = [
    { path: '', component: AppHomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about-us', component: AboutusComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'adminhome', component: AdminhomeComponent, canActivate:[AdminLoginGuardService]},
    { path: 'admindashboard', component: AdmindashboardComponent, canActivate:[AdminLoginGuardService]},
    { path: 'add-category', component: AddCategoryComponent, canActivate:[AdminLoginGuardService]},
    { path: 'list-category', component: ListCategoryComponent, canActivate:[AdminLoginGuardService]},
    { path: 'admin-order-list', component: AdminOrderListComponent, canActivate:[AdminLoginGuardService]},
    { path: 'llistorder', component: ListorderComponent, canActivate:[AdminLoginGuardService]},
    { path: 'listreview', component: ListreviewComponent, canActivate:[AdminLoginGuardService]},
    { path: 'add-book', component: AddbookComponent, canActivate:[AdminLoginGuardService]},
    { path: 'list-book', component: ListbookComponent, canActivate:[AdminLoginGuardService]},
    { path: 'userhome', component: UserhomeComponent, canActivate:[ClientLoginGuardService]},
    { path: 'book-page', component: BookPageComponent, canActivate:[ClientLoginGuardService]},
    { path: 'addreview', component: AddreviewComponent, canActivate:[ClientLoginGuardService]},
    { path: 'cart-list', component: CartListComponent, canActivate:[ClientLoginGuardService]},
    { path: 'order-list', component: OrderListComponent, canActivate:[ClientLoginGuardService]},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
