export class Project {
    id? : number;
    nameProject : string;
    descriptionProject : string;
    linkProject : string;
    pathImageProject : string;
    urlImageProject : string;

    constructor(nameProject : string, descriptionProject : string, linkProject : string, pathImageProject : string, urlImageProject : string){
        this.nameProject = nameProject;
        this.descriptionProject = descriptionProject;
        this.linkProject = linkProject;
        this.pathImageProject = pathImageProject;
        this.urlImageProject = urlImageProject;
    }
}