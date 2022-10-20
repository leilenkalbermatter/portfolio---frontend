export class Education {
    id? : number;
    nameEducation : string;
    descriptionEducation : string;
    dateEducation : string;
    imgEducation : string;

    constructor(nameEducation : string, descriptionEducation : string, dateEducation : string, imgEducation : string) {
        this.nameEducation = nameEducation;
        this.descriptionEducation = descriptionEducation;
        this.dateEducation = dateEducation;
        this.imgEducation = imgEducation;
    }
}