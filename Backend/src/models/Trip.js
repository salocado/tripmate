"use strict";
// Author: Salome Schmied
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trip = void 0;
var Trip = /** @class */ (function () {
    function Trip(country, startDate, endDate) {
        this.tripID = Trip.nextID++; // automatic ID
        this.country = country;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
    }
    // getter
    Trip.prototype.getTripID = function () {
        return this.tripID;
    };
    Trip.prototype.getCountry = function () {
        return this.country;
    };
    Trip.prototype.getStartDate = function () {
        return this.startDate;
    };
    Trip.prototype.getEndDate = function () {
        return this.endDate;
    };
    // setter
    Trip.prototype.setCountry = function (country) {
        this.country = country;
    };
    Trip.prototype.setStartDate = function (startDate) {
        this.startDate = new Date(startDate);
    };
    Trip.prototype.setEndDate = function (endDate) {
        this.endDate = new Date(endDate);
    };
    Trip.nextID = 1;
    return Trip;
}());
exports.Trip = Trip;
