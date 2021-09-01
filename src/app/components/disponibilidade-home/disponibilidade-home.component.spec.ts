import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadeHomeComponent } from './disponibilidade-home.component';

describe('DisponibilidadeHomeComponent', () => {
  let component: DisponibilidadeHomeComponent;
  let fixture: ComponentFixture<DisponibilidadeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisponibilidadeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
