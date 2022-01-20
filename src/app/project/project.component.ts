import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../projects/project.module';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Output() statusUpdated = new EventEmitter<string>();
  @Output() projectDeleted = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateStatus(newStatus) {
    this.statusUpdated.emit(newStatus);
  }

  onDelete() {
    this.projectDeleted.emit();
  }

  getPrjStatusClass() {
    return {
      'bg-secondary': this.project.status === 'inactive',
      'bg-success': this.project.status === 'active',
      'bg-danger': this.project.status === 'critical'
    };
  }
}
