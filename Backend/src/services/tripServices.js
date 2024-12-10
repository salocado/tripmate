"use strict";
// Author: Salome Schmied
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTrip = exports.updateTrip = exports.createTrip = exports.getTrips = void 0;
var Trip_1 = require("../models/Trip");
var trips = [];
var getTrips = function () {
    return trips;
};
exports.getTrips = getTrips;
var createTrip = function (country, startDate, endDate) {
    if (!country || !startDate || !endDate) {
        return false;
    }
    var trip = new Trip_1.Trip(country, startDate, endDate);
    trips.push(trip);
    return true;
};
exports.createTrip = createTrip;
var updateTrip = function (id, country, startDate, endDate) {
    var trip = trips.find(function (trip) { return trip.getTripID() === id; });
    if (!trip) {
        return false;
    }
    if (country)
        trip.setCountry(country);
    if (startDate)
        trip.setStartDate(startDate);
    if (endDate)
        trip.setEndDate(endDate);
    return true;
};
exports.updateTrip = updateTrip;
var deleteTrip = function (id) {
    var tripIndex = trips.findIndex(function (trip) { return trip.getTripID() === id; });
    if (tripIndex === -1)
        return false;
    trips.splice(tripIndex, 1);
    return true;
};
exports.deleteTrip = deleteTrip;
