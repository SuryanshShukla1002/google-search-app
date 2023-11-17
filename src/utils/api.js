import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: 'AIzaSyCc09yfSLc3mUQNifehzX84tyHeMTIRv8k',
    cx: '7740f960316e54742'
    
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload }
    });
    return data;
};
