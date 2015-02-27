reportersBeat.factory('LoginFactory', function LoginFactory() {
  var factory = {};
  factory.logins = [];

  factory.addUser = function () {
   factory.logins.push({ name: factory.userName, password: factory.userPassword })
   factory.userName = null;
   factory.userPassword = null;
 });
 return factory;
});
