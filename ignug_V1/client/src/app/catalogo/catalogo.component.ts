import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ListaCatalogos } from '../models/lista-catalogos';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { SelectionModel } from '@angular/cdk/collections';

import { Asignaturas } from '../models/asignaturas';
import { ServiciosService } from '../service/servicios.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  asignaturas: Asignaturas;
  data: Array<Asignaturas>;

  nombreColumnas: string[];
  listaCatalogos: ListaCatalogos[];
  verTabla: boolean;
  dataSource;
  tablaSeleccionada: number;
  selection = new SelectionModel<string>(true, []);
  asignacion: Asignaturas[];
  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private Servicios: ServiciosService) { }

  ngOnInit() {

    this.get();
    this.asignaturas = new Asignaturas();
    
    this.verTabla = false;

    this.listaCatalogos = [
      {
        descripcion: 'Asignatura',
        tabla:'Asignatura'
      }

    ];

    this.asignacion=[

    ] 
  }

  get() {
    this.Servicios.get('asignaturas').subscribe(
        response => {
            this.data = response as Array<Asignaturas>;
        },
        error => {
            console.log(error);
        }
    );
}

post(){
    this.Servicios.post('asignaturas',this.asignaturas).subscribe(
      response => {
        this.get();
        console.log(this.get);
      },
      error => {
        console.log(error);
      }
      
    );
}

  verDatos() {
    this.verTabla = true;
    if (this.tablaSeleccionada == 0) {
      this.nombreColumnas = Object.keys(this.asignacion[0]);
      this.dataSource = new MatTableDataSource<Asignaturas>(this.asignacion);
      this.dataSource.paginator = this.paginator
      } else {
      this.verTabla = false;
    }
  }

  // addColumn() {
  //   const randomColumn = Math.floor(Math.random() * this.nombreColumnas.length);
  //   this.nombreColumnas.push(this.nombreColumnas[randomColumn]);
  // }

  removeColumn() {
    if (this.nombreColumnas.length) {
      this.nombreColumnas.pop();
    }
  }

  shuffle() {
    let currentIndex = this.nombreColumnas.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // intercambiar
      let temp = this.nombreColumnas[currentIndex];
      this.nombreColumnas[currentIndex] = this.nombreColumnas[randomIndex];
      this.nombreColumnas[randomIndex] = temp;
    }
  }

  buscar(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  openDialog(registro): void {
    const dialogRef = this.dialog.open(DialogoComponent ,{
      width: '50%',
      data: registro
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

    });
  }

  // nuevo(registro): void {
  //   const dialogRef = this.dialog.open(ModalComponent ,{
  //     data: registro
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);

  //   });
  // }
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // /** Selects all indexs if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(index => this.selection.select(index));
  // }

  // /** The label for the checkbox on the passed index */
  // checkboxLabel(index?: string[]): string {
  //   if (!index) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(index) ? 'deselect' : 'select'} index ${index + 1}`;
  // }

}
