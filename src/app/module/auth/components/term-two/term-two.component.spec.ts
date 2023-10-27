import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermTwoComponent } from './term-two.component';

describe('TermTwoComponent', () => {
  let component: TermTwoComponent;
  let fixture: ComponentFixture<TermTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermTwoComponent]
    });
    fixture = TestBed.createComponent(TermTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
