import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { CellComponent } from './components/cell/cell.component';



@NgModule({
  declarations: [
    BoardComponent,
    CellComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BoardModule { }
