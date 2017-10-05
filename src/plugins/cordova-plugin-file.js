exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof cordova.file === 'undefined') {
      return cb(false)
    }

    // pass through the sms object
    Vue.cordova.file = cordova.file

    return cb(true)

  }, false)
}
