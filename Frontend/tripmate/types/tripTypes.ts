// Author: Salome Schmied

export interface Trip {
    tripID: number;
    country: string;
    startDate: string;
    endDate: string;
}

export interface NewTrip {
    country: string;
    startDate: string;
    endDate: string;
}
