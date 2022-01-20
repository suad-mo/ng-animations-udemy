import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuoteComponent } from './guote.component';

describe('GuoteComponent', () => {
  let component: GuoteComponent;
  let fixture: ComponentFixture<GuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
