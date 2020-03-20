import ImageService from '../Service/ImageService';

export default class ImageProvider {
  static parseFlagUrlToObjectList = async country => {
    let flagUrl = await ImageService.getFlagUrl(country.name);
    let countryObj = {
      id: country.name,
      country: country.name,
      flagUrl: flagUrl,
    };
    return countryObj;
  };
}
