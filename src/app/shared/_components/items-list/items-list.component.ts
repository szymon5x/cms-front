import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @Input() items: { description: string; id: number; endpoint: (string | number)[]; }[];
  @Output() deleteItem = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  delete(item: { description: string; id: number; endpoint: (string | number)[]; }) {
    this.deleteItem.emit(item.id);
  }
}
