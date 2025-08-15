import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trashbin } from './trashbin';

describe('Trashbin', () => {
  let component: Trashbin;
  let fixture: ComponentFixture<Trashbin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trashbin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trashbin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
