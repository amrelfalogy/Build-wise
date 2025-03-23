import { Component, HostListener, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MainService } from '../models/service.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mainServices: MainService[] = [];
  private header!: HTMLElement;

  constructor(private serviceService: ServiceService, private router: Router) {}

  ngOnInit() {
    this.header = document.querySelector('.header') as HTMLElement;
    this.mainServices = this.serviceService.getServices();
  }

  navigateToService(id: number) {
    if (id === 3) return; // Engineering Services doesn't navigate
    this.router.navigate(['/services', id]);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // If the section is in view, add the 'visible' class
      if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');
      }
    });
  }
}
