import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsregComponent } from './detailsreg.component';

describe('DetailsregComponent', () => {
  let component: DetailsregComponent;
  let fixture: ComponentFixture<DetailsregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
