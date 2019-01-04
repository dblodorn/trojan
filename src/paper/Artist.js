import { store } from '../state/store'
import { colors } from '../styles/theme'
import { randomNumMinMax, randomArrItem } from './../scripts'
import { setArtist, setArtistPopup } from './../state/actions'

export default class ArtistThumb {
  constructor(paper, data, state) {
    this.props = data;
    this.state = state;
    this.radius = 125;
    this.numSegment = Math.floor(this.radius / 5 + 2);
    this.innerSegments = Math.floor(this.radius / 8 + 2);
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
    
    // INITIALIZE PAPER OBJECTS
    this.thumbBg = new paper.Path.RegularPolygon({
      center: [0, 0],
      radius: this.radius,
      sides: this.numSegment,
      fillColor: '#000000',
    });
    this.thumbInner = new paper.Path.RegularPolygon({
      center: [0, 0],
      radius: this.radius * .85,
      sides: this.innerSegments,
      fillColor: randomArrItem(this.colors),
    });
    this.title =  new paper.PointText(
      new paper.Point(0, this.radius + 35)
    );
    this.thumbMask = new paper.Path.Circle({
      radius: this.radius * .75,
      fillColor: randomArrItem(this.colors),
    });
    
    // INITIALIZE OBJECT
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
    // SET TYPE
    this.title.fillColor = '#000000';
    this.title.content = this.props.post_data.title.toUpperCase();
    this.title.justification = 'center';
    this.title.fontSize = 30;
    this.title.fontFamily = 'Azidenz';
    
    // SET SEGMENTS
    this.thumbBg.smooth();
    this.thumbInner.smooth();

    // Rescale Tool
    paper.Raster.prototype.rescale = function(width, height) {
      this.scale(width / this.radius, height / this.height);
    };

    // Thumbnail Image
    const thumbImage = new paper.Raster(`thumb_${this.props.post_data.slug}`);
    thumbImage.scale(0.35);
    
    const imageGroup = new paper.Group({
      children: [this.thumbMask, thumbImage]
    });

    imageGroup.clipped = true;
    // Master Group
    this.thumbnail = new paper.Group({
      children: [this.thumbBg, this.thumbInner, imageGroup, this.title],
      position: [this.x, this.y],
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
    this.thumbnail.position = [x, y];

    // UPDATE SEGMENTS
    for (let i = 0; i < this.numSegment; i++) {
      const sinValue = Math.sin(this.i * randomNumMinMax(i, 50)) / 10;
      const bgSegment = this.thumbBg.segments[i];
      bgSegment.point.y = this.thumbBg.segments[i].point.y + sinValue;
    }

    for (let i = 0; i < this.innerSegments; i++) {
      const sinValue = Math.sin(this.i * randomNumMinMax(i, 50)) / 15;
      const innerSegment = this.thumbInner.segments[i];
      innerSegment.point.y = this.thumbInner.segments[i].point.y + sinValue;
    }
  }
}