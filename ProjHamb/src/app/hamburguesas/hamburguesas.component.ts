import { Component, OnInit } from '@angular/core';
import { Hamburguesa } from '../hamburguesa';
import { HAMBURGUESAS } from '../listado-hamburguesas';

@Component({
    selector: 'app-hamburguesas',
    templateUrl: './hamburguesas.component.html',
    styleUrls: ['./hamburguesas.component.css']
  })
  export class HamburguesasComponent implements OnInit {
  
    hamburguesas = HAMBURGUESAS;
  
    selectedHamburguesa: Hamburguesa;
  
  
    constructor() {
     }
    ngOnInit() {
    }
  
    onSelect(hamburguesa: Hamburguesa): void {
      this.selectedHamburguesa = hamburguesa;
    }
  }
