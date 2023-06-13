import sqlite3
import os
from datetime import datetime

dbFileName = "lumberfutures.sqlite3"


def createConnection(dbFilePath: str, dbFileName: str) -> object:
    """
    This method takes Database file as input, creates connection with it and returns the status of operation

    @param dbFilePath: String
    @type dbFilePath: Database File Path
    @param dbFileName: String
    @type dbFileName: Database File Name

    @param connection: Object
    @rtype connection: Database connection object
    """

    connection = None
    try:
        sqliteFilePath = os.path.join(dbFilePath, dbFileName)
        connection = sqlite3.connect(sqliteFilePath)
    except Exception as e:
        print(e)

    return connection


def executeSelectDataPoint(connection: object, dataPoint: str) -> list:
    """
    This method takes connection object and data point (OHLCV) and returns data from SQLite database

    @param connection: Object
    @type connection: SQLite connection object
    @param dataPoint: String
    @type dataPoint: Data Point from Open, High, Low, Close, Adjusted Close, or Volume

    @param rows: List
    @rtype rows: List of database table rows
    """

    rows = None
    try:
        # Create cursor object to execute SQL query
        cursor = connection.cursor()

        # Execute SELECT SQL Query
        sqlQuery = f"SELECT Date, {dataPoint} FROM LumberFutures"
        cursor.execute(sqlQuery)

        # Fetch All rows from result
        rows = cursor.fetchall()
    except Exception as e:
        print(e)

    return rows


def getDataPointHistoricalData(dataPoint: str, dbFilePath: str) -> list:
    """
    This method takes datapoint and database file path as input and uses above utility methods to get data from database

    @param dataPoint: String
    @type dataPoint: Data Point from Open, High, Low, Close, Adjusted Close, or Volume
    @param dbFilePath: String
    @type dbFilePath: Database File Path

    @param rows: List
    @rtype rows: List of database table rows
    """

    # Setup connection with SQLite database
    connection = createConnection(dbFilePath, dbFileName)

    # Get response if connection object is not null
    response = None
    if connection:
        dataPointData = executeSelectDataPoint(connection, dataPoint)
        csvDateFormat = "%d-%b-%y"
        outputDateFormat = "%Y-%m-%d"

        # Converting Date for Visualization
        dates = []
        values = []
        for d, v in dataPointData:
            date = datetime.strptime(d, csvDateFormat)
            dateString = date.strftime(outputDateFormat)
            dates.append(dateString)
            values.append(v)

        response = {
            "dates": dates,
            "values": values
        }
    else:
        print("Error: Connection with SQLite Database is not possible")

    return response
