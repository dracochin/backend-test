const assert = require("assert");
const File = require("../controller/file");

describe("Test File Parsing", function() {
  it("should able to parse data.csv", function() {
    const data = [
      ["name", "age", "latitude", "longitude", "monthly income", "experienced"],
      ["Kendra", 45, 40.71667, 19.56667, 5132, "false"]
    ];
    const expected_result = [
      {
        name: "Kendra",
        age: 45,
        latitude: 40.71667,
        longitude: 19.56667,
        income: 5132,
        experienced: "false"
      }
    ];
    const result = File.parse(data);
    assert.equal(result[0]["name"], expected_result[0]["name"]);
  });
});
