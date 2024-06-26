import { globalModel } from '../entity/model/globalModel';
import { logger } from '../../logger/appLoger';

export const getProvincesService = async (stateCode: string) => {
  try {
    const globalData = await globalModel.findOne({ 'countries.states.code': stateCode });
    if (!globalData) return [];

    const state = globalData.countries[0].states.find((state) => state.code === stateCode);
    return state ? state.provinces.map((province) => ({ name: province.name, code: province.code })) : [];
  } catch (error: any) {
    logger.error('Error fetching provinces', {
      instance: 'services',
      fn: 'getProvincesService',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error fetching provinces.');
  }
};
