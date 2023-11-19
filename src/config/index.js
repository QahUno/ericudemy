import configStaticPath from "./staticPath.js"
import configViewEngine from "./viewEngine.js"
import loadEnvVar from "./envVar.js"

function configApp(app) {
  configStaticPath(app)
  configViewEngine(app)
  loadEnvVar()
}

export default configApp