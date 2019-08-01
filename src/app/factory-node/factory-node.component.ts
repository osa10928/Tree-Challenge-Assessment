import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Factory } from '../classes/factory';

@Component({
  selector: 'app-factory-node',
  templateUrl: './factory-node.component.html',
  styleUrls: ['./factory-node.component.scss']
})
export class FactoryNodeComponent implements OnInit {

  @Input() inputFactory:Factory
  @Output() deleteId = new EventEmitter<number>();
  editName:boolean = false
  children:number[] = []

  constructor(
  	private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  submitChildren(numberOfChildren:number, lowerBound:number, upperBound:number): void {
  	const closeCreateChildModal = document.getElementById('createChildrenBtn')
  	this.children = []
  	while(numberOfChildren > 0) {
  		this.children.push(this.generateRandomNumber(lowerBound, upperBound))
  		numberOfChildren--
  	}
  	closeCreateChildModal.click()
  }

  deleteOneFactory(): void {
  	const deleteFactoryBtn = document.getElementById('deleteFactoryBtn')
  	this.deleteId.emit(this.inputFactory.id)
  	deleteFactoryBtn.click()
  }

  toggleEditName(): void {
  	this.editName = !this.editName;

  	if(this.editName) {
  		setTimeout(() => {
  			const editNameInput = document.getElementById('factory-edit-name')
  			editNameInput.focus()
  			console.log('hello')
  		}, 500)
  	}
  }

  submitEditFactoryName(newFactoryName:string): void {
  	this.inputFactory.name = newFactoryName
  	this.toggleEditName();
  } 

  open(createChildren): void {
  	this.modalService.open(createChildren, {ariaLabelledBy: 'create-factory-title'}).result.then(
  		(result) => { }
  	)
  }

  generateRandomNumber(lowerBound:number, upperBound:number): number {
  	return Math.floor(Math.random() * (upperBound - lowerBound) + 1) + lowerBound;
  }

}
