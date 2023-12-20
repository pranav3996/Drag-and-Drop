import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDragComponent } from './row-drag.component';

describe('RowDragComponent', () => {
  let component: RowDragComponent;
  let fixture: ComponentFixture<RowDragComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowDragComponent]
    });
    fixture = TestBed.createComponent(RowDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
