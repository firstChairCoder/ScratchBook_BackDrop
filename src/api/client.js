import { create } from "apisauce";
import { showMessage } from "react-native-flash-message";

const apiClient = create({
  baseURL: "https://api.thedogapi.com/v1"
});

//use token for api
const token = "2380d3d2-bfef-4de9-8878-d12da0b67d3a";

apiClient.addAsyncRequestTransform(async (request) => {
  request.headers["x-api-key"] = token;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response && response.ok) {
    return response;
  } else {
    return showMessage({
      message: "Error",
      description: "No result received.",
      type: "danger"
    });
  }
};

export default apiClient;
