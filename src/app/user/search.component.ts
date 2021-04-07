import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-request.service';
import {Repository} from '../repository';
import {User} from '../user';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
    providers: [SearchRequestService],
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
    public searchMe = 'iankimeli';
    public githubUser: string | undefined;

    public users: User;
    repository: Repository | undefined;
    public searchRepo: string | undefined;
    public resultCount = 12;


    findUser(username: string) {
        this.githubUser = 'iankimeli';
        this.searchMe  = username;
        this.ngOnInit();
    }


  constructor(public githubUserRequest: SearchRequestService, public userRepos: SearchRequestService) { 
    this.users = this.githubUserRequest.users;
  }

  ngOnInit() {
      this.githubUserRequest.githubUser(this.searchMe);
      this.users = this.githubUserRequest.users;
      this.userRepos.gitUserRepos(this.searchMe);
      
  }


    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;

    }
}
