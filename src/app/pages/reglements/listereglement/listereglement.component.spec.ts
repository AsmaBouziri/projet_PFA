import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListereglementComponent } from './listereglement.component';

describe('ListereglementComponent', () => {
  let component: ListereglementComponent;
  let fixture: ComponentFixture<ListereglementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListereglementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListereglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
