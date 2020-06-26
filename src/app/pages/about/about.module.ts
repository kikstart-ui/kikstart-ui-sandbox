import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppUiModule } from '../../core/app-ui.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    AppUiModule,
    RouterModule.forChild([{ path: '', component: AboutComponent }]),
  ],
})
export class AboutModule {}
