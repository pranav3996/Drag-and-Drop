import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestDragComponent } from './latest-drag.component';

describe('LatestDragComponent', () => {
  let component: LatestDragComponent;
  let fixture: ComponentFixture<LatestDragComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestDragComponent]
    });
    fixture = TestBed.createComponent(LatestDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
