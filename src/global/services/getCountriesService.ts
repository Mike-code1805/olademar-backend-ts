import { globalModel } from '../entity/model/globalModel';
import { logger } from '../../logger/appLoger';

export const getCountriesService = async () => {
  try {
    const globalData = await globalModel.findOne({}, 'countries.name countries.code');
    return globalData ? globalData.countries.map((country) => ({ name: country.name, code: country.code })) : [];
  } catch (error: any) {
    logger.error('Error fetching countries', {
      instance: 'services',
      fn: 'getCountriesService',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error fetching countries.');
  }
};
