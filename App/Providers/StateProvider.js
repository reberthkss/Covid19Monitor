import StateService from '../Service/StateService';

export default class StateProvider {
  static getListOfStates = async countryName => {
    countryName !== 'United States'
      ? (countryName = countryName)
      : (countryName = 'US');

    let states = await StateService.getState(countryName).catch(error => {
      throw error;
    });

    return states.map((state, id) => {
      let s = {
        id: (id + 1).toString(),
        Country: state.country,
        StateName: state.province.length ? state.province : states[0].country,
        Confirmed: state.confirmed,
        Deaths: state.deaths,
        Recovered: state.recovered,
      };
      return s;
    });
  };
}
