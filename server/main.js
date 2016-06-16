/**
 * Main application file
 */

'use strict';

import express from 'express';
import path from 'path';

import configTemplateEngine from './config/express-template-engine';
import configExpress from './config/express';
import router from './router';

/****************************************
*       Constant definition
****************************************/

// Global ROOT_DIR
global.ROOT_DIR = path.resolve(__dirname, '../');

// Loading config from .env
const ENV = require('dotenv').load({
  path: path.resolve(ROOT_DIR, ".env"),
  silent: true
});


/****************************************
*         Configuring express
****************************************/

const app = new express();

// Load express configurations
configExpress(app);

// Load express template configurations
configTemplateEngine(app);

// Load router
router(app);


/****************************************
*           Running Web Server
*****************************************/

// Create server
const server = require('http').createServer(app);

// Start server
server.listen(4000, function () {
  console.log('Express server listening on %d', 4000);
});


// Export app
export default app;
