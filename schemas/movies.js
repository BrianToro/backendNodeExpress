const joi = require('@hapi/joi');

const movieTitleSchema = joi.string().max(80);
const movieYearSchema = joi.string().min(1888).max(2077);
const coverSchema = joi.string().uri();
const descriptionSchema = joi.string().max(300);
const durationSchema = joi.number().min(1).max(300);
const contentRaitingSchema = joi.string().max(5);
const sourceSchema = joi.string().uri();
const tagsSchema = joi.array();

const createMoviesSchema = {
    title: movieTitleSchema.required(),
    year: movieYearSchema.required(),
    cover: coverSchema.required(),
    description: descriptionSchema.required(),
    duration: durationSchema.required(),
    rating: contentRaitingSchema.required(),
    source: sourceSchema.required(),
    tags: tagsSchema
}

const updateMoviesSchema = {
    title: movieTitleSchema,
    year: movieYearSchema,
    cover: coverSchema,
    description: descriptionSchema,
    duration: durationSchema,
    rating: contentRaitingSchema,
    source: sourceSchema,
    tags: tagsSchema
}

const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

module.exports = {
    createMoviesSchema,
    updateMoviesSchema,
    movieIdSchema
}