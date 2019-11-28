import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import {NavComponentComponent} from './../app/components/nav-component/nav-component.component'
import {CarouselComponentComponent} from './../app/components/carousel-component/carousel-component.component'
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { TableComponentComponent } from './components/table-component/table-component.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
   declarations: [
      AppComponent,
      NavComponentComponent,
      CarouselComponentComponent,
      HomeComponentComponent,
      ContactComponentComponent,
      TableComponentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
