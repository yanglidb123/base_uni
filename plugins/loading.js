/**
 *
 * @param title 文字信息
 */

const loading = (title = 'Loading...') => {
    uni.showLoading({
        title: title,
        mask: true,
    })
};

export default loading
