import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppLayoutComponent } from './app-layout.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AppUiModule } from './core/app-ui.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, AppLayoutComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), AppUiModule],
})
export class AppModule {}
