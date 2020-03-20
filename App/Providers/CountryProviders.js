import CountryService from '../Service/CountryService';
export default class CountryProviders {

  static parseFlagUrlToObjectList = async (country) => {
    let flagUrl = await CountryService.getFlagUrl(country.name);
    let countryObj = {id:country.name,country:country.name,flagUrl:flagUrl};
    return countryObj;
  };
  static async getCountriesList() {
    let i;
    let countryList = [];
    let countries = await CountryService.getCountries();
// USING 5 as point-stop to don't reaches the daily request in google custom search, in the future change 5 to countries.length
    for( i = 0 ; i < 5 ; i++){
      let countryObj = await this.parseFlagUrlToObjectList(countries[i]);
      countryList.push(countryObj);
    }
    return countryList
  }
}
