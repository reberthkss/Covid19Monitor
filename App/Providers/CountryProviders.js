import CountryService from '../Service/CountryService';
import ImageProvider from './ImageProvider';
export default class CountryProviders {
  static async getCountriesList() {
    let i;
    let countryList = [];
    let countries = await CountryService.getCountries();
    // USING 5 as point-stop to don't reaches the daily request in google custom search, in the future change 5 to countries.length
    for( i = 0 ; i < 10 ; i++){
      let countryObj = await ImageProvider.parseFlagUrlToObjectList(countries[i]);
      countryList.push(countryObj);
    }
    return countryList;
  }
}
