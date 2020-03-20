const urlWorld = 'https://covid19-update-api.herokuapp.com/api/v1/world';
let myHeader = new Headers();
myHeader.append('Content-type', 'application/json');
export default class CountryService {
  static getCountries = async () => {
    let countries = await fetch(urlWorld, {
      method: 'GET',
      headers: myHeader,
      body: '',
      redirect: 'follow',
    });
    let countriesJson = await countries.json();
    return countriesJson.countries;
  };
  static getFlagUrl = async (countryName) => {

    let url = `https://www.googleapis.com/customsearch/v1?searchType=image&key=AIzaSyApLRuGf4baqDYH5_qH2HQ15w_zuBv04j4&cx=012512882471033741388:2jed74gt7gl&q=flag ${countryName}`;
    let res = await fetch(url);
    let images = await res.json();
    return images.items[0].image.thumbnailLink
  };
}
