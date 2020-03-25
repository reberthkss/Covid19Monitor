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
    if(!countriesRes.ok) throw Error(`Countrys not found. ${countriesRes.status}`)
    let countriesJson = await countriesRes.json();
    return countriesJson.countries;
  };
}
