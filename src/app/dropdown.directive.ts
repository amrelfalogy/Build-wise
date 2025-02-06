import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  toggleOpen(event: Event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const isClickedInside = this.elRef.nativeElement.contains(event.target);
    const isNavbarToggler = (event.target as HTMLElement).classList.contains(
      'navbar-toggler'
    );

    // Toggle dropdown if clicked inside or navbar toggler button in responsive mode
    if (isClickedInside || isNavbarToggler) {
      this.isOpen = !this.isOpen;
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    } else {
      // Close dropdown when clicking outside
      this.isOpen = false;
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  }
}
