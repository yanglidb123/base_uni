/**
 *
 * 此方法为异步调用
 * @returns {Promise<unknown>}
 */

const getCopy = () => {
    return new Promise((resolve, reject) => {
        uni.getClipboardData({
            success(res) {
                resolve(res.data);
            }
        });
    });
};

export default getCopy
