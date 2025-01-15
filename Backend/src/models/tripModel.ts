// Author: Salome Schmied

import mongoose, { model } from "mongoose";

export interface ITrip {
    country: string;
    startDate: Date;
    endDate: Date;
}

const tripSchema = new mongoose.Schema<ITrip>({
    country: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
});

const Trip = model<ITrip>('Trip', tripSchema);

export default Trip;
