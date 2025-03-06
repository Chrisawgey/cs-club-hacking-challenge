import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { MembersComponent } from './components/members/members.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];