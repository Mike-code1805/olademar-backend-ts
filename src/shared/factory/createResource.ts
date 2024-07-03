import { User } from '../../user/entity/types/User';
import { ApplicationError } from '../../customErrors/ApplicationError';
import { Token } from '../../auth/entity/schema/authTokenSchema';
import { Model as ModelType } from 'mongoose';
import { Product } from '../../product/entity/types/Product';
import { Cart } from '../../cart/entity/types/Cart';
import { Order } from '../../order/entity/types/Order';
import { Favorite } from '../../favorite/entity/types/Favorite';
import { Like } from '../../like/entity/types/Like';
import { Comment } from '../../comment/entity/types/Comment';
import { Global } from '../../global/entity/types/Global';

export const createResource =
  <
    K extends
      | ModelType<Order>
      | ModelType<Cart>
      | ModelType<User>
      | ModelType<Token>
      | ModelType<Product>
      | ModelType<Favorite>
      | ModelType<Like>
      | ModelType<Comment>
      | ModelType<Global>
  >(
    Model: K
  ) =>
  async <T>(resource: T): Promise< User | Token | Product | Cart | Order | Favorite | Like | Comment | Global> => {
    try {
        const newResource = new Model(resource);
        return await newResource.save();
      } catch (error: any) {
        throw new ApplicationError(400, error.message);
      }
  };