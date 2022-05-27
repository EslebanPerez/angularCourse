import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'American Capitain', 'Dr. Strange', "Scarlet Witch", "Vision", 'Hulk'];
  heroeEliminado: string = "";

  eliminarHeroe(){
    this.heroeEliminado = this.heroes.shift() || '';
  }
}
