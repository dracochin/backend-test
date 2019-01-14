# BAMBU Backend Engineer Test

This is project for Bambu Backend Engineer Test.

The app is deployed here:

```
http://35.247.179.8/people-like-you?age=23&latitude=40.71667&longitude=19.56667&monthlyIncome=5500&experienced=false
```

## Description

1.  To improve the performance and scalability, I import the CSV data to MongoDB
2.  The current similarity score is calculated real-time. The performance would be worse if the data size increase. The better solution is to have a cron job to pre-calculate the score.

## About the algorithm of similarity

There is no specifify the algorithm to use in the score calculation. I was writing one for the project.

## prerequisite
MongoDB

## App deployment

1.  clone from repository

```
git clone https://github.com/dracochin/backend-test.git
```

2.  go to direcotry and setup

```
cd backend-test
npm install
```

3.  create config.js . You can copy it from config.js.example. change server ip under db to connect to your mongodb.

4.  import data to mongodb

```
node import.js
```

5.  run the server

```
node server.js
```

## App Testing
```
node test
```
