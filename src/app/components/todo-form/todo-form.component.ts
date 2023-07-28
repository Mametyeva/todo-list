import { Component } from '@angular/core';
import { tasks, deletedTasks } from 'src/app/data/tasks';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  items = tasks;
  deleted = deletedTasks;

  addItem(item: string) {
    if (item.length > 0) {
      this.items.push(item);
      this.resetForm();
    }
    return false
  }

  checkList(): boolean {
    if (this.items.length < 1) {
      return true
    } else {
      return false
    }
  }

  resetForm(): void {
    let form = document.getElementsByTagName('form');
    form[0].reset()
  }

  deleteItem(event: any, item: any): void {
    event.target.closest('li').remove();
    for (let i of this.items) {
      if (i === item) {
        let index = this.items.indexOf(i);
        this.items.splice(index, 1);
        this.deleted.push(i);
        break
      }
    }
  }
}
