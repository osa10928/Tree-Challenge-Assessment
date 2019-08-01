import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Factory } from '../classes/factory';

@Component({
  selector: 'app-root-node',
  templateUrl: './root-node.component.html',
  styleUrls: ['./root-node.component.scss']
})
export class RootNodeComponent implements OnInit {

  factory:Factory;
  factories:Factory[]= [];


  constructor(
  	private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  submitFactory(factoryName:string): void {
  	const closeModalBtn = document.getElementById('createFactoryBtn')
  	const newFactory:Factory = { 
  		name: factoryName,
  		id: this.generateId()
  	}
  	this.factories.push(newFactory)
  	closeModalBtn.click()
  }

  deleteAllFactories(): void {
  	const closeModalBtn = document.getElementById('deleteFactoriesBtn')
  	this.factories = []
  	closeModalBtn.click()
  }

  deleteOneFactory(id:number): void {
  	this.factories = this.factories.filter(factory => factory.id != id)
  }

  generateId() {
  	const idSet = new Set()
  	let newId = 1
  	for (let factory of this.factories) {
  		idSet.add(factory.id)
  	}
  	while(idSet.has(newId)) {
  		newId++
  	}
  	return newId
  }

  open(createFactory): void {
  	this.modalService.open(createFactory, {ariaLabelledBy: 'create-factory-title'}).result.then(
  		(result) => { }
  	)
  }

}
