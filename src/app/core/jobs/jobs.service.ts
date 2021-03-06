import { Injectable } from '@angular/core';
import { Job } from './job.model';

@Injectable()

export class JobsService {
    private jobs: Job[] = [
        new Job(
            13124,
            'Special title treatment',
            'With supporting text below as a natural lead-in to additional content.',
            'Prasobh',
            'https://media.improvenet.craftjack.io/media/Default/_Profiles/2e3686cd/a1655940/When%20To%20Call%20A%20Carpentry%20Pro.jpg',
            { status: 'new', days: '2 days ago' }
        ),
        new Job(
            13124,
            'Special title treatment',
            'With supporting text below as a natural lead-in to additional content.',
            'Prasobh',
            'https://media.improvenet.craftjack.io/media/Default/_Profiles/2e3686cd/a1655940/When%20To%20Call%20A%20Carpentry%20Pro.jpg',
            { status: 'new', days: '2 days ago' }
        ),
    ];
    getJobsList(): Job[] {
        return this.jobs.slice();
    }
}
