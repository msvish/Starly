import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraAnalysisComponent } from './camera-analysis.component';

describe('CameraAnalysisComponent', () => {
  let component: CameraAnalysisComponent;
  let fixture: ComponentFixture<CameraAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
