import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedCompanyEditComponent } from './newsfeed-company-edit.component';

describe('NewsfeedCompanyEditComponent', () => {
  let component: NewsfeedCompanyEditComponent;
  let fixture: ComponentFixture<NewsfeedCompanyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedCompanyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedCompanyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
