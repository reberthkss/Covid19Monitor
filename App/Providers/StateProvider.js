import StateService from '../Service/StateService';

export default class StateProvider {
  static getListOfStates = async countryName => {
    let listStates = [];
    let i=0;
    countryName !== 'United States'
      ? (countryName = countryName)
      : (countryName = 'US');
    let states = await StateService.getState(countryName);
    states.forEach(state => {
      if (state.province.length || states.length) {
        let s = {
          id: i.toString(),
          Country: state.country,
          StateName: state.province.length ? state.province : states[0].country,
          Confirmed: state.confirmed,
          Deaths: state.deaths,
          Recovered: state.recovered,
        };
        listStates.push(s);
        i++;
      }
    });

    return listStates;
  };
}
