import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// const accessToken =
//   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4IiwiUk9MRSI6IlJPTEVfVVNFUiIsImlhdCI6MTY2ODQ4NTAyMSwiZXhwIjoxNjY5MDg5ODIxfQ.rfrS89tGfsBwCiKqN9IBx451tGORmSYOw_Y2arNaDdU';
const accessToken = localStorage.getItem('accessToken');

const headers = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

export const getApi = async (url: string) => {
  try {
    const data = await axios.get(`${url}`, headers);
    return data;
  } catch (err) {
    console.log(err, '에러입니다.');
    // alert('문제가 발생했습니다');
    return err;
  }
};

export const postApi = async (url: string, body?: any) => {
  try {
    const data = await axios.post(`${url}`, body, headers);
    return data;
  } catch (err) {
    console.log(err);
    // alert('문제가 발생했습니다');
    return err;
  }
};

export const putApi = async (url: string, body?: any) => {
  try {
    const data = await axios.put(`${url}`, body, headers);
    return data;
  } catch (err) {
    console.log(err);
    // alert('문제가 발생했습니다');
    return err;
  }
};

export const deleteApi = async (url: string) => {
  try {
    const data = await axios.delete(`${url}`, headers);
    return data;
  } catch (err) {
    console.log(err);
    // alert('문제가 발생했습니다');
    return err;
  }
};

export const patchApi = async (url: string, body?: any) => {
  try {
    const data = await axios.patch(`${url}`, body, headers);
    return data;
  } catch (err) {
    console.log(err);
    // alert('문제가 발생했습니다');
    return err;
  }
};
