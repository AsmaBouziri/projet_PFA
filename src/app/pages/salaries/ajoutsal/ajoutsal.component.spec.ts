import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutsalComponent } from './ajoutsal.component';

describe('AjoutsalComponent', () => {
  let component: AjoutsalComponent;
  let fixture: ComponentFixture<AjoutsalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutsalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutsalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
