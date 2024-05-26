import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCaseComponent } from './user-case.component';

describe('UserCaseComponent', () => {
  let component: UserCaseComponent;
  let fixture: ComponentFixture<UserCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
