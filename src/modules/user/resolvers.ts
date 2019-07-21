import { User } from '../../entity/User';
import { ResolverMap } from '../../types';

const resolvers: ResolverMap = {
  Query: {
    user: async (_, { where }: GQL.IUserOnQueryArguments) => {
      return User.findOne({ where: { ...where } });
    },
  },
};

export default resolvers;
