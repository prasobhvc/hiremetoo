import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from './job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobPostButtonClicked = false;
  jobs: Job[] = [
    new Job(
      13124,
      'Special title treatment',
      'With supporting text below as a natural lead-in to additional content.',
      'Prasobh',
      'https://media.improvenet.craftjack.io/media/Default/_Profiles/2e3686cd/a1655940/When%20To%20Call%20A%20Carpentry%20Pro.jpg',
      { status: 'new', days: '2 days ago'}
    )
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onPostNewJob() {
    this.jobPostButtonClicked = true;
  }
}
