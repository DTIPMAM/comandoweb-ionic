import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiusListComponent } from './radius-list.component';

describe('RadiusListComponent', () => {
  let component: RadiusListComponent;
  let fixture: ComponentFixture<RadiusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiusListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
