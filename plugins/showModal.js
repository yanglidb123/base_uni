
const opt = {
    title: '提示',
    content: '',
    showCancel: true,
    cancelText: '取消',
    cancelColor: '#8397A9',
    confirmText: '确认',
    confirmColor: '#0050E3'
};

/**
 *
 * @param options => content 提示的内容
 * @returns {Promise<unknown>}
 */

const showModal = options => {
    return new Promise( (resolve, reject) =>
        uni.showModal({
            ...opt,
            ...options,
            success: res => {
                res.confirm && resolve();
                res.cancel && reject();
            },
            fail: res => reject()
        })
    )
};

export default showModal
