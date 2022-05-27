import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'American Capitain', 'Dr. Strange', "Scarlet Witch", "Vision", 'Hulk'];
  heroeEliminado: string[] = [];
  status: boolean = false;

  // eliminarHeroe(){
  //   this.heroeEliminado = this.heroes.shift() || '';
  // }
  eliminarelemento(){
    this.heroeEliminado = this.heroes.splice(-1,1);
    this.heroes.length === 0 ?
      this.status=false :
      this.status=true;
  }
}
