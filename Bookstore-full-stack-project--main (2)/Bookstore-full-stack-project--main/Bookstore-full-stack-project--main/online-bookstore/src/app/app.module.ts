import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminheaderComponent } from './component/admin/adminheader/adminheader.component';
import { AppHomeComponent } from './component/app-home/app-home.component';
import { AppheaderComponent } from './component/appheader/appheader.component';
import { UserheaderComponent } from './component/user/userheader/userheader.component';
import { UserhomeComponent } from './component/user/userhome/userhome.component';
import { AdminhomeComponent } from './component/admin/adminhome/adminhome.component';
import { AdminLoginGuardService } from './component/gurad/admin-login-guard.service';
import { ClientLoginGuardService } from './component/gurad/client-login-guard.service';
import { AdminClientGuardService } from './component/gurad/admin-client-auth-gurad.service';
import {MatIconModule} from '@angular/material/icon';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactComponent } from './component/contact/contact.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { UpdateProfileComponent } from './component/update-profile/update-profile.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { AddbookComponent } from './component/add-book/addbook.component';
import { UpdateCategoryComponent } from './component/update-category/update-category.component';
import { AdmindashboardComponent } from './component/admin/admindashboard/admindashboard.component';
import { ListorderComponent } from './component/admin/listorder/listorder.component';
import { UpdateOrderComponent } from './component/update-order/update-order.component';
import { BookPageComponent } from './component/user/book-page/book-page.component';
import { ListCategoryComponent } from './component/list-category/list-category.component';
import { AddreviewComponent } from './component/add-review/addreview.component';
import { ListbookComponent } from './component/list-book/listbook.component';
import { ListreviewComponent } from './component/list-review/listreview.component';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { AdminOrderListComponent } from './component/admin-order-list/admin-order-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminheaderComponent,
    AppHomeComponent,
    AppheaderComponent,
    UserheaderComponent,
    UserhomeComponent,
    AdminhomeComponent,
    AboutusComponent,
    ContactComponent,
    ForgotPasswordComponent,
    UpdateProfileComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    AddbookComponent,
    ListbookComponent,
    UpdateCategoryComponent,
    AdmindashboardComponent,
    ListorderComponent,
    UpdateOrderComponent,
    BookPageComponent,
    AddreviewComponent,
    ListreviewComponent,
    CartListComponent,
    OrderListComponent,
    AdminOrderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [
    provideClientHydration(),
    AdminLoginGuardService,
    ClientLoginGuardService,
    AdminClientGuardService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
