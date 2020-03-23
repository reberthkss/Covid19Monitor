export default class ImageService {
  static getFlagUrl = async countryName => {
    let url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    let res = await fetch(url);
    let images = await res.json();
    console.log(images.items);
    return images.items[0].image.thumbnailLink;
  };
}
