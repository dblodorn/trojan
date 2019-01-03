import paper from 'paper'
import { store } from './../state/store'
import { randomNumMinMax } from './../scripts'
import { colors } from './../styles/theme'

export default() => {
  class Artists {
    constructor() {
      // CONFIG
      this.stage = document.getElementById('canvas');
      this.window = store.getState().resizeState;
      this.artists = false;
      this.state = {
        ww: this.window.window_width,
        wh: this.window.window_height,
        api: false,
        mousePoint: 0,
      };
      
      // PAPER OBJECTS
      this.cursor = {}

      // FUNCTION BINDING
      this.updateState = this.updateState.bind(this);
      this.init = this.init.bind(this);
      
      // INIT
      this.init();
    };

    updateState() {
      this.resize_state = store.getState().resizeState;
      this.state.ww = store.getState().resizeState.window_width;
      this.state.wh = store.getState().resizeState.window_height;
      if (store.getState().apiData !== false) {
        this.state.api = store.getState().apiData;
      };
    };

    animate() {
      paper.view.onFrame = (event) => {
        this.updateState();
        this.cursor.position = this.state.mousePoint;
        if (this.state.api !== false) {
          this.cursor.fillColor = colors.red;
        };
      };
    }

    init() {      
      paper.setup(this.stage);
      this.cursor = new paper.Path.Circle({
        center: paper.view.center,
        radius: 10,
        fillColor: colors.yellow
      });
      paper.view.onMouseMove = (event) => {
        this.state.mousePoint = event.point;
      }
      this.cursor.onClick = (event) => {
        console.log(this.state.api, event);
      }
      this.animate();
    };

  } 

  new Artists();
}
