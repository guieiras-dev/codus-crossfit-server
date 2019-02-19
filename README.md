# Codus Crossfit Server

## Roadmap

- [x] Setup Typescript
- [x] Setup GraphQL-Yoga
- [x] Define Schema
- [ ] Expose Stubbed Schema
  - [ ] Expose Challenge type
    - [ ] Create `DateTime` scalars
  - [ ] Expose WIP Challenge type
- [ ] Setup ORM
- [ ] Add Real Resolvers
  - [ ] Challenges
  - [ ] Challenge By Id
  - [ ] WIP Challenges
  - [ ] WIP Challenges By Id
  - [ ] Challenge by WIP Challenge
- [ ] Add Mutations
  - [ ] Add Challenges
  - [ ] Add WIP Challenges
  - [ ] Move WIP Challenges
  - [ ] Delete Challenges
  - [ ] Delete WIP Challenges
- [ ] Good Stuff
  - [ ] Authentication
  - [ ] Authorization
  - [ ] Subscriptions

---

## Simple GraphQL Server with Postgraphile and Docker

1. Creating Network

    `docker network create crossfit`

2. Creating Database

    `docker run --name crossfit_db -p 5432:5432 -e POSTGRES_PASSWORD=password --network=crossfit postgres`

3. Seeding Database

    Use [Schema](./schema.sql) file to create tables and relations.

4. Starting Postgraphile

    `docker run -p 5000:5000 --network crossfit graphile/postgraphile --connection postgres://postgres:password@crossfit_db:5432/crossfit --schema public --watch`

You can export Postgraphile GraphQL schema using following command:

```
docker run -p 5000:5000 -v "PATH_TO_HOST:/host" --network crossfit graphile/postgraphile --connection postgres://postgres:password@crossfit_db:5432/crossfit --schema public --export-schema-graphql="/host/schema.gql"
```
