import { ComponentFixture, TestBed } from "@angular/core/testing";
import { BankclientListComponent } from "./bankclient-list.component";

describe('BankclientListComponent', () => {
  let component: BankclientListComponent;
  let fixture: ComponentFixture<BankclientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankclientListComponent]
    })
    .compileComponents();
  });

beforeEach(() => {
  fixture = TestBed.createComponent(BankclientListComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});