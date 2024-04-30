import axios from "axios";
export const getCommuList = async () => {
  try {
    const response = await axios.get("../src/mock/commuList.json");
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("error code : ", response.status);
    }
  } catch (error) {
    console.log(error);
  }
};
