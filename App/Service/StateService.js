export default class StateService {
  static getState = async countryName => {
    let res = await fetch(
      `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${countryName}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
          'x-rapidapi-key':
            '2d0c4d3f62msh929f30fdfad3906p17b0b5jsn32129ff9deda',
        },
      },
    );
    if (!res.ok) throw Error(`Error ${res.status}`);
    let countryStats = await res.json();
    let errorMessageIndex = countryStats.message.indexOf('Country not found');
    if (errorMessageIndex != -1) throw Error(`Stats of states from  ${countryName} not found`);
    return countryStats.data.covid19Stats;
  };
}
