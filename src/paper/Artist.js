import { store } from '../state/store'
import { colors } from '../styles/theme'
import { randomNumMinMax, randomArrItem } from './../scripts'
import { setArtist, setArtistPopup } from './../state/actions'

export default class ArtistThumb {
  constructor(paper, data, state) {
    this.props = data;
    this.state = state;
    this.radius = 100;
    this.numSegment = Math.floor(this.radius / 5 + 2);
    this.innerSegments = Math.floor(this.radius / 8 + 2);
    this.rate = randomNumMinMax(500, 2000);
    this.x = randomNumMinMax(0, state.ww);
    this.y = randomNumMinMax(0, state.wh);
    this.direction = randomNumMinMax(1, 5);
    this.i = 0;
    this.i_speed = randomNumMinMax(3, 20) * .025;
    this.z = 0;
    this.z_speed = randomNumMinMax(3, 20) * .025;
    this.fast = 0;
    this.title_alpha = 0;
    this.modal = store.getState().artistPopup;
    this.image = this.props.post_data.thumbnail;
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
    });
    
    this.title =  new paper.PointText(
      new paper.Point(0, this.radius + 25)
    );
    
    this.thumbMask = new paper.Path.Circle({
      radius: this.radius * .75,
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
    this.title.fontSize = 25;
    this.title.fontFamily = 'Azidenz';

    // SET SEGMENTS
    this.thumbBg.smooth();
    this.thumbInner.smooth();

    this.thumbInner.fillColor = this.props.circle_color;
    // Rescale Tool
    paper.Raster.prototype.rescale = function(width, height) {
      this.scale(width / this.radius, height / this.height);
    };

    // Thumbnail Image
    const thumbImage = new paper.Raster(`thumb_${this.props.post_data.slug}`);
    thumbImage.scale(.6);
    
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
    
    // Mouse Events
    this.thumbnail.onClick = (e) => {
      this.clickHandler(e);
    };

    // GROUPS
    imageGroup.onMouseEnter = () => {
      if (!this.modal) {
        this.title_alpha = 1;
        document.body.style.cursor = 'pointer';
      }
    }
    imageGroup.onMouseLeave = () => {
      this.title_alpha = 0;
      document.body.style.cursor = 'default';
    }
  }

  position() {
    this.i = this.i + this.i_speed;
    this.z = this.z + (1 / this.z_speed / 500);
    this.fast = this.fast + 1
    
    if (this.direction === 1) {
      this.x = this.x + this.i_speed;
      this.y = this.y + this.z_speed;
    } else if (this.direction === 2) {
      this.x = this.x + this.i_speed;
      this.y = this.y - this.z_speed;
    } else if (this.direction === 3) {
      this.x = this.x - this.i_speed;
      this.y = this.y + this.z_speed;
    } else if (this.direction === 4) {
      this.x = this.x - this.i_speed;
      this.y = this.y - this.z_speed;
    }

    if (this.x > (this.state.ww - this.radius) && this.direction === 1) {
      this.direction = 3
    } else if (this.x > (this.state.ww - this.radius) && this.direction === 2) {
      this.direction = 4
    } else if (this.x < this.radius && this.direction === 3) {
      this.direction = 1
    } else if (this.x < this.radius && this.direction === 4) {
      this.direction = 2
    }

    if (this.y > (this.state.wh - this.radius) && this.direction === 1) {
      this.direction = 2
    } else if (this.y > (this.state.wh - this.radius) && this.direction === 3) {
      this.direction = 4
    } else if (this.y < this.radius && this.direction === 2) {
      this.direction = 1
    } else if (this.y < this.radius && this.direction === 4) {
      this.direction = 3
    }

    this.thumbnail.position = [this.x, this.y];

    // ANIMATION
    this.title.opacity = this.title_alpha;
    this.modal = store.getState().artistPopup;

    // UPDATE SEGMENTS
    for (let i = 0; i < this.numSegment; i++) {
      const sinValue = Math.sin(this.fast * randomNumMinMax(i, 17)) / 15;
      const bgSegment = this.thumbBg.segments[i];
      bgSegment.point.y = this.thumbBg.segments[i].point.y + sinValue;
    }

    for (let i = 0; i < this.innerSegments; i++) {
      const sinValue = Math.sin(this.fast * randomNumMinMax(i, 15)) / 15;
      const innerSegment = this.thumbInner.segments[i];
      innerSegment.point.y = this.thumbInner.segments[i].point.y + sinValue;
    }
  }
}