module.exports = {

  load: function(settings) {
    return new Promise(function(resolve, reject) {
      resolve('ready');
    });
  },

  render: function() {
    return new Promise(function(resolve, reject) {
      resolve('<div></div>');
    });
  },

  add: function() {

  }

}
