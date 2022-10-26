export class Education {
    id? : number;
    nameEducation : string;
    descriptionEducation : string;
    dateEducation : string;
    pathImageEducation : string;
    urlImageEducation : string;

    constructor(nameEducation : string, descriptionEducation : string, dateEducation : string, pathImageEducation : string, urlImageEducation : string){
        this.nameEducation = nameEducation;
        this.descriptionEducation = descriptionEducation;
        this.dateEducation = dateEducation;
        this.pathImageEducation = pathImageEducation;
        this.urlImageEducation = urlImageEducation;
    }
}