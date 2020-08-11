import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() active: Boolean
  @Output() showNav = new EventEmitter();
  constructor() { 
    console.log(this.active)
  }

  ngOnInit(): void {
  }
  viewNav() {
    this.active = !this.active
    this.showNav.emit(this.active);
  }
}
