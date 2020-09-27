import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBlogEntriesComponent } from './all-blog-entries.component';

describe('AllBlogEntriesComponent', () => {
  let component: AllBlogEntriesComponent;
  let fixture: ComponentFixture<AllBlogEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBlogEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBlogEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
