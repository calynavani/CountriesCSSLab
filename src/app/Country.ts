export class Country {
    name : string;
    lang: string;
    greeting: string;
    colors:string[];
    flag: string;

    constructor(name:string, lang:string, greeting:string, colors:string[], flag:string) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }
}