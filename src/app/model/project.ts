export class Project {
    id? : number;
    nameProject : string;
    descriptionProject : string;
    linkProject : string;
    imgProject : string;

    constructor(nameProject : string, descriptionProject : string, linkProject : string, imgProject : string) {
        this.nameProject = nameProject;
        this.descriptionProject = descriptionProject;
        this.linkProject = linkProject;
        this.imgProject = imgProject;
    }
}