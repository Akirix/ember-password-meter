/*jshint node:true*/
module.exports = {
  name: 'ember-password-meter',
  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified (since that doesn't actually matter to us)
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function () {
    return this.addBowerPackageToProject('zxcvbn', '4.3.0');
  }
};