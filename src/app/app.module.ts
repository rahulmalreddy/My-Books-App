import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { CutomPipeForAddingVariablePipe } from './cutom-pipe-for-adding-variable.pipe';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CutomPipeForAddingVariablePipe,
    BookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
