import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AppComponent} from './app.component';
import {RegestrationComponent} from './regestration/regestration.component';
import {LoginComponent} from './login/login.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { UsertableComponent } from './usertable/usertable.component';


@NgModule({
  declarations: [
    AppComponent,
    RegestrationComponent,
    LoginComponent,
    HomeComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: '/', pathMatch: 'full'
      },
      {
        path: 'home', component: HomeComponent
      }
      ,
      {
        path: 'regestration', component: RegestrationComponent, data: {animation: 'HomePage'}
      }
      ,
      {
        path: 'login', component: LoginComponent, data: {animation: 'AboutPage'}
      },
      {
        path: 'data', component: UsertableComponent
      }
    ]),
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
