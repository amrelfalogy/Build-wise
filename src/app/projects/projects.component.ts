import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'AlRay Show Room',
      thumbnail: 'assets/imgs/projects/alRay.jpeg',
      images: ['assets/imgs/projects/alshaya1.jpeg'],
      location: 'Dubai, UAE',
      description: 'A state-of-the-art tower located in Dubai.',
      timeline: '2023 - 2024',
    },
    {
      id: 2,
      title: 'Al Shaya Tower',
      thumbnail: 'assets/imgs/projects/alshaya.jpeg',
      images: [
        'assets/imgs/projects/alshaya.jpeg',
        'assets/imgs/projects/alshaya1.jpeg',
        'assets/imgs/projects/alshaya2.jpeg',
        'assets/imgs/projects/alshaya3.jpeg',
        'assets/imgs/projects/alshaya4.jpeg',
        'assets/imgs/projects/alshaya5.jpeg',
        'assets/imgs/projects/alshaya6.jpeg',
        'assets/imgs/projects/alshaya7.jpeg',
        'assets/imgs/projects/alshaya8.jpeg',
        'assets/imgs/projects/alshaya9.jpeg',
        'assets/imgs/projects/alshaya10.jpeg',
        'assets/imgs/projects/alshaya11.jpeg',
        'assets/imgs/projects/alshaya12.jpeg',
        'assets/imgs/projects/alshaya13.jpeg',
        'assets/imgs/projects/alshaya14.jpeg',
      ],
      location: 'Dubai, UAE',
      description: 'A state-of-the-art tower located in Dubai.',
      timeline: '2023 - 2024',
    },
    {
      id: 3,
      title: 'Villa Al Mansoria',
      thumbnail: 'assets/imgs/projects/alshaya14.jpeg',
      images: ['assets/imgs/projects/alshaya1.jpeg'],
      location: 'Dubai, UAE',
      description: 'A state-of-the-art tower located in Dubai.',
      timeline: '2023 - 2024',
    },
    // Add details for other projects
  ];

  constructor(private router: Router) {}

  viewProject(project: any) {
    this.router.navigate(['/projects', project.id]);
  }
}
