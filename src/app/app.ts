import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Menu } from './menu/menu';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';
import { Courses } from './courses/courses';
import { Contact } from './contact/contact';
import { Privacy } from './privacy/privacy';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Menu, Footer, RouterModule, Courses, Contact, Privacy],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = "Dev's Nest";
}
