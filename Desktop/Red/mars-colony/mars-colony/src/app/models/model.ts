export interface Job {
    name: string;
    id: number;
    description: string;
}

export class NewColonist {
    name: string;
    age: number;
    job_id: Job;
}

export class NewEncounter {
    atype: string;
    date: string;
    action: string;
    colonist_id: number;
}

export interface Colonist {
    name: string;
    id: number;
    age: number;
    job: Job;
}

export interface Encounter {
    id: number;
    date: string;
    colonist_id: number;
    atype: string;
    action: string;
}

export interface Alien {
    type: string;
    id: number;
    description: string;
    submitted_by: string;
}