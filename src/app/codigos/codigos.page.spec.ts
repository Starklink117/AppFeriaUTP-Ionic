import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CodigosPage } from './codigos.page';

describe('CodigosPage', () => {
  let component: CodigosPage;
  let fixture: ComponentFixture<CodigosPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(CodigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
