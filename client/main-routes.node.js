// This file is executed in NodeJs

import homeController from './home/home-controller';
// import searchController from './search/search-controller';
// import propertyController from './property/property-controller';


module.exports = function(app, router) {

  router.get("/", homeController.main);

  // router.get("/s/*", searchController.main);

  // router.get("/item/*", propertyController.main);

};
