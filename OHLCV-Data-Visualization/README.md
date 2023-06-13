# Lumber Futures OHLCV Data Visualization Dashboard
Overview: This application shows historical OHLCV Data of Lumber Futures. This application is made of frontend and backend technologies. The instructions to run this application is as below.

# Technologies
### Frontend: React, JavaScript, HTML, CSS, AJAX
### Backend: Python, Flask
### Database: SQLite (SQL)

# Requirements
1) Python 3: Download Python from [here](https://www.python.org/downloads/)
2) Node.js: Download Node.js from [here](https://nodejs.org/en/download/)

# Instructions to run this application
1) **Install required python libraries**: Run below command in Terminal / Command Prompt to install required python libraries.

```
pip install -r requirements.txt
```
or
```
pip3 install -r requirements.txt
```

2) **Start Backend REST API**: Start Backend API Server in Localhost to server data from database. Open Terminal / Command Prompt inside backend folder and run below command.

```
python app.py
```
The application will run on all localhost IP address at port 5000 and is ready to serve data.

3) **Start Frontend React.js application**: Open Terminal / Command Prompt inside frontend folder and run below command.

```
npm start
```

Frontend application will start on localhost at port 3000. The home page will show Open data of Lumber Futures by-default. That can be changed from drop-down menu.

4) **Application View**: The application will provide below view with drop-down menu to change OHLCV datapoint and the graph will be updated imediately.

![Dashboard Homepage](/screenshots/Dashboard%20Homepage.png)

## Program Structure
```
C:.
+---backend
|   \---utils
|       dbUtils.py
|   |   app.py
|   |   lumberfutures.sqlite3
|   |   requirements.txt
+---frontend
|   \---node_modules
|   \---public
|   \---src
|   |   \pages
|   |   \services
|   |   App.css
|   |   App.js
|   |   App.test.js
|   |   index.css
|   |   index.js
|   |   logo.svg
|   |   reportWebVitals.js
|   |   seupTests.js
|   |   package.json
|   |   package-lock.json
+---screenshots
|   |   Dashboard Homepage.png
|   README.md
```

## Developer
Maan Mandaliya | maan.mandaliya@dal.ca | [Portfolio](https://maanmandaliya.super.site/)
