import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'My First Work';
  user : User = {
    name : 'Lúcifer',
    age : 19
  }
  upperText : String = "ta upper caralho"
  digital : number = 0.5;
  today: Date = new Date();
  money : number =23.92;
  isADM = true;
  profile = 2;
}
