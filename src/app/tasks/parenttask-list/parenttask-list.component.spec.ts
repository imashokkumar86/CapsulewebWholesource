import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttaskListComponent } from './parenttask-list.component';

describe('ParenttaskListComponent', () => {
  let component: ParenttaskListComponent;
  let fixture: ComponentFixture<ParenttaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenttaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenttaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
