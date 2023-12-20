import { CdkDragDrop, CdkDragEnter, CdkDragMove, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-latest-drag',
  templateUrl: './latest-drag.component.html',
  styleUrls: ['./latest-drag.component.css']
})
export class LatestDragComponent {

  containers1 = [
    { name: "Sushil", designation: 'SDE-1' },
    { name: "Pranav", designation: 'SDE-1' },
    { name: "Naresh", designation: 'SDE-1' },
    { name: "Shahnawaz", designation: 'SDE-1' },
    { name: "Sourabh", designation: 'SDE-1' },
    { name: "Ankit", designation: 'SDE-1' },
    { name: "Prathmesh", designation: 'SDE-1' },
    { name: "Jitu", designation: 'SDE-1' },
    { name: "Yash", designation: 'SDE-1' },

  ];


  // onDrop(event: CdkDragDrop<string[]>, containers: string[], index: number) {
  //   console.log('On Drop called');
  //   console.log(event);
  //   const draggedItem = containers[event.previousIndex];
  //   containers[event.previousIndex] = containers[index];
  //   containers[index] = draggedItem;
  //   console.log('Drop completed');
  // }


  @ViewChild('dropListContainer') dropListContainer?: ElementRef;
  dropListReceiverElement?: HTMLElement;
  dragDropInfo?: {
    dragIndex: number;
    dropIndex: number;
  };

  dragEntered(event: CdkDragEnter<number>) {
    console.log('On DropEntered called');
    console.log(event);
    const drag = event.item;
    const dropList = event.container;
    const dragIndex = drag.data;
    const dropIndex = dropList.data;

    this.dragDropInfo = { dragIndex, dropIndex };
    console.log('DragEntered', { dragIndex, dropIndex });

    const phContainer = dropList.element.nativeElement;
    const phElement = phContainer.querySelector('.cdk-drag-placeholder');

    if (phElement) {
      phContainer.removeChild(phElement);
      phContainer.parentElement?.insertBefore(phElement, phContainer);
      moveItemInArray(this.containers1, dragIndex, dropIndex);
    }
  }

  dragMoved(event: CdkDragMove<number>) {
    console.log('On Drop Moved called');
    console.log(event);
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
    console.log("Drag moved Completed");

  }

  dragDropped(event: CdkDragDrop<number>) {
    console.log("On Drag Dropped");
    if (!this.dropListReceiverElement) {
      return;
    }

    this.dropListReceiverElement.style.removeProperty('display');
    this.dropListReceiverElement = undefined;
    this.dragDropInfo = undefined;
    console.log("On Drag Dropped completed");
  }


  
}
