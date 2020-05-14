const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app){
    const router = express.Router();
    app.use("/api/movies", router);
    router.get("/", async (req, res, next) => {
        try {
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movies,
                message: 'Movies listed'
            });
        }catch(err){
            next(err);
        }
    });

    router.get("/:movieId", async (req, res, next) => {
        try {
            const movies = await Promise.resolve(moviesMock[0]);
            res.status(200).json({
                data: movies,
                message: 'Movie retrieved'
            });
        }catch(err){
            next(err);
        }
    });

    router.post("/", async (req, res, next) => {
        try {
            const createMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: createMovieId,
                message: 'Movie created'
            });
        }catch(err){
            next(err);
        }
    });

    router.put("/:movieId", async (req, res, next) => {
        try {
            const updateMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: updateMovieId,
                message: 'Movie updated'
            });
        }catch(err){
            next(err);
        }
    });

    router.delete("/:movieId", async (req, res, next) => {
        try {
            const deleteMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: deleteMovieId,
                message: 'Movie removed'
            });
        }catch(err){
            next(err);
        }
    });
}

module.exports = moviesApi;
