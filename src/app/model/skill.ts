export class Skill {
    nameSkill: string;
    levelSkill: string;
    categorySkill: string;
    subCategorySkill: string;

    constructor(nameSkill: string, levelSkill: string, categorySkill: string, subCategorySkill: string) {
        this.nameSkill = nameSkill;
        this.levelSkill = levelSkill;
        this.categorySkill = categorySkill;
        this.subCategorySkill = subCategorySkill;
    }
}