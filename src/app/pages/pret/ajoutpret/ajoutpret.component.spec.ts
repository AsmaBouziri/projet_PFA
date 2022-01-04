import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpretComponent } from './ajoutpret.component';

describe('AjoutpretComponent', () => {
  let component: AjoutpretComponent;
  let fixture: ComponentFixture<AjoutpretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutpretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutpretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
