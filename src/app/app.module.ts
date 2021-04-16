import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { NombrePipe } from './nombre.pipe';
import { UsarPipesComponent } from './usar-pipes/usar-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NombrePipe,
    UsarPipesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
