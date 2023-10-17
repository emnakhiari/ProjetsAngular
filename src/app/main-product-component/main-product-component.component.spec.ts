import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProductComponentComponent } from './main-product-component.component';

describe('MainProductComponentComponent', () => {
  let component: MainProductComponentComponent;
  let fixture: ComponentFixture<MainProductComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProductComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
