import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppUiModule } from '../../core/app-ui.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    AppUiModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
})
export class HomeModule {}
