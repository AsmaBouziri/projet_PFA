import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpretComponent } from './detailpret.component';

describe('DetailpretComponent', () => {
  let component: DetailpretComponent;
  let fixture: ComponentFixture<DetailpretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
