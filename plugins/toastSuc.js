/**
 *
 * @param title
 * @param duration
 */

const toastSuc = (title = 'succeeded', duration = 2100) => {
    uni.hideToast();
    uni.showToast({
        title: title,
        icon: 'success',
        duration: duration
    })
};

export default toastSuc
