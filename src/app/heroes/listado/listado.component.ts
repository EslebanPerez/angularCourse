import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'American Capitain', 'Dr. Strange', "Scarlet Witch", "Vision"];

  eliminarHeroe(){
    const eliminado = this.heroes.splice(-1,1);
    console.log(eliminado);
  }
}
