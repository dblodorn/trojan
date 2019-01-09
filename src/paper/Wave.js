export default class Wave {
  constructor(paper, state, height, color) {
    this.ww = state.ww;
    this.wh = state.wh;
    this.height = height;
    this.segment_count = 12;
    this.path = new paper.Path()
    this.path.fillColor = color;
    this.path.closed = true;
    this.createWave(paper);
  }

  createWave(paper) {
    console.log(paper.view)
    this.path.add(
      new paper.Point(paper.view.bounds.bottomLeft)
    );
    for (var i = 0; i <= this.segment_count; i++) {
      this.path.add(new paper.Point((this.ww / this.segment_count * i), this.wh - this.height));
    };
    this.path.add(
      new paper.Point(paper.view.bounds.bottomRight)
    );
  }

  update(event) {
    for (let i = 2; i < this.segment_count + 2; i++) {
      const sinSeed = event.count + (i + i % 10) * 100;
      const sinMod = Math.sin(sinSeed / 75) * this.height / 50
      const sinHeight = this.wh - this.height;
      const yPos = sinHeight + (sinMod * 2);
      this.path.segments[i].point.y = yPos;
    }
    // this.path.smooth({ type: 'catmull-rom' });
  }
}