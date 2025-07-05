import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatCardActionComponent } from './beat-card-action.component';

describe('BeatCardActionComponent', () => {
  let component: BeatCardActionComponent;
  let fixture: ComponentFixture<BeatCardActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatCardActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeatCardActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
