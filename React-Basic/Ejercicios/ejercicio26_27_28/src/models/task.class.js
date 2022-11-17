
import { LEVELS } from './levels.enum';

export class Task {
    name = '';
    description = '';
    note ='';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, description,note, completed, level){
        this.name = name;
        this.description =description;
        this.note = note;
        this.completed = completed;
        this.level = level;
    }
}

