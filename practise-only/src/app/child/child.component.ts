import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() childProperty: String;
  @Output() childEvent = new EventEmitter<string>();

  childProperty1 = 'I am child1';

  constructor() {}

  ngOnInit() {
    this.childEvent.emit(this.childProperty1);
  }
}
