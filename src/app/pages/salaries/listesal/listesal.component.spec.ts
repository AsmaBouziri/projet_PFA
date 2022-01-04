import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesalComponent } from './listesal.component';

describe('ListesalComponent', () => {
  let component: ListesalComponent;
  let fixture: ComponentFixture<ListesalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
