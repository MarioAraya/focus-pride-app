import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfilePostComponent } from './my-profile-post.component';

describe('MyProfilePostComponent', () => {
  let component: MyProfilePostComponent;
  let fixture: ComponentFixture<MyProfilePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfilePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfilePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
