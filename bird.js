function Bird(option) {
    this.ctx=option.ctx;
    this.img=option.img;
    this.x = option.x;
    this.y = option.y;
    this.picx = this.img.width / 3;
    this.picy = this.img.height;
    this.index = 0;
    this.a = 0.0002;
    this.starTime = new Date();
    this.v = 0;
    this.maxV = 0.5;
    this.maxAngle = 90;
}
Bird.prototype = {
    constructor: Bird,
    draw: function () {
        var lastTime = new Date();
        var dTime = lastTime - this.starTime;
        this.starTime = lastTime;
        // console.log(dTime);

        var s =this.v * dTime + this.a * dTime * dTime / 2;
        this.v = this.v + this.a * dTime;
        this.y += s;
        var angle = this.maxAngle / this.maxV * this.v;
        // ctx.drawImage(skyimg,0,0,canvas.width,canvas.height);
        ctx.save();
        ctx.translate(this.x + this.picx / 2, this.y + this.picy / 2);
        // console.log(angle);
        ctx.rotate(changeAngle(angle));
        ctx.drawImage(this.img, this.index * this.picx, 0, this.picx, this.picy, -this.picx / 2, -this.picy / 2, this.picx, this.picy);
        ctx.restore();
        this.index++;

        if (this.index == 3) {
            this.index = 0;
        }
    }
}