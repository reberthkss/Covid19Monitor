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
}
