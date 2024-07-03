import { globalModel } from '../entity/model/globalModel';
import { logger } from '../../logger/appLoger';

export const getDistrictsService = async (provinceCode: string) => {
  try {
    const globalData = await globalModel.findOne(
      { 'countries.states.provinces.code': provinceCode },
      { 'countries.states.provinces.$': 1 }
    );

    if (!globalData) return [];

    const state = globalData.countries[0].states.find(state =>
      state.provinces.some(province => province.code === provinceCode)
    );

    if (!state) return [];

    const province = state.provinces.find(province => province.code === provinceCode);

    return province ? province.districts.map(district => ({ name: district.name, code: district.postalCodes })) : [];
  } catch (error: any) {
    logger.error('Error fetching districts', {
      instance: 'services',
      fn: 'getDistrictsService',
      trace: error.message,
    });
    throw new Error(error.message ? error.message : 'Error fetching districts.');
  }
};
