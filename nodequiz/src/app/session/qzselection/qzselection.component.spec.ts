import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QzselectionComponent } from './qzselection.component';

describe('QzselectionComponent', () => {
  let component: QzselectionComponent;
  let fixture: ComponentFixture<QzselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QzselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QzselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
