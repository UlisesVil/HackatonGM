import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedUserCancelComponent } from './newsfeed-user-cancel.component';

describe('NewsfeedUserCancelComponent', () => {
  let component: NewsfeedUserCancelComponent;
  let fixture: ComponentFixture<NewsfeedUserCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedUserCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedUserCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
