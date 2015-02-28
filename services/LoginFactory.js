reportersBeat.factory('LoginFactory', function LoginFactory() {
  var factory = {};
  factory.logIns = [];

  factory.addUser = function () {
    factory.logIns.push({ name: factory.userName, password: factory.userPassword });
    factory.userName = null;
    factory.userPassword = null;
  };
  
  return factory;
});
