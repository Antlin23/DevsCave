import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Courses } from './courses/courses';
import { AboutComponent } from './about/about.component';
import { Contact } from './contact/contact';
import { Privacy } from './privacy/privacy';

const routeConfig: Routes = [
    {
      path: '',
      component: Home,
      title: 'Home page'
    },
    {
      path: 'courses',
      component: Courses,
      title: 'Courses'
    },
    {
      path: 'about',
      component: AboutComponent,
      title: 'About Us'
    },
    {
      path: 'contact',
      component: Contact,
      title: 'Contact Us'
    },
    {
      path: 'privacy',
      component: Privacy,
      title: 'Privacy Policy'
    }
  ];
  
  export default routeConfig;
