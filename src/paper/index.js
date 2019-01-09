import paper from 'paper'
import { store } from '../state/store'
import Artist from './Artist'
import Wave from './Wave'
import { colors } from './../styles/theme'

export default () => {
  class Artists {
    constructor() {
      this.stage = document.getElementById('canvas');
      this.window = store.getState().resizeState;
      this.artists = false;
      this.artists_array = false;
      this.bottom_height = 130;
      this.state = {
        ww: this.window.window_width,
        wh: this.window.window_height,
        api: false,
        mousePoint: 0,
      };
      // PAPER OBJECTS
      this.children;
      // FUNCTION BINDING
      this.updateState = this.updateState.bind(this);
      this.init = this.init.bind(this);
      // INIT
      this.init();
      this.wave1 = false;
    };

    updateState() {
      this.resize_state = store.getState().resizeState;
      this.state.ww = store.getState().resizeState.window_width;
      this.state.wh = store.getState().resizeState.window_height;
      if (store.getState().apiData !== false) {
        this.state.api = store.getState().apiData;
        this.artists_array = this.state.api.artists;
      };
    };

    createThumbs(paper) {
      this.artists = [];
      this.artists_array.forEach((info) => {
        this.artists.push(
          new Artist(paper, info, this.state)
        );
      });
    };

    animate(paper) {
      paper.view.onFrame = (event) => {
        this.updateState();
        if (this.artists_array !== false && !this.artists) {
          this.createThumbs(paper);
          this.wave1 = new Wave(paper, this.state, this.bottom_height, colors.off_black);
        };
        if (this.artists !== false) {
          for (let i = 0, l = this.artists.length; i < l; i++) {
		        this.artists[i].position(95);
          }
          this.wave1.update(event);
        }
      };
      paper.view.onResize = (event) => {
        // this.init();
        console.log(event);
      };
    };

    init() {      
      paper.setup(this.stage);
      this.children = paper.project.activeLayer.children;
      paper.view.onMouseMove = (event) => {
        this.state.mousePoint = event.point;
      }
      this.animate(paper);
    };
  } 

  new Artists();
}
