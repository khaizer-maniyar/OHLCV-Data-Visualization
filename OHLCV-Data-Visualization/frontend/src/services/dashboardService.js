import http from "./httpService";

const dashboardAPIEndpoint = "/dashboard";

export const getSpecificDataPointData = (dataPoint) => {
    return http.post(dashboardAPIEndpoint, { datapoint: dataPoint });
};