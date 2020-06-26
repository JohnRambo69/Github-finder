import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from './../../services/github.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = null;
  userName: string;
  error = null;
  waiting: boolean = false;

  constructor(private githubService: GithubService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  handleFindUser() {
    this.waiting = true;
    this.githubService.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.ref.detectChanges();
      },
      (err) => {
        this.user = null;
        this.error = "User not found.";
        this.ref.detectChanges();
      }
    );
    this.waiting = false;
  }

}
