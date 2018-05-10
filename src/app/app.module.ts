import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchVendorComponent } from './components/search-vendor/search-vendor.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { HeaderComponent } from './shell/layout/header/header.component';
import { routes } from './app-routing.module';
import { HomeComponent } from './shell/pages/home/home.component';
import { ProfileComponent } from './shell/pages/profile/profile.component';
import { SupportComponent } from './shell/pages/support/support.component';
import { OffersComponent } from './shell/pages/offers/offers.component';
import { HistoryComponent } from './shell/pages/history/history.component';
import { ContentComponent } from './shell/layout/content/content.component';
import { ContainerComponent } from './shell/layout/container/container.component';
import { SidebarComponent } from './shell/layout/sidebar/sidebar.component';
import { SignupComponent } from './shell/pages/signup/signup.component';
import { LoginComponent } from './shell/pages/login/login.component';
import { HmtComponent } from './shell/pages/hmt/hmt.component';
import { JobsComponent } from './shell/pages/jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchVendorComponent,
    VendorComponent,
    VendorsComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    SupportComponent,
    OffersComponent,
    HistoryComponent,
    ContentComponent,
    ContainerComponent,
    SidebarComponent,
    SignupComponent,
    LoginComponent,
    HmtComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
