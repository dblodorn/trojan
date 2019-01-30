import { store } from '../state/store'
import { colors } from '../styles/theme'
import { randomNumMinMax } from './../scripts'
import { setArtist, setArtistPopup } from './../state/actions'
import { calc, easing, everyFrame, value, tween, physics } from 'popmotion'

export default class ArtistThumb {
  constructor(paper, data, state) {
    this.props = data;
    this.state = state;
    this.hovered = false;
    this.radius = 80;
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
    this.title_alpha = 0;
    this.modal = store.getState().artistPopup;
    this.image = this.props.post_data.thumbnail;
    this.scale = 1;
    this.clickHandler = this.clickHandler.bind(this);
    this.initwidth = 0;
    this.initheight = 0;
    this.tween = 1;



    // INITIALIZE PAPER OBJECTS
    this.thumbBg = new paper.Path.RegularPolygon({
      center: [0, 0],
      radius: this.radius,
      sides: this.numSegment,
      fillColor: colors.black,
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
      radius: this.radius * .7,
    });
    
    for (let i = 0; i < this.numSegment; i++) {
      this.thumbBg.segments[i].point.y = this.thumbBg.segments[i].point.y + randomNumMinMax(1, 7);
    }

    for (let i = 0; i < this.innerSegments; i++) {
      this.thumbInner.segments[i].point.y = this.thumbInner.segments[i].point.y + randomNumMinMax(1, 5);
    }

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

  tweenIt(dir) {
    const tweenVal = value(1, (v) => {
      this.tween = v;
    });
    if (dir === 'up') {
      tween({
        from: 1,
        to: 1.15,
        duration: 500
      }).start(tweenVal);
    } else if (dir === 'down') {
      tween({
        from: 1.15,
        to: 1,
        duration: 500
      }).start(tweenVal);
    } else {
      this.tween = 1;
    }
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
    
    this.initwidth = this.thumbnail.bounds.width;
    this.initheight = this.thumbnail.bounds.height;

    this.thumbnail.name = this.props.post_data.slug;
    
    // Mouse Events
    this.thumbnail.onClick = e => {
      this.clickHandler(e);
    };

    // GROUPS
    this.thumbnail.onMouseEnter = e => {
      if (!this.modal) {
        this.tweenIt('up');
        this.hovered = true;
        document.body.style.cursor = 'pointer';
      }
    }
    this.thumbnail.onMouseLeave = e => {
      if (!this.modal) {
        this.tweenIt('down');
        this.hovered = false;
        document.body.style.cursor = 'default';
      }
    }
  }

  position(bottom) {
    this.i = this.i + this.i_speed;
    this.z = this.z + (1 / this.z_speed / 500);

    // Animation
    this.title.opacity = this.title_alpha;
    this.modal = store.getState().artistPopup;

    // Hover Handler
    if (this.hovered) {
      this.title_alpha = 1;
      this.thumbnail.bounds.width = this.initwidth * this.tween;
      this.thumbnail.bounds.height = this.initheight * this.tween;
    } else {
      this.title_alpha = 0;
      this.thumbnail.bounds.width = this.initwidth * this.tween;
      this.thumbnail.bounds.height = this.initheight * this.tween;
    }

    // Bouncing
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

    if (this.x > (this.state.ww - (this.radius - 3)) && this.direction === 1) {
      this.direction = 3
    } else if (this.x > (this.state.ww - (this.radius - 3)) && this.direction === 2) {
      this.direction = 4
    } else if (this.x < this.radius && this.direction === 3) {
      this.direction = 1
    } else if (this.x < this.radius && this.direction === 4) {
      this.direction = 2
    }

    if (this.y > (this.state.wh - (this.radius + bottom)) && this.direction === 1) {
      this.direction = 2
    } else if (this.y > (this.state.wh - (this.radius + bottom)) && this.direction === 3) {
      this.direction = 4
    } else if (this.y < this.radius && this.direction === 2) {
      this.direction = 1
    } else if (this.y < this.radius && this.direction === 4) {
      this.direction = 3
    }

    this.thumbnail.position = [this.x, this.y];
  }
}