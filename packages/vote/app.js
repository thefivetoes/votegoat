'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Vote = new Module('vote');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Vote.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Vote.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Vote.menus.add({
        title: 'vote example page',
        link: 'vote example page',
        roles: ['authenticated'],
        menu: 'main'
    });

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Vote.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Vote.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Vote.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return Vote;
});
