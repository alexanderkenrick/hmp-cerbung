import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CeritadetailPage } from './ceritadetail.page';

describe('CeritadetailPage', () => {
  let component: CeritadetailPage;
  let fixture: ComponentFixture<CeritadetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CeritadetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
