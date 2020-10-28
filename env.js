/**
 * base_url
 */

const base_url = '/'; // 本地

const upload_img_url = '/';  // 上传图片的地址

let host = '';

// #ifdef H5
host = '/test_api/';
// #endif

// #ifndef H5
host = base_url + '/';
// #endif

module.exports = {
    host,
    base_url,
    upload_img_url,
};
