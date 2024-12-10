"use strict";
// Author: Salome Schmied
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tripController = require("../controllers/tripControllers");
var router = express_1.default.Router();
// CRUD routes
router.get('/', function (req, res) {
    // get all trips
    tripController.getTrips(req, res);
});
router.post('/', function (req, res) {
    // create a new trip
    tripController.createTrip(req, res);
});
router.put('/:id', function (req, res) {
    // update a trip
    tripController.updateTrip(req, res);
});
router.delete('/:id', function (req, res) {
    // delete a trip
    tripController.deleteTrip(req, res);
});
exports.default = router;
