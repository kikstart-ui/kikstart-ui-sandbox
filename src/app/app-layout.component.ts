import { Component } from '@angular/core';
import { UiLink } from '@kikstart-ui/ui-link';

@Component({
  template: `
    <web-layout>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" routerLink="/">
            <img
              [attr.src]="logo"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            {{ title }}
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <ng-container *ngFor="let link of links">
                <li
                  class="nav-item mr-2"
                  routerLinkActive="text-primary"
                  [routerLinkActiveOptions]="{ exact: true }"
                >
                  <a [routerLink]="link.path">{{ link.label }}</a>
                </li>
              </ng-container>
            </ul>
          </div>
        </nav>
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
  links: UiLink[] = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];
  footer = 'Copyright &copy; 2020';
}
