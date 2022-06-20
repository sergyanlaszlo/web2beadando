import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankaccountFormComponent } from './bankaccount-form.component';

describe('BankaccountFormComponent', () => {
  let component: BankaccountFormComponent;
  let fixture: ComponentFixture<BankaccountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankaccountFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankaccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
