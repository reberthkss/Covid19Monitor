export default class ImageService {
  static getFlagUrl = async countryName => {
    console.log(countryName);
    //#TODO query need changes to increase the precision of the results
    let url = `https://www.googleapis.com/customsearch/v1?searchType=image&key=AIzaSyApLRuGf4baqDYH5_qH2HQ15w_zuBv04j4&cx=012512882471033741388:2jed74gt7gl&q= flag ${countryName} wikipedia `;
    let res = await fetch(url);
    let images = await res.json();
    console.log(images.items);
    return images.items[0].image.thumbnailLink;
  };
}
