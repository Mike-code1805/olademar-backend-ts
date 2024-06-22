import { Router } from 'express';

import { createOneGlobalController } from './controllers';

const productRouter: Router = Router();

productRouter.route('/api/global').post(createOneGlobalController);

export default productRouter;
