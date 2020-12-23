const express = require('express');
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
  
    })
});

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkot => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", ({ body }, res) => {
    db.Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
  
    })

});

router.get("/api/workouts/:id", ( { body} , res) => {
    
        const { id } = req.params;
        db.Workout.findOne({
            _id: id,
        }).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json
        })
   
});




module.exports = router;