function Sky(option){
    this.ctx=option.ctx;
    this.img=option.img;
    this.x=option.x;
    
    this.speed=2;
}
Sky.prototype={
    constructor:Sky,
    draw:function(){
        this.ctx.drawImage(this.img,this.x,0);
        this.x-=this.speed;
        if(this.x<-this.img.width){
            this.x+=2*this.img.width;
        }
    }
}