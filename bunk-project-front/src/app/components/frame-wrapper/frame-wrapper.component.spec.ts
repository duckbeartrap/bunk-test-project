import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameWrapperComponent } from './frame-wrapper.component';

describe('FrameWrapperComponent', () => {
  let component: FrameWrapperComponent;
  let fixture: ComponentFixture<FrameWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
