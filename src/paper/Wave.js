import { colors } from '../styles/theme'
import { randomNumMinMax } from './../scripts'

export default class Wave {
  constructor(paper, state, height, color) {
    this.ww = state.ww;
    this.wh = state.wh;
    this.height = height;
    this.segment_count = randomNumMinMax(20, 25);
    this.path = new paper.Path({
      fillColor: color
    })
    this.path.closed = true;
    this.createWave(paper);
  }

  createWave(paper) {
    this.path.add(
      new paper.Point(0, this.wh),
      new paper.Point(0, this.wh - this.height)
    );
    for (var i = 0; i <= this.segment_count; i++) {
      const point = new paper.Point((this.ww / this.segment_count * i), this.wh - this.height)
      this.path.add(point);
    };
    this.path.add(
      new paper.Point(this.ww, this.wh - this.height),
      new paper.Point(this.ww, this.wh)
    );
  }

  update(event) {
    for (let i = 2; i < this.segment_count + 3; i++) {
      const sinSeed = event.count + (i + i % 10) * 100;
      const sinMod = Math.sin(sinSeed / 200) * this.height / 40
      const sinHeight = this.wh - this.height;
      const yPos = sinHeight + (sinMod * 2);
      this.path.segments[i].point.y = yPos;
    }
    this.path.smooth({ type: 'catmull-rom' });
  }
}