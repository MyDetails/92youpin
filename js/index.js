$(window).scroll(function () {
    let offsetTop = $(".navbar").offset().top;
    if (offsetTop >= 48) {
        $(".fixed-top").addClass("top-nav");
    } else {
        $(".fixed-top").removeClass("top-nav");
    }
})

//移动端滑动轮播图
var carousels = $(".carousel"); //获取所有的轮播图
var startX, endX, finalMove;
var diviation = 60; //让手指滑动一定距离轮播图才工作
carousels.on("touchstart", function (event) {
    // console.log(event.originalEvent.touches[0].pageX);
    startX = event.originalEvent.touches[0].pageX; //获取手指接触屏幕时的位置
});
carousels.on("touchmove", function (event) {
    // console.log(event.originalEvent.touches[0].pageX);
    endX = event.originalEvent.touches[0].pageX; //手指滑动时该值一直刷新，当手指离开时保留最后一次手指的位置
})
carousels.on("touchend", function (event) {
            //console.log(event.originalEvent.touches[0].pageX);
            finalMove = Math.abs(startX - endX) - diviation;
            if (finalMove > 0 && (startX - endX) > 0) { //如果手指滑动方向向左，轮播图向右播放一张图片
                $(this).carousel('next');
                }
                else if (finalMove > 0 && (startX - endX) < 0) {
                    $(this).carousel('prev');
                }
            })