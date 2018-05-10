export class Job {
    public id: number;
    public title: string;
    public description: string;
    public owner: string;
    public imagePath: string;
    public meta: any;
    constructor(id, title, desc, owner, imgPath, meta) {
        this.id = id;
        this.title = title;
        this.description = desc;
        this.owner = owner;
        this.imagePath = imgPath;
        this.meta = meta;
    }
}
