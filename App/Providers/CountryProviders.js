import CountryService from '../Service/CountryService';
import ImageProvider from "./ImageProvider";
export default class CountryProviders {
  static async getCountriesList() {
    let i;
    let countryList = [];
    let {data} = await CountryService.getCountries();
    for (i = 0; i < data.length; i++) {
      const flagUrl = await ImageProvider.parseFlagUrlToObjectList(data[i].name, data[i].iso);
      if (flagUrl) {
        let countryObj = {
          id: data[i].iso,
          country: data[i].name,
          flagUrl
        };
        countryList.push(countryObj);
      }
    }
    return countryList
        .filter((country) => country.flagUrl != null)
        .sort((countryA, countryB) => {
          const countryALength = countryA.country.length, countryBLength = countryB.country.length;
          let i = 0;
          while (i < countryALength && i < countryBLength && countryA.country[i] === countryB.country[i]) i++;
          if (i >= countryALength) {
            return -1;
          } else if (i >= countryBLength) {
            return 1;
          } else {
            return countryA.country[i].charCodeAt(0) - countryB.country[i].charCodeAt(0);
          }
        });
  }
}
