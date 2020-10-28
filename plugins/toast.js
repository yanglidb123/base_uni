/**
 *
 * @param title
 * @param duration
 */

const toast = (title, duration = 2100) => {
    // #ifdef  H5
    uni.hideToast();
    uni.showToast({
        title: title,
        icon: 'none',
        duration: duration
    });
    // #endif

    // #ifdef  APP-PLUS
    plus.nativeUI.toast(`<font style=\"font-size:18px\">${title}</font>`, {
        type: 'richtext',
        duration: 'short',
        richTextStyle: {
            align: 'center'
        },
        verticalAlign: 'center'
    });
    // #endif
};

export default toast
