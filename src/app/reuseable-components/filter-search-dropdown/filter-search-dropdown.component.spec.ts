import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSearchDropdownComponent } from './filter-search-dropdown.component';

describe('FilterSearchDropdownComponent', () => {
  let component: FilterSearchDropdownComponent;
  let fixture: ComponentFixture<FilterSearchDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSearchDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterSearchDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
