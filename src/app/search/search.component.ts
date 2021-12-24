import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  defaultSearchValue: string = 'Tel Aviv';
  searchForm = new FormGroup({
    search: new FormControl(this.defaultSearchValue),
  });
  constructor(private searchService: SearchService) { }

  ngAfterViewInit(): void {
    this.updateTypedData();
  }
  onKeypress(): void {
    if (this.isValidText()) {
      this.updateTypedData();
    }
  }
  private isValidText(): boolean {
    // todo: add here some logic
    return true;
  }

  private updateTypedData(): void {
    this.searchService.setSearchObserable(this.searchForm.value.search)
  }
}
