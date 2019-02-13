import { store } from '../state/store'
import { colors } from '../styles/theme'
import { randomNumMinMax, htmlConvert } from './../scripts'
import { setArtist, setArtistPopup } from './../state/actions'
import { value, tween } from 'popmotion'
import debounce from 'lodash/debounce'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
  debounce: debounce
})

export default class ArtistThumb {
  constructor(paper, data, state) {
    this.props = data;
    this.state = state;
    this.hovered = false;
    this.radius = 80;
    this.numSegment = Math.floor(this.radius / 5 + 2);
    this.innerSegments = Math.floor(this.radius / 8 + 2);
    this.x = randomNumMinMax(0, state.ww);
    this.y = randomNumMinMax(0, state.wh);
    this.direction = randomNumMinMax(1, 5);
    this.i = 0;
    this.i_speed = randomNumMinMax(3, 20) * .025;
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
    
    this.title = new paper.PointText({
      point: [0, this.radius + 25],
      fillColor: '#000000',
      justification: 'center',
      fontFamily: 'Azidenz',
      fontSize: 20,
    });
    
    this.thumbMask = new paper.Path.Circle({
      radius: this.radius * .7,
    });

    this.boundBox = new paper.Shape.Rectangle({
      point: [-100, -100],
      size: [200, 200],
      // strokeColor: 'black',
      fillColor: 'transparent'
    })
    
    for (let i = 0; i < this.numSegment; i++) {
      this.thumbBg.segments[i].point.y = this.thumbBg.segments[i].point.y + randomNumMinMax(1, 7);
    }

    for (let i = 0; i < this.innerSegments; i++) {
      this.thumbInner.segments[i].point.y = this.thumbInner.segments[i].point.y + randomNumMinMax(1, 5);
    }

    this.thumbBg.smooth();
    this.thumbInner.smooth();
    
    // INITIALIZE OBJECT
    this.createThumb(paper);
  }

  clickHandler() {
    store.dispatch(setArtist(this.props));
    store.dispatch(setArtistPopup(true));
  }

  hoverTween(dir) {
    const tweenVal = value(1, (v) => {
      this.tween = v;
    });
    if (dir === 'up') {
      tween({
        from: 1,
        to: 1.15,
        duration: 250
      }).start(tweenVal);
    } else if (dir === 'down') {
      tween({
        from: 1.15,
        to: 1,
        duration: 250
      }).start(tweenVal);
    } else {
      this.tween = 1;
    }
  } 

  createThumb(paper) {
    // SET TYPE
    this.title.content = htmlConvert(this.props.post_data.title).toUpperCase();
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
      children: [
        this.thumbBg,
        this.thumbInner, 
        imageGroup, 
        this.title,
        this.boundBox,
      ],
      position: [this.x, this.y],
    });
    
    this.initwidth = this.thumbnail.bounds.width;
    this.initheight = this.thumbnail.bounds.height;
  
    // Mouse Events
    this.thumbnail.onClick = e => {
      this.clickHandler(e);
    };

    // GROUPS
    this.thumbnail.onMouseEnter = e => {
      e.stopPropagation();
      if (!this.modal) {
        console.log('hover')
        this.hovered = true;
        // this.hoverTween('up');
        document.body.style.cursor = 'pointer';
      }
    }
    
    this.thumbnail.onMouseLeave = e => {
      e.stopPropagation();
      if (!this.modal) {
        console.log('outs')
        this.hovered = false;
        // _.debounce(this.hoverTween('down'), 550);
        document.body.style.cursor = 'default';
      }
    }
  }

  position(bottom, paper) {

    this.i = this.i + this.i_speed;

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
      this.thumbnail.bounds.width = this.initwidth;
      this.thumbnail.bounds.height = this.initheight;
    }

    // Bouncing
    if (this.direction === 1) {
      this.x = this.x + this.i_speed;
      this.y = this.y + this.i_speed;
    } else if (this.direction === 2) {
      this.x = this.x + this.i_speed;
      this.y = this.y - this.i_speed;
    } else if (this.direction === 3) {
      this.x = this.x - this.i_speed;
      this.y = this.y + this.i_speed;
    } else if (this.direction === 4) {
      this.x = this.x - this.i_speed;
      this.y = this.y - this.i_speed;
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