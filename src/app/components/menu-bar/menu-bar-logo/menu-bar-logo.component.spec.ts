import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarLogoComponent } from './menu-bar-logo.component';

describe('MenuBarLogoComponent', () => {
  let component: MenuBarLogoComponent;
  let fixture: ComponentFixture<MenuBarLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuBarLogoComponent]
    });
    fixture = TestBed.createComponent(MenuBarLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
