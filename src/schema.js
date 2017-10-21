import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import * as Queries from './queries';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: { ...Queries },
  }),
});

export default schema;
