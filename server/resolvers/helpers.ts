import { IContext } from "../declarations/IContext";
import {
  IResolvers,
  MutationResolvers,
  Resolvers,
  QueryResolvers
} from "../../graphql/generated/graphql";

const resolversRegistry: IResolvers<IContext> = {
  Mutation: {},
  Query: {}
};

export function registerResolver<T extends keyof Resolvers<IContext>>(
  typeName: T,
  resolver: Resolvers<IContext>[T]
): void {
  resolversRegistry[typeName] = resolver;
}

export function registerQueryResolver<T extends keyof QueryResolvers<IContext>>(
  typeName: T,
  resolver: QueryResolvers<IContext>[T]
): void {
  resolversRegistry.Query![typeName] = resolver;
}

export function registerMutationResolver<
  T extends keyof MutationResolvers<IContext>
>(typeName: T, resolver: MutationResolvers<IContext>[T]): void {
  resolversRegistry.Mutation![typeName] = resolver;
}

export const getAllResolvers = (): IResolvers => resolversRegistry;
