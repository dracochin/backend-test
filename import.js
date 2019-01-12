const fs = require("fs");
const parse = require("csv-parse");
const db = require("./common/db");
const People = require("./model/people");

let controller = function() {};

controller.prototype.readCSV = function(file, callback) {
  let csvData = [];
  let _this = this;
  fs.createReadStream(file)
    .pipe(parse({ delimiter: "," }))
    .on("data", function(csvrow) {
      csvData.push(csvrow);
      if (typeof callback.onData == "function") {
        callback.onData(csvrow);
      }
    })
    .on("end", function() {
      if (typeof callback.onEnd == "function") {
        callback.onEnd(_this.parse(csvData));
      }
    });
};

controller.prototype.parse = function(data) {
  let i = 1;
  let keys = [];
  let parsedData = [];
  data.forEach(function(row) {
    if (i == 1) {
      keys = row;
    } else {
      let parsedRow = {};
      for (let j in row) {
        if (keys[j] == "monthly income") {
          parsedRow["income"] = row[j];
        } else {
          parsedRow[keys[j]] = row[j];
        }
      }
      parsedData.push(parsedRow);
    }
    i++;
  });
  //console.log(parsedData);
  return parsedData;
};

controller.prototype.insertDB = function(data) {
  return People.insertMany(data);
};

const job = new controller();
job.readCSV("data/data.csv", {
  onEnd: job.insertDB
});
