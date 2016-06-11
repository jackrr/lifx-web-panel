import auth from '../keys/lifx.json'
import { toRequestRGB } from './colors';

class Lifx {

  constructor() {
    console.log("setting headers")
    $.ajaxSetup({
      headers: {
        "Authorization": `Bearer ${auth.token}`
      }
    })
  }

  loadBulbs(cb) {
    $.ajax({
      url: "https://api.lifx.com/v1/lights/all",
      method: 'get',
      success: cb
    })
  }

  updateBulbColorRGB(bulbId, rgbObj, cb) {
    $.ajax({
      url: `https://api.lifx.com/v1/lights/id:${bulbId}/state`,
      method: 'put',
      data: {color: toRequestRGB(rgbObj)},
      success: cb
    })
  }
}

export default Lifx;