function Land(option) {
    this.ctx=option.ctx;
    this.img=option.img;
    this.x=option.x;
    this.y=option.y;
    
    this.speed=2;
}
Land.prototype = {
    constructor: Land,
    draw: function () {
        this.ctx.drawImage(this.img, this.x, this.y);
        this.x -= this.speed;
        if (this.x < -this.img.width) {
            this.x += 4 * this.img.width;
        }
    }
}