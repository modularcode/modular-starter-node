var path = require('path');

module.exports = {
  ROOT_DIR: path.resolve(__dirname, "../"),                 // Root dir
  CLIENT_DIR: path.resolve(__dirname, "../src/client"),         // Client source files
  SERVER_DIR: path.resolve(__dirname, "../src/server"),         // Server source files
  DIST_DIR: path.resolve(__dirname, "../public"),           // Build destination
  NPM_DIR:   path.resolve(__dirname, "../node_modules"),    // Npm dir
};
