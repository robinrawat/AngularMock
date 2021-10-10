import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MockupsService } from './services/mockups.service';
import { ContainerComponent } from './components/container/container.component';
import { DisplayComponent } from './components/display/display.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';


const appRoutes: Routes = [
  {path: '', component: ContainerComponent},
  {path: 'display', component: DisplayComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MockupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
