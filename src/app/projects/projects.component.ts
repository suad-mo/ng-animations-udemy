import { AnimationEvent } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { routeFadeStateTrigger, routeSlideStateTrigger } from '../shared/route-animations';
import { itemStateTrigger, markedTrigger, slideStateTrigger } from './animations';
import { Project } from './project.module';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    markedTrigger,
    itemStateTrigger,
    slideStateTrigger,
    routeFadeStateTrigger,
    routeSlideStateTrigger
  ]
})
export class ProjectsComponent implements OnInit {
  //@HostBinding('@routeFadeState') routeAnimation = true;
  @HostBinding('@routeSlideSate') routeAnimation = true;
  projects: Project[];
  displayedProjects: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) { }

  ngOnInit(): void {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
          if (this.projects.length >= 1) {
            this.displayedProjects.push(this.projects[0]);
          }
        }
      );
  }

  onStatusUpdate(newStatus, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDelete(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    setTimeout(() => {
      this.projects.unshift(project);
    }, 300);
  }

  onItemAnimated(animationEvent: AnimationEvent, lastPrjId: number) {
    if (animationEvent.fromState != 'void'){
      return;
    }
    if (this.projects.length > lastPrjId+1) {
      this.displayedProjects.push(this.projects[lastPrjId+1]);
    } else {
      this.displayedProjects = this.projects;
    }
  }
}
