import CountryService from '../Service/CountryService';
import ImageProvider from './ImageProvider';
export default class CountryProviders {
  static async getCountriesList() {
    let i;
    let countryList = [];
    let countries = await CountryService.getCountries();
    for (i = 0; i < countries.length; i++) {
      let countryObj = {
        id: countries[i].name,
        country: countries[i].name,
        flagUrl: await ImageProvider.parseFlagUrlToObjectList(
          countries[i].name,
        ),
      };
      countryList.push(countryObj);
    }
    return countryList;
  }
}
