export default class ImageService {
  static getFlagUrl = async countryName => {
    let url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    let res = await fetch(url);
    let images = await res.json();
    if(images.status === 404) return "https://storage.googleapis.com/shopbr/404.png"
    return `https://www.countryflags.io/${images[0].alpha2Code}/flat/64.png`
  };
}
