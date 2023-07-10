import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgChartsModule } from 'ng2-charts';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    NgChartsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    RouterModule.forRoot([
      { path: '', component: UserListComponent },
      { path: 'event', component: EventComponent },
      { path: 'event/:param', component: EventComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
