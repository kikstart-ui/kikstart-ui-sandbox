import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppUiModule } from '../../core/app-ui.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    AppUiModule,
    RouterModule.forChild([{ path: '', component: ContactComponent }]),
  ],
})
export class ContactModule {}
