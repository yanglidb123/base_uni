const previewImg = url => {
    if (!url) return;
    uni.previewImage({
        urls: [url],
        // longPressActions: {
        //     itemList: ['保存相册', 'quxiao'], //默认是保存相册和取消两个选项
        //     success: function(data) {
        //         console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
        //     },
        // }
    });
};

export default previewImg
