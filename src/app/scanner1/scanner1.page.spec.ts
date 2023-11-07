import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Scanner1Page } from './scanner1.page';
import { IonicModule } from '@ionic/angular';

describe('Scanner1Page', () => {
  let component: Scanner1Page;
  let fixture: ComponentFixture<Scanner1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Scanner1Page],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(Scanner1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
