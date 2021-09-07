import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() backgroundColor?: string;

  @Input() primary = false;

  @Input() label = 'Button';

  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Output() clickEvent = new EventEmitter<any>();

  toggle: boolean = false;
  message: string = '';

  constructor() { }

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }

  onClick() {
    this.toggle = !this.toggle;
    this.toggle? this.message = 'I successfully passed this interview!': '';
    this.clickEvent.emit(this.message);
  }

}
