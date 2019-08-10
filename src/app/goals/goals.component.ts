import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  constructor() { }
  title = 'Goals';
  goals:Goal[] = [
    new Goal(1,"Join Moringa java", "vist moringa and request for a chance to join the java module", new Date(2019,7,6) ),
    new Goal(2,"Master Angular", "master how to program Angular Apps professionaly", new Date(2019,8,1)),
    new Goal(3, "Learn Android ", "complete Java module then join Android", new Date(2019,8,1)),
    new Goal(4, "Chess mentorship", "Look for Chess for mentorship", new Date(2019,7,10))
  ];

  showDescription(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completedGoal(goalComplete, index){
    if (goalComplete) {
      let toDelete = confirm(`You are about to delete ${this.goals[index].name} are you sure?`)
      if(toDelete){
        this.goals.splice(index, 1);
      }
      
    }
  }

  submitNewGoal(goal){
    let goalLenth = this.goals.length;
    goal.id = goalLenth+1;
    goal.completeDate = new Date(goal.completeDate)

    this.goals.push(goal)
  }
  ngOnInit() {
  }

}
