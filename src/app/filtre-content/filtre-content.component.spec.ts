import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreContentComponent } from './filtre-content.component';

describe('FiltreContentComponent', () => {
  let component: FiltreContentComponent;
  let fixture: ComponentFixture<FiltreContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
