export default class ImageService {
  static getFlagUrl = async countryName => {
    let url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    let res = await fetch(url);
    if (!res.ok) return 'https://storage.googleapis.com/shopbr/404.png';
    let images = await res.json();
    return `https://www.countryflags.io/${images[0].alpha2Code}/flat/64.png`;
  };
}
