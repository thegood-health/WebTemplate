import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAdaptorComponent } from './demo-adaptor.component';

describe('DemoAdaptorComponent', () => {
  let component: DemoAdaptorComponent;
  let fixture: ComponentFixture<DemoAdaptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAdaptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAdaptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
