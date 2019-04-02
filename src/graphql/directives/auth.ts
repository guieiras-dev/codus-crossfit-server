import { defaultFieldResolver, GraphQLError, GraphQLField } from "graphql";
import { SchemaDirectiveVisitor } from "graphql-tools";
import User, { UserRoles } from "../../entities/user";

export const authDirectiveDeclaration = `
directive @admin on FIELD_DEFINITION
`;

export class AuthDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args) {
      const ctx = args[2];
      const { user }: { user: Maybe<User> } = ctx;

      if (user && user.hasRoles([UserRoles.ADMIN])) {
        return resolve.apply(this, args);
      } else {
        throw new GraphQLError("UNAUTHORIZED");
      }
    };
  }
}
