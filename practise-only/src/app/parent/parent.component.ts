import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @Input() parentProperty = 'I am parent';
  childProperty1 = '';
  constructor() {}
  childEvent(value: string) {
    this.childProperty1 = value;
  }
  ngOnInit() {}
}
