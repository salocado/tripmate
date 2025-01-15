// Author: Salome Schmied

export interface Trip {
    _id: string;
    country: string;
    startDate: string;
    endDate: string;
}

export interface NewTrip {
    country: string;
    startDate: string;
    endDate: string;
}
