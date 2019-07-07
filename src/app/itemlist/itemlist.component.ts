import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  items: Array<any> = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {

    this.itemService.getItems()
      .subscribe((response: any) => {
        this.items = response
      })

  }

}
