import CountryService from '../Service/CountryService';
export default class CountryProviders {

  static parseFlagUrlToObjectList = async (country) => {
    let flagUrl = await CountryService.getFlagUrl(country.name);
    let countryObj = {id:country.name,country:country.name,flagUrl:flagUrl};
    return countryObj;
  };
  static async getCountries() {
    let i;
    let countryList = [];
    let countries = await CountryService.getCountries();

    for( i = 0 ; i < 5 ; i++){
      let countryObj = await this.parseFlagUrlToObjectList(countries[i]);
      countryList.push(countryObj);
    }
    console.log(countryList)
  }
}
