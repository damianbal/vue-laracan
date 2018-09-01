import axios from "axios";

const Laracan = {

  install(Vue, options) {

    Vue.prototype.laravelBaseURL = options.laravelBaseURL

    Vue.prototype.can = async (model, action, id = null) => {
      return new Promise((resolve, reject) => {
        let idString = ""

        if (id != null) idString = "/" + id

        axios.get(Vue.prototype.laravelBaseURL + "/laracan/" + model + "/" + action + idString).then(resp => {
          resolve(resp.data.can)
        }).catch(err => reject(err))
      })
    }

  }

}

export default Laracan
