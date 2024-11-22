// Author: Salome Schmied

export class Trip {
    private static nextID: number = 1;
    private tripID: number;
    private country: string;
    private startDate: Date;
    private endDate: Date;

    constructor(country: string, startDate: string, endDate: string) {
        this.tripID = Trip.nextID++; // automatic ID
        this.country = country;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }

    // getter
    getTripID(): number {
        return this.tripID;
    }

    getCountry(): string {
        return this.country;
    }

    getStartDate(): Date {
        return this.startDate;
    }

    getEndDate(): Date {
        return this.endDate;
    }

    // setter
    setCountry(country: string) {
        this.country = country;
    }

    setStartDate(startDate: string) {
        this.startDate = new Date(startDate);
    }

    setEndDate(endDate: string) {
        this.endDate = new Date(endDate);
    }
}
