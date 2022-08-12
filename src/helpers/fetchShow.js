import axios from "axios";

const fetchShow = async (url, key) => {
  const queryUrl = `${url}?api_key=${key}&language=en-US`;
  try {
    const response = await axios.get(queryUrl);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

export default fetchShow;
