import gulp from "gulp"
import {options} from "./config/options.js";

const {
  src,
  dest,
  parallel,
  series
} = gulp

const copyToBitrix = (folder, isUseFolder = true) => src(folder+'/**/*', { ...options.dest })
  .pipe(dest(isUseFolder ? folder : '.', {...options.bitrix}))

const copyModulesFiles = () => src('modules/**/*', { ...options.dest })
  .pipe(dest('images/modules', {...options.bitrix}))

const copyCss = () => copyToBitrix('css');
const copyJs = () => copyToBitrix('js');
const copyAssets = () => copyToBitrix('assets', false);

const base = parallel(copyCss, copyJs, copyAssets)

const bitrix = series(base, copyModulesFiles)

export { bitrix }
