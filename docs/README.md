# Docs

Here lies all the docs we consulted and/or created while developing this project

## Building blocks
- [TypeORM](https://github.com/typeorm/typeorm)
- [GraphQL yoga](https://github.com/prisma/graphql-yoga)
  - Alternatives:
    - [Postgraphile](https://github.com/graphile/postgraphile)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server)

## GraphQL

- [Custom Scalars](https://www.apollographql.com/docs/apollo-server/v2/features/scalars-enums.html)
- [npm package for GraphQL DateTime types](https://www.npmjs.com/package/graphql-iso-date)
- [Mocking schema](https://www.apollographql.com/docs/apollo-server/api/graphql-tools.html#addMockFunctionsToSchema)


## TypeORM

- [Enum column type](https://github.com/typeorm/typeorm/blob/master/docs/entities.md#enum-column-type)
- Special tasks(db:create, drop, etc)
- [Migrations](https://github.com/typeorm/typeorm/blob/master/docs/migrations.md)
  - Warning: A DEFAULT value must be set for the timestamps columns, TypeORM does not provide this automatically
- Special columns:
  - [@PrimaryGeneratedColumn](https://github.com/typeorm/typeorm/blob/master/docs/entities.md#primary-columns)
  - [Timestamp columns](https://github.com/typeorm/typeorm/blob/master/docs/entities.md#special-columns)