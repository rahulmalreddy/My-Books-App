import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { CutomPipeForAddingVariablePipe } from './cutom-pipe-for-adding-variable.pipe';

import { BooksModule } from './books/books.module';
import { RxJSLearningComponent } from './rx-js-learning/rx-js-learning.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    CutomPipeForAddingVariablePipe,
    RxJSLearningComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BooksModule,
  ],
  providers:  [ CutomPipeForAddingVariablePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
