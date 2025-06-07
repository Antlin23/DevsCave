import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.component.html',
})
export class Courses {
  courses = [
    {
      title: 'HTML & CSS Fundamentals',
      description: 'Master the basics of web development with HTML and CSS. Learn to create beautiful, responsive websites from scratch.',
      level: 'Beginner',
      duration: '6 weeks',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'JavaScript Essentials',
      description: 'Start your JavaScript journey with this comprehensive beginner course. Learn variables, functions, and DOM manipulation.',
      level: 'Beginner',
      duration: '8 weeks',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'C# Basics',
      description: 'Learn the fundamentals of C# programming. Master syntax, object-oriented programming, and basic application development.',
      level: 'Beginner',
      duration: '8 weeks',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Unity Game Development',
      description: 'Create both 2D and 3D games with Unity. Learn game mechanics, physics and C# scripting for game development.',
      level: 'Beginner',
      duration: '12 weeks',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: '.NET Core Web Development',
      description: 'Build robust web applications using .NET Core. Learn C#, MVC patterns, and database integration.',
      level: 'Intermediate',
      duration: '10 weeks',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'React for Beginners',
      description: 'Dive into React development. Learn components, hooks, and state management to build modern web applications.',
      level: 'Beginner',
      duration: '8 weeks',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=600&q=80'
    }
  ];
}
