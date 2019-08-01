import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-child-node',
  templateUrl: './child-node.component.html',
  styleUrls: ['./child-node.component.scss']
})
export class ChildNodeComponent implements OnInit {

  @Input() num:number;

  constructor() { }

  ngOnInit() {
  }

}
