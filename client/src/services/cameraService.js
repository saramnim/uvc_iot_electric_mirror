import axios from "axios";

const getData = async (setTemp) => {
  try {
    const response = await axios.get("http://localhost:8081/temp");
    setTemp(response.data);
  } catch (error) {
    console.error("Failed to fetch temperature data:", error);
  }
};

export { getData };
