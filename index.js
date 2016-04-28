/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-password-meter',

    included: function( app ){
        this._super.included.apply( this, arguments );

        if( typeof app.import !== 'function' && app.app ){
            app = app.app;
        }

        app.import( app.bowerDirectory + '/zxcvbn/dist/zxcvbn.js' );
    }
};