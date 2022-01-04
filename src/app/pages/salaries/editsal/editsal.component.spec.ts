import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsalComponent } from './editsal.component';

describe('EditsalComponent', () => {
  let component: EditsalComponent;
  let fixture: ComponentFixture<EditsalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
