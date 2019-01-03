import { store } from '../state/store'
import { colors } from '../styles/theme'
import { randomNumMinMax, randomArrItem } from './../scripts'
import { setArtist, setArtistPopup } from './../state/actions'

export default class ArtistThumb {
  constructor(paper, data, state) {
    this.props = data;
    this.state = state;
    this.width = this.height = 100;
    this.rate = randomNumMinMax(500, 2000);
    this.x = randomNumMinMax(0, state.ww);
    this.y = randomNumMinMax(0, state.wh);
    this.i = 0;
    this.image = this.props.post_data.thumbnail;
    this.colors = [
      colors.red,
      colors.blue,
      colors.yellow
    ]
    this.clickHandler = this.clickHandler.bind(this);
    this.init(paper);
  }
  
  init(paper) {
    this.createThumb(paper);
  }

  clickHandler(event) {
    console.log(this.props, event);
    store.dispatch(setArtist(this.props));
    store.dispatch(setArtistPopup(true));
  }

  createThumb(paper) {
    this.thumbnail = new paper.Path.Circle({
      center: [this.x, this.y],
      radius: this.width,
      fillColor: randomArrItem(this.colors),
    });
    this.thumbnail.name = this.props.post_data.slug;
    this.thumbnail.onClick = (event) => {
      this.clickHandler(event);
    };
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