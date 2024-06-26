import { globalModel } from '../entity/model/globalModel';
import { logger } from '../../logger/appLoger';

export const getStatesService = async (countryCode: string) => {
  try {
    const globalData = await globalModel.findOne({ 'countries.code': countryCode });
    return globalData ? globalData.countries[0].states.map((state) => ({ name: state.name, code: state.code })) : [];
  } catch (error: any) {
    logger.error('Error fetching states', {
      instance: 'services',
      fn: 'getStatesService',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error fetching states.');
  }
};
