import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  featureImages = [
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
  ];

  featureTitles = [
    'Free Programming Lessons',
    'Code Review & Feedback',
    'Project Help',
  ];

  featureDescriptions = [
    'Learn programming through structured lessons and practical examples. We teach and share our knowledge for free.',
    'Get your code reviewed and receive feedback to improve your programming skills.',
    'Get help with your projects and learn how to solve real programming problems.',
  ];

  selectedFeature = 0;
  i = 0;
}
