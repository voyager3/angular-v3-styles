import { BasicIsDeletableModel } from './basic-is-deletable-model';

export class BasicAbbreviationModel extends BasicIsDeletableModel {
    abbreviation: string;

    constructor(id: number, name: string, abbreviation: string, isDeletable: boolean = false) {
       super(id, name, isDeletable);

       this.abbreviation = abbreviation;
    }
}