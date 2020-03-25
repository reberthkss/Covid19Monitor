import ImageService from '../Service/ImageService';

export default class ImageProvider {
  static parseFlagUrlToObjectList = async countryName => {
    let flagUrl = await ImageService.getFlagUrl(countryName);
    let countryObj = {
      id: countryName,
      country: countryName,
      flagUrl: flagUrl,
    };
    return countryObj;
  };
}
