import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaintimaComponent } from './modaintima.component';

describe('ModaintimaComponent', () => {
  let component: ModaintimaComponent;
  let fixture: ComponentFixture<ModaintimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaintimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaintimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
