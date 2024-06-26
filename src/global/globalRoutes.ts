import { Router } from 'express';

import { createOneGlobalController, getCountriesController, getStatesController, getProvincesController, getDistrictsController } from './controllers';

const productRouter: Router = Router();

productRouter.route('/api/global').post(createOneGlobalController);
productRouter.route('/api/global/countries').get(getCountriesController);
productRouter.route('/api/global/states/:id').get(getStatesController);
productRouter.route('/api/global/provinces/:id').get(getProvincesController);
productRouter.route('/api/global/districts/:id').get(getDistrictsController);

export default productRouter;
