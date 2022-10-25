export class Experience {
    id? : number;
    nameExperience : string;
    descriptionExperience : string;
    dateExperience : string;
    pathImageExperience : string;
    urlImageExperience : string;

    constructor(nameExperience : string, descriptionExperience : string, dateExperience : string, pathImageExperience : string, urlImageExperience : string){
        this.nameExperience = nameExperience;
        this.descriptionExperience = descriptionExperience;
        this.dateExperience = dateExperience;
        this.pathImageExperience = pathImageExperience;
        this.urlImageExperience = urlImageExperience;
    }
}