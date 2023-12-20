import { CdkDragEnter, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-row-drag',
  templateUrl: './row-drag.component.html',
  styleUrls: ['./row-drag.component.css'],
})
export class RowDragComponent {
  data: any[] = [
    { index: 0, name: 'PO', width: 500 },
    { index: 1, name: 'ADD', width: 380},
    { index: 2, name: 'Sub', width: 200 },
    { index: 3, name: 'MUL', width: 728 },
    { index: 4, name: 'Null', width: 162 },
    { index: 5, name: 'NA', width: 110 },
    { index: 6, name: 'Frac', width: 620 },
    { index: 7, name: 'Infinity', width: 140 },
    { index: 8, name: 'Exception', width: 389 },
    { index: 9, name: 'Absract', width: 222 },
  ];

  @ViewChild('dropListContainer') dropListContainer?: ElementRef;

  // dropListReceiverElement?: HTMLElement;
  dragDropInfo?: {
    dragIndex: number;
    dropIndex: number;
  };

  dragEntered(event: CdkDragEnter<number>) {
    const drag = event.item;
    const dropList = event.container;
    const dragIndex = drag.data;
    const dropIndex = dropList.data;

    this.dragDropInfo = { dragIndex, dropIndex };
    console.log('dragEntered', { dragIndex, dropIndex });
    moveItemInArray(this.data, dragIndex, dropIndex);
  }

  dragAndDropEnabled = true;
  isDragActive = false;
  buttonLabel = 'Disable Drag and Drop';
  toggleDragDrop() {
    this.isDragActive = !this.isDragActive;
    this.dragAndDropEnabled = !this.dragAndDropEnabled;
    this.buttonLabel = this.dragAndDropEnabled ? 'Disable Drag and Drop' : 'Enable Drag and Drop';
  }


  dropdownValues = ['Option 1', 'Option 2', 'Option 3']; // Replace with your actual dropdown options

  // selectedDropdownValue: string='';


  previousValue: string = '';

  onDropdownChange(newValue: string) {
 
    const oldValue = this.previousValue;


    this.previousValue = newValue;

    console.log('Old Value:', oldValue);
    console.log('New Value:', newValue);
  }
  // condition = false;
}
