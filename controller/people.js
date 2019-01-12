const People = require("../model/people");

/**
Not sure what is algorithm to calculate the score
This step is very resource heavy, suggest to change it to cron job
**/
function calculateScore(query, p) {
  const age_similarity = 1 - Math.abs((query.age - p.age) / p.age);
  const lat_similarity =
    1 - Math.abs((query.latitude - p.latitude) / p.latitude);
  const lon_similarity =
    1 - Math.abs((query.longitude - p.longitude) / p.longitude);
  const income_similarity =
    1 - Math.abs((query.monthlyIncome - p.income) / p.income);
  const experienced_similarity = 0;
  if (query.experienced == p.experienced) experienced_similarity = 1;

  return (
    (age_similarity +
      lat_similarity +
      lon_similarity +
      income_similarity +
      experienced_similarity) /
    5
  );
}

exports.likeyou = (req, res) => {
  let { query } = req;

  People.find().then(rs => {
    let result = rs
      .map(function(row) {
        row = row.toObject();
        row.score = calculateScore(query, row);
        return row;
      })
      .filter(function(row) {
        return row.score && row.score > 0;
      });
    result.sort(function(a, b) {
      return b.score - a.score;
    });
    res.json({ peopleLikeYou: result.slice(0, 10) });
  });
};
