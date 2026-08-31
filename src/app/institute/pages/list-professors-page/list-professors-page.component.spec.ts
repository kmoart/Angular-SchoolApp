import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfessorsPageComponent } from './list-professors-page.component';

describe('ListProfessorsPageComponent', () => {
  let component: ListProfessorsPageComponent;
  let fixture: ComponentFixture<ListProfessorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProfessorsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProfessorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
