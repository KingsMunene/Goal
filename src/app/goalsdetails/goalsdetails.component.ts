import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Goal} from '../goal';
import { from } from 'rxjs';

@Component({
  selector: 'app-goalsdetails',
  templateUrl: './goalsdetails.component.html',
  styleUrls: ['./goalsdetails.component.css']
})
export class GoalsdetailsComponent implements OnInit {

  constructor() { }

  @Input() goal:Goal;
  @Output() goalComplete = new EventEmitter<boolean>();

  deleteGoal(complete:boolean){
    this.goalComplete.emit(complete);

  }

  ngOnInit() {
  }

}
