import ImageService from '../Service/ImageService';

export default class ImageProvider {
  static parseFlagUrlToObjectList = async (countryAlpha3Code, countryName) => {
    return await ImageService.getFlagUrl(countryAlpha3Code, countryName);
  };
}
