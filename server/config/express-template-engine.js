'use strict';

import exphbs from 'express-handlebars';
import path from 'path';
import Promise from 'bluebird';
import glob from 'glob';


export default function(app) {

  const CLIENT_DIR = path.resolve(ROOT_DIR, 'client');

  // Handlebars helpers
  const helpers = {};

  // Load all handlebars helpers from client dir
  glob.sync(CLIENT_DIR + '/**/*-helper.js').forEach(function(name) {
    let helper = require(name);

    helpers[helper.name] = helper.func;
  });

  // Handlebars engine setup
  app.engine('hbs', exphbs({
    extname: '.hbs',
    partialsDir: CLIENT_DIR,
    layoutsDir : CLIENT_DIR,
    defaultLayout: "main-layout",
    helpers: helpers
  }));


  // views dir setup
  app.set('views', CLIENT_DIR);

  // view engine set
  app.set('view engine', 'hbs');

  // App render method returns a promise
  app.render = Promise.promisify(app.render).bind(app);
};
