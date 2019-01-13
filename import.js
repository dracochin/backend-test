const job = require("./controller/file");

job.readCSV("data/data.csv", {
  onEnd: job.insertDB
});
