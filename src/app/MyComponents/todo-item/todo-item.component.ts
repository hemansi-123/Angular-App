
import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Todos } from 'src/app/todos';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todos;
  @Input()
  i!:number;
  @Output()
  todoDelete: EventEmitter<Todos> =new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todos> =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todos){
    this.todoDelete.emit(todo);
    console.log("onclick has been triggerd.");
  }
  onCheckboxClick(todo:any){
    console.log(todo);
    this.todoCheckbox.emit(todo);

  }
}
