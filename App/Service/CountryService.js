const urlWorld = 'https://covid19-update-api.herokuapp.com/api/v1/world';

export default class CountryService {
  static getCountries = async () => {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    let countriesRes = await fetch(urlWorld, {
      method: 'GET',
      headers: headers,
      body: '',
      redirect: 'follow',
    });
    if (!countriesRes.ok) {
      throw Error(`Countries not found. ${countriesRes.status}`);
    }
    let countriesJson = await countriesRes.json();
    return countriesJson.countries;
  };
}
