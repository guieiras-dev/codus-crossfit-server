export default `
"""
A signed eight-byte integer. The upper big integer values are greater then the
max value for a JavaScript number. Therefore all big integers will be output as
strings and not numbers.
"""
scalar BigInt

type Challenge implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: BigInt!
  title: String!
  description: String
  createdAt: Datetime!
  updatedAt: Datetime!

  """Reads and enables pagination through a set of 'WipChallenge'."""
  wipChallengesByChallengeId(
    """Only read the first 'n' values of the set."""
    first: Int

    """Only read the last 'n' values of the set."""
    last: Int

    """
    Skip the first 'n' values from our 'after' cursor, an alternative to cursor
    based pagination. May not be used with 'last'.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering 'WipChallenge'."""
    orderBy: [WipChallengesOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: WipChallengeCondition
  ): WipChallengesConnection!
}

"""
A condition to be used against 'Challenge' object types. All fields are tested
for equality and combined with a logical ‘and.’
"""
input ChallengeCondition {
  """Checks for equality with the object’s 'id' field."""
  id: BigInt

  """Checks for equality with the object’s 'title' field."""
  title: String

  """Checks for equality with the object’s 'description' field."""
  description: String

  """Checks for equality with the object’s 'createdAt' field."""
  createdAt: Datetime

  """Checks for equality with the object’s 'updatedAt' field."""
  updatedAt: Datetime
}

"""An input for mutations affecting 'Challenge'"""
input ChallengeInput {
  id: BigInt!
  title: String!
  description: String
  createdAt: Datetime!
  updatedAt: Datetime!
}

"""
Represents an update to a 'Challenge'. Fields that are set will be updated.
"""
input ChallengePatch {
  id: BigInt
  title: String
  description: String
  createdAt: Datetime
  updatedAt: Datetime
}

"""A connection to a list of 'Challenge' values."""
type ChallengesConnection {
  """A list of 'Challenge' objects."""
  nodes: [Challenge]!

  """
  A list of edges which contains the 'Challenge' and cursor to aid in pagination.
  """
  edges: [ChallengesEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* 'Challenge' you could get from the connection."""
  totalCount: Int
}

"""A 'Challenge' edge in the connection."""
type ChallengesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The 'Challenge' at the end of the edge."""
  node: Challenge
}

"""Methods to use when ordering 'Challenge'."""
enum ChallengesOrderBy {
  NATURAL
  ID_ASC
  ID_DESC
  TITLE_ASC
  TITLE_DESC
  DESCRIPTION_ASC
  DESCRIPTION_DESC
  CREATED_AT_ASC
  CREATED_AT_DESC
  UPDATED_AT_ASC
  UPDATED_AT_DESC
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
}

"""All input for the create 'Challenge' mutation."""
input CreateChallengeInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The 'Challenge' to be created by this mutation."""
  challenge: ChallengeInput!
}

"""The output of our create 'Challenge' mutation."""
type CreateChallengePayload {
  """
  The exact same 'clientMutationId' that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The 'Challenge' that was created by this mutation."""
  challenge: Challenge

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our 'Challenge'. May be used by Relay 1."""
  challengeEdge(
    """The method to use when ordering 'Challenge'."""
    orderBy: [ChallengesOrderBy!] = PRIMARY_KEY_ASC
  ): ChallengesEdge
}

"""All input for the create 'WipChallenge' mutation."""
input CreateWipChallengeInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """The 'WipChallenge' to be created by this mutation."""
  wipChallenge: WipChallengeInput!
}

"""The output of our create 'WipChallenge' mutation."""
type CreateWipChallengePayload {
  """
  The exact same 'clientMutationId' that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The 'WipChallenge' that was created by this mutation."""
  wipChallenge: WipChallenge

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """Reads a single 'Challenge' that is related to this 'WipChallenge'."""
  challengeByChallengeId: Challenge

  """An edge for our 'WipChallenge'. May be used by Relay 1."""
  wipChallengeEdge(
    """The method to use when ordering 'WipChallenge'."""
    orderBy: [WipChallengesOrderBy!] = PRIMARY_KEY_ASC
  ): WipChallengesEdge
}

"""A location in a connection that can be used for resuming pagination."""
scalar Cursor

"""
A point in time as described by the [ISO
8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
"""
scalar Datetime

"""All input for the 'deleteChallengeById' mutation."""
input DeleteChallengeByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: BigInt!
}

"""All input for the 'deleteChallenge' mutation."""
input DeleteChallengeInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique 'ID' which will identify a single 'Challenge' to be deleted.
  """
  nodeId: ID!
}

"""The output of our delete 'Challenge' mutation."""
type DeleteChallengePayload {
  """
  The exact same 'clientMutationId' that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The 'Challenge' that was deleted by this mutation."""
  challenge: Challenge
  deletedChallengeId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our 'Challenge'. May be used by Relay 1."""
  challengeEdge(
    """The method to use when ordering 'Challenge'."""
    orderBy: [ChallengesOrderBy!] = PRIMARY_KEY_ASC
  ): ChallengesEdge
}

"""All input for the 'deleteWipChallengeById' mutation."""
input DeleteWipChallengeByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String
  id: BigInt!
}

"""All input for the 'deleteWipChallenge' mutation."""
input DeleteWipChallengeInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique 'ID' which will identify a single 'WipChallenge' to be deleted.
  """
  nodeId: ID!
}

"""The output of our delete 'WipChallenge' mutation."""
type DeleteWipChallengePayload {
  """
  The exact same 'clientMutationId' that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The 'WipChallenge' that was deleted by this mutation."""
  wipChallenge: WipChallenge
  deletedWipChallengeId: ID

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """Reads a single 'Challenge' that is related to this 'WipChallenge'."""
  challengeByChallengeId: Challenge

  """An edge for our 'WipChallenge'. May be used by Relay 1."""
  wipChallengeEdge(
    """The method to use when ordering 'WipChallenge'."""
    orderBy: [WipChallengesOrderBy!] = PRIMARY_KEY_ASC
  ): WipChallengesEdge
}

"""
The root mutation type which contains root level fields which mutate data.
"""
type Mutation {
  """Creates a single 'Challenge'."""
  createChallenge(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateChallengeInput!
  ): CreateChallengePayload

  """Creates a single 'WipChallenge'."""
  createWipChallenge(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: CreateWipChallengeInput!
  ): CreateWipChallengePayload

  """
  Updates a single 'Challenge' using its globally unique id and a patch.
  """
  updateChallenge(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateChallengeInput!
  ): UpdateChallengePayload

  """Updates a single 'Challenge' using a unique key and a patch."""
  updateChallengeById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateChallengeByIdInput!
  ): UpdateChallengePayload

  """
  Updates a single 'WipChallenge' using its globally unique id and a patch.
  """
  updateWipChallenge(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateWipChallengeInput!
  ): UpdateWipChallengePayload

  """Updates a single 'WipChallenge' using a unique key and a patch."""
  updateWipChallengeById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: UpdateWipChallengeByIdInput!
  ): UpdateWipChallengePayload

  """Deletes a single 'Challenge' using its globally unique id."""
  deleteChallenge(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteChallengeInput!
  ): DeleteChallengePayload

  """Deletes a single 'Challenge' using a unique key."""
  deleteChallengeById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteChallengeByIdInput!
  ): DeleteChallengePayload

  """Deletes a single 'WipChallenge' using its globally unique id."""
  deleteWipChallenge(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteWipChallengeInput!
  ): DeleteWipChallengePayload

  """Deletes a single 'WipChallenge' using a unique key."""
  deleteWipChallengeById(
    """
    The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields.
    """
    input: DeleteWipChallengeByIdInput!
  ): DeleteWipChallengePayload
}

"""An object with a globally unique 'ID'."""
interface Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: Cursor

  """When paginating forwards, the cursor to continue."""
  endCursor: Cursor
}

"""The root query type which gives access points into the data universe."""
type Query implements Node {
  """
  Exposes the root query type nested one level down. This is helpful for Relay 1
  which can only query top level fields if they are in a particular form.
  """
  query: Query!

  """
  The root query type must be a 'Node' to work well with Relay 1 mutations. This just resolves to 'query'.
  """
  nodeId: ID!

  """Fetches an object given its globally unique 'ID'."""
  node(
    """The globally unique 'ID'."""
    nodeId: ID!
  ): Node

  """Reads and enables pagination through a set of 'Challenge'."""
  allChallenges(
    """Only read the first 'n' values of the set."""
    first: Int

    """Only read the last 'n' values of the set."""
    last: Int

    """
    Skip the first 'n' values from our 'after' cursor, an alternative to cursor
    based pagination. May not be used with 'last'.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering 'Challenge'."""
    orderBy: [ChallengesOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: ChallengeCondition
  ): ChallengesConnection

  """Reads and enables pagination through a set of 'WipChallenge'."""
  allWipChallenges(
    """Only read the first 'n' values of the set."""
    first: Int

    """Only read the last 'n' values of the set."""
    last: Int

    """
    Skip the first 'n' values from our 'after' cursor, an alternative to cursor
    based pagination. May not be used with 'last'.
    """
    offset: Int

    """Read all values in the set before (above) this cursor."""
    before: Cursor

    """Read all values in the set after (below) this cursor."""
    after: Cursor

    """The method to use when ordering 'WipChallenge'."""
    orderBy: [WipChallengesOrderBy!] = [PRIMARY_KEY_ASC]

    """
    A condition to be used in determining which values should be returned by the collection.
    """
    condition: WipChallengeCondition
  ): WipChallengesConnection
  challengeById(id: BigInt!): Challenge
  wipChallengeById(id: BigInt!): WipChallenge

  """Reads a single 'Challenge' using its globally unique 'ID'."""
  challenge(
    """
    The globally unique 'ID' to be used in selecting a single 'Challenge'.
    """
    nodeId: ID!
  ): Challenge

  """Reads a single 'WipChallenge' using its globally unique 'ID'."""
  wipChallenge(
    """
    The globally unique 'ID' to be used in selecting a single 'WipChallenge'.
    """
    nodeId: ID!
  ): WipChallenge
}

"""All input for the 'updateChallengeById' mutation."""
input UpdateChallengeByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  An object where the defined keys will be set on the 'Challenge' being updated.
  """
  challengePatch: ChallengePatch!
  id: BigInt!
}

"""All input for the 'updateChallenge' mutation."""
input UpdateChallengeInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique 'ID' which will identify a single 'Challenge' to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the 'Challenge' being updated.
  """
  challengePatch: ChallengePatch!
}

"""The output of our update 'Challenge' mutation."""
type UpdateChallengePayload {
  """
  The exact same 'clientMutationId' that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The 'Challenge' that was updated by this mutation."""
  challenge: Challenge

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """An edge for our 'Challenge'. May be used by Relay 1."""
  challengeEdge(
    """The method to use when ordering 'Challenge'."""
    orderBy: [ChallengesOrderBy!] = PRIMARY_KEY_ASC
  ): ChallengesEdge
}

"""All input for the 'updateWipChallengeById' mutation."""
input UpdateWipChallengeByIdInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  An object where the defined keys will be set on the 'WipChallenge' being updated.
  """
  wipChallengePatch: WipChallengePatch!
  id: BigInt!
}

"""All input for the 'updateWipChallenge' mutation."""
input UpdateWipChallengeInput {
  """
  An arbitrary string value with no semantic meaning. Will be included in the
  payload verbatim. May be used to track mutations by the client.
  """
  clientMutationId: String

  """
  The globally unique 'ID' which will identify a single 'WipChallenge' to be updated.
  """
  nodeId: ID!

  """
  An object where the defined keys will be set on the 'WipChallenge' being updated.
  """
  wipChallengePatch: WipChallengePatch!
}

"""The output of our update 'WipChallenge' mutation."""
type UpdateWipChallengePayload {
  """
  The exact same 'clientMutationId' that was provided in the mutation input,
  unchanged and unused. May be used by a client to track mutations.
  """
  clientMutationId: String

  """The 'WipChallenge' that was updated by this mutation."""
  wipChallenge: WipChallenge

  """
  Our root query field type. Allows us to run any query from our mutation payload.
  """
  query: Query

  """Reads a single 'Challenge' that is related to this 'WipChallenge'."""
  challengeByChallengeId: Challenge

  """An edge for our 'WipChallenge'. May be used by Relay 1."""
  wipChallengeEdge(
    """The method to use when ordering 'WipChallenge'."""
    orderBy: [WipChallengesOrderBy!] = PRIMARY_KEY_ASC
  ): WipChallengesEdge
}

type WipChallenge implements Node {
  """
  A globally unique identifier. Can be used in various places throughout the system to identify this single value.
  """
  nodeId: ID!
  id: BigInt!
  challengeId: BigInt!
  userEmail: String!
  status: String!
  createdAt: Datetime!
  updatedAt: Datetime!

  """Reads a single 'Challenge' that is related to this 'WipChallenge'."""
  challengeByChallengeId: Challenge
}

"""
A condition to be used against 'WipChallenge' object types. All fields are
tested for equality and combined with a logical ‘and.’
"""
input WipChallengeCondition {
  """Checks for equality with the object’s 'id' field."""
  id: BigInt

  """Checks for equality with the object’s 'challengeId' field."""
  challengeId: BigInt

  """Checks for equality with the object’s 'userEmail' field."""
  userEmail: String

  """Checks for equality with the object’s 'status' field."""
  status: String

  """Checks for equality with the object’s 'createdAt' field."""
  createdAt: Datetime

  """Checks for equality with the object’s 'updatedAt' field."""
  updatedAt: Datetime
}

"""An input for mutations affecting 'WipChallenge'"""
input WipChallengeInput {
  id: BigInt!
  challengeId: BigInt!
  userEmail: String!
  status: String!
  createdAt: Datetime!
  updatedAt: Datetime!
}

"""
Represents an update to a 'WipChallenge'. Fields that are set will be updated.
"""
input WipChallengePatch {
  id: BigInt
  challengeId: BigInt
  userEmail: String
  status: String
  createdAt: Datetime
  updatedAt: Datetime
}

"""A connection to a list of 'WipChallenge' values."""
type WipChallengesConnection {
  """A list of 'WipChallenge' objects."""
  nodes: [WipChallenge]!

  """
  A list of edges which contains the 'WipChallenge' and cursor to aid in pagination.
  """
  edges: [WipChallengesEdge!]!

  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """The count of *all* 'WipChallenge' you could get from the connection."""
  totalCount: Int
}

"""A 'WipChallenge' edge in the connection."""
type WipChallengesEdge {
  """A cursor for use in pagination."""
  cursor: Cursor

  """The 'WipChallenge' at the end of the edge."""
  node: WipChallenge
}

"""Methods to use when ordering 'WipChallenge'."""
enum WipChallengesOrderBy {
  NATURAL
  ID_ASC
  ID_DESC
  CHALLENGE_ID_ASC
  CHALLENGE_ID_DESC
  USER_EMAIL_ASC
  USER_EMAIL_DESC
  STATUS_ASC
  STATUS_DESC
  CREATED_AT_ASC
  CREATED_AT_DESC
  UPDATED_AT_ASC
  UPDATED_AT_DESC
  PRIMARY_KEY_ASC
  PRIMARY_KEY_DESC
}
`;
