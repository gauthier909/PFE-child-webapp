import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreAideComponent } from './filtre-aide.component';

describe('FiltreAideComponent', () => {
  let component: FiltreAideComponent;
  let fixture: ComponentFixture<FiltreAideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreAideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreAideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
