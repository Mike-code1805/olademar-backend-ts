import { logger } from '../../logger/appLoger';
import { createResource } from '../../shared/factory/createResource';
import { globalModel } from '../entity/model/globalModel';
import { CreateGlobal, Global } from '../entity/types/Global';

export const createOneGlobalService = async (globalRequest: CreateGlobal): Promise<Global> => {
  try {
    const global = await createResource(globalModel)(globalRequest);
    return global as Global;
  } catch (error: any) {
    logger.error('error creating a global service', {
      instance: 'services',
      service: 'createOneGlobalService',
      trace: error.message ? error.message : '',
    });
    throw new Error(`Error creating a global ${error.message}`);
  }
};
