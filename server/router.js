import express from 'express';
import path from 'path';
import glob from 'glob';

export default function(app) {

  /**********************************************
  *       API Router
  **********************************************/

  var apiRouter = express.Router();

  // load all API routes Dynamically
  glob.sync(__dirname + '/api/**/*-routes.js').forEach(function(name) {
    require(name)(app, apiRouter);
  });

  // API router is configured and ready to use
  app.use('/api/v1/', apiRouter);

  apiRouter.use(function(req, res, next) {
    res.status(404).json({
      message:"Not Found"
    });
  });

  /**********************************************
  *     Application Router
  **********************************************/

  var appRouter = express.Router();

  // load all APP routes Dynamically
  glob.sync(ROOT_DIR + '/client/**/*-routes.js').forEach(function(name) {
    require(name)(app, appRouter);
  });

  // APP router is configured and ready to use
  app.use('/', appRouter);

  /************************************************
  *     Error Handler
  *************************************************/

  app.use(function(err, req, res, next) {

    res.status(500).json({
      message: err.message,
      status: 500
    })

  });
};
