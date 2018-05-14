import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../../../core/jobs/job.model';
import { JobsService } from '../../../core/jobs/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [JobsService]
})
export class JobsComponent implements OnInit {
  jobPostButtonClicked = false;
  jobs: Job[];
  constructor(
    private router: Router,
    private jobsService: JobsService
  ) { }

  ngOnInit() {
    this.jobs = this.jobsService.getJobsList();
  }
  onPostNewJob() {
    this.jobPostButtonClicked = true;
  }
}
