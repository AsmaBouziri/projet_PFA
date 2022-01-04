import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutreglementComponent } from './ajoutreglement.component';

describe('AjoutreglementComponent', () => {
  let component: AjoutreglementComponent;
  let fixture: ComponentFixture<AjoutreglementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutreglementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutreglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
