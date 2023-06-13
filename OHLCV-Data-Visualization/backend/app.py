# Importing required libraries
from flask import Flask, request
from flask_cors import CORS
import os

# Importing Utility Methods to get data
from utils.dbUtils import getDataPointHistoricalData

# Instantiate Flask Application Object
app = Flask(__name__)

# Allowing Cross-Origin Resouurce Sharing
CORS(app)

# Dashboard URL Pattern to see OHLCV Data Graph


@app.route("/dashboard", methods=['POST'])
def getDashboard() -> dict:
    """
    This method handles /dashboard URL pattern with HTTP GET Method and returns required Data Point's historical data from OHLCV SQLite Database 

    @param urlpattern: String
    @type urlpattern: String URL Pattern
    @param methods: List
    @type methods: List of Acceptable HTTP Methods

    @param response: Dictionary
    @rtype response: Dictionary of Date and Data Points
    """

    dataPoint = request.json['datapoint']
    currentPath = os.getcwd()
    response = getDataPointHistoricalData(dataPoint, currentPath)
    return response


# Application will run if main thread is running
if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")
