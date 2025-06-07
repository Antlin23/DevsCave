import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  values = [
    {
      title: 'Free Education',
      description: 'We believe in making programming education accessible to everyone. All our courses are completely free.',
      icon: '🎓'
    },
    {
      title: 'Community First',
      description: 'Building a supportive community where everyone can learn, share, and grow together.',
      icon: '👥'
    },
    {
      title: 'Passion for Teaching',
      description: 'We teach because we love it. Our goal is to share knowledge and help others succeed.',
      icon: '❤️'
    }
  ];

  team = [
    {
      name: 'Our Community',
      role: 'The Heart of Dev\'s Nest',
      description: 'A diverse group of learners, teachers, and enthusiasts who make our community special.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
    }
  ];
} 