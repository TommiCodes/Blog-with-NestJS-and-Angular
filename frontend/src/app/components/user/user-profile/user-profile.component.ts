import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/model/user.interface';
import { BlogEntriesPageable } from 'src/app/model/blog-entry.interface';
import { BlogService } from 'src/app/services/blog-service/blog.service';
import { PageEvent } from '@angular/material/paginator';
import { WINDOW } from 'src/app/window-token';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  origin = this.window.location.origin;

  private userId$: Observable<number> = this.activatedRoute.params.pipe(
    map((params: Params) => parseInt(params['id']))
  )

  user$: Observable<User> = this.userId$.pipe(
    switchMap((userId: number) => this.userService.findOne(userId))
  )

  blogEntries$: Observable<BlogEntriesPageable> = this.userId$.pipe(
    switchMap((userId: number) => this.blogService.indexByUser(userId, 1, 10))
  )

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private blogService: BlogService,
    @Inject(WINDOW) private window: Window
  ) { }

  onPaginateChange(event: PageEvent) {
    return this.userId$.pipe(
      tap((userId: number) => this.blogEntries$ = this.blogService.indexByUser(userId, event.pageIndex, event.pageSize))
    ).subscribe();
  }
}
