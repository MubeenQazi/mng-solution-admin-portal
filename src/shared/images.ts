import {getImageProxy} from "../submodule/utils/utils";

const basePath = `${process.env.PUBLIC_URL}/images`;

const AppImagesPaths = {
  logo: "logo.png",
  sortingIcon: "sortingIcon.svg",
  logoBg: "logoBg.png",
  img404: "img-404.png",
}

export const AppImages = getImageProxy(basePath, AppImagesPaths);