import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../shared/message-dialog/message-dialog.component';
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  cartComponent = {
    isVisible: false,
  };
  isHomePage: boolean = false;
  isAtTop: boolean = true;
  isNavbarVisible = true;
  lastScrollTop = 0;
  isNavbarCollapsed: boolean = false;

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'HOME', route: '/home' },
    { label: 'about', route: '/about-us' },
    { label: 'services', route: '/services' },
    { label: 'CONTACT', route: '/contact' },
  ];

  constructor(private router: Router, private dialog: MatDialog) {}

  openMessageDialog(): void {
    this.dialog.open(MessageDialogComponent, {
      width: '740px',
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage =
          this.router.url === '/home' || this.router.url === '/';
      }
    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    this.isAtTop = currentScroll === 0;
    if (currentScroll > this.lastScrollTop) {
      // Scrolling down
      this.isNavbarVisible = false;
    } else {
      // Scrolling up
      this.isNavbarVisible = true;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  onCartClick(): void {
    this.cartComponent.isVisible = !this.cartComponent.isVisible;

    if (this.cartComponent.isVisible) {
      this.router.navigate(['/cart']); // Load cart module
    } else {
      this.router.navigate(['/']); // Go back to another route when cart is hidden
    }
  }
}
