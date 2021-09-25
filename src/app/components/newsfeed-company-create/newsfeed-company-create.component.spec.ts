import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedCompanyCreateComponent } from './newsfeed-company-create.component';

describe('NewsfeedCompanyCreateComponent', () => {
  let component: NewsfeedCompanyCreateComponent;
  let fixture: ComponentFixture<NewsfeedCompanyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsfeedCompanyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedCompanyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
