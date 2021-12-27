import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  defaultSearchValue: string = 'Tel Aviv';
  searchForm = new FormGroup({
    search: new FormControl(this.defaultSearchValue, [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
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
    if (this.searchForm.valid) {
      return true;
    }
    return false;
  }

  private updateTypedData(): void {
    this.searchService.setSearchObserable(this.searchForm.value.search)
  }
}
