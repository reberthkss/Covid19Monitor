import CountryService from '../Service/CountryService';
import ImageProvider from './ImageProvider';
export default class CountryProviders {
  static async getCountriesList() {
    let i;
    let countryList = [];
    let countries = await CountryService.getCountries();

    for (i = 0; i < countries.length; i++) {
      let countryObj = await ImageProvider.parseFlagUrlToObjectList(
        countries[i],
      );
      countryList.push(countryObj);
    }
    return countryList;
  }
}
