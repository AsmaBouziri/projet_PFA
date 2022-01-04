import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpretComponent } from './listpret.component';

describe('ListpretComponent', () => {
  let component: ListpretComponent;
  let fixture: ComponentFixture<ListpretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
