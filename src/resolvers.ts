import { IResolvers } from 'graphql-tools';
import db from "./dbMock/db"

const resolvers: IResolvers = {
  Query: {
    find: async (_, args, { }) => {
      let { name } = await args
      const result = db.find(name);
      return result ? result : [];
    }
  },
  User: {
    id: (user) => user._id
  }
};
export default resolvers;