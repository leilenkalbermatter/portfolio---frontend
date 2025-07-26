import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // Creamos una propiedad para almacenar el año actual
  currentYear: number;

  constructor() {
    // En el constructor, obtenemos el año actual de la fecha del sistema
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    // ngOnInit se mantiene por si necesitas añadir más lógica en el futuro
  }

}