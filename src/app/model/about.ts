export class About {
    id?: number;
    nameAbout: string;
    lastNameAbout: string;
    emailAbout: string;
    descriptionAbout: string;

    constructor(nameAbout: string, lastNameAbout: string, emailAbout: string, descriptionAbout: string) {
        this.nameAbout = nameAbout;
        this.lastNameAbout = lastNameAbout;
        this.emailAbout = emailAbout;
        this.descriptionAbout = descriptionAbout;
    }
}