import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Announcment } from './announcment';

describe('Announcment', () => {
  let component: Announcment;
  let fixture: ComponentFixture<Announcment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Announcment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Announcment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
