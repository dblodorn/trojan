import { store } from '../state/store'
import { colors } from '../styles/theme'
import { randomNumMinMax, randomArrItem } from './../scripts'
import { setArtist, setArtistPopup } from './../state/actions'

export default class ArtistThumb {
  constructor(paper, data, state) {
    this.props = data;
    this.state = state;
    this.width = 125;
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

  clickHandler() {
    store.dispatch(setArtist(this.props));
    store.dispatch(setArtistPopup(true));
  }

  createThumb(paper) {
    
    const name = this.props.post_data.title;

    const title =  new paper.PointText(
      new paper.Point(0,this.width + 28)
    );

    title.fillColor = '#000000';
    title.content = name.toUpperCase();
    title.justification = 'center';
    title.fontSize = 30;
    title.fontFamily = 'Azidenz';

    const thumbBg = new paper.Path.Circle({
      radius: this.width,
      fillColor: '#000000',
    });
    
    const thumbInner = new paper.Path.Circle({
      radius: this.width * .85,
      fillColor: randomArrItem(this.colors),
    });

    const thumbMask = new paper.Path.Circle({
      radius: this.width * .75,
      fillColor: randomArrItem(this.colors),
    });
    
    const thumbImage = new paper.Raster(`thumb_${this.props.post_data.slug}`)
    thumbImage.width = this.width * 1.5;
    thumbImage.height = this.width * 1.5;
    
    const imageGroup = new paper.Group({
      children: [thumbMask, thumbImage]
    });

    thumbBg.fullySelected = true;

    imageGroup.clipped = true;
    // Master Group
    this.thumbnail = new paper.Group({
      children: [thumbBg, thumbInner, imageGroup, title],
      position: [this.x, this.y],
    });
    this.thumbnail.name = this.props.post_data.slug;
    // 
    this.thumbnail.onClick = (event) => {
      this.clickHandler(event);
    };
  }

  position() {
    this.i = this.i + 1 / this.rate
    const arc = Math.abs(Math.cos(this.i))
    const x = this.x * arc;
    const y = this.y * arc;
    this.thumbnail.position = [x, y]
  }
}