import axios from "axios";

const loginFunc = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/login", user);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message)
    return false;
  }
};

export { loginFunc };
