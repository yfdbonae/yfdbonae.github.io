function Pipe(option) {
    this.ctx = option.ctx;
    this.topImg = option.topImg;
    this.bottomImg = option.bottomImg;
    this.x = option.x;

    this.Yspace = 50 + Math.random() * 100;
    this.y = -(150 + Math.random() * 150);
    this.bottomY = this.topImg.height + this.y + this.Yspace;
    this.speed = 2;


}
Pipe.prototype = {
    consturctor: Pipe,
    draw: function () {
        this.ctx.rect(this.x,this.y,this.topImg.width,this.topImg.height);
        this.ctx.rect(this.x,this.bottomY,this.bottomImg.width,this.bottomImg.height);
        
        this.ctx.drawImage(this.topImg, this.x, this.y);
        this.ctx.drawImage(this.bottomImg, this.x, this.bottomY);
        this.x -= this.speed;
        if (this.x < -this.topImg.width) {
            this.x += 6 * 
            300;

            this.y = -(150 + Math.random() * 150);
            this.bottomY = this.topImg.height + this.y + this.Yspace;

        }

    }
}