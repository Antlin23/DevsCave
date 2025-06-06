import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  featureImages = [
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
  ];

  featureTitles = [
    'Learn Programming',
    'Real-time Collaboration',
    'Coding Challenges',
  ];

  featureDescriptions = [
    'Access tutorials and resources for various programming languages',
    'Collaborate with other developers in real-time',
    'Engage in coding challenges and competitions',
  ];

  selectedFeature = 0;
}
