import { resolve } from "path"

export default {
  srcDir: resolve("src"),
  publicDir: resolve("public"),
  componentCompatibleFolders: ["components", "layouts"],
  componentsTemplatesDir: resolve("config/tasks/scaffold-component/templates"),
}
