import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { NavbarComponent }   from './components/navbar.component';
import { JumbotronComponent }   from './components/jumbotron/jumbotron.component';
import { AboutComponent }   from './components/pages/about.component';
import { HomeComponent }   from './components/pages/home.component';
import { routing } from './app.routing'

@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [ AppComponent, NavbarComponent, JumbotronComponent, AboutComponent, HomeComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
