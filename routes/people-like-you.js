const people = require("../controller/people");
module.exports = api => {
  api.route("/people-like-you").get(people.likeyou);
};
