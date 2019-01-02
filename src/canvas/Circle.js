export default class Circle {
  constructor(x, y, count, ww) {
    this.x = x;
    this.y = y;
    this.width = this.height = (ww / count) * .75;
  }

  draw(ctx) {
    ctx.shadowColor = 'rgba(255, 0, 0, .8)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 30;
    ctx.shadowOffsetY = 20;
    ctx.fillStyle = '#d1b0b3';
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#29bdad';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}
