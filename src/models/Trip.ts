// Author: Salome Schmied

export class Trip {
    private static nextID = 1;
    private tripID: number;
    private country: string;

    constructor(country: string) {
        this.tripID = Trip.nextID++; // automatic ID
        this.country = country;
    }

    // getter
    getTripID(): number {
        return this.tripID;
    }

    getCountry(): string {
        return this.country;
    }

    // setter
    setCountry(country: string) {
        this.country = country;
    }
}
