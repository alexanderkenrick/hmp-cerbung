import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateceritaPage } from './createcerita.page';

describe('CreateceritaPage', () => {
  let component: CreateceritaPage;
  let fixture: ComponentFixture<CreateceritaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateceritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
