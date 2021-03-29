// const urlWorld = 'https://covid19-update-api.herokuapp.com/api/v1/world';
// const urlWorld = 'https://coronavirus-smartable.p.rapidapi.com/stats/v1/global';
const urlWorld = "https://covid-19-statistics.p.rapidapi.com/regions";

export default class CountryService {
  static getCountries = async () => {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    headers.append("x-rapidapi-key", "2173090473mshd3d734832044824p130911jsn3d117f32f6be");

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
    return countriesJson;
  };
}
