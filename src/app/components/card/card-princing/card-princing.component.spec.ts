import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrincingComponent } from './card-princing.component';

describe('CardPrincingComponent', () => {
  let component: CardPrincingComponent;
  let fixture: ComponentFixture<CardPrincingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPrincingComponent]
    });
    fixture = TestBed.createComponent(CardPrincingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
