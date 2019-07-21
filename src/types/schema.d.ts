// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    user: IUser | null;
  }

  interface IUserOnQueryArguments {
    where: IUserWhereFilter;
  }

  interface IUserWhereFilter {
    id?: string | null;
    email?: string | null;
    username?: string | null;
  }

  interface IUser {
    id: string;
    email: string;
    username: string;
  }
}

// tslint:enable
