import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutWebModule } from '@kikstart-ui/layout-web';

import { UiFormModule } from '@kikstart-ui/ui-form';
import { UiHeroModule } from '@kikstart-ui/ui-hero';
import { UiLinkModule } from '@kikstart-ui/ui-link';
import { UiNavbarModule } from '@kikstart-ui/ui-navbar';

const MODULES = [
  // Default Angular modules
  CommonModule,
  RouterModule,
  // Kikstart Layout
  LayoutWebModule,
  // Kikstart Components
  UiFormModule,
  UiHeroModule,
  UiLinkModule,
  UiNavbarModule,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class AppUiModule {}
