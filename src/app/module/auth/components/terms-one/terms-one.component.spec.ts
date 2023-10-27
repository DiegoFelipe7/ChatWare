import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsOneComponent } from './terms-one.component';

describe('TermsOneComponent', () => {
  let component: TermsOneComponent;
  let fixture: ComponentFixture<TermsOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsOneComponent]
    });
    fixture = TestBed.createComponent(TermsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
