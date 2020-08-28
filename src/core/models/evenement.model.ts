export class EvenementModel {
    eventid: string;
    categorie_name: string;
    city_title: string;
    title: string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}