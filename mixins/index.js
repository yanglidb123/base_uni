import Vue from 'vue'

Vue.mixin({
    data() {
        return {
            upOption: {
                use: true, // 是否启用上拉加载; 默认true
                auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
                isLock: false, // 是否锁定上拉加载,默认false;
                isBoth: true, // 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认true,两者可同时触发;
                page: {
                    num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
                    size: 10, // 每页数据的数量
                    time: null // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
                },
                noMoreSize: 3, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
                offset: 80, // 距底部多远时,触发upCallback(仅mescroll-uni生效, 对于mescroll-body则需在pages.json设置"onReachBottomDistance")
                bgColor: "transparent", // 背景颜色 (建议在pages.json中再设置一下backgroundColorTop)
                textColor: "gray", // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)
                textLoading: '加载中 ...', // 加载中的提示文本
                textNoMore: '-- END --', // 没有更多数据的提示文本
                toTop: {
                    // 回到顶部按钮,需配置src才显示
                    src: "https://www.mescroll.com/img/mescroll-totop.png", // 图片路径
                    offset: 1000, // 列表滚动多少距离才显示回到顶部按钮,默认1000
                    duration: 300, // 回到顶部的动画时长,默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过step模拟,部分机型可能不够流畅,所以非特殊情况不建议修改此项)
                    zIndex: 9990, // fixed定位z-index值
                    left: null, // 到左边的距离, 默认null. 此项有值时,right不生效. (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
                    right: 20, // 到右边的距离, 默认20 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
                    bottom: 120, // 到底部的距离, 默认120 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
                    safearea: false, // bottom的偏移量是否加上底部安全区的距离, 默认false, 需要适配iPhoneX时使用 (具体的界面如果不配置此项,则取mescroll组件props的safearea值)
                    width: 72, // 回到顶部图标的宽度, 默认72 (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
                    radius: "50%" // 圆角, 默认"50%" (支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx)
                },
                empty: {
                    use: true, // 是否显示空布局
                    icon: "https://www.mescroll.com/img/mescroll-empty.png", // 图标路径
                    tip: '~ 暂无相关数据 ~', // 提示
                    btnText: '去逛逛 >', // 按钮
                    fixed: false, // 是否使用fixed定位,默认false; 配置fixed为true,以下的top和zIndex才生效 (transform会使fixed失效,最终会降级为absolute)
                    top: "100rpx", // fixed定位的top值 (完整的单位值,如 "10%"; "100rpx")
                    zIndex: 99 // fixed定位z-index值
                },
                onScroll: true // 是否监听滚动事件, 默认false, 仅mescroll-uni生效; mescroll-body直接声明onPageScroll (配置为true时,可@scroll="scroll"获取到滚动条位置和方向; 注意监听列表滚动是非常耗性能的,很容易出现卡顿,非特殊情况不要配置此项)
            },
            downOption: {
                use: true, // 是否启用下拉刷新; 默认true
                auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
                native: false, // 是否使用系统自带的下拉刷新; 默认false; 仅mescroll-body生效 (值为true时,还需在pages配置enablePullDownRefresh:true;详请参考mescroll-native的案例)
                autoShowLoading: false, // 如果设置auto=true(在初始化完毕之后自动执行下拉刷新的回调),那么是否显示下拉刷新的进度; 默认false
                isLock: false, // 是否锁定下拉刷新,默认false;
                offset: 80, // 在列表顶部,下拉大于80upx,松手即可触发下拉刷新的回调
                inOffsetRate: 1, // 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
                outOffsetRate: 0.2, // 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
                bottomOffset: 20, // 当手指touchmove位置在距离body底部20upx范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
                minAngle: 45, // 向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;
                bgColor: "#E75A7C", // 背景颜色 (建议在pages.json中再设置一下backgroundColorTop)
                textColor: "#fff", // 文本颜色 (当bgColor配置了颜色,而textColor未配置时,则textColor会默认为白色)
                textInOffset: '下拉刷新', // 下拉的距离在offset范围内的提示文本
                textOutOffset: '释放更新', // 下拉的距离大于offset范围的提示文本
                textLoading: '加载中 ...' // 加载中的提示文本
            },
        }
    },
    computed: {
        // 配置多语言
        i18n() {
            if (this.$mp && this.$mp.page && this.$mp.page.route) {
                let [, file, ] = this.$mp.page.route.split('/');
                return { ...this.$t('com'), ...this.$t(file) };
            }
            return { ...this.$t('com') }
        },
    },
    methods: {
        // 每个页面的头部返回事件，可通过页面onBackPress方法自定义返回逻辑
        goBack() {
            this.$Router.back();
        },
        // 提交表单的非空验证 form => 需要提交的表单内容; require => 为空时的错误提示
        // 根据 require 里面的字段进行验证
        formValidator(form = 'form', require = 'formRequired') {
            try {
                Object.keys(this[require]).forEach(item => {
                    if (this[form].hasOwnProperty(item) && !this[form][item]) {
                        this.$toast(this[require][item]);
                        throw new Error('');
                    }
                });
                return true
            } catch (e) {
                return false
            }
        },
        // mescroll 的下拉刷新
        downCallback() {
            this.mescroll.resetUpScroll();
        },
        // 获取页面指定class类名的标签信息，
        getElementInfo(el, cb) {
            let query = uni.createSelectorQuery().in(this);
            query.select(el).boundingClientRect();
            query.exec(res => {
                cb(res[0]);
            })
        },
    }
});
