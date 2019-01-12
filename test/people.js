const assert = require("assert");
const { calculateScore } = require("../controller/people");
describe("Test Similarity Score Calculation", function() {
  it("should return correct score", function() {
    const query = {
      age: 23,
      latitude: 40.71667,
      longitude: 19.56667,
      monthlyIncome: 5500,
      experienced: "false"
    };
    const p = {
      age: 23,
      latitude: 42.0384767,
      longitude: 21.5739781,
      income: 5266,
      experienced: false
    };
    assert.equal(calculateScore(query, p), 0.9662156382670141);
  });
});
describe("Test Similarity Score Calculation", function() {
  it("should return correct score", function() {
    const query = {
      age: 23,
      latitude: 40.71667,
      longitude: 19.56667,
      monthlyIncome: 5500,
      experienced: "false"
    };
    const p = {
      age: 23,
      latitude: 42.0384767,
      longitude: 21.5739781,
      income: 5266,
      experienced: false
    };
    assert.equal(calculateScore(query, p), 0.9662156382670141);
  });
});
