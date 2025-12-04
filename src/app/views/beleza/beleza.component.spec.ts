import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelezaComponent } from './beleza.component';

describe('BelezaComponent', () => {
  let component: BelezaComponent;
  let fixture: ComponentFixture<BelezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
