import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DragDropComponent } from './drag-drop/drag-drop.component';
import { LatestDragComponent } from './latest-drag/latest-drag.component';
import { DragObjectComponent } from './drag-object/drag-object.component';
import { RowDragComponent } from './row-drag/row-drag.component';



const routes: Routes = [
 
  {
    path: 'drag',component:DragDropComponent
  },
 {
  path:'latest',component:LatestDragComponent
 },
 {
  path:'object',component:DragObjectComponent
 },
 {
  path:'row',component:RowDragComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
