import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreAimeComponent } from './filtre-aime.component';

describe('FiltreAimeComponent', () => {
  let component: FiltreAimeComponent;
  let fixture: ComponentFixture<FiltreAimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreAimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreAimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
