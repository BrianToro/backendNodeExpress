const express = require('express');
const bodyParser = require('body-parser');
const MoviesService = require('../services/movies.js');
const {
    createMoviesSchema,
    updateMoviesSchema,
    movieIdSchema,
} = require('../schemas/movies');
const validationHandler = require('../middlewares/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const {
    FIVE_MINUTES_IN_SECONDS,
    SIXTY_MINUTS_IN_SECONDS,
} = require('../utils/time');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);
    app.use(bodyParser.json());

    const moviesService = new MoviesService();

    router.get('/', async (req, res, next) => {
        cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
        const { tag } = req.query;
        try {
            const movies = await moviesService.getMovies({ tag });
            res.status(200).json({
                data: movies,
                message: 'Movies listed',
            });
        } catch (err) {
            next(err);
        }
    });

    router.get(
        '/:movieId',
        validationHandler({ movieId: movieIdSchema }, 'params'),
        async (req, res, next) => {
            cacheResponse(res, SIXTY_MINUTS_IN_SECONDS);
            const { movieId } = req.params;
            try {
                const movies = await moviesService.getMovie({ movieId });
                res.status(200).json({
                    data: movies,
                    message: 'Movie retrieved',
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.post(
        '/',
        validationHandler({ createMoviesSchema }),
        async (req, res, next) => {
            const { body: movie } = req;
            try {
                const createMovieId = await moviesService.createMovie({
                    movie,
                });
                res.status(201).json({
                    data: createMovieId,
                    message: 'Movie created',
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.put(
        '/:movieId',
        validationHandler({ movieId: movieIdSchema }, 'params'),
        validationHandler({ updateMoviesSchema }),
        async (req, res, next) => {
            const { movieId } = req.params;
            const { body: movie } = req;
            try {
                const updateMovieId = await moviesService.updateMovie({
                    movieId,
                    movie,
                });
                res.status(201).json({
                    data: updateMovieId,
                    message: 'Movie updated',
                });
            } catch (err) {
                next(err);
            }
        }
    );

    router.delete(
        '/:movieId',
        validationHandler({ movieId: movieIdSchema }, 'params'),
        async (req, res, next) => {
            const { movieId } = req.params;
            try {
                const deleteMovieId = await moviesService.deleteMovie({
                    movieId,
                });
                res.status(201).json({
                    data: deleteMovieId,
                    message: 'Movie removed',
                });
            } catch (err) {
                next(err);
            }
        }
    );
}

module.exports = moviesApi;
