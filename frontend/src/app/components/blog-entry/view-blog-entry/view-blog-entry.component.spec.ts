import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBlogEntryComponent } from './view-blog-entry.component';

describe('ViewBlogEntryComponent', () => {
  let component: ViewBlogEntryComponent;
  let fixture: ComponentFixture<ViewBlogEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBlogEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBlogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
