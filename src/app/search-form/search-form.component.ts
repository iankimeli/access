import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Search} from '../search';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
    searchInfo = new Search("");
    @Output() getName = new EventEmitter<any>();

    searchFor(data: { value: { find: Search | undefined; }; reset: () => void; }){
        this.getName.emit(data.value.find);
        data.reset();
    }


  constructor() { }

  ngOnInit() {
  }

}
