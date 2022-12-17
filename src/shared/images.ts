const basePath = `${process.env.PUBLIC_URL}/images`;

const AppImagesPaths = {
  logo: "logo.png",
  sortingIcon: "sortingIcon.svg",
  logoBg: "logoBg.png",
  img404: "img-404.png",
}

export const AppImages = new Proxy(AppImagesPaths, {
  get(target, property, receiver) {
    return `${basePath}/${(AppImagesPaths as Record<string, string>)[property as string]}`;
  }
});