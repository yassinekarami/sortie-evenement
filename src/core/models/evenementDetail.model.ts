export class EvenementDetailModel{
    eventId: string;
    startDate: Date;
    line1: string;
    line2: string;
    line3: string;
    image: string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}