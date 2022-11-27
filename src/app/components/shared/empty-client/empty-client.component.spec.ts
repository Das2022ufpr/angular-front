import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyClientComponent } from './empty-client.component';

describe('EmptyClientComponent', () => {
  let component: EmptyClientComponent;
  let fixture: ComponentFixture<EmptyClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
