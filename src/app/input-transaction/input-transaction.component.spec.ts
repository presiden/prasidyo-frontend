import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTransactionComponent } from './input-transaction.component';

describe('InputTransactionComponent', () => {
  let component: InputTransactionComponent;
  let fixture: ComponentFixture<InputTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
