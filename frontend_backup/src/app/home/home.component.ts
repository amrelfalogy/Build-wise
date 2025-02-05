import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private header!: HTMLElement;

  ngOnInit() {
    this.header = document.querySelector('.header') as HTMLElement;
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
