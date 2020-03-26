import ImageService from '../Service/ImageService';

export default class ImageProvider {
  static parseFlagUrlToObjectList = async countryName => {
    return await ImageService.getFlagUrl(countryName);
  };
}
