"use strict";
// Author: Salome Schmied
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTrip = exports.updateTrip = exports.createTrip = exports.getTrips = void 0;
var tripService = require("../services/tripServices");
var getTrips = function (req, res) {
    var trips = tripService.getTrips();
    res.json(trips);
};
exports.getTrips = getTrips;
var createTrip = function (req, res) {
    var country = req.body.country;
    var startDate = req.body.startDate;
    var endDate = req.body.endDate;
    var createdTrip = tripService.createTrip(country, startDate, endDate);
    if (!createdTrip) {
        res.status(400).send('Invalid input.');
    }
    else {
        res.status(201).send('Trip added successfully.');
    }
};
exports.createTrip = createTrip;
var updateTrip = function (req, res) {
    var id = parseInt(req.params.id);
    var country = req.body.country;
    var startDate = req.body.startDate;
    var endDate = req.body.endDate;
    var updatedTrip = tripService.updateTrip(id, country, startDate, endDate);
    if (!updatedTrip) {
        res.status(404).send('Trip not found.');
    }
    else {
        res.status(200).send("Updated trip with ID ".concat(id));
    }
};
exports.updateTrip = updateTrip;
var deleteTrip = function (req, res) {
    var id = parseInt(req.params.id);
    var deletedTrip = tripService.deleteTrip(id);
    if (!deletedTrip) {
        res.status(404).send('Trip not found.');
    }
    else {
        res.status(200).send("Deleted trip with ID ".concat(id));
    }
};
exports.deleteTrip = deleteTrip;
