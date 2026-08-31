import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProffesorPageComponent } from './search-proffesor-page.component';

describe('SearchProffesorPageComponent', () => {
  let component: SearchProffesorPageComponent;
  let fixture: ComponentFixture<SearchProffesorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchProffesorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchProffesorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
