import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchService} from '../services/search.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  @Input('useDefault') useDefault: boolean;
  @Input('specificCityKey') specificCityKey: string;
  defaultSearchValue: string = 'Tel Aviv';
  searchForm = new FormGroup({
    search: new FormControl(this.defaultSearchValue, [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
  });
  constructor(private searchService: SearchService) { }
  ngAfterViewInit(): void {
    if (this.useDefault ) {
      this.updateTypedData();
    }
    else {
      this.updateTypedData(this.specificCityKey);
    }
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
  private updateTypedData(key: string = ''): void {
    if (key.length > 0 ) {
      return this.searchService.setSearchObserable('',key);
    }
    this.searchService.setSearchObserable(this.searchForm.value.search)
  }
}
