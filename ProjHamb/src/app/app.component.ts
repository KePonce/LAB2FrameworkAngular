import { Component } from '@angular/core';
import * as utils from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu de Hamburguesas';
  constructor(){
    utils.setTheme('bs3');
  } 
}
