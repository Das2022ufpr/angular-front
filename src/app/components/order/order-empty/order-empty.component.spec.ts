import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEmptyComponent } from './order-empty.component';

describe('OrderEmptyComponent', () => {
  let component: OrderEmptyComponent;
  let fixture: ComponentFixture<OrderEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
