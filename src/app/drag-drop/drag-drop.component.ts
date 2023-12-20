import { CdkDragDrop, CdkDragEnter, CdkDragMove, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {
  containers1 = ['Container 1', 'Container 2', 'Container 3','Container 5', 'Container 6', 'Container 7'];
  data: any[] = [
    { index: 0, name: 'Categorized 1', height: 12 },
    { index: 1, name: 'Another Item', height: 8 },
    { index: 2, name: 'Categorized ADD', height: 200 },
    { index: 3, name: 'Categorized 2', height: 12 },
    { index: 4, name: 'Categorized 3', height: 12 },
    { index: 5, name: 'Categorized 4', height: 12 },
    { index: 6, name: 'Categorized 5', height: 12 },
    { index: 7, name: 'Categorized 6', height: 12 },
    { index: 8, name: 'Categorized 7', height: 12 },
    { index: 9, name: 'Categorized 8', height: 12 },
  ];
  // containers2 = ['Container 5', 'Container 6', 'Container 78'];
  // containers3 = ['Container 6', 'Container 7', 'Container 8'];
  onDrop(event: CdkDragDrop<string[]>, containers: string[], index: number) {
    console.log('onDrop called');
    
    // Swap the positions of the dragged item and the one it is dropped onto
    const draggedItem = containers[event.previousIndex];
    containers[event.previousIndex] = containers[index];
    containers[index] = draggedItem;
  
    console.log('Drop completed');
  }
  
  // onDrop(event: CdkDragDrop<string[]>, containers: string[], index: number) {
  //   console.log('onDrop called');
  //   moveItemInArray(containers, event.previousIndex, index);
  //   console.log('Drop completed');
  // }
  // items = ['Item 1', 'Item 2', 'Item 3'];

  // onDrop(event: CdkDragDrop<string[]>) {

  //   moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  //   console.log('onDrop called');
  // }

  @ViewChild('dropListContainer') dropListContainer?: ElementRef;

  // public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  dropListReceiverElement?: HTMLElement;
  dragDropInfo?: {
    dragIndex: number;
    dropIndex: number;
  };

  // add() {
  //   this.items.push(this.items.length + 1);
  // }

  // shuffle() {
  //   this.items.sort(function () {
  //     return 0.5 - Math.random();
  //   });
  // }

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

      moveItemInArray(this.containers1, dragIndex, dropIndex);
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

