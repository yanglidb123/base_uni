<script>
	export default {
		onLaunch: function() {
            // #ifdef APP-PLUS
            plus.screen.lockOrientation("portrait-primary"); //锁定
            // #endif
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style>
    /* #ifndef APP-PLUS-NVUE */
    @import "style/common.scss";
    @import "style/base.scss";
    /* #endif */
</style>
