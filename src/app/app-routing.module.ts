import { Routes } from '@angular/router';
import { LoginComponent } from './shell/pages/login/login.component';
import { SignupComponent } from './shell/pages/signup/signup.component';
import { HmtComponent } from './shell/pages/hmt/hmt.component';
import { HomeComponent } from './shell/pages/home/home.component';
import { ProfileComponent } from './shell/pages/profile/profile.component';
import { HistoryComponent } from './shell/pages/history/history.component';
import { SupportComponent } from './shell/pages/support/support.component';
import { OffersComponent } from './shell/pages/offers/offers.component';
import { JobsComponent } from './shell/pages/jobs/jobs.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'register',
    component: SignupComponent
  }, {
    path: 'hmt',
    component: HmtComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'jobs', component: JobsComponent, },
      { path: 'profile', component: ProfileComponent},
      { path: 'history', component: HistoryComponent},
      { path: 'support', component: SupportComponent},
      { path: 'offers', component: OffersComponent}
    ]
  }
];

