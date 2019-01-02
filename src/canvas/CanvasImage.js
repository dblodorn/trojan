export default class NewImage {
  constructor(x, y, ww, wh, url) {
    this.x = x;
    this.y = y;
    this.width = ww;
    this.height = wh;
    this.img = new Image();
    this.img.src = url
  }
  draw(ctx) {
    this.img.onload = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }
}