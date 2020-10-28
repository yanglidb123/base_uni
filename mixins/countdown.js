
export default {
    data() {
        return {
            downTime: 0, // 默认的倒计时时间，如有多个请在页面添加
        }
    },

    methods: {
        getCode(option = { type: ''}) {
            let params = { ...option };
            this.$loading();
            this.$http.post('', params).then(res => {
                this.$toast('Success');
                this.actionCountdown();
            }).finally(() => {
                this.$loaded();
            });
        },
        // 返回当前倒计时的id 用于手动清除倒计时，多用于弹出框
        actionCountdown(time = 'downTime') {
            if (!time) return;
            this[time] = 100;
            let timer = setInterval(()=>{
                this[time] --;
                if(this[time] < 0){
                    clearInterval(timer);
                    timer = null;
                    this[time] = 0;
                }
            }, 1e3);
            this.$once(['hook:onHide', 'hook:onUnload'], () => {
                clearInterval(timer);
                timer = null;
                this[time] = 0;
            });
            return timer;
        },
    }
}
