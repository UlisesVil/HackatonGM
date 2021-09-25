import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedUserSubscribeComponent } from './newsfeed-user-subscribe.component';

describe('NewsfeedUserSubscribeComponent', () => {
  let component: NewsfeedUserSubscribeComponent;
  let fixture: ComponentFixture<NewsfeedUserSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedUserSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedUserSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
