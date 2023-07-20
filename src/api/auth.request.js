import axios from "axios";

const TopRate = axios.create({
  baseURL: "https://toprate-apigateway.azurewebsites.net/",
});

export default TopRate;
