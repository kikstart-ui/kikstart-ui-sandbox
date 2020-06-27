import { Component } from '@angular/core';

@Component({
  template: `
    <web-layout>
      <header>
        <ui-navbar
          navbarStyle="dark"
          [title]="title"
          [logo]="logo"
          [links]="links"
        ></ui-navbar>
      </header>
      <router-outlet></router-outlet>

      <footer class="bg-dark">
        <small class="d-block py-5 text-center text-muted" [innerHTML]="footer">
        </small>
      </footer>
    </web-layout>
  `,
})
export class AppLayoutComponent {
  logo = '/assets/logo.svg';
  title = 'kikstart.ui';
  links = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];
  footer = 'Copyright &copy; 2020';
}
