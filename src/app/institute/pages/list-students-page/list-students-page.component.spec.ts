import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentsPageComponent } from './list-students-page.component';

describe('ListStudentsPageComponent', () => {
  let component: ListStudentsPageComponent;
  let fixture: ComponentFixture<ListStudentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListStudentsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStudentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
