import { colors } from '../styles/theme'
import { randomNumMinMax } from './../scripts'

export default class Wave {
  constructor(paper, state, height) {
    this.size = paper.view.size * [1.2, 1];
    this.ww = state.ww;
    this.wh = state.wh;
    this.height = height;
    this.segment_count = randomNumMinMax(10, 15);
    this.path = new paper.Path({
      fillColor: colors.red
    })
    this.path.closed = true;
    this.createWave(paper);
  }

  createWave(paper) {
    this.path.add(new paper.Point(0, this.wh));
    this.path.add(new paper.Point(0, this.wh - this.height));
    this.path.add(new paper.Point(this.ww, this.wh - this.height));
    this.path.add(new paper.Point(this.ww, this.wh));
    /*
    for (var i = 0; i <= this.segment_count; i++) {
      this.path.add(new paper.Point((10 * 1), 100));
    }*/
  }

  update(state) {

  }
}