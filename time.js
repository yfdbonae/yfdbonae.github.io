function MyTime(option) {
    this.ctx = option.ctx;
    this.x = option.x;
    this.y = option.y;
    this.startTime = new Date();

}
MyTime.prototype = {
    constructor: MyTime,
    draw: function () {
        var date = (new Date() - this.startTime) / 1000;

        var h = Math.floor(date / 3600);

        var m = Math.floor(date % 3600 / 60);

        var s = Math.floor(date % 60);
        this.ctx.save();

        var text = '你已经坚持了' + h + '小时' + m + '分钟' + s + '秒';
        this.ctx.font = '30px 微软雅黑';
        this.ctx.fillStyle = 'pink';                                                        
        if (s == 1) {
            text += ' 恭喜你！！通关了';
            this.ctx.fillText(text, this.x - this.ctx.measureText(text).width, this.y);
            return isRunning = false;
        }


        this.ctx.fillText(text, this.x - this.ctx.measureText(text).width, this.y);
        this.ctx.restore();
    }
}