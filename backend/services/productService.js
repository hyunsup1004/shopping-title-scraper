const axios = require('axios');
const NAVER_CLIENT_ID = "YOUR_NAVER_CLIENT_ID";
const NAVER_CLIENT_SECRET = "YOUR_NAVER_CLIENT_SECRET";
const getNaverProductData = async (keywords) => {
  try {
    const response = await axios.get('https://openapi.naver.com/v1/search/shop.json', {
      params: { query: keywords, display: 40 },
      headers: {
        'X-Naver-Client-Id': NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('네이버 API 호출 실패:', error);
    throw new Error('네이버 API 호출 실패');
  }
};
module.exports = { getNaverProductData };