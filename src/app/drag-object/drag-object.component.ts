import { CdkDragDrop, CdkDragEnter, CdkDragMove, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drag-object',
  templateUrl: './drag-object.component.html',
  styleUrls: ['./drag-object.component.css']
})
export class DragObjectComponent {
  data: any[] = [
    { index: 0, name: 'PO', height: 100 },
    { index: 1, name: 'ADD', height: 80 },
    { index: 2, name: 'Sub', height: 200 },
    { index: 3, name: 'MUL', height: 128 },
    { index: 4, name: 'Null', height: 162 },
    { index: 5, name: 'NA', height: 11 },
    { index: 6, name: 'Frac', height: 120 },
    { index: 7, name: 'Infinity', height: 140 },
    { index: 8, name: 'Exception', height: 189 },
    { index: 9, name: 'Absract', height: 122 },
  ];
  @ViewChild('dropListContainer') dropListContainer?: ElementRef;

 

  dropListReceiverElement?: HTMLElement;
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

    const phContainer = dropList.element.nativeElement;
    const phElement = phContainer.querySelector('.cdk-drag-placeholder');

    if (phElement) {
      phContainer.removeChild(phElement);
      phContainer.parentElement?.insertBefore(phElement, phContainer);

      moveItemInArray(this.data, dragIndex, dropIndex);
    }
  }

  dragMoved(event: CdkDragMove<number>) {
    if (!this.dropListContainer || !this.dragDropInfo) return;

    const placeholderElement =
      this.dropListContainer.nativeElement.querySelector(
        '.cdk-drag-placeholder'
      );

    const receiverElement =
      this.dragDropInfo.dragIndex > this.dragDropInfo.dropIndex
        ? placeholderElement?.nextElementSibling
        : placeholderElement?.previousElementSibling;

    if (!receiverElement) {
      return;
    }

    receiverElement.style.display = 'none';
    this.dropListReceiverElement = receiverElement;
  }

  dragDropped(event: CdkDragDrop<number>) {
    if (!this.dropListReceiverElement) {
      return;
    }

    this.dropListReceiverElement.style.removeProperty('display');
    this.dropListReceiverElement = undefined;
    this.dragDropInfo = undefined;
  }
}


