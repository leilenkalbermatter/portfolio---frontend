export class Experience {
    id? : number;
    nameExperience : string;
    descriptionExperience : string;
    dateExperience : string;
    imgExperience : string;

    constructor(nameExperience : string, descriptionExperience : string, dateExperience : string, imgExperience : string) {
        this.nameExperience = nameExperience;
        this.descriptionExperience = descriptionExperience;
        this.dateExperience = dateExperience;
        this.imgExperience = imgExperience;
    }
}