import { Component, OnInit } from '@angular/core';
import { Hamburguesa } from '../hamburguesa';
import { HAMBURGUESAS } from '../listado-hamburguesas';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
    selector: 'app-hamburguesas',
    templateUrl: './hamburguesas.component.html',
    styleUrls: ['./hamburguesas.component.css']
  })
  export class HamburguesasComponent implements OnInit {
  
    hamburguesas = HAMBURGUESAS;
  
    selectedHamburguesa: Hamburguesa;
  
  
    constructor() {
      setTheme('bs3');
     }
    ngOnInit() {
    }
  
    onSelect(hamburguesa: Hamburguesa): void {
      this.selectedHamburguesa = hamburguesa;
    }
  }
