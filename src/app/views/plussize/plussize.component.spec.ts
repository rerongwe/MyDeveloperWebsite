import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlussizeComponent } from './plussize.component';

describe('PlussizeComponent', () => {
  let component: PlussizeComponent;
  let fixture: ComponentFixture<PlussizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlussizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlussizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
