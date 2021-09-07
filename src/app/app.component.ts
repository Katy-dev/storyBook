import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storyBook';
  toggle: boolean = false;
  message?:string;

  constructor() {
  }

  onToggle($event: string) {
    this.toggle = !this.toggle;
    this.message = $event;
  }
}
