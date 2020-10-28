import toastSuc from "./toastSuc"

/**
 *
 * 此方法 不支持 H5
 * @param data 复制的内容
 * @param title 复制成功的弹出提示文字
 */
const setCopy = (data = '', title = '复制成功') => {
    if (!data) return;
    uni.setClipboardData({
        data,
        complete() {
            toastSuc(title);
        }
    });
};

export default setCopy
