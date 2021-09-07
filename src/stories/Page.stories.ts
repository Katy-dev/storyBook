import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {AppComponent as Page} from '../app/app.component';
import {MessageComponent as Message} from '../app/components/message/message.component';
import {ButtonComponent as Button} from '../app/components/button/button.component';

export default {
  title: 'Example/Page',
  component: Page,
  decorators: [
    moduleMetadata({
      declarations: [Page, Button, Message],
      imports: [CommonModule],
    }),
  ],
} as Meta;

export const Template: Story<Page> = (args: Page) => ({
  props: args,
  template: `<app-root></app-root>`,
});

