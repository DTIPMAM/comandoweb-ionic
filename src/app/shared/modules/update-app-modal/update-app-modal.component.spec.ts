import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppModalComponent } from './update-app-modal.component';

describe('UpdateAppModalComponent', () => {
  let component: UpdateAppModalComponent;
  let fixture: ComponentFixture<UpdateAppModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
