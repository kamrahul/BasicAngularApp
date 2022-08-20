import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*

https://www.geeksforgeeks.org/what-is-the-difference-between-declarations-providers-and-import-in-ngmodule/#:~:text=Declarations%20are%20used%20to%20make%20directives.,belongs%20to%20the%20current%20module.


*/