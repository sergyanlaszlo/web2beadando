import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankclientFormComponent } from './bankclient-form.component';

describe('BankclientFormComponent', () => {
  let component: BankclientFormComponent;
  let fixture: ComponentFixture<BankclientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankclientFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankclientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
