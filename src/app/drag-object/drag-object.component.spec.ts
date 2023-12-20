import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragObjectComponent } from './drag-object.component';

describe('DragObjectComponent', () => {
  let component: DragObjectComponent;
  let fixture: ComponentFixture<DragObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragObjectComponent]
    });
    fixture = TestBed.createComponent(DragObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
