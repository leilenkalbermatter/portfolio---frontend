export class About {
    id?: number;
    nameAbout: string;
    lastNameAbout: string;
    emailAbout: string;
    descriptionAbout: string;
    linkedinAbout: string;
    githubAbout: string;

    constructor(nameAbout: string, lastNameAbout: string, emailAbout: string, descriptionAbout: string, linkedinAbout: string, githubAbout: string) {
        this.nameAbout = nameAbout;
        this.lastNameAbout = lastNameAbout;
        this.emailAbout = emailAbout;
        this.descriptionAbout = descriptionAbout;
        this.linkedinAbout = linkedinAbout;
        this.githubAbout = githubAbout;
    }
}