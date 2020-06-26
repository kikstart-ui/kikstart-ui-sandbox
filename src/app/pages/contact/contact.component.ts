import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormHelper } from '@kikstart-ui/ui-form';

@Component({
  template: `
    <web-page>
      <div class="my-3 my-md-5">
        <ui-hero
          title="Contact"
          description="Each Contact screen needs a form."
        ></ui-hero>
      </div>
      <div class="my-3 my-md-5">
        <ui-form
          (action)="submit($event)"
          submitButton="Send"
          [form]="form"
          [fields]="fields"
          [model]="model"
        ></ui-form>
      </div>
    </web-page>
  `,
})
export class ContactComponent {
  form = new FormGroup({});
  fields = [
    FormHelper.input('name', { label: 'Name', required: true }),
    FormHelper.email('email', { label: 'Email', required: true }),
    FormHelper.textarea('message', { label: 'Message', required: true }),
  ];
  model = {};

  submit({ payload }: { payload: any }) {
    console.log('This is you payload', payload);
  }
}
