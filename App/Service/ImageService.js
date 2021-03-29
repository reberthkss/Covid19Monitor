const geturl = (countryAlpha3Code) => {
  return `https://restcountries.eu/rest/v2/name/${countryAlpha3Code}`;
}
export default class ImageService {
  static getFlagUrl = async (countryAlpha3Code, countryName) => {
    let res = await fetch(geturl(countryAlpha3Code));
    if (!res.ok) {
      res = await fetch(geturl(countryName));
      if (!res.ok) return null;
    }
    let images = await res.json();
    return `https://www.countryflags.io/${images[0].alpha2Code}/flat/64.png`;
  };
}
