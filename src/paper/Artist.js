import { colors } from '../styles/theme'
import { randomNumMinMax } from './../scripts'

export default class ArtistThumb {
  constructor(paper, data, state) {
    this.props = data;
    this.state = state;
    this.width = this.height = 100;
    this.rate = randomNumMinMax(500, 2000)
    this.x = randomNumMinMax(0, state.ww);
    this.y = randomNumMinMax(0, state.wh);
    this.thumbnail = new paper.Path.Circle({
      center: [this.x, this.y],
      radius: this.width,
      fillColor: colors.red
    });
    this.i = 0
  }
  
  position() {
    this.i = this.i + 1 / this.rate
    const arc = Math.abs(Math.cos(this.i))
    const x = this.x * arc;
    const y = this.y * arc;
    if (arc === 0) {
      console.log('change');
    };
    this.thumbnail.position = [x, y]
  }
}