import paper from 'paper'
import { store } from '../state/store'
import Artist from './Artist'

export default (status) => {
  class Artists {
    constructor(status) {
      console.log(status);
      this.stage = document.getElementById('canvas');
      this.window = store.getState().resizeState;
      this.artists = false;
      this.artists_array = true;
      this.bottom_height = -3;
      this.mobile = true;
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
      if(status) {
        this.init();
      } else {
        this.kill();
      }
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
      if ( this.state.ww >= store.getState().resizeState.breakpoints.desktop) {
        this.mobile = false;
        this.bottom_height = 120;
      }
      this.artists = [];
      this.artists_array.forEach((info) => {
        this.artists.push(
          new Artist(paper, info, this.state, this.mobile)
        );
      });
    };

    animate(paper) {
      paper.view.onFrame = () => {
        this.updateState();
        if (this.artists_array !== false && !this.artists) {
          this.createThumbs(paper);
        };
        if (this.artists !== false) {
          for (let i = 0, l = this.artists.length; i < l; i++) {
		        this.artists[i].position(this.bottom_height);
          }
        }
      };
    };

    kill() {
      paper.project.activeLayer.removeChildren();
      paper.remove();
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
  new Artists(status);
}
