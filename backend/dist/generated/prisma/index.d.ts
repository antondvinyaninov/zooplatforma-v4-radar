
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VkAppUserSettings
 * 
 */
export type VkAppUserSettings = $Result.DefaultSelection<Prisma.$VkAppUserSettingsPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model OrganizationMember
 * 
 */
export type OrganizationMember = $Result.DefaultSelection<Prisma.$OrganizationMemberPayload>
/**
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model CommunityNotificationAdmin
 * 
 */
export type CommunityNotificationAdmin = $Result.DefaultSelection<Prisma.$CommunityNotificationAdminPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostPublication
 * 
 */
export type PostPublication = $Result.DefaultSelection<Prisma.$PostPublicationPayload>
/**
 * Model RadarPin
 * 
 */
export type RadarPin = $Result.DefaultSelection<Prisma.$RadarPinPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vkAppUserSettings`: Exposes CRUD operations for the **VkAppUserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VkAppUserSettings
    * const vkAppUserSettings = await prisma.vkAppUserSettings.findMany()
    * ```
    */
  get vkAppUserSettings(): Prisma.VkAppUserSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationMember`: Exposes CRUD operations for the **OrganizationMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationMembers
    * const organizationMembers = await prisma.organizationMember.findMany()
    * ```
    */
  get organizationMember(): Prisma.OrganizationMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityNotificationAdmin`: Exposes CRUD operations for the **CommunityNotificationAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityNotificationAdmins
    * const communityNotificationAdmins = await prisma.communityNotificationAdmin.findMany()
    * ```
    */
  get communityNotificationAdmin(): Prisma.CommunityNotificationAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postPublication`: Exposes CRUD operations for the **PostPublication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostPublications
    * const postPublications = await prisma.postPublication.findMany()
    * ```
    */
  get postPublication(): Prisma.PostPublicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.radarPin`: Exposes CRUD operations for the **RadarPin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RadarPins
    * const radarPins = await prisma.radarPin.findMany()
    * ```
    */
  get radarPin(): Prisma.RadarPinDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    VkAppUserSettings: 'VkAppUserSettings',
    Organization: 'Organization',
    OrganizationMember: 'OrganizationMember',
    Community: 'Community',
    CommunityNotificationAdmin: 'CommunityNotificationAdmin',
    Post: 'Post',
    PostPublication: 'PostPublication',
    RadarPin: 'RadarPin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vkAppUserSettings" | "organization" | "organizationMember" | "community" | "communityNotificationAdmin" | "post" | "postPublication" | "radarPin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VkAppUserSettings: {
        payload: Prisma.$VkAppUserSettingsPayload<ExtArgs>
        fields: Prisma.VkAppUserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VkAppUserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkAppUserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VkAppUserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkAppUserSettingsPayload>
          }
          findFirst: {
            args: Prisma.VkAppUserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkAppUserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VkAppUserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkAppUserSettingsPayload>
          }
          findMany: {
            args: Prisma.VkAppUserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkAppUserSettingsPayload>[]
          }
          create: {
            args: Prisma.VkAppUserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkAppUserSettingsPayload>
          }
          createMany: {
            args: Prisma.VkAppUserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VkAppUserSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkAppUserSettingsPayload>[]
          }
          delete: {
            args: Prisma.VkAppUserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkAppUserSettingsPayload>
          }
          update: {
            args: Prisma.VkAppUserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkAppUserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.VkAppUserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VkAppUserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VkAppUserSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkAppUserSettingsPayload>[]
          }
          upsert: {
            args: Prisma.VkAppUserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkAppUserSettingsPayload>
          }
          aggregate: {
            args: Prisma.VkAppUserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVkAppUserSettings>
          }
          groupBy: {
            args: Prisma.VkAppUserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VkAppUserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.VkAppUserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<VkAppUserSettingsCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      OrganizationMember: {
        payload: Prisma.$OrganizationMemberPayload<ExtArgs>
        fields: Prisma.OrganizationMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findFirst: {
            args: Prisma.OrganizationMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findMany: {
            args: Prisma.OrganizationMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          create: {
            args: Prisma.OrganizationMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          createMany: {
            args: Prisma.OrganizationMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          delete: {
            args: Prisma.OrganizationMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          update: {
            args: Prisma.OrganizationMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          aggregate: {
            args: Prisma.OrganizationMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationMember>
          }
          groupBy: {
            args: Prisma.OrganizationMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationMemberCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberCountAggregateOutputType> | number
          }
        }
      }
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      CommunityNotificationAdmin: {
        payload: Prisma.$CommunityNotificationAdminPayload<ExtArgs>
        fields: Prisma.CommunityNotificationAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityNotificationAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityNotificationAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityNotificationAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityNotificationAdminPayload>
          }
          findFirst: {
            args: Prisma.CommunityNotificationAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityNotificationAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityNotificationAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityNotificationAdminPayload>
          }
          findMany: {
            args: Prisma.CommunityNotificationAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityNotificationAdminPayload>[]
          }
          create: {
            args: Prisma.CommunityNotificationAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityNotificationAdminPayload>
          }
          createMany: {
            args: Prisma.CommunityNotificationAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityNotificationAdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityNotificationAdminPayload>[]
          }
          delete: {
            args: Prisma.CommunityNotificationAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityNotificationAdminPayload>
          }
          update: {
            args: Prisma.CommunityNotificationAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityNotificationAdminPayload>
          }
          deleteMany: {
            args: Prisma.CommunityNotificationAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityNotificationAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityNotificationAdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityNotificationAdminPayload>[]
          }
          upsert: {
            args: Prisma.CommunityNotificationAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityNotificationAdminPayload>
          }
          aggregate: {
            args: Prisma.CommunityNotificationAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityNotificationAdmin>
          }
          groupBy: {
            args: Prisma.CommunityNotificationAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityNotificationAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityNotificationAdminCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityNotificationAdminCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostPublication: {
        payload: Prisma.$PostPublicationPayload<ExtArgs>
        fields: Prisma.PostPublicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostPublicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPublicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostPublicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPublicationPayload>
          }
          findFirst: {
            args: Prisma.PostPublicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPublicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostPublicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPublicationPayload>
          }
          findMany: {
            args: Prisma.PostPublicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPublicationPayload>[]
          }
          create: {
            args: Prisma.PostPublicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPublicationPayload>
          }
          createMany: {
            args: Prisma.PostPublicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostPublicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPublicationPayload>[]
          }
          delete: {
            args: Prisma.PostPublicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPublicationPayload>
          }
          update: {
            args: Prisma.PostPublicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPublicationPayload>
          }
          deleteMany: {
            args: Prisma.PostPublicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostPublicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostPublicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPublicationPayload>[]
          }
          upsert: {
            args: Prisma.PostPublicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPublicationPayload>
          }
          aggregate: {
            args: Prisma.PostPublicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostPublication>
          }
          groupBy: {
            args: Prisma.PostPublicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostPublicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostPublicationCountArgs<ExtArgs>
            result: $Utils.Optional<PostPublicationCountAggregateOutputType> | number
          }
        }
      }
      RadarPin: {
        payload: Prisma.$RadarPinPayload<ExtArgs>
        fields: Prisma.RadarPinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RadarPinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadarPinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RadarPinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadarPinPayload>
          }
          findFirst: {
            args: Prisma.RadarPinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadarPinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RadarPinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadarPinPayload>
          }
          findMany: {
            args: Prisma.RadarPinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadarPinPayload>[]
          }
          create: {
            args: Prisma.RadarPinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadarPinPayload>
          }
          createMany: {
            args: Prisma.RadarPinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RadarPinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadarPinPayload>[]
          }
          delete: {
            args: Prisma.RadarPinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadarPinPayload>
          }
          update: {
            args: Prisma.RadarPinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadarPinPayload>
          }
          deleteMany: {
            args: Prisma.RadarPinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RadarPinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RadarPinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadarPinPayload>[]
          }
          upsert: {
            args: Prisma.RadarPinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RadarPinPayload>
          }
          aggregate: {
            args: Prisma.RadarPinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRadarPin>
          }
          groupBy: {
            args: Prisma.RadarPinGroupByArgs<ExtArgs>
            result: $Utils.Optional<RadarPinGroupByOutputType>[]
          }
          count: {
            args: Prisma.RadarPinCountArgs<ExtArgs>
            result: $Utils.Optional<RadarPinCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vkAppUserSettings?: VkAppUserSettingsOmit
    organization?: OrganizationOmit
    organizationMember?: OrganizationMemberOmit
    community?: CommunityOmit
    communityNotificationAdmin?: CommunityNotificationAdminOmit
    post?: PostOmit
    postPublication?: PostPublicationOmit
    radarPin?: RadarPinOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    organizationMembers: number
    ownedOrganizations: number
    communityDutyFor: number
    communityAdmins: number
    posts: number
    radarPins: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizationMembers?: boolean | UserCountOutputTypeCountOrganizationMembersArgs
    ownedOrganizations?: boolean | UserCountOutputTypeCountOwnedOrganizationsArgs
    communityDutyFor?: boolean | UserCountOutputTypeCountCommunityDutyForArgs
    communityAdmins?: boolean | UserCountOutputTypeCountCommunityAdminsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    radarPins?: boolean | UserCountOutputTypeCountRadarPinsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunityDutyForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunityAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityNotificationAdminWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRadarPinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadarPinWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    members: number
    communityAdmins: number
    postPublications: number
    radarPins: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | OrganizationCountOutputTypeCountMembersArgs
    communityAdmins?: boolean | OrganizationCountOutputTypeCountCommunityAdminsArgs
    postPublications?: boolean | OrganizationCountOutputTypeCountPostPublicationsArgs
    radarPins?: boolean | OrganizationCountOutputTypeCountRadarPinsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountCommunityAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityNotificationAdminWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountPostPublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostPublicationWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountRadarPinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadarPinWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    vkId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    vkId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    email: string | null
    bio: string | null
    phone: string | null
    location: string | null
    avatar: string | null
    coverPhoto: string | null
    profileVisibility: string | null
    showPhone: string | null
    showEmail: string | null
    allowMessages: string | null
    showOnline: string | null
    verified: boolean | null
    verifiedAt: Date | null
    createdAt: Date | null
    lastSeen: Date | null
    passwordHash: string | null
    vkId: number | null
    vkAccessToken: string | null
    okId: string | null
    okAccessToken: string | null
    mailruId: string | null
    mailruAccessToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    email: string | null
    bio: string | null
    phone: string | null
    location: string | null
    avatar: string | null
    coverPhoto: string | null
    profileVisibility: string | null
    showPhone: string | null
    showEmail: string | null
    allowMessages: string | null
    showOnline: string | null
    verified: boolean | null
    verifiedAt: Date | null
    createdAt: Date | null
    lastSeen: Date | null
    passwordHash: string | null
    vkId: number | null
    vkAccessToken: string | null
    okId: string | null
    okAccessToken: string | null
    mailruId: string | null
    mailruAccessToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    email: number
    bio: number
    phone: number
    location: number
    avatar: number
    coverPhoto: number
    profileVisibility: number
    showPhone: number
    showEmail: number
    allowMessages: number
    showOnline: number
    verified: number
    verifiedAt: number
    createdAt: number
    lastSeen: number
    passwordHash: number
    vkId: number
    vkAccessToken: number
    okId: number
    okAccessToken: number
    mailruId: number
    mailruAccessToken: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    vkId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    vkId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    bio?: true
    phone?: true
    location?: true
    avatar?: true
    coverPhoto?: true
    profileVisibility?: true
    showPhone?: true
    showEmail?: true
    allowMessages?: true
    showOnline?: true
    verified?: true
    verifiedAt?: true
    createdAt?: true
    lastSeen?: true
    passwordHash?: true
    vkId?: true
    vkAccessToken?: true
    okId?: true
    okAccessToken?: true
    mailruId?: true
    mailruAccessToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    bio?: true
    phone?: true
    location?: true
    avatar?: true
    coverPhoto?: true
    profileVisibility?: true
    showPhone?: true
    showEmail?: true
    allowMessages?: true
    showOnline?: true
    verified?: true
    verifiedAt?: true
    createdAt?: true
    lastSeen?: true
    passwordHash?: true
    vkId?: true
    vkAccessToken?: true
    okId?: true
    okAccessToken?: true
    mailruId?: true
    mailruAccessToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    bio?: true
    phone?: true
    location?: true
    avatar?: true
    coverPhoto?: true
    profileVisibility?: true
    showPhone?: true
    showEmail?: true
    allowMessages?: true
    showOnline?: true
    verified?: true
    verifiedAt?: true
    createdAt?: true
    lastSeen?: true
    passwordHash?: true
    vkId?: true
    vkAccessToken?: true
    okId?: true
    okAccessToken?: true
    mailruId?: true
    mailruAccessToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    lastName: string | null
    email: string
    bio: string | null
    phone: string | null
    location: string | null
    avatar: string | null
    coverPhoto: string | null
    profileVisibility: string | null
    showPhone: string | null
    showEmail: string | null
    allowMessages: string | null
    showOnline: string | null
    verified: boolean | null
    verifiedAt: Date | null
    createdAt: Date | null
    lastSeen: Date | null
    passwordHash: string
    vkId: number | null
    vkAccessToken: string | null
    okId: string | null
    okAccessToken: string | null
    mailruId: string | null
    mailruAccessToken: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    bio?: boolean
    phone?: boolean
    location?: boolean
    avatar?: boolean
    coverPhoto?: boolean
    profileVisibility?: boolean
    showPhone?: boolean
    showEmail?: boolean
    allowMessages?: boolean
    showOnline?: boolean
    verified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    lastSeen?: boolean
    passwordHash?: boolean
    vkId?: boolean
    vkAccessToken?: boolean
    okId?: boolean
    okAccessToken?: boolean
    mailruId?: boolean
    mailruAccessToken?: boolean
    vkAppSettings?: boolean | User$vkAppSettingsArgs<ExtArgs>
    organizationMembers?: boolean | User$organizationMembersArgs<ExtArgs>
    ownedOrganizations?: boolean | User$ownedOrganizationsArgs<ExtArgs>
    communityDutyFor?: boolean | User$communityDutyForArgs<ExtArgs>
    communityAdmins?: boolean | User$communityAdminsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    radarPins?: boolean | User$radarPinsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    bio?: boolean
    phone?: boolean
    location?: boolean
    avatar?: boolean
    coverPhoto?: boolean
    profileVisibility?: boolean
    showPhone?: boolean
    showEmail?: boolean
    allowMessages?: boolean
    showOnline?: boolean
    verified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    lastSeen?: boolean
    passwordHash?: boolean
    vkId?: boolean
    vkAccessToken?: boolean
    okId?: boolean
    okAccessToken?: boolean
    mailruId?: boolean
    mailruAccessToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    bio?: boolean
    phone?: boolean
    location?: boolean
    avatar?: boolean
    coverPhoto?: boolean
    profileVisibility?: boolean
    showPhone?: boolean
    showEmail?: boolean
    allowMessages?: boolean
    showOnline?: boolean
    verified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    lastSeen?: boolean
    passwordHash?: boolean
    vkId?: boolean
    vkAccessToken?: boolean
    okId?: boolean
    okAccessToken?: boolean
    mailruId?: boolean
    mailruAccessToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    bio?: boolean
    phone?: boolean
    location?: boolean
    avatar?: boolean
    coverPhoto?: boolean
    profileVisibility?: boolean
    showPhone?: boolean
    showEmail?: boolean
    allowMessages?: boolean
    showOnline?: boolean
    verified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    lastSeen?: boolean
    passwordHash?: boolean
    vkId?: boolean
    vkAccessToken?: boolean
    okId?: boolean
    okAccessToken?: boolean
    mailruId?: boolean
    mailruAccessToken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastName" | "email" | "bio" | "phone" | "location" | "avatar" | "coverPhoto" | "profileVisibility" | "showPhone" | "showEmail" | "allowMessages" | "showOnline" | "verified" | "verifiedAt" | "createdAt" | "lastSeen" | "passwordHash" | "vkId" | "vkAccessToken" | "okId" | "okAccessToken" | "mailruId" | "mailruAccessToken", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vkAppSettings?: boolean | User$vkAppSettingsArgs<ExtArgs>
    organizationMembers?: boolean | User$organizationMembersArgs<ExtArgs>
    ownedOrganizations?: boolean | User$ownedOrganizationsArgs<ExtArgs>
    communityDutyFor?: boolean | User$communityDutyForArgs<ExtArgs>
    communityAdmins?: boolean | User$communityAdminsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    radarPins?: boolean | User$radarPinsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vkAppSettings: Prisma.$VkAppUserSettingsPayload<ExtArgs> | null
      organizationMembers: Prisma.$OrganizationMemberPayload<ExtArgs>[]
      ownedOrganizations: Prisma.$OrganizationPayload<ExtArgs>[]
      communityDutyFor: Prisma.$CommunityPayload<ExtArgs>[]
      communityAdmins: Prisma.$CommunityNotificationAdminPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      radarPins: Prisma.$RadarPinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lastName: string | null
      email: string
      bio: string | null
      phone: string | null
      location: string | null
      avatar: string | null
      coverPhoto: string | null
      profileVisibility: string | null
      showPhone: string | null
      showEmail: string | null
      allowMessages: string | null
      showOnline: string | null
      verified: boolean | null
      verifiedAt: Date | null
      createdAt: Date | null
      lastSeen: Date | null
      passwordHash: string
      vkId: number | null
      vkAccessToken: string | null
      okId: string | null
      okAccessToken: string | null
      mailruId: string | null
      mailruAccessToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vkAppSettings<T extends User$vkAppSettingsArgs<ExtArgs> = {}>(args?: Subset<T, User$vkAppSettingsArgs<ExtArgs>>): Prisma__VkAppUserSettingsClient<$Result.GetResult<Prisma.$VkAppUserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    organizationMembers<T extends User$organizationMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$organizationMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedOrganizations<T extends User$ownedOrganizationsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedOrganizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    communityDutyFor<T extends User$communityDutyForArgs<ExtArgs> = {}>(args?: Subset<T, User$communityDutyForArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    communityAdmins<T extends User$communityAdminsArgs<ExtArgs> = {}>(args?: Subset<T, User$communityAdminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityNotificationAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    radarPins<T extends User$radarPinsArgs<ExtArgs> = {}>(args?: Subset<T, User$radarPinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly coverPhoto: FieldRef<"User", 'String'>
    readonly profileVisibility: FieldRef<"User", 'String'>
    readonly showPhone: FieldRef<"User", 'String'>
    readonly showEmail: FieldRef<"User", 'String'>
    readonly allowMessages: FieldRef<"User", 'String'>
    readonly showOnline: FieldRef<"User", 'String'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly verifiedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastSeen: FieldRef<"User", 'DateTime'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly vkId: FieldRef<"User", 'Int'>
    readonly vkAccessToken: FieldRef<"User", 'String'>
    readonly okId: FieldRef<"User", 'String'>
    readonly okAccessToken: FieldRef<"User", 'String'>
    readonly mailruId: FieldRef<"User", 'String'>
    readonly mailruAccessToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.vkAppSettings
   */
  export type User$vkAppSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkAppUserSettings
     */
    select?: VkAppUserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkAppUserSettings
     */
    omit?: VkAppUserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkAppUserSettingsInclude<ExtArgs> | null
    where?: VkAppUserSettingsWhereInput
  }

  /**
   * User.organizationMembers
   */
  export type User$organizationMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * User.ownedOrganizations
   */
  export type User$ownedOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    cursor?: OrganizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * User.communityDutyFor
   */
  export type User$communityDutyForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * User.communityAdmins
   */
  export type User$communityAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminInclude<ExtArgs> | null
    where?: CommunityNotificationAdminWhereInput
    orderBy?: CommunityNotificationAdminOrderByWithRelationInput | CommunityNotificationAdminOrderByWithRelationInput[]
    cursor?: CommunityNotificationAdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityNotificationAdminScalarFieldEnum | CommunityNotificationAdminScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.radarPins
   */
  export type User$radarPinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinInclude<ExtArgs> | null
    where?: RadarPinWhereInput
    orderBy?: RadarPinOrderByWithRelationInput | RadarPinOrderByWithRelationInput[]
    cursor?: RadarPinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RadarPinScalarFieldEnum | RadarPinScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VkAppUserSettings
   */

  export type AggregateVkAppUserSettings = {
    _count: VkAppUserSettingsCountAggregateOutputType | null
    _avg: VkAppUserSettingsAvgAggregateOutputType | null
    _sum: VkAppUserSettingsSumAggregateOutputType | null
    _min: VkAppUserSettingsMinAggregateOutputType | null
    _max: VkAppUserSettingsMaxAggregateOutputType | null
  }

  export type VkAppUserSettingsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    homeLat: Decimal | null
    homeLng: Decimal | null
    onboardingProgress: number | null
  }

  export type VkAppUserSettingsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    homeLat: Decimal | null
    homeLng: Decimal | null
    onboardingProgress: number | null
  }

  export type VkAppUserSettingsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    roleLabel: string | null
    contactTelegram: string | null
    contactEmail: string | null
    homeCityName: string | null
    homeLat: Decimal | null
    homeLng: Decimal | null
    onboardingProgress: number | null
    onboardingCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VkAppUserSettingsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    roleLabel: string | null
    contactTelegram: string | null
    contactEmail: string | null
    homeCityName: string | null
    homeLat: Decimal | null
    homeLng: Decimal | null
    onboardingProgress: number | null
    onboardingCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VkAppUserSettingsCountAggregateOutputType = {
    id: number
    userId: number
    roleLabel: number
    contactTelegram: number
    contactEmail: number
    homeCityName: number
    homeLat: number
    homeLng: number
    preferences: number
    onboardingProgress: number
    onboardingCompleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VkAppUserSettingsAvgAggregateInputType = {
    id?: true
    userId?: true
    homeLat?: true
    homeLng?: true
    onboardingProgress?: true
  }

  export type VkAppUserSettingsSumAggregateInputType = {
    id?: true
    userId?: true
    homeLat?: true
    homeLng?: true
    onboardingProgress?: true
  }

  export type VkAppUserSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    roleLabel?: true
    contactTelegram?: true
    contactEmail?: true
    homeCityName?: true
    homeLat?: true
    homeLng?: true
    onboardingProgress?: true
    onboardingCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VkAppUserSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    roleLabel?: true
    contactTelegram?: true
    contactEmail?: true
    homeCityName?: true
    homeLat?: true
    homeLng?: true
    onboardingProgress?: true
    onboardingCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VkAppUserSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    roleLabel?: true
    contactTelegram?: true
    contactEmail?: true
    homeCityName?: true
    homeLat?: true
    homeLng?: true
    preferences?: true
    onboardingProgress?: true
    onboardingCompleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VkAppUserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VkAppUserSettings to aggregate.
     */
    where?: VkAppUserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VkAppUserSettings to fetch.
     */
    orderBy?: VkAppUserSettingsOrderByWithRelationInput | VkAppUserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VkAppUserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VkAppUserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VkAppUserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VkAppUserSettings
    **/
    _count?: true | VkAppUserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VkAppUserSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VkAppUserSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VkAppUserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VkAppUserSettingsMaxAggregateInputType
  }

  export type GetVkAppUserSettingsAggregateType<T extends VkAppUserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateVkAppUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVkAppUserSettings[P]>
      : GetScalarType<T[P], AggregateVkAppUserSettings[P]>
  }




  export type VkAppUserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VkAppUserSettingsWhereInput
    orderBy?: VkAppUserSettingsOrderByWithAggregationInput | VkAppUserSettingsOrderByWithAggregationInput[]
    by: VkAppUserSettingsScalarFieldEnum[] | VkAppUserSettingsScalarFieldEnum
    having?: VkAppUserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VkAppUserSettingsCountAggregateInputType | true
    _avg?: VkAppUserSettingsAvgAggregateInputType
    _sum?: VkAppUserSettingsSumAggregateInputType
    _min?: VkAppUserSettingsMinAggregateInputType
    _max?: VkAppUserSettingsMaxAggregateInputType
  }

  export type VkAppUserSettingsGroupByOutputType = {
    id: number
    userId: number
    roleLabel: string | null
    contactTelegram: string | null
    contactEmail: string | null
    homeCityName: string | null
    homeLat: Decimal | null
    homeLng: Decimal | null
    preferences: JsonValue
    onboardingProgress: number
    onboardingCompleted: boolean
    createdAt: Date | null
    updatedAt: Date
    _count: VkAppUserSettingsCountAggregateOutputType | null
    _avg: VkAppUserSettingsAvgAggregateOutputType | null
    _sum: VkAppUserSettingsSumAggregateOutputType | null
    _min: VkAppUserSettingsMinAggregateOutputType | null
    _max: VkAppUserSettingsMaxAggregateOutputType | null
  }

  type GetVkAppUserSettingsGroupByPayload<T extends VkAppUserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VkAppUserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VkAppUserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VkAppUserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], VkAppUserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type VkAppUserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleLabel?: boolean
    contactTelegram?: boolean
    contactEmail?: boolean
    homeCityName?: boolean
    homeLat?: boolean
    homeLng?: boolean
    preferences?: boolean
    onboardingProgress?: boolean
    onboardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vkAppUserSettings"]>

  export type VkAppUserSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleLabel?: boolean
    contactTelegram?: boolean
    contactEmail?: boolean
    homeCityName?: boolean
    homeLat?: boolean
    homeLng?: boolean
    preferences?: boolean
    onboardingProgress?: boolean
    onboardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vkAppUserSettings"]>

  export type VkAppUserSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleLabel?: boolean
    contactTelegram?: boolean
    contactEmail?: boolean
    homeCityName?: boolean
    homeLat?: boolean
    homeLng?: boolean
    preferences?: boolean
    onboardingProgress?: boolean
    onboardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vkAppUserSettings"]>

  export type VkAppUserSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    roleLabel?: boolean
    contactTelegram?: boolean
    contactEmail?: boolean
    homeCityName?: boolean
    homeLat?: boolean
    homeLng?: boolean
    preferences?: boolean
    onboardingProgress?: boolean
    onboardingCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VkAppUserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roleLabel" | "contactTelegram" | "contactEmail" | "homeCityName" | "homeLat" | "homeLng" | "preferences" | "onboardingProgress" | "onboardingCompleted" | "createdAt" | "updatedAt", ExtArgs["result"]["vkAppUserSettings"]>
  export type VkAppUserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VkAppUserSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VkAppUserSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VkAppUserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VkAppUserSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      roleLabel: string | null
      contactTelegram: string | null
      contactEmail: string | null
      homeCityName: string | null
      homeLat: Prisma.Decimal | null
      homeLng: Prisma.Decimal | null
      preferences: Prisma.JsonValue
      onboardingProgress: number
      onboardingCompleted: boolean
      createdAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["vkAppUserSettings"]>
    composites: {}
  }

  type VkAppUserSettingsGetPayload<S extends boolean | null | undefined | VkAppUserSettingsDefaultArgs> = $Result.GetResult<Prisma.$VkAppUserSettingsPayload, S>

  type VkAppUserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VkAppUserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VkAppUserSettingsCountAggregateInputType | true
    }

  export interface VkAppUserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VkAppUserSettings'], meta: { name: 'VkAppUserSettings' } }
    /**
     * Find zero or one VkAppUserSettings that matches the filter.
     * @param {VkAppUserSettingsFindUniqueArgs} args - Arguments to find a VkAppUserSettings
     * @example
     * // Get one VkAppUserSettings
     * const vkAppUserSettings = await prisma.vkAppUserSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VkAppUserSettingsFindUniqueArgs>(args: SelectSubset<T, VkAppUserSettingsFindUniqueArgs<ExtArgs>>): Prisma__VkAppUserSettingsClient<$Result.GetResult<Prisma.$VkAppUserSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VkAppUserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VkAppUserSettingsFindUniqueOrThrowArgs} args - Arguments to find a VkAppUserSettings
     * @example
     * // Get one VkAppUserSettings
     * const vkAppUserSettings = await prisma.vkAppUserSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VkAppUserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, VkAppUserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VkAppUserSettingsClient<$Result.GetResult<Prisma.$VkAppUserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VkAppUserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkAppUserSettingsFindFirstArgs} args - Arguments to find a VkAppUserSettings
     * @example
     * // Get one VkAppUserSettings
     * const vkAppUserSettings = await prisma.vkAppUserSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VkAppUserSettingsFindFirstArgs>(args?: SelectSubset<T, VkAppUserSettingsFindFirstArgs<ExtArgs>>): Prisma__VkAppUserSettingsClient<$Result.GetResult<Prisma.$VkAppUserSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VkAppUserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkAppUserSettingsFindFirstOrThrowArgs} args - Arguments to find a VkAppUserSettings
     * @example
     * // Get one VkAppUserSettings
     * const vkAppUserSettings = await prisma.vkAppUserSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VkAppUserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, VkAppUserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__VkAppUserSettingsClient<$Result.GetResult<Prisma.$VkAppUserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VkAppUserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkAppUserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VkAppUserSettings
     * const vkAppUserSettings = await prisma.vkAppUserSettings.findMany()
     * 
     * // Get first 10 VkAppUserSettings
     * const vkAppUserSettings = await prisma.vkAppUserSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vkAppUserSettingsWithIdOnly = await prisma.vkAppUserSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VkAppUserSettingsFindManyArgs>(args?: SelectSubset<T, VkAppUserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VkAppUserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VkAppUserSettings.
     * @param {VkAppUserSettingsCreateArgs} args - Arguments to create a VkAppUserSettings.
     * @example
     * // Create one VkAppUserSettings
     * const VkAppUserSettings = await prisma.vkAppUserSettings.create({
     *   data: {
     *     // ... data to create a VkAppUserSettings
     *   }
     * })
     * 
     */
    create<T extends VkAppUserSettingsCreateArgs>(args: SelectSubset<T, VkAppUserSettingsCreateArgs<ExtArgs>>): Prisma__VkAppUserSettingsClient<$Result.GetResult<Prisma.$VkAppUserSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VkAppUserSettings.
     * @param {VkAppUserSettingsCreateManyArgs} args - Arguments to create many VkAppUserSettings.
     * @example
     * // Create many VkAppUserSettings
     * const vkAppUserSettings = await prisma.vkAppUserSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VkAppUserSettingsCreateManyArgs>(args?: SelectSubset<T, VkAppUserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VkAppUserSettings and returns the data saved in the database.
     * @param {VkAppUserSettingsCreateManyAndReturnArgs} args - Arguments to create many VkAppUserSettings.
     * @example
     * // Create many VkAppUserSettings
     * const vkAppUserSettings = await prisma.vkAppUserSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VkAppUserSettings and only return the `id`
     * const vkAppUserSettingsWithIdOnly = await prisma.vkAppUserSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VkAppUserSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, VkAppUserSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VkAppUserSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VkAppUserSettings.
     * @param {VkAppUserSettingsDeleteArgs} args - Arguments to delete one VkAppUserSettings.
     * @example
     * // Delete one VkAppUserSettings
     * const VkAppUserSettings = await prisma.vkAppUserSettings.delete({
     *   where: {
     *     // ... filter to delete one VkAppUserSettings
     *   }
     * })
     * 
     */
    delete<T extends VkAppUserSettingsDeleteArgs>(args: SelectSubset<T, VkAppUserSettingsDeleteArgs<ExtArgs>>): Prisma__VkAppUserSettingsClient<$Result.GetResult<Prisma.$VkAppUserSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VkAppUserSettings.
     * @param {VkAppUserSettingsUpdateArgs} args - Arguments to update one VkAppUserSettings.
     * @example
     * // Update one VkAppUserSettings
     * const vkAppUserSettings = await prisma.vkAppUserSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VkAppUserSettingsUpdateArgs>(args: SelectSubset<T, VkAppUserSettingsUpdateArgs<ExtArgs>>): Prisma__VkAppUserSettingsClient<$Result.GetResult<Prisma.$VkAppUserSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VkAppUserSettings.
     * @param {VkAppUserSettingsDeleteManyArgs} args - Arguments to filter VkAppUserSettings to delete.
     * @example
     * // Delete a few VkAppUserSettings
     * const { count } = await prisma.vkAppUserSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VkAppUserSettingsDeleteManyArgs>(args?: SelectSubset<T, VkAppUserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VkAppUserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkAppUserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VkAppUserSettings
     * const vkAppUserSettings = await prisma.vkAppUserSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VkAppUserSettingsUpdateManyArgs>(args: SelectSubset<T, VkAppUserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VkAppUserSettings and returns the data updated in the database.
     * @param {VkAppUserSettingsUpdateManyAndReturnArgs} args - Arguments to update many VkAppUserSettings.
     * @example
     * // Update many VkAppUserSettings
     * const vkAppUserSettings = await prisma.vkAppUserSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VkAppUserSettings and only return the `id`
     * const vkAppUserSettingsWithIdOnly = await prisma.vkAppUserSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VkAppUserSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, VkAppUserSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VkAppUserSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VkAppUserSettings.
     * @param {VkAppUserSettingsUpsertArgs} args - Arguments to update or create a VkAppUserSettings.
     * @example
     * // Update or create a VkAppUserSettings
     * const vkAppUserSettings = await prisma.vkAppUserSettings.upsert({
     *   create: {
     *     // ... data to create a VkAppUserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VkAppUserSettings we want to update
     *   }
     * })
     */
    upsert<T extends VkAppUserSettingsUpsertArgs>(args: SelectSubset<T, VkAppUserSettingsUpsertArgs<ExtArgs>>): Prisma__VkAppUserSettingsClient<$Result.GetResult<Prisma.$VkAppUserSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VkAppUserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkAppUserSettingsCountArgs} args - Arguments to filter VkAppUserSettings to count.
     * @example
     * // Count the number of VkAppUserSettings
     * const count = await prisma.vkAppUserSettings.count({
     *   where: {
     *     // ... the filter for the VkAppUserSettings we want to count
     *   }
     * })
    **/
    count<T extends VkAppUserSettingsCountArgs>(
      args?: Subset<T, VkAppUserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VkAppUserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VkAppUserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkAppUserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VkAppUserSettingsAggregateArgs>(args: Subset<T, VkAppUserSettingsAggregateArgs>): Prisma.PrismaPromise<GetVkAppUserSettingsAggregateType<T>>

    /**
     * Group by VkAppUserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkAppUserSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VkAppUserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VkAppUserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: VkAppUserSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VkAppUserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVkAppUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VkAppUserSettings model
   */
  readonly fields: VkAppUserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VkAppUserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VkAppUserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VkAppUserSettings model
   */
  interface VkAppUserSettingsFieldRefs {
    readonly id: FieldRef<"VkAppUserSettings", 'Int'>
    readonly userId: FieldRef<"VkAppUserSettings", 'Int'>
    readonly roleLabel: FieldRef<"VkAppUserSettings", 'String'>
    readonly contactTelegram: FieldRef<"VkAppUserSettings", 'String'>
    readonly contactEmail: FieldRef<"VkAppUserSettings", 'String'>
    readonly homeCityName: FieldRef<"VkAppUserSettings", 'String'>
    readonly homeLat: FieldRef<"VkAppUserSettings", 'Decimal'>
    readonly homeLng: FieldRef<"VkAppUserSettings", 'Decimal'>
    readonly preferences: FieldRef<"VkAppUserSettings", 'Json'>
    readonly onboardingProgress: FieldRef<"VkAppUserSettings", 'Int'>
    readonly onboardingCompleted: FieldRef<"VkAppUserSettings", 'Boolean'>
    readonly createdAt: FieldRef<"VkAppUserSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"VkAppUserSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VkAppUserSettings findUnique
   */
  export type VkAppUserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkAppUserSettings
     */
    select?: VkAppUserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkAppUserSettings
     */
    omit?: VkAppUserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkAppUserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which VkAppUserSettings to fetch.
     */
    where: VkAppUserSettingsWhereUniqueInput
  }

  /**
   * VkAppUserSettings findUniqueOrThrow
   */
  export type VkAppUserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkAppUserSettings
     */
    select?: VkAppUserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkAppUserSettings
     */
    omit?: VkAppUserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkAppUserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which VkAppUserSettings to fetch.
     */
    where: VkAppUserSettingsWhereUniqueInput
  }

  /**
   * VkAppUserSettings findFirst
   */
  export type VkAppUserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkAppUserSettings
     */
    select?: VkAppUserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkAppUserSettings
     */
    omit?: VkAppUserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkAppUserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which VkAppUserSettings to fetch.
     */
    where?: VkAppUserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VkAppUserSettings to fetch.
     */
    orderBy?: VkAppUserSettingsOrderByWithRelationInput | VkAppUserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VkAppUserSettings.
     */
    cursor?: VkAppUserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VkAppUserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VkAppUserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VkAppUserSettings.
     */
    distinct?: VkAppUserSettingsScalarFieldEnum | VkAppUserSettingsScalarFieldEnum[]
  }

  /**
   * VkAppUserSettings findFirstOrThrow
   */
  export type VkAppUserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkAppUserSettings
     */
    select?: VkAppUserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkAppUserSettings
     */
    omit?: VkAppUserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkAppUserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which VkAppUserSettings to fetch.
     */
    where?: VkAppUserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VkAppUserSettings to fetch.
     */
    orderBy?: VkAppUserSettingsOrderByWithRelationInput | VkAppUserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VkAppUserSettings.
     */
    cursor?: VkAppUserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VkAppUserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VkAppUserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VkAppUserSettings.
     */
    distinct?: VkAppUserSettingsScalarFieldEnum | VkAppUserSettingsScalarFieldEnum[]
  }

  /**
   * VkAppUserSettings findMany
   */
  export type VkAppUserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkAppUserSettings
     */
    select?: VkAppUserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkAppUserSettings
     */
    omit?: VkAppUserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkAppUserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which VkAppUserSettings to fetch.
     */
    where?: VkAppUserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VkAppUserSettings to fetch.
     */
    orderBy?: VkAppUserSettingsOrderByWithRelationInput | VkAppUserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VkAppUserSettings.
     */
    cursor?: VkAppUserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VkAppUserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VkAppUserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VkAppUserSettings.
     */
    distinct?: VkAppUserSettingsScalarFieldEnum | VkAppUserSettingsScalarFieldEnum[]
  }

  /**
   * VkAppUserSettings create
   */
  export type VkAppUserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkAppUserSettings
     */
    select?: VkAppUserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkAppUserSettings
     */
    omit?: VkAppUserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkAppUserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a VkAppUserSettings.
     */
    data: XOR<VkAppUserSettingsCreateInput, VkAppUserSettingsUncheckedCreateInput>
  }

  /**
   * VkAppUserSettings createMany
   */
  export type VkAppUserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VkAppUserSettings.
     */
    data: VkAppUserSettingsCreateManyInput | VkAppUserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VkAppUserSettings createManyAndReturn
   */
  export type VkAppUserSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkAppUserSettings
     */
    select?: VkAppUserSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VkAppUserSettings
     */
    omit?: VkAppUserSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many VkAppUserSettings.
     */
    data: VkAppUserSettingsCreateManyInput | VkAppUserSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkAppUserSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VkAppUserSettings update
   */
  export type VkAppUserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkAppUserSettings
     */
    select?: VkAppUserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkAppUserSettings
     */
    omit?: VkAppUserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkAppUserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a VkAppUserSettings.
     */
    data: XOR<VkAppUserSettingsUpdateInput, VkAppUserSettingsUncheckedUpdateInput>
    /**
     * Choose, which VkAppUserSettings to update.
     */
    where: VkAppUserSettingsWhereUniqueInput
  }

  /**
   * VkAppUserSettings updateMany
   */
  export type VkAppUserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VkAppUserSettings.
     */
    data: XOR<VkAppUserSettingsUpdateManyMutationInput, VkAppUserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which VkAppUserSettings to update
     */
    where?: VkAppUserSettingsWhereInput
    /**
     * Limit how many VkAppUserSettings to update.
     */
    limit?: number
  }

  /**
   * VkAppUserSettings updateManyAndReturn
   */
  export type VkAppUserSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkAppUserSettings
     */
    select?: VkAppUserSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VkAppUserSettings
     */
    omit?: VkAppUserSettingsOmit<ExtArgs> | null
    /**
     * The data used to update VkAppUserSettings.
     */
    data: XOR<VkAppUserSettingsUpdateManyMutationInput, VkAppUserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which VkAppUserSettings to update
     */
    where?: VkAppUserSettingsWhereInput
    /**
     * Limit how many VkAppUserSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkAppUserSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VkAppUserSettings upsert
   */
  export type VkAppUserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkAppUserSettings
     */
    select?: VkAppUserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkAppUserSettings
     */
    omit?: VkAppUserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkAppUserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the VkAppUserSettings to update in case it exists.
     */
    where: VkAppUserSettingsWhereUniqueInput
    /**
     * In case the VkAppUserSettings found by the `where` argument doesn't exist, create a new VkAppUserSettings with this data.
     */
    create: XOR<VkAppUserSettingsCreateInput, VkAppUserSettingsUncheckedCreateInput>
    /**
     * In case the VkAppUserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VkAppUserSettingsUpdateInput, VkAppUserSettingsUncheckedUpdateInput>
  }

  /**
   * VkAppUserSettings delete
   */
  export type VkAppUserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkAppUserSettings
     */
    select?: VkAppUserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkAppUserSettings
     */
    omit?: VkAppUserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkAppUserSettingsInclude<ExtArgs> | null
    /**
     * Filter which VkAppUserSettings to delete.
     */
    where: VkAppUserSettingsWhereUniqueInput
  }

  /**
   * VkAppUserSettings deleteMany
   */
  export type VkAppUserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VkAppUserSettings to delete
     */
    where?: VkAppUserSettingsWhereInput
    /**
     * Limit how many VkAppUserSettings to delete.
     */
    limit?: number
  }

  /**
   * VkAppUserSettings without action
   */
  export type VkAppUserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkAppUserSettings
     */
    select?: VkAppUserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkAppUserSettings
     */
    omit?: VkAppUserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkAppUserSettingsInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
    ownerUserId: number | null
    geoLat: Decimal | null
    geoLng: Decimal | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
    ownerUserId: number | null
    geoLat: Decimal | null
    geoLng: Decimal | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    description: string | null
    logo: string | null
    website: string | null
    phone: string | null
    email: string | null
    address: string | null
    city: string | null
    region: string | null
    createdAt: Date | null
    updatedAt: Date | null
    shortName: string | null
    bio: string | null
    coverPhoto: string | null
    addressCity: string | null
    addressRegion: string | null
    isVerified: boolean | null
    ownerUserId: number | null
    status: string | null
    isActive: boolean | null
    profileVisibility: string | null
    showPhone: string | null
    showEmail: string | null
    allowMessages: string | null
    geoLat: Decimal | null
    geoLng: Decimal | null
    networkRole: string | null
    vkLink: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    description: string | null
    logo: string | null
    website: string | null
    phone: string | null
    email: string | null
    address: string | null
    city: string | null
    region: string | null
    createdAt: Date | null
    updatedAt: Date | null
    shortName: string | null
    bio: string | null
    coverPhoto: string | null
    addressCity: string | null
    addressRegion: string | null
    isVerified: boolean | null
    ownerUserId: number | null
    status: string | null
    isActive: boolean | null
    profileVisibility: string | null
    showPhone: string | null
    showEmail: string | null
    allowMessages: string | null
    geoLat: Decimal | null
    geoLng: Decimal | null
    networkRole: string | null
    vkLink: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    type: number
    description: number
    logo: number
    website: number
    phone: number
    email: number
    address: number
    city: number
    region: number
    createdAt: number
    updatedAt: number
    shortName: number
    bio: number
    coverPhoto: number
    addressCity: number
    addressRegion: number
    isVerified: number
    ownerUserId: number
    status: number
    isActive: number
    profileVisibility: number
    showPhone: number
    showEmail: number
    allowMessages: number
    geoLat: number
    geoLng: number
    networkRole: number
    vkLink: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
    ownerUserId?: true
    geoLat?: true
    geoLng?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
    ownerUserId?: true
    geoLat?: true
    geoLng?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    logo?: true
    website?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    region?: true
    createdAt?: true
    updatedAt?: true
    shortName?: true
    bio?: true
    coverPhoto?: true
    addressCity?: true
    addressRegion?: true
    isVerified?: true
    ownerUserId?: true
    status?: true
    isActive?: true
    profileVisibility?: true
    showPhone?: true
    showEmail?: true
    allowMessages?: true
    geoLat?: true
    geoLng?: true
    networkRole?: true
    vkLink?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    logo?: true
    website?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    region?: true
    createdAt?: true
    updatedAt?: true
    shortName?: true
    bio?: true
    coverPhoto?: true
    addressCity?: true
    addressRegion?: true
    isVerified?: true
    ownerUserId?: true
    status?: true
    isActive?: true
    profileVisibility?: true
    showPhone?: true
    showEmail?: true
    allowMessages?: true
    geoLat?: true
    geoLng?: true
    networkRole?: true
    vkLink?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    logo?: true
    website?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    region?: true
    createdAt?: true
    updatedAt?: true
    shortName?: true
    bio?: true
    coverPhoto?: true
    addressCity?: true
    addressRegion?: true
    isVerified?: true
    ownerUserId?: true
    status?: true
    isActive?: true
    profileVisibility?: true
    showPhone?: true
    showEmail?: true
    allowMessages?: true
    geoLat?: true
    geoLng?: true
    networkRole?: true
    vkLink?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    name: string
    type: string
    description: string | null
    logo: string | null
    website: string | null
    phone: string | null
    email: string | null
    address: string | null
    city: string | null
    region: string | null
    createdAt: Date | null
    updatedAt: Date | null
    shortName: string | null
    bio: string | null
    coverPhoto: string | null
    addressCity: string | null
    addressRegion: string | null
    isVerified: boolean | null
    ownerUserId: number | null
    status: string | null
    isActive: boolean | null
    profileVisibility: string | null
    showPhone: string | null
    showEmail: string | null
    allowMessages: string | null
    geoLat: Decimal | null
    geoLng: Decimal | null
    networkRole: string
    vkLink: string | null
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    logo?: boolean
    website?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shortName?: boolean
    bio?: boolean
    coverPhoto?: boolean
    addressCity?: boolean
    addressRegion?: boolean
    isVerified?: boolean
    ownerUserId?: boolean
    status?: boolean
    isActive?: boolean
    profileVisibility?: boolean
    showPhone?: boolean
    showEmail?: boolean
    allowMessages?: boolean
    geoLat?: boolean
    geoLng?: boolean
    networkRole?: boolean
    vkLink?: boolean
    owner?: boolean | Organization$ownerArgs<ExtArgs>
    members?: boolean | Organization$membersArgs<ExtArgs>
    community?: boolean | Organization$communityArgs<ExtArgs>
    communityAdmins?: boolean | Organization$communityAdminsArgs<ExtArgs>
    postPublications?: boolean | Organization$postPublicationsArgs<ExtArgs>
    radarPins?: boolean | Organization$radarPinsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    logo?: boolean
    website?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shortName?: boolean
    bio?: boolean
    coverPhoto?: boolean
    addressCity?: boolean
    addressRegion?: boolean
    isVerified?: boolean
    ownerUserId?: boolean
    status?: boolean
    isActive?: boolean
    profileVisibility?: boolean
    showPhone?: boolean
    showEmail?: boolean
    allowMessages?: boolean
    geoLat?: boolean
    geoLng?: boolean
    networkRole?: boolean
    vkLink?: boolean
    owner?: boolean | Organization$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    logo?: boolean
    website?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shortName?: boolean
    bio?: boolean
    coverPhoto?: boolean
    addressCity?: boolean
    addressRegion?: boolean
    isVerified?: boolean
    ownerUserId?: boolean
    status?: boolean
    isActive?: boolean
    profileVisibility?: boolean
    showPhone?: boolean
    showEmail?: boolean
    allowMessages?: boolean
    geoLat?: boolean
    geoLng?: boolean
    networkRole?: boolean
    vkLink?: boolean
    owner?: boolean | Organization$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    logo?: boolean
    website?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shortName?: boolean
    bio?: boolean
    coverPhoto?: boolean
    addressCity?: boolean
    addressRegion?: boolean
    isVerified?: boolean
    ownerUserId?: boolean
    status?: boolean
    isActive?: boolean
    profileVisibility?: boolean
    showPhone?: boolean
    showEmail?: boolean
    allowMessages?: boolean
    geoLat?: boolean
    geoLng?: boolean
    networkRole?: boolean
    vkLink?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "description" | "logo" | "website" | "phone" | "email" | "address" | "city" | "region" | "createdAt" | "updatedAt" | "shortName" | "bio" | "coverPhoto" | "addressCity" | "addressRegion" | "isVerified" | "ownerUserId" | "status" | "isActive" | "profileVisibility" | "showPhone" | "showEmail" | "allowMessages" | "geoLat" | "geoLng" | "networkRole" | "vkLink", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Organization$ownerArgs<ExtArgs>
    members?: boolean | Organization$membersArgs<ExtArgs>
    community?: boolean | Organization$communityArgs<ExtArgs>
    communityAdmins?: boolean | Organization$communityAdminsArgs<ExtArgs>
    postPublications?: boolean | Organization$postPublicationsArgs<ExtArgs>
    radarPins?: boolean | Organization$radarPinsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Organization$ownerArgs<ExtArgs>
  }
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Organization$ownerArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      members: Prisma.$OrganizationMemberPayload<ExtArgs>[]
      community: Prisma.$CommunityPayload<ExtArgs> | null
      communityAdmins: Prisma.$CommunityNotificationAdminPayload<ExtArgs>[]
      postPublications: Prisma.$PostPublicationPayload<ExtArgs>[]
      radarPins: Prisma.$RadarPinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      description: string | null
      logo: string | null
      website: string | null
      phone: string | null
      email: string | null
      address: string | null
      city: string | null
      region: string | null
      createdAt: Date | null
      updatedAt: Date | null
      shortName: string | null
      bio: string | null
      coverPhoto: string | null
      addressCity: string | null
      addressRegion: string | null
      isVerified: boolean | null
      ownerUserId: number | null
      status: string | null
      isActive: boolean | null
      profileVisibility: string | null
      showPhone: string | null
      showEmail: string | null
      allowMessages: string | null
      geoLat: Prisma.Decimal | null
      geoLng: Prisma.Decimal | null
      networkRole: string
      vkLink: string | null
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends Organization$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Organization$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends Organization$membersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    community<T extends Organization$communityArgs<ExtArgs> = {}>(args?: Subset<T, Organization$communityArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    communityAdmins<T extends Organization$communityAdminsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$communityAdminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityNotificationAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postPublications<T extends Organization$postPublicationsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$postPublicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    radarPins<T extends Organization$radarPinsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$radarPinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'Int'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly type: FieldRef<"Organization", 'String'>
    readonly description: FieldRef<"Organization", 'String'>
    readonly logo: FieldRef<"Organization", 'String'>
    readonly website: FieldRef<"Organization", 'String'>
    readonly phone: FieldRef<"Organization", 'String'>
    readonly email: FieldRef<"Organization", 'String'>
    readonly address: FieldRef<"Organization", 'String'>
    readonly city: FieldRef<"Organization", 'String'>
    readonly region: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
    readonly shortName: FieldRef<"Organization", 'String'>
    readonly bio: FieldRef<"Organization", 'String'>
    readonly coverPhoto: FieldRef<"Organization", 'String'>
    readonly addressCity: FieldRef<"Organization", 'String'>
    readonly addressRegion: FieldRef<"Organization", 'String'>
    readonly isVerified: FieldRef<"Organization", 'Boolean'>
    readonly ownerUserId: FieldRef<"Organization", 'Int'>
    readonly status: FieldRef<"Organization", 'String'>
    readonly isActive: FieldRef<"Organization", 'Boolean'>
    readonly profileVisibility: FieldRef<"Organization", 'String'>
    readonly showPhone: FieldRef<"Organization", 'String'>
    readonly showEmail: FieldRef<"Organization", 'String'>
    readonly allowMessages: FieldRef<"Organization", 'String'>
    readonly geoLat: FieldRef<"Organization", 'Decimal'>
    readonly geoLng: FieldRef<"Organization", 'Decimal'>
    readonly networkRole: FieldRef<"Organization", 'String'>
    readonly vkLink: FieldRef<"Organization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.owner
   */
  export type Organization$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Organization.members
   */
  export type Organization$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * Organization.community
   */
  export type Organization$communityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
  }

  /**
   * Organization.communityAdmins
   */
  export type Organization$communityAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminInclude<ExtArgs> | null
    where?: CommunityNotificationAdminWhereInput
    orderBy?: CommunityNotificationAdminOrderByWithRelationInput | CommunityNotificationAdminOrderByWithRelationInput[]
    cursor?: CommunityNotificationAdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityNotificationAdminScalarFieldEnum | CommunityNotificationAdminScalarFieldEnum[]
  }

  /**
   * Organization.postPublications
   */
  export type Organization$postPublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationInclude<ExtArgs> | null
    where?: PostPublicationWhereInput
    orderBy?: PostPublicationOrderByWithRelationInput | PostPublicationOrderByWithRelationInput[]
    cursor?: PostPublicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostPublicationScalarFieldEnum | PostPublicationScalarFieldEnum[]
  }

  /**
   * Organization.radarPins
   */
  export type Organization$radarPinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinInclude<ExtArgs> | null
    where?: RadarPinWhereInput
    orderBy?: RadarPinOrderByWithRelationInput | RadarPinOrderByWithRelationInput[]
    cursor?: RadarPinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RadarPinScalarFieldEnum | RadarPinScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationMember
   */

  export type AggregateOrganizationMember = {
    _count: OrganizationMemberCountAggregateOutputType | null
    _avg: OrganizationMemberAvgAggregateOutputType | null
    _sum: OrganizationMemberSumAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  export type OrganizationMemberAvgAggregateOutputType = {
    id: number | null
    organizationId: number | null
    userId: number | null
  }

  export type OrganizationMemberSumAggregateOutputType = {
    id: number | null
    organizationId: number | null
    userId: number | null
  }

  export type OrganizationMemberMinAggregateOutputType = {
    id: number | null
    organizationId: number | null
    userId: number | null
    role: string | null
    position: string | null
    canPost: boolean | null
    joinedAt: Date | null
    orgAvatar: string | null
    isPublic: boolean | null
  }

  export type OrganizationMemberMaxAggregateOutputType = {
    id: number | null
    organizationId: number | null
    userId: number | null
    role: string | null
    position: string | null
    canPost: boolean | null
    joinedAt: Date | null
    orgAvatar: string | null
    isPublic: boolean | null
  }

  export type OrganizationMemberCountAggregateOutputType = {
    id: number
    organizationId: number
    userId: number
    role: number
    position: number
    canPost: number
    joinedAt: number
    orgAvatar: number
    permissions: number
    isPublic: number
    _all: number
  }


  export type OrganizationMemberAvgAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
  }

  export type OrganizationMemberSumAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
  }

  export type OrganizationMemberMinAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    role?: true
    position?: true
    canPost?: true
    joinedAt?: true
    orgAvatar?: true
    isPublic?: true
  }

  export type OrganizationMemberMaxAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    role?: true
    position?: true
    canPost?: true
    joinedAt?: true
    orgAvatar?: true
    isPublic?: true
  }

  export type OrganizationMemberCountAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    role?: true
    position?: true
    canPost?: true
    joinedAt?: true
    orgAvatar?: true
    permissions?: true
    isPublic?: true
    _all?: true
  }

  export type OrganizationMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMember to aggregate.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationMembers
    **/
    _count?: true | OrganizationMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type GetOrganizationMemberAggregateType<T extends OrganizationMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationMember[P]>
      : GetScalarType<T[P], AggregateOrganizationMember[P]>
  }




  export type OrganizationMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithAggregationInput | OrganizationMemberOrderByWithAggregationInput[]
    by: OrganizationMemberScalarFieldEnum[] | OrganizationMemberScalarFieldEnum
    having?: OrganizationMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationMemberCountAggregateInputType | true
    _avg?: OrganizationMemberAvgAggregateInputType
    _sum?: OrganizationMemberSumAggregateInputType
    _min?: OrganizationMemberMinAggregateInputType
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type OrganizationMemberGroupByOutputType = {
    id: number
    organizationId: number
    userId: number
    role: string | null
    position: string | null
    canPost: boolean | null
    joinedAt: Date | null
    orgAvatar: string | null
    permissions: JsonValue | null
    isPublic: boolean | null
    _count: OrganizationMemberCountAggregateOutputType | null
    _avg: OrganizationMemberAvgAggregateOutputType | null
    _sum: OrganizationMemberSumAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  type GetOrganizationMemberGroupByPayload<T extends OrganizationMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    role?: boolean
    position?: boolean
    canPost?: boolean
    joinedAt?: boolean
    orgAvatar?: boolean
    permissions?: boolean
    isPublic?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    role?: boolean
    position?: boolean
    canPost?: boolean
    joinedAt?: boolean
    orgAvatar?: boolean
    permissions?: boolean
    isPublic?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    role?: boolean
    position?: boolean
    canPost?: boolean
    joinedAt?: boolean
    orgAvatar?: boolean
    permissions?: boolean
    isPublic?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectScalar = {
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    role?: boolean
    position?: boolean
    canPost?: boolean
    joinedAt?: boolean
    orgAvatar?: boolean
    permissions?: boolean
    isPublic?: boolean
  }

  export type OrganizationMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "userId" | "role" | "position" | "canPost" | "joinedAt" | "orgAvatar" | "permissions" | "isPublic", ExtArgs["result"]["organizationMember"]>
  export type OrganizationMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrganizationMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationMember"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizationId: number
      userId: number
      role: string | null
      position: string | null
      canPost: boolean | null
      joinedAt: Date | null
      orgAvatar: string | null
      permissions: Prisma.JsonValue | null
      isPublic: boolean | null
    }, ExtArgs["result"]["organizationMember"]>
    composites: {}
  }

  type OrganizationMemberGetPayload<S extends boolean | null | undefined | OrganizationMemberDefaultArgs> = $Result.GetResult<Prisma.$OrganizationMemberPayload, S>

  type OrganizationMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationMemberCountAggregateInputType | true
    }

  export interface OrganizationMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationMember'], meta: { name: 'OrganizationMember' } }
    /**
     * Find zero or one OrganizationMember that matches the filter.
     * @param {OrganizationMemberFindUniqueArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationMemberFindUniqueArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationMemberFindUniqueOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationMemberFindFirstArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany()
     * 
     * // Get first 10 OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationMemberFindManyArgs>(args?: SelectSubset<T, OrganizationMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationMember.
     * @param {OrganizationMemberCreateArgs} args - Arguments to create a OrganizationMember.
     * @example
     * // Create one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.create({
     *   data: {
     *     // ... data to create a OrganizationMember
     *   }
     * })
     * 
     */
    create<T extends OrganizationMemberCreateArgs>(args: SelectSubset<T, OrganizationMemberCreateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationMembers.
     * @param {OrganizationMemberCreateManyArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationMemberCreateManyArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationMembers and returns the data saved in the database.
     * @param {OrganizationMemberCreateManyAndReturnArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationMembers and only return the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationMember.
     * @param {OrganizationMemberDeleteArgs} args - Arguments to delete one OrganizationMember.
     * @example
     * // Delete one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.delete({
     *   where: {
     *     // ... filter to delete one OrganizationMember
     *   }
     * })
     * 
     */
    delete<T extends OrganizationMemberDeleteArgs>(args: SelectSubset<T, OrganizationMemberDeleteArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationMember.
     * @param {OrganizationMemberUpdateArgs} args - Arguments to update one OrganizationMember.
     * @example
     * // Update one OrganizationMember
     * const organizationMember = await prisma.organizationMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationMemberUpdateArgs>(args: SelectSubset<T, OrganizationMemberUpdateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationMembers.
     * @param {OrganizationMemberDeleteManyArgs} args - Arguments to filter OrganizationMembers to delete.
     * @example
     * // Delete a few OrganizationMembers
     * const { count } = await prisma.organizationMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationMemberDeleteManyArgs>(args?: SelectSubset<T, OrganizationMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationMemberUpdateManyArgs>(args: SelectSubset<T, OrganizationMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMembers and returns the data updated in the database.
     * @param {OrganizationMemberUpdateManyAndReturnArgs} args - Arguments to update many OrganizationMembers.
     * @example
     * // Update many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationMembers and only return the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationMember.
     * @param {OrganizationMemberUpsertArgs} args - Arguments to update or create a OrganizationMember.
     * @example
     * // Update or create a OrganizationMember
     * const organizationMember = await prisma.organizationMember.upsert({
     *   create: {
     *     // ... data to create a OrganizationMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationMember we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationMemberUpsertArgs>(args: SelectSubset<T, OrganizationMemberUpsertArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberCountArgs} args - Arguments to filter OrganizationMembers to count.
     * @example
     * // Count the number of OrganizationMembers
     * const count = await prisma.organizationMember.count({
     *   where: {
     *     // ... the filter for the OrganizationMembers we want to count
     *   }
     * })
    **/
    count<T extends OrganizationMemberCountArgs>(
      args?: Subset<T, OrganizationMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationMemberAggregateArgs>(args: Subset<T, OrganizationMemberAggregateArgs>): Prisma.PrismaPromise<GetOrganizationMemberAggregateType<T>>

    /**
     * Group by OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationMemberGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationMember model
   */
  readonly fields: OrganizationMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationMember model
   */
  interface OrganizationMemberFieldRefs {
    readonly id: FieldRef<"OrganizationMember", 'Int'>
    readonly organizationId: FieldRef<"OrganizationMember", 'Int'>
    readonly userId: FieldRef<"OrganizationMember", 'Int'>
    readonly role: FieldRef<"OrganizationMember", 'String'>
    readonly position: FieldRef<"OrganizationMember", 'String'>
    readonly canPost: FieldRef<"OrganizationMember", 'Boolean'>
    readonly joinedAt: FieldRef<"OrganizationMember", 'DateTime'>
    readonly orgAvatar: FieldRef<"OrganizationMember", 'String'>
    readonly permissions: FieldRef<"OrganizationMember", 'Json'>
    readonly isPublic: FieldRef<"OrganizationMember", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationMember findUnique
   */
  export type OrganizationMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findUniqueOrThrow
   */
  export type OrganizationMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findFirst
   */
  export type OrganizationMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findFirstOrThrow
   */
  export type OrganizationMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findMany
   */
  export type OrganizationMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembers to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember create
   */
  export type OrganizationMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationMember.
     */
    data: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
  }

  /**
   * OrganizationMember createMany
   */
  export type OrganizationMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationMember createManyAndReturn
   */
  export type OrganizationMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMember update
   */
  export type OrganizationMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationMember.
     */
    data: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
    /**
     * Choose, which OrganizationMember to update.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember updateMany
   */
  export type OrganizationMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to update.
     */
    limit?: number
  }

  /**
   * OrganizationMember updateManyAndReturn
   */
  export type OrganizationMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMember upsert
   */
  export type OrganizationMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationMember to update in case it exists.
     */
    where: OrganizationMemberWhereUniqueInput
    /**
     * In case the OrganizationMember found by the `where` argument doesn't exist, create a new OrganizationMember with this data.
     */
    create: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
    /**
     * In case the OrganizationMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
  }

  /**
   * OrganizationMember delete
   */
  export type OrganizationMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter which OrganizationMember to delete.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember deleteMany
   */
  export type OrganizationMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMembers to delete
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to delete.
     */
    limit?: number
  }

  /**
   * OrganizationMember without action
   */
  export type OrganizationMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
  }


  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityAvgAggregateOutputType = {
    id: number | null
    organizationId: number | null
    vkGroupId: number | null
    scheduleIntervalMinutes: number | null
    dutyAdminUserId: number | null
    cityId: number | null
    lat: Decimal | null
    lng: Decimal | null
  }

  export type CommunitySumAggregateOutputType = {
    id: number | null
    organizationId: number | null
    vkGroupId: bigint | null
    scheduleIntervalMinutes: number | null
    dutyAdminUserId: number | null
    cityId: number | null
    lat: Decimal | null
    lng: Decimal | null
  }

  export type CommunityMinAggregateOutputType = {
    id: number | null
    organizationId: number | null
    vkGroupId: bigint | null
    accessToken: string | null
    acceptCrossPosts: boolean | null
    scheduleIntervalMinutes: number | null
    scheduleStartTime: string | null
    scheduleEndTime: string | null
    dutyAdminUserId: number | null
    cityId: number | null
    cityName: string | null
    regionName: string | null
    lat: Decimal | null
    lng: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: number | null
    organizationId: number | null
    vkGroupId: bigint | null
    accessToken: string | null
    acceptCrossPosts: boolean | null
    scheduleIntervalMinutes: number | null
    scheduleStartTime: string | null
    scheduleEndTime: string | null
    dutyAdminUserId: number | null
    cityId: number | null
    cityName: string | null
    regionName: string | null
    lat: Decimal | null
    lng: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    organizationId: number
    vkGroupId: number
    accessToken: number
    acceptCrossPosts: number
    acceptedTags: number
    scheduleIntervalMinutes: number
    scheduleStartTime: number
    scheduleEndTime: number
    dutyAdminUserId: number
    cityId: number
    cityName: number
    regionName: number
    lat: number
    lng: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunityAvgAggregateInputType = {
    id?: true
    organizationId?: true
    vkGroupId?: true
    scheduleIntervalMinutes?: true
    dutyAdminUserId?: true
    cityId?: true
    lat?: true
    lng?: true
  }

  export type CommunitySumAggregateInputType = {
    id?: true
    organizationId?: true
    vkGroupId?: true
    scheduleIntervalMinutes?: true
    dutyAdminUserId?: true
    cityId?: true
    lat?: true
    lng?: true
  }

  export type CommunityMinAggregateInputType = {
    id?: true
    organizationId?: true
    vkGroupId?: true
    accessToken?: true
    acceptCrossPosts?: true
    scheduleIntervalMinutes?: true
    scheduleStartTime?: true
    scheduleEndTime?: true
    dutyAdminUserId?: true
    cityId?: true
    cityName?: true
    regionName?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    organizationId?: true
    vkGroupId?: true
    accessToken?: true
    acceptCrossPosts?: true
    scheduleIntervalMinutes?: true
    scheduleStartTime?: true
    scheduleEndTime?: true
    dutyAdminUserId?: true
    cityId?: true
    cityName?: true
    regionName?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    organizationId?: true
    vkGroupId?: true
    accessToken?: true
    acceptCrossPosts?: true
    acceptedTags?: true
    scheduleIntervalMinutes?: true
    scheduleStartTime?: true
    scheduleEndTime?: true
    dutyAdminUserId?: true
    cityId?: true
    cityName?: true
    regionName?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _avg?: CommunityAvgAggregateInputType
    _sum?: CommunitySumAggregateInputType
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: number
    organizationId: number
    vkGroupId: bigint
    accessToken: string
    acceptCrossPosts: boolean
    acceptedTags: JsonValue
    scheduleIntervalMinutes: number
    scheduleStartTime: string
    scheduleEndTime: string
    dutyAdminUserId: number | null
    cityId: number | null
    cityName: string | null
    regionName: string | null
    lat: Decimal | null
    lng: Decimal | null
    createdAt: Date | null
    updatedAt: Date
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    vkGroupId?: boolean
    accessToken?: boolean
    acceptCrossPosts?: boolean
    acceptedTags?: boolean
    scheduleIntervalMinutes?: boolean
    scheduleStartTime?: boolean
    scheduleEndTime?: boolean
    dutyAdminUserId?: boolean
    cityId?: boolean
    cityName?: boolean
    regionName?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    dutyAdmin?: boolean | Community$dutyAdminArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    vkGroupId?: boolean
    accessToken?: boolean
    acceptCrossPosts?: boolean
    acceptedTags?: boolean
    scheduleIntervalMinutes?: boolean
    scheduleStartTime?: boolean
    scheduleEndTime?: boolean
    dutyAdminUserId?: boolean
    cityId?: boolean
    cityName?: boolean
    regionName?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    dutyAdmin?: boolean | Community$dutyAdminArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    vkGroupId?: boolean
    accessToken?: boolean
    acceptCrossPosts?: boolean
    acceptedTags?: boolean
    scheduleIntervalMinutes?: boolean
    scheduleStartTime?: boolean
    scheduleEndTime?: boolean
    dutyAdminUserId?: boolean
    cityId?: boolean
    cityName?: boolean
    regionName?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    dutyAdmin?: boolean | Community$dutyAdminArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    organizationId?: boolean
    vkGroupId?: boolean
    accessToken?: boolean
    acceptCrossPosts?: boolean
    acceptedTags?: boolean
    scheduleIntervalMinutes?: boolean
    scheduleStartTime?: boolean
    scheduleEndTime?: boolean
    dutyAdminUserId?: boolean
    cityId?: boolean
    cityName?: boolean
    regionName?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "vkGroupId" | "accessToken" | "acceptCrossPosts" | "acceptedTags" | "scheduleIntervalMinutes" | "scheduleStartTime" | "scheduleEndTime" | "dutyAdminUserId" | "cityId" | "cityName" | "regionName" | "lat" | "lng" | "createdAt" | "updatedAt", ExtArgs["result"]["community"]>
  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    dutyAdmin?: boolean | Community$dutyAdminArgs<ExtArgs>
  }
  export type CommunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    dutyAdmin?: boolean | Community$dutyAdminArgs<ExtArgs>
  }
  export type CommunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    dutyAdmin?: boolean | Community$dutyAdminArgs<ExtArgs>
  }

  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      dutyAdmin: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizationId: number
      vkGroupId: bigint
      accessToken: string
      acceptCrossPosts: boolean
      acceptedTags: Prisma.JsonValue
      scheduleIntervalMinutes: number
      scheduleStartTime: string
      scheduleEndTime: string
      dutyAdminUserId: number | null
      cityId: number | null
      cityName: string | null
      regionName: string | null
      lat: Prisma.Decimal | null
      lng: Prisma.Decimal | null
      createdAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["community"]>
    composites: {}
  }

  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityFindUniqueArgs>(args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Community that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityFindFirstArgs>(args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityFindManyArgs>(args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
     */
    create<T extends CommunityCreateArgs>(args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communities.
     * @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityCreateManyArgs>(args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communities and returns the data saved in the database.
     * @param {CommunityCreateManyAndReturnArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
     */
    delete<T extends CommunityDeleteArgs>(args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityUpdateArgs>(args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityDeleteManyArgs>(args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityUpdateManyArgs>(args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities and returns the data updated in the database.
     * @param {CommunityUpdateManyAndReturnArgs} args - Arguments to update many Communities.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunityUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
     */
    upsert<T extends CommunityUpsertArgs>(args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dutyAdmin<T extends Community$dutyAdminArgs<ExtArgs> = {}>(args?: Subset<T, Community$dutyAdminArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Community model
   */
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'Int'>
    readonly organizationId: FieldRef<"Community", 'Int'>
    readonly vkGroupId: FieldRef<"Community", 'BigInt'>
    readonly accessToken: FieldRef<"Community", 'String'>
    readonly acceptCrossPosts: FieldRef<"Community", 'Boolean'>
    readonly acceptedTags: FieldRef<"Community", 'Json'>
    readonly scheduleIntervalMinutes: FieldRef<"Community", 'Int'>
    readonly scheduleStartTime: FieldRef<"Community", 'String'>
    readonly scheduleEndTime: FieldRef<"Community", 'String'>
    readonly dutyAdminUserId: FieldRef<"Community", 'Int'>
    readonly cityId: FieldRef<"Community", 'Int'>
    readonly cityName: FieldRef<"Community", 'String'>
    readonly regionName: FieldRef<"Community", 'String'>
    readonly lat: FieldRef<"Community", 'Decimal'>
    readonly lng: FieldRef<"Community", 'Decimal'>
    readonly createdAt: FieldRef<"Community", 'DateTime'>
    readonly updatedAt: FieldRef<"Community", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }

  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Community createManyAndReturn
   */
  export type CommunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
  }

  /**
   * Community updateManyAndReturn
   */
  export type CommunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }

  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to delete.
     */
    limit?: number
  }

  /**
   * Community.dutyAdmin
   */
  export type Community$dutyAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
  }


  /**
   * Model CommunityNotificationAdmin
   */

  export type AggregateCommunityNotificationAdmin = {
    _count: CommunityNotificationAdminCountAggregateOutputType | null
    _avg: CommunityNotificationAdminAvgAggregateOutputType | null
    _sum: CommunityNotificationAdminSumAggregateOutputType | null
    _min: CommunityNotificationAdminMinAggregateOutputType | null
    _max: CommunityNotificationAdminMaxAggregateOutputType | null
  }

  export type CommunityNotificationAdminAvgAggregateOutputType = {
    id: number | null
    organizationId: number | null
    userId: number | null
  }

  export type CommunityNotificationAdminSumAggregateOutputType = {
    id: number | null
    organizationId: number | null
    userId: number | null
  }

  export type CommunityNotificationAdminMinAggregateOutputType = {
    id: number | null
    organizationId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type CommunityNotificationAdminMaxAggregateOutputType = {
    id: number | null
    organizationId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type CommunityNotificationAdminCountAggregateOutputType = {
    id: number
    organizationId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type CommunityNotificationAdminAvgAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
  }

  export type CommunityNotificationAdminSumAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
  }

  export type CommunityNotificationAdminMinAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    createdAt?: true
  }

  export type CommunityNotificationAdminMaxAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    createdAt?: true
  }

  export type CommunityNotificationAdminCountAggregateInputType = {
    id?: true
    organizationId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type CommunityNotificationAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityNotificationAdmin to aggregate.
     */
    where?: CommunityNotificationAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityNotificationAdmins to fetch.
     */
    orderBy?: CommunityNotificationAdminOrderByWithRelationInput | CommunityNotificationAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityNotificationAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityNotificationAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityNotificationAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityNotificationAdmins
    **/
    _count?: true | CommunityNotificationAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityNotificationAdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunityNotificationAdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityNotificationAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityNotificationAdminMaxAggregateInputType
  }

  export type GetCommunityNotificationAdminAggregateType<T extends CommunityNotificationAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityNotificationAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityNotificationAdmin[P]>
      : GetScalarType<T[P], AggregateCommunityNotificationAdmin[P]>
  }




  export type CommunityNotificationAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityNotificationAdminWhereInput
    orderBy?: CommunityNotificationAdminOrderByWithAggregationInput | CommunityNotificationAdminOrderByWithAggregationInput[]
    by: CommunityNotificationAdminScalarFieldEnum[] | CommunityNotificationAdminScalarFieldEnum
    having?: CommunityNotificationAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityNotificationAdminCountAggregateInputType | true
    _avg?: CommunityNotificationAdminAvgAggregateInputType
    _sum?: CommunityNotificationAdminSumAggregateInputType
    _min?: CommunityNotificationAdminMinAggregateInputType
    _max?: CommunityNotificationAdminMaxAggregateInputType
  }

  export type CommunityNotificationAdminGroupByOutputType = {
    id: number
    organizationId: number
    userId: number
    createdAt: Date | null
    _count: CommunityNotificationAdminCountAggregateOutputType | null
    _avg: CommunityNotificationAdminAvgAggregateOutputType | null
    _sum: CommunityNotificationAdminSumAggregateOutputType | null
    _min: CommunityNotificationAdminMinAggregateOutputType | null
    _max: CommunityNotificationAdminMaxAggregateOutputType | null
  }

  type GetCommunityNotificationAdminGroupByPayload<T extends CommunityNotificationAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityNotificationAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityNotificationAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityNotificationAdminGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityNotificationAdminGroupByOutputType[P]>
        }
      >
    >


  export type CommunityNotificationAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityNotificationAdmin"]>

  export type CommunityNotificationAdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityNotificationAdmin"]>

  export type CommunityNotificationAdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityNotificationAdmin"]>

  export type CommunityNotificationAdminSelectScalar = {
    id?: boolean
    organizationId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type CommunityNotificationAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "userId" | "createdAt", ExtArgs["result"]["communityNotificationAdmin"]>
  export type CommunityNotificationAdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunityNotificationAdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunityNotificationAdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommunityNotificationAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityNotificationAdmin"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizationId: number
      userId: number
      createdAt: Date | null
    }, ExtArgs["result"]["communityNotificationAdmin"]>
    composites: {}
  }

  type CommunityNotificationAdminGetPayload<S extends boolean | null | undefined | CommunityNotificationAdminDefaultArgs> = $Result.GetResult<Prisma.$CommunityNotificationAdminPayload, S>

  type CommunityNotificationAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityNotificationAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityNotificationAdminCountAggregateInputType | true
    }

  export interface CommunityNotificationAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityNotificationAdmin'], meta: { name: 'CommunityNotificationAdmin' } }
    /**
     * Find zero or one CommunityNotificationAdmin that matches the filter.
     * @param {CommunityNotificationAdminFindUniqueArgs} args - Arguments to find a CommunityNotificationAdmin
     * @example
     * // Get one CommunityNotificationAdmin
     * const communityNotificationAdmin = await prisma.communityNotificationAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityNotificationAdminFindUniqueArgs>(args: SelectSubset<T, CommunityNotificationAdminFindUniqueArgs<ExtArgs>>): Prisma__CommunityNotificationAdminClient<$Result.GetResult<Prisma.$CommunityNotificationAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityNotificationAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityNotificationAdminFindUniqueOrThrowArgs} args - Arguments to find a CommunityNotificationAdmin
     * @example
     * // Get one CommunityNotificationAdmin
     * const communityNotificationAdmin = await prisma.communityNotificationAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityNotificationAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityNotificationAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityNotificationAdminClient<$Result.GetResult<Prisma.$CommunityNotificationAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityNotificationAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityNotificationAdminFindFirstArgs} args - Arguments to find a CommunityNotificationAdmin
     * @example
     * // Get one CommunityNotificationAdmin
     * const communityNotificationAdmin = await prisma.communityNotificationAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityNotificationAdminFindFirstArgs>(args?: SelectSubset<T, CommunityNotificationAdminFindFirstArgs<ExtArgs>>): Prisma__CommunityNotificationAdminClient<$Result.GetResult<Prisma.$CommunityNotificationAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityNotificationAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityNotificationAdminFindFirstOrThrowArgs} args - Arguments to find a CommunityNotificationAdmin
     * @example
     * // Get one CommunityNotificationAdmin
     * const communityNotificationAdmin = await prisma.communityNotificationAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityNotificationAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityNotificationAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityNotificationAdminClient<$Result.GetResult<Prisma.$CommunityNotificationAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityNotificationAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityNotificationAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityNotificationAdmins
     * const communityNotificationAdmins = await prisma.communityNotificationAdmin.findMany()
     * 
     * // Get first 10 CommunityNotificationAdmins
     * const communityNotificationAdmins = await prisma.communityNotificationAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityNotificationAdminWithIdOnly = await prisma.communityNotificationAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityNotificationAdminFindManyArgs>(args?: SelectSubset<T, CommunityNotificationAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityNotificationAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityNotificationAdmin.
     * @param {CommunityNotificationAdminCreateArgs} args - Arguments to create a CommunityNotificationAdmin.
     * @example
     * // Create one CommunityNotificationAdmin
     * const CommunityNotificationAdmin = await prisma.communityNotificationAdmin.create({
     *   data: {
     *     // ... data to create a CommunityNotificationAdmin
     *   }
     * })
     * 
     */
    create<T extends CommunityNotificationAdminCreateArgs>(args: SelectSubset<T, CommunityNotificationAdminCreateArgs<ExtArgs>>): Prisma__CommunityNotificationAdminClient<$Result.GetResult<Prisma.$CommunityNotificationAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityNotificationAdmins.
     * @param {CommunityNotificationAdminCreateManyArgs} args - Arguments to create many CommunityNotificationAdmins.
     * @example
     * // Create many CommunityNotificationAdmins
     * const communityNotificationAdmin = await prisma.communityNotificationAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityNotificationAdminCreateManyArgs>(args?: SelectSubset<T, CommunityNotificationAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityNotificationAdmins and returns the data saved in the database.
     * @param {CommunityNotificationAdminCreateManyAndReturnArgs} args - Arguments to create many CommunityNotificationAdmins.
     * @example
     * // Create many CommunityNotificationAdmins
     * const communityNotificationAdmin = await prisma.communityNotificationAdmin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityNotificationAdmins and only return the `id`
     * const communityNotificationAdminWithIdOnly = await prisma.communityNotificationAdmin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityNotificationAdminCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityNotificationAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityNotificationAdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityNotificationAdmin.
     * @param {CommunityNotificationAdminDeleteArgs} args - Arguments to delete one CommunityNotificationAdmin.
     * @example
     * // Delete one CommunityNotificationAdmin
     * const CommunityNotificationAdmin = await prisma.communityNotificationAdmin.delete({
     *   where: {
     *     // ... filter to delete one CommunityNotificationAdmin
     *   }
     * })
     * 
     */
    delete<T extends CommunityNotificationAdminDeleteArgs>(args: SelectSubset<T, CommunityNotificationAdminDeleteArgs<ExtArgs>>): Prisma__CommunityNotificationAdminClient<$Result.GetResult<Prisma.$CommunityNotificationAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityNotificationAdmin.
     * @param {CommunityNotificationAdminUpdateArgs} args - Arguments to update one CommunityNotificationAdmin.
     * @example
     * // Update one CommunityNotificationAdmin
     * const communityNotificationAdmin = await prisma.communityNotificationAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityNotificationAdminUpdateArgs>(args: SelectSubset<T, CommunityNotificationAdminUpdateArgs<ExtArgs>>): Prisma__CommunityNotificationAdminClient<$Result.GetResult<Prisma.$CommunityNotificationAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityNotificationAdmins.
     * @param {CommunityNotificationAdminDeleteManyArgs} args - Arguments to filter CommunityNotificationAdmins to delete.
     * @example
     * // Delete a few CommunityNotificationAdmins
     * const { count } = await prisma.communityNotificationAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityNotificationAdminDeleteManyArgs>(args?: SelectSubset<T, CommunityNotificationAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityNotificationAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityNotificationAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityNotificationAdmins
     * const communityNotificationAdmin = await prisma.communityNotificationAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityNotificationAdminUpdateManyArgs>(args: SelectSubset<T, CommunityNotificationAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityNotificationAdmins and returns the data updated in the database.
     * @param {CommunityNotificationAdminUpdateManyAndReturnArgs} args - Arguments to update many CommunityNotificationAdmins.
     * @example
     * // Update many CommunityNotificationAdmins
     * const communityNotificationAdmin = await prisma.communityNotificationAdmin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityNotificationAdmins and only return the `id`
     * const communityNotificationAdminWithIdOnly = await prisma.communityNotificationAdmin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunityNotificationAdminUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityNotificationAdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityNotificationAdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityNotificationAdmin.
     * @param {CommunityNotificationAdminUpsertArgs} args - Arguments to update or create a CommunityNotificationAdmin.
     * @example
     * // Update or create a CommunityNotificationAdmin
     * const communityNotificationAdmin = await prisma.communityNotificationAdmin.upsert({
     *   create: {
     *     // ... data to create a CommunityNotificationAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityNotificationAdmin we want to update
     *   }
     * })
     */
    upsert<T extends CommunityNotificationAdminUpsertArgs>(args: SelectSubset<T, CommunityNotificationAdminUpsertArgs<ExtArgs>>): Prisma__CommunityNotificationAdminClient<$Result.GetResult<Prisma.$CommunityNotificationAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityNotificationAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityNotificationAdminCountArgs} args - Arguments to filter CommunityNotificationAdmins to count.
     * @example
     * // Count the number of CommunityNotificationAdmins
     * const count = await prisma.communityNotificationAdmin.count({
     *   where: {
     *     // ... the filter for the CommunityNotificationAdmins we want to count
     *   }
     * })
    **/
    count<T extends CommunityNotificationAdminCountArgs>(
      args?: Subset<T, CommunityNotificationAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityNotificationAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityNotificationAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityNotificationAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityNotificationAdminAggregateArgs>(args: Subset<T, CommunityNotificationAdminAggregateArgs>): Prisma.PrismaPromise<GetCommunityNotificationAdminAggregateType<T>>

    /**
     * Group by CommunityNotificationAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityNotificationAdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityNotificationAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityNotificationAdminGroupByArgs['orderBy'] }
        : { orderBy?: CommunityNotificationAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityNotificationAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityNotificationAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityNotificationAdmin model
   */
  readonly fields: CommunityNotificationAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityNotificationAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityNotificationAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommunityNotificationAdmin model
   */
  interface CommunityNotificationAdminFieldRefs {
    readonly id: FieldRef<"CommunityNotificationAdmin", 'Int'>
    readonly organizationId: FieldRef<"CommunityNotificationAdmin", 'Int'>
    readonly userId: FieldRef<"CommunityNotificationAdmin", 'Int'>
    readonly createdAt: FieldRef<"CommunityNotificationAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityNotificationAdmin findUnique
   */
  export type CommunityNotificationAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminInclude<ExtArgs> | null
    /**
     * Filter, which CommunityNotificationAdmin to fetch.
     */
    where: CommunityNotificationAdminWhereUniqueInput
  }

  /**
   * CommunityNotificationAdmin findUniqueOrThrow
   */
  export type CommunityNotificationAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminInclude<ExtArgs> | null
    /**
     * Filter, which CommunityNotificationAdmin to fetch.
     */
    where: CommunityNotificationAdminWhereUniqueInput
  }

  /**
   * CommunityNotificationAdmin findFirst
   */
  export type CommunityNotificationAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminInclude<ExtArgs> | null
    /**
     * Filter, which CommunityNotificationAdmin to fetch.
     */
    where?: CommunityNotificationAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityNotificationAdmins to fetch.
     */
    orderBy?: CommunityNotificationAdminOrderByWithRelationInput | CommunityNotificationAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityNotificationAdmins.
     */
    cursor?: CommunityNotificationAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityNotificationAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityNotificationAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityNotificationAdmins.
     */
    distinct?: CommunityNotificationAdminScalarFieldEnum | CommunityNotificationAdminScalarFieldEnum[]
  }

  /**
   * CommunityNotificationAdmin findFirstOrThrow
   */
  export type CommunityNotificationAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminInclude<ExtArgs> | null
    /**
     * Filter, which CommunityNotificationAdmin to fetch.
     */
    where?: CommunityNotificationAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityNotificationAdmins to fetch.
     */
    orderBy?: CommunityNotificationAdminOrderByWithRelationInput | CommunityNotificationAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityNotificationAdmins.
     */
    cursor?: CommunityNotificationAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityNotificationAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityNotificationAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityNotificationAdmins.
     */
    distinct?: CommunityNotificationAdminScalarFieldEnum | CommunityNotificationAdminScalarFieldEnum[]
  }

  /**
   * CommunityNotificationAdmin findMany
   */
  export type CommunityNotificationAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminInclude<ExtArgs> | null
    /**
     * Filter, which CommunityNotificationAdmins to fetch.
     */
    where?: CommunityNotificationAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityNotificationAdmins to fetch.
     */
    orderBy?: CommunityNotificationAdminOrderByWithRelationInput | CommunityNotificationAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityNotificationAdmins.
     */
    cursor?: CommunityNotificationAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityNotificationAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityNotificationAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityNotificationAdmins.
     */
    distinct?: CommunityNotificationAdminScalarFieldEnum | CommunityNotificationAdminScalarFieldEnum[]
  }

  /**
   * CommunityNotificationAdmin create
   */
  export type CommunityNotificationAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunityNotificationAdmin.
     */
    data: XOR<CommunityNotificationAdminCreateInput, CommunityNotificationAdminUncheckedCreateInput>
  }

  /**
   * CommunityNotificationAdmin createMany
   */
  export type CommunityNotificationAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityNotificationAdmins.
     */
    data: CommunityNotificationAdminCreateManyInput | CommunityNotificationAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityNotificationAdmin createManyAndReturn
   */
  export type CommunityNotificationAdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityNotificationAdmins.
     */
    data: CommunityNotificationAdminCreateManyInput | CommunityNotificationAdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityNotificationAdmin update
   */
  export type CommunityNotificationAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunityNotificationAdmin.
     */
    data: XOR<CommunityNotificationAdminUpdateInput, CommunityNotificationAdminUncheckedUpdateInput>
    /**
     * Choose, which CommunityNotificationAdmin to update.
     */
    where: CommunityNotificationAdminWhereUniqueInput
  }

  /**
   * CommunityNotificationAdmin updateMany
   */
  export type CommunityNotificationAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityNotificationAdmins.
     */
    data: XOR<CommunityNotificationAdminUpdateManyMutationInput, CommunityNotificationAdminUncheckedUpdateManyInput>
    /**
     * Filter which CommunityNotificationAdmins to update
     */
    where?: CommunityNotificationAdminWhereInput
    /**
     * Limit how many CommunityNotificationAdmins to update.
     */
    limit?: number
  }

  /**
   * CommunityNotificationAdmin updateManyAndReturn
   */
  export type CommunityNotificationAdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * The data used to update CommunityNotificationAdmins.
     */
    data: XOR<CommunityNotificationAdminUpdateManyMutationInput, CommunityNotificationAdminUncheckedUpdateManyInput>
    /**
     * Filter which CommunityNotificationAdmins to update
     */
    where?: CommunityNotificationAdminWhereInput
    /**
     * Limit how many CommunityNotificationAdmins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityNotificationAdmin upsert
   */
  export type CommunityNotificationAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunityNotificationAdmin to update in case it exists.
     */
    where: CommunityNotificationAdminWhereUniqueInput
    /**
     * In case the CommunityNotificationAdmin found by the `where` argument doesn't exist, create a new CommunityNotificationAdmin with this data.
     */
    create: XOR<CommunityNotificationAdminCreateInput, CommunityNotificationAdminUncheckedCreateInput>
    /**
     * In case the CommunityNotificationAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityNotificationAdminUpdateInput, CommunityNotificationAdminUncheckedUpdateInput>
  }

  /**
   * CommunityNotificationAdmin delete
   */
  export type CommunityNotificationAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminInclude<ExtArgs> | null
    /**
     * Filter which CommunityNotificationAdmin to delete.
     */
    where: CommunityNotificationAdminWhereUniqueInput
  }

  /**
   * CommunityNotificationAdmin deleteMany
   */
  export type CommunityNotificationAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityNotificationAdmins to delete
     */
    where?: CommunityNotificationAdminWhereInput
    /**
     * Limit how many CommunityNotificationAdmins to delete.
     */
    limit?: number
  }

  /**
   * CommunityNotificationAdmin without action
   */
  export type CommunityNotificationAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityNotificationAdmin
     */
    select?: CommunityNotificationAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityNotificationAdmin
     */
    omit?: CommunityNotificationAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityNotificationAdminInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    authorId: number | null
    likesCount: number | null
    commentsCount: number | null
    locationLat: Decimal | null
    locationLng: Decimal | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    userId: number | null
    authorId: number | null
    likesCount: number | null
    commentsCount: number | null
    locationLat: Decimal | null
    locationLng: Decimal | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    userId: number | null
    content: string | null
    mediaUrls: string | null
    status: string | null
    scheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: number | null
    authorType: string | null
    attachedPets: string | null
    attachments: string | null
    tags: string | null
    isDeleted: boolean | null
    likesCount: number | null
    commentsCount: number | null
    locationLat: Decimal | null
    locationLng: Decimal | null
    locationName: string | null
    replySetting: string | null
    verifyReplies: boolean | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    content: string | null
    mediaUrls: string | null
    status: string | null
    scheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: number | null
    authorType: string | null
    attachedPets: string | null
    attachments: string | null
    tags: string | null
    isDeleted: boolean | null
    likesCount: number | null
    commentsCount: number | null
    locationLat: Decimal | null
    locationLng: Decimal | null
    locationName: string | null
    replySetting: string | null
    verifyReplies: boolean | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    mediaUrls: number
    status: number
    scheduledAt: number
    createdAt: number
    updatedAt: number
    authorId: number
    authorType: number
    attachedPets: number
    attachments: number
    tags: number
    isDeleted: number
    likesCount: number
    commentsCount: number
    locationLat: number
    locationLng: number
    locationName: number
    replySetting: number
    verifyReplies: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    userId?: true
    authorId?: true
    likesCount?: true
    commentsCount?: true
    locationLat?: true
    locationLng?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    userId?: true
    authorId?: true
    likesCount?: true
    commentsCount?: true
    locationLat?: true
    locationLng?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    mediaUrls?: true
    status?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    authorType?: true
    attachedPets?: true
    attachments?: true
    tags?: true
    isDeleted?: true
    likesCount?: true
    commentsCount?: true
    locationLat?: true
    locationLng?: true
    locationName?: true
    replySetting?: true
    verifyReplies?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    mediaUrls?: true
    status?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    authorType?: true
    attachedPets?: true
    attachments?: true
    tags?: true
    isDeleted?: true
    likesCount?: true
    commentsCount?: true
    locationLat?: true
    locationLng?: true
    locationName?: true
    replySetting?: true
    verifyReplies?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    mediaUrls?: true
    status?: true
    scheduledAt?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    authorType?: true
    attachedPets?: true
    attachments?: true
    tags?: true
    isDeleted?: true
    likesCount?: true
    commentsCount?: true
    locationLat?: true
    locationLng?: true
    locationName?: true
    replySetting?: true
    verifyReplies?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    userId: number | null
    content: string | null
    mediaUrls: string | null
    status: string | null
    scheduledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: number
    authorType: string
    attachedPets: string | null
    attachments: string | null
    tags: string | null
    isDeleted: boolean | null
    likesCount: number | null
    commentsCount: number | null
    locationLat: Decimal | null
    locationLng: Decimal | null
    locationName: string | null
    replySetting: string | null
    verifyReplies: boolean | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    mediaUrls?: boolean
    status?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    authorType?: boolean
    attachedPets?: boolean
    attachments?: boolean
    tags?: boolean
    isDeleted?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationName?: boolean
    replySetting?: boolean
    verifyReplies?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    publication?: boolean | Post$publicationArgs<ExtArgs>
    radarPin?: boolean | Post$radarPinArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    mediaUrls?: boolean
    status?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    authorType?: boolean
    attachedPets?: boolean
    attachments?: boolean
    tags?: boolean
    isDeleted?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationName?: boolean
    replySetting?: boolean
    verifyReplies?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    mediaUrls?: boolean
    status?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    authorType?: boolean
    attachedPets?: boolean
    attachments?: boolean
    tags?: boolean
    isDeleted?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationName?: boolean
    replySetting?: boolean
    verifyReplies?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    mediaUrls?: boolean
    status?: boolean
    scheduledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    authorType?: boolean
    attachedPets?: boolean
    attachments?: boolean
    tags?: boolean
    isDeleted?: boolean
    likesCount?: boolean
    commentsCount?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationName?: boolean
    replySetting?: boolean
    verifyReplies?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "content" | "mediaUrls" | "status" | "scheduledAt" | "createdAt" | "updatedAt" | "authorId" | "authorType" | "attachedPets" | "attachments" | "tags" | "isDeleted" | "likesCount" | "commentsCount" | "locationLat" | "locationLng" | "locationName" | "replySetting" | "verifyReplies", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    publication?: boolean | Post$publicationArgs<ExtArgs>
    radarPin?: boolean | Post$radarPinArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      publication: Prisma.$PostPublicationPayload<ExtArgs> | null
      radarPin: Prisma.$RadarPinPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      content: string | null
      mediaUrls: string | null
      status: string | null
      scheduledAt: Date | null
      createdAt: Date | null
      updatedAt: Date | null
      authorId: number
      authorType: string
      attachedPets: string | null
      attachments: string | null
      tags: string | null
      isDeleted: boolean | null
      likesCount: number | null
      commentsCount: number | null
      locationLat: Prisma.Decimal | null
      locationLng: Prisma.Decimal | null
      locationName: string | null
      replySetting: string | null
      verifyReplies: boolean | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    publication<T extends Post$publicationArgs<ExtArgs> = {}>(args?: Subset<T, Post$publicationArgs<ExtArgs>>): Prisma__PostPublicationClient<$Result.GetResult<Prisma.$PostPublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    radarPin<T extends Post$radarPinArgs<ExtArgs> = {}>(args?: Subset<T, Post$radarPinArgs<ExtArgs>>): Prisma__RadarPinClient<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly userId: FieldRef<"Post", 'Int'>
    readonly content: FieldRef<"Post", 'String'>
    readonly mediaUrls: FieldRef<"Post", 'String'>
    readonly status: FieldRef<"Post", 'String'>
    readonly scheduledAt: FieldRef<"Post", 'DateTime'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly authorId: FieldRef<"Post", 'Int'>
    readonly authorType: FieldRef<"Post", 'String'>
    readonly attachedPets: FieldRef<"Post", 'String'>
    readonly attachments: FieldRef<"Post", 'String'>
    readonly tags: FieldRef<"Post", 'String'>
    readonly isDeleted: FieldRef<"Post", 'Boolean'>
    readonly likesCount: FieldRef<"Post", 'Int'>
    readonly commentsCount: FieldRef<"Post", 'Int'>
    readonly locationLat: FieldRef<"Post", 'Decimal'>
    readonly locationLng: FieldRef<"Post", 'Decimal'>
    readonly locationName: FieldRef<"Post", 'String'>
    readonly replySetting: FieldRef<"Post", 'String'>
    readonly verifyReplies: FieldRef<"Post", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.publication
   */
  export type Post$publicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationInclude<ExtArgs> | null
    where?: PostPublicationWhereInput
  }

  /**
   * Post.radarPin
   */
  export type Post$radarPinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinInclude<ExtArgs> | null
    where?: RadarPinWhereInput
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostPublication
   */

  export type AggregatePostPublication = {
    _count: PostPublicationCountAggregateOutputType | null
    _avg: PostPublicationAvgAggregateOutputType | null
    _sum: PostPublicationSumAggregateOutputType | null
    _min: PostPublicationMinAggregateOutputType | null
    _max: PostPublicationMaxAggregateOutputType | null
  }

  export type PostPublicationAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    organizationId: number | null
    vkGroupId: number | null
    vkPostId: number | null
    cityId: number | null
  }

  export type PostPublicationSumAggregateOutputType = {
    id: number | null
    postId: number | null
    organizationId: number | null
    vkGroupId: bigint | null
    vkPostId: bigint | null
    cityId: number | null
  }

  export type PostPublicationMinAggregateOutputType = {
    id: number | null
    postId: number | null
    organizationId: number | null
    vkGroupId: bigint | null
    moderationStatus: string | null
    publishDate: Date | null
    vkPostId: bigint | null
    chatLink: string | null
    cityId: number | null
    cityName: string | null
    regionName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostPublicationMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    organizationId: number | null
    vkGroupId: bigint | null
    moderationStatus: string | null
    publishDate: Date | null
    vkPostId: bigint | null
    chatLink: string | null
    cityId: number | null
    cityName: string | null
    regionName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostPublicationCountAggregateOutputType = {
    id: number
    postId: number
    organizationId: number
    vkGroupId: number
    moderationStatus: number
    publishDate: number
    vkPostId: number
    chatLink: number
    cityId: number
    cityName: number
    regionName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostPublicationAvgAggregateInputType = {
    id?: true
    postId?: true
    organizationId?: true
    vkGroupId?: true
    vkPostId?: true
    cityId?: true
  }

  export type PostPublicationSumAggregateInputType = {
    id?: true
    postId?: true
    organizationId?: true
    vkGroupId?: true
    vkPostId?: true
    cityId?: true
  }

  export type PostPublicationMinAggregateInputType = {
    id?: true
    postId?: true
    organizationId?: true
    vkGroupId?: true
    moderationStatus?: true
    publishDate?: true
    vkPostId?: true
    chatLink?: true
    cityId?: true
    cityName?: true
    regionName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostPublicationMaxAggregateInputType = {
    id?: true
    postId?: true
    organizationId?: true
    vkGroupId?: true
    moderationStatus?: true
    publishDate?: true
    vkPostId?: true
    chatLink?: true
    cityId?: true
    cityName?: true
    regionName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostPublicationCountAggregateInputType = {
    id?: true
    postId?: true
    organizationId?: true
    vkGroupId?: true
    moderationStatus?: true
    publishDate?: true
    vkPostId?: true
    chatLink?: true
    cityId?: true
    cityName?: true
    regionName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostPublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostPublication to aggregate.
     */
    where?: PostPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostPublications to fetch.
     */
    orderBy?: PostPublicationOrderByWithRelationInput | PostPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostPublications
    **/
    _count?: true | PostPublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostPublicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostPublicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostPublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostPublicationMaxAggregateInputType
  }

  export type GetPostPublicationAggregateType<T extends PostPublicationAggregateArgs> = {
        [P in keyof T & keyof AggregatePostPublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostPublication[P]>
      : GetScalarType<T[P], AggregatePostPublication[P]>
  }




  export type PostPublicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostPublicationWhereInput
    orderBy?: PostPublicationOrderByWithAggregationInput | PostPublicationOrderByWithAggregationInput[]
    by: PostPublicationScalarFieldEnum[] | PostPublicationScalarFieldEnum
    having?: PostPublicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostPublicationCountAggregateInputType | true
    _avg?: PostPublicationAvgAggregateInputType
    _sum?: PostPublicationSumAggregateInputType
    _min?: PostPublicationMinAggregateInputType
    _max?: PostPublicationMaxAggregateInputType
  }

  export type PostPublicationGroupByOutputType = {
    id: number
    postId: number
    organizationId: number
    vkGroupId: bigint
    moderationStatus: string
    publishDate: Date | null
    vkPostId: bigint | null
    chatLink: string | null
    cityId: number | null
    cityName: string | null
    regionName: string | null
    createdAt: Date | null
    updatedAt: Date
    _count: PostPublicationCountAggregateOutputType | null
    _avg: PostPublicationAvgAggregateOutputType | null
    _sum: PostPublicationSumAggregateOutputType | null
    _min: PostPublicationMinAggregateOutputType | null
    _max: PostPublicationMaxAggregateOutputType | null
  }

  type GetPostPublicationGroupByPayload<T extends PostPublicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostPublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostPublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostPublicationGroupByOutputType[P]>
            : GetScalarType<T[P], PostPublicationGroupByOutputType[P]>
        }
      >
    >


  export type PostPublicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    organizationId?: boolean
    vkGroupId?: boolean
    moderationStatus?: boolean
    publishDate?: boolean
    vkPostId?: boolean
    chatLink?: boolean
    cityId?: boolean
    cityName?: boolean
    regionName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postPublication"]>

  export type PostPublicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    organizationId?: boolean
    vkGroupId?: boolean
    moderationStatus?: boolean
    publishDate?: boolean
    vkPostId?: boolean
    chatLink?: boolean
    cityId?: boolean
    cityName?: boolean
    regionName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postPublication"]>

  export type PostPublicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    organizationId?: boolean
    vkGroupId?: boolean
    moderationStatus?: boolean
    publishDate?: boolean
    vkPostId?: boolean
    chatLink?: boolean
    cityId?: boolean
    cityName?: boolean
    regionName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postPublication"]>

  export type PostPublicationSelectScalar = {
    id?: boolean
    postId?: boolean
    organizationId?: boolean
    vkGroupId?: boolean
    moderationStatus?: boolean
    publishDate?: boolean
    vkPostId?: boolean
    chatLink?: boolean
    cityId?: boolean
    cityName?: boolean
    regionName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostPublicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "organizationId" | "vkGroupId" | "moderationStatus" | "publishDate" | "vkPostId" | "chatLink" | "cityId" | "cityName" | "regionName" | "createdAt" | "updatedAt", ExtArgs["result"]["postPublication"]>
  export type PostPublicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type PostPublicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type PostPublicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $PostPublicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostPublication"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
      organizationId: number
      vkGroupId: bigint
      moderationStatus: string
      publishDate: Date | null
      vkPostId: bigint | null
      chatLink: string | null
      cityId: number | null
      cityName: string | null
      regionName: string | null
      createdAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["postPublication"]>
    composites: {}
  }

  type PostPublicationGetPayload<S extends boolean | null | undefined | PostPublicationDefaultArgs> = $Result.GetResult<Prisma.$PostPublicationPayload, S>

  type PostPublicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostPublicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostPublicationCountAggregateInputType | true
    }

  export interface PostPublicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostPublication'], meta: { name: 'PostPublication' } }
    /**
     * Find zero or one PostPublication that matches the filter.
     * @param {PostPublicationFindUniqueArgs} args - Arguments to find a PostPublication
     * @example
     * // Get one PostPublication
     * const postPublication = await prisma.postPublication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostPublicationFindUniqueArgs>(args: SelectSubset<T, PostPublicationFindUniqueArgs<ExtArgs>>): Prisma__PostPublicationClient<$Result.GetResult<Prisma.$PostPublicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostPublication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostPublicationFindUniqueOrThrowArgs} args - Arguments to find a PostPublication
     * @example
     * // Get one PostPublication
     * const postPublication = await prisma.postPublication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostPublicationFindUniqueOrThrowArgs>(args: SelectSubset<T, PostPublicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostPublicationClient<$Result.GetResult<Prisma.$PostPublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostPublication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPublicationFindFirstArgs} args - Arguments to find a PostPublication
     * @example
     * // Get one PostPublication
     * const postPublication = await prisma.postPublication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostPublicationFindFirstArgs>(args?: SelectSubset<T, PostPublicationFindFirstArgs<ExtArgs>>): Prisma__PostPublicationClient<$Result.GetResult<Prisma.$PostPublicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostPublication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPublicationFindFirstOrThrowArgs} args - Arguments to find a PostPublication
     * @example
     * // Get one PostPublication
     * const postPublication = await prisma.postPublication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostPublicationFindFirstOrThrowArgs>(args?: SelectSubset<T, PostPublicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostPublicationClient<$Result.GetResult<Prisma.$PostPublicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostPublications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPublicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostPublications
     * const postPublications = await prisma.postPublication.findMany()
     * 
     * // Get first 10 PostPublications
     * const postPublications = await prisma.postPublication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postPublicationWithIdOnly = await prisma.postPublication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostPublicationFindManyArgs>(args?: SelectSubset<T, PostPublicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostPublication.
     * @param {PostPublicationCreateArgs} args - Arguments to create a PostPublication.
     * @example
     * // Create one PostPublication
     * const PostPublication = await prisma.postPublication.create({
     *   data: {
     *     // ... data to create a PostPublication
     *   }
     * })
     * 
     */
    create<T extends PostPublicationCreateArgs>(args: SelectSubset<T, PostPublicationCreateArgs<ExtArgs>>): Prisma__PostPublicationClient<$Result.GetResult<Prisma.$PostPublicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostPublications.
     * @param {PostPublicationCreateManyArgs} args - Arguments to create many PostPublications.
     * @example
     * // Create many PostPublications
     * const postPublication = await prisma.postPublication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostPublicationCreateManyArgs>(args?: SelectSubset<T, PostPublicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostPublications and returns the data saved in the database.
     * @param {PostPublicationCreateManyAndReturnArgs} args - Arguments to create many PostPublications.
     * @example
     * // Create many PostPublications
     * const postPublication = await prisma.postPublication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostPublications and only return the `id`
     * const postPublicationWithIdOnly = await prisma.postPublication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostPublicationCreateManyAndReturnArgs>(args?: SelectSubset<T, PostPublicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPublicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostPublication.
     * @param {PostPublicationDeleteArgs} args - Arguments to delete one PostPublication.
     * @example
     * // Delete one PostPublication
     * const PostPublication = await prisma.postPublication.delete({
     *   where: {
     *     // ... filter to delete one PostPublication
     *   }
     * })
     * 
     */
    delete<T extends PostPublicationDeleteArgs>(args: SelectSubset<T, PostPublicationDeleteArgs<ExtArgs>>): Prisma__PostPublicationClient<$Result.GetResult<Prisma.$PostPublicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostPublication.
     * @param {PostPublicationUpdateArgs} args - Arguments to update one PostPublication.
     * @example
     * // Update one PostPublication
     * const postPublication = await prisma.postPublication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostPublicationUpdateArgs>(args: SelectSubset<T, PostPublicationUpdateArgs<ExtArgs>>): Prisma__PostPublicationClient<$Result.GetResult<Prisma.$PostPublicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostPublications.
     * @param {PostPublicationDeleteManyArgs} args - Arguments to filter PostPublications to delete.
     * @example
     * // Delete a few PostPublications
     * const { count } = await prisma.postPublication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostPublicationDeleteManyArgs>(args?: SelectSubset<T, PostPublicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostPublications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPublicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostPublications
     * const postPublication = await prisma.postPublication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostPublicationUpdateManyArgs>(args: SelectSubset<T, PostPublicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostPublications and returns the data updated in the database.
     * @param {PostPublicationUpdateManyAndReturnArgs} args - Arguments to update many PostPublications.
     * @example
     * // Update many PostPublications
     * const postPublication = await prisma.postPublication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostPublications and only return the `id`
     * const postPublicationWithIdOnly = await prisma.postPublication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostPublicationUpdateManyAndReturnArgs>(args: SelectSubset<T, PostPublicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPublicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostPublication.
     * @param {PostPublicationUpsertArgs} args - Arguments to update or create a PostPublication.
     * @example
     * // Update or create a PostPublication
     * const postPublication = await prisma.postPublication.upsert({
     *   create: {
     *     // ... data to create a PostPublication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostPublication we want to update
     *   }
     * })
     */
    upsert<T extends PostPublicationUpsertArgs>(args: SelectSubset<T, PostPublicationUpsertArgs<ExtArgs>>): Prisma__PostPublicationClient<$Result.GetResult<Prisma.$PostPublicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostPublications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPublicationCountArgs} args - Arguments to filter PostPublications to count.
     * @example
     * // Count the number of PostPublications
     * const count = await prisma.postPublication.count({
     *   where: {
     *     // ... the filter for the PostPublications we want to count
     *   }
     * })
    **/
    count<T extends PostPublicationCountArgs>(
      args?: Subset<T, PostPublicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostPublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostPublication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostPublicationAggregateArgs>(args: Subset<T, PostPublicationAggregateArgs>): Prisma.PrismaPromise<GetPostPublicationAggregateType<T>>

    /**
     * Group by PostPublication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostPublicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostPublicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostPublicationGroupByArgs['orderBy'] }
        : { orderBy?: PostPublicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostPublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostPublication model
   */
  readonly fields: PostPublicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostPublication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostPublicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostPublication model
   */
  interface PostPublicationFieldRefs {
    readonly id: FieldRef<"PostPublication", 'Int'>
    readonly postId: FieldRef<"PostPublication", 'Int'>
    readonly organizationId: FieldRef<"PostPublication", 'Int'>
    readonly vkGroupId: FieldRef<"PostPublication", 'BigInt'>
    readonly moderationStatus: FieldRef<"PostPublication", 'String'>
    readonly publishDate: FieldRef<"PostPublication", 'DateTime'>
    readonly vkPostId: FieldRef<"PostPublication", 'BigInt'>
    readonly chatLink: FieldRef<"PostPublication", 'String'>
    readonly cityId: FieldRef<"PostPublication", 'Int'>
    readonly cityName: FieldRef<"PostPublication", 'String'>
    readonly regionName: FieldRef<"PostPublication", 'String'>
    readonly createdAt: FieldRef<"PostPublication", 'DateTime'>
    readonly updatedAt: FieldRef<"PostPublication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostPublication findUnique
   */
  export type PostPublicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationInclude<ExtArgs> | null
    /**
     * Filter, which PostPublication to fetch.
     */
    where: PostPublicationWhereUniqueInput
  }

  /**
   * PostPublication findUniqueOrThrow
   */
  export type PostPublicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationInclude<ExtArgs> | null
    /**
     * Filter, which PostPublication to fetch.
     */
    where: PostPublicationWhereUniqueInput
  }

  /**
   * PostPublication findFirst
   */
  export type PostPublicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationInclude<ExtArgs> | null
    /**
     * Filter, which PostPublication to fetch.
     */
    where?: PostPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostPublications to fetch.
     */
    orderBy?: PostPublicationOrderByWithRelationInput | PostPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostPublications.
     */
    cursor?: PostPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostPublications.
     */
    distinct?: PostPublicationScalarFieldEnum | PostPublicationScalarFieldEnum[]
  }

  /**
   * PostPublication findFirstOrThrow
   */
  export type PostPublicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationInclude<ExtArgs> | null
    /**
     * Filter, which PostPublication to fetch.
     */
    where?: PostPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostPublications to fetch.
     */
    orderBy?: PostPublicationOrderByWithRelationInput | PostPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostPublications.
     */
    cursor?: PostPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostPublications.
     */
    distinct?: PostPublicationScalarFieldEnum | PostPublicationScalarFieldEnum[]
  }

  /**
   * PostPublication findMany
   */
  export type PostPublicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationInclude<ExtArgs> | null
    /**
     * Filter, which PostPublications to fetch.
     */
    where?: PostPublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostPublications to fetch.
     */
    orderBy?: PostPublicationOrderByWithRelationInput | PostPublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostPublications.
     */
    cursor?: PostPublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostPublications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostPublications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostPublications.
     */
    distinct?: PostPublicationScalarFieldEnum | PostPublicationScalarFieldEnum[]
  }

  /**
   * PostPublication create
   */
  export type PostPublicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationInclude<ExtArgs> | null
    /**
     * The data needed to create a PostPublication.
     */
    data: XOR<PostPublicationCreateInput, PostPublicationUncheckedCreateInput>
  }

  /**
   * PostPublication createMany
   */
  export type PostPublicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostPublications.
     */
    data: PostPublicationCreateManyInput | PostPublicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostPublication createManyAndReturn
   */
  export type PostPublicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * The data used to create many PostPublications.
     */
    data: PostPublicationCreateManyInput | PostPublicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostPublication update
   */
  export type PostPublicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationInclude<ExtArgs> | null
    /**
     * The data needed to update a PostPublication.
     */
    data: XOR<PostPublicationUpdateInput, PostPublicationUncheckedUpdateInput>
    /**
     * Choose, which PostPublication to update.
     */
    where: PostPublicationWhereUniqueInput
  }

  /**
   * PostPublication updateMany
   */
  export type PostPublicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostPublications.
     */
    data: XOR<PostPublicationUpdateManyMutationInput, PostPublicationUncheckedUpdateManyInput>
    /**
     * Filter which PostPublications to update
     */
    where?: PostPublicationWhereInput
    /**
     * Limit how many PostPublications to update.
     */
    limit?: number
  }

  /**
   * PostPublication updateManyAndReturn
   */
  export type PostPublicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * The data used to update PostPublications.
     */
    data: XOR<PostPublicationUpdateManyMutationInput, PostPublicationUncheckedUpdateManyInput>
    /**
     * Filter which PostPublications to update
     */
    where?: PostPublicationWhereInput
    /**
     * Limit how many PostPublications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostPublication upsert
   */
  export type PostPublicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationInclude<ExtArgs> | null
    /**
     * The filter to search for the PostPublication to update in case it exists.
     */
    where: PostPublicationWhereUniqueInput
    /**
     * In case the PostPublication found by the `where` argument doesn't exist, create a new PostPublication with this data.
     */
    create: XOR<PostPublicationCreateInput, PostPublicationUncheckedCreateInput>
    /**
     * In case the PostPublication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostPublicationUpdateInput, PostPublicationUncheckedUpdateInput>
  }

  /**
   * PostPublication delete
   */
  export type PostPublicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationInclude<ExtArgs> | null
    /**
     * Filter which PostPublication to delete.
     */
    where: PostPublicationWhereUniqueInput
  }

  /**
   * PostPublication deleteMany
   */
  export type PostPublicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostPublications to delete
     */
    where?: PostPublicationWhereInput
    /**
     * Limit how many PostPublications to delete.
     */
    limit?: number
  }

  /**
   * PostPublication without action
   */
  export type PostPublicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostPublication
     */
    select?: PostPublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostPublication
     */
    omit?: PostPublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostPublicationInclude<ExtArgs> | null
  }


  /**
   * Model RadarPin
   */

  export type AggregateRadarPin = {
    _count: RadarPinCountAggregateOutputType | null
    _avg: RadarPinAvgAggregateOutputType | null
    _sum: RadarPinSumAggregateOutputType | null
    _min: RadarPinMinAggregateOutputType | null
    _max: RadarPinMaxAggregateOutputType | null
  }

  export type RadarPinAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
    organizationId: number | null
    lat: Decimal | null
    lng: Decimal | null
  }

  export type RadarPinSumAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
    organizationId: number | null
    lat: Decimal | null
    lng: Decimal | null
  }

  export type RadarPinMinAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
    organizationId: number | null
    type: string | null
    title: string | null
    description: string | null
    lat: Decimal | null
    lng: Decimal | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RadarPinMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
    organizationId: number | null
    type: string | null
    title: string | null
    description: string | null
    lat: Decimal | null
    lng: Decimal | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RadarPinCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    organizationId: number
    type: number
    title: number
    description: number
    lat: number
    lng: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RadarPinAvgAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    organizationId?: true
    lat?: true
    lng?: true
  }

  export type RadarPinSumAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    organizationId?: true
    lat?: true
    lng?: true
  }

  export type RadarPinMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    organizationId?: true
    type?: true
    title?: true
    description?: true
    lat?: true
    lng?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RadarPinMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    organizationId?: true
    type?: true
    title?: true
    description?: true
    lat?: true
    lng?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RadarPinCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    organizationId?: true
    type?: true
    title?: true
    description?: true
    lat?: true
    lng?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RadarPinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RadarPin to aggregate.
     */
    where?: RadarPinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RadarPins to fetch.
     */
    orderBy?: RadarPinOrderByWithRelationInput | RadarPinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RadarPinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RadarPins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RadarPins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RadarPins
    **/
    _count?: true | RadarPinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RadarPinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RadarPinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RadarPinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RadarPinMaxAggregateInputType
  }

  export type GetRadarPinAggregateType<T extends RadarPinAggregateArgs> = {
        [P in keyof T & keyof AggregateRadarPin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRadarPin[P]>
      : GetScalarType<T[P], AggregateRadarPin[P]>
  }




  export type RadarPinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RadarPinWhereInput
    orderBy?: RadarPinOrderByWithAggregationInput | RadarPinOrderByWithAggregationInput[]
    by: RadarPinScalarFieldEnum[] | RadarPinScalarFieldEnum
    having?: RadarPinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RadarPinCountAggregateInputType | true
    _avg?: RadarPinAvgAggregateInputType
    _sum?: RadarPinSumAggregateInputType
    _min?: RadarPinMinAggregateInputType
    _max?: RadarPinMaxAggregateInputType
  }

  export type RadarPinGroupByOutputType = {
    id: number
    userId: number | null
    postId: number | null
    organizationId: number | null
    type: string
    title: string
    description: string | null
    lat: Decimal
    lng: Decimal
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date
    _count: RadarPinCountAggregateOutputType | null
    _avg: RadarPinAvgAggregateOutputType | null
    _sum: RadarPinSumAggregateOutputType | null
    _min: RadarPinMinAggregateOutputType | null
    _max: RadarPinMaxAggregateOutputType | null
  }

  type GetRadarPinGroupByPayload<T extends RadarPinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RadarPinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RadarPinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RadarPinGroupByOutputType[P]>
            : GetScalarType<T[P], RadarPinGroupByOutputType[P]>
        }
      >
    >


  export type RadarPinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    organizationId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    lat?: boolean
    lng?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | RadarPin$userArgs<ExtArgs>
    post?: boolean | RadarPin$postArgs<ExtArgs>
    organization?: boolean | RadarPin$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["radarPin"]>

  export type RadarPinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    organizationId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    lat?: boolean
    lng?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | RadarPin$userArgs<ExtArgs>
    post?: boolean | RadarPin$postArgs<ExtArgs>
    organization?: boolean | RadarPin$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["radarPin"]>

  export type RadarPinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    organizationId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    lat?: boolean
    lng?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | RadarPin$userArgs<ExtArgs>
    post?: boolean | RadarPin$postArgs<ExtArgs>
    organization?: boolean | RadarPin$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["radarPin"]>

  export type RadarPinSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    organizationId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    lat?: boolean
    lng?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RadarPinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "organizationId" | "type" | "title" | "description" | "lat" | "lng" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["radarPin"]>
  export type RadarPinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RadarPin$userArgs<ExtArgs>
    post?: boolean | RadarPin$postArgs<ExtArgs>
    organization?: boolean | RadarPin$organizationArgs<ExtArgs>
  }
  export type RadarPinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RadarPin$userArgs<ExtArgs>
    post?: boolean | RadarPin$postArgs<ExtArgs>
    organization?: boolean | RadarPin$organizationArgs<ExtArgs>
  }
  export type RadarPinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RadarPin$userArgs<ExtArgs>
    post?: boolean | RadarPin$postArgs<ExtArgs>
    organization?: boolean | RadarPin$organizationArgs<ExtArgs>
  }

  export type $RadarPinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RadarPin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      post: Prisma.$PostPayload<ExtArgs> | null
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      postId: number | null
      organizationId: number | null
      type: string
      title: string
      description: string | null
      lat: Prisma.Decimal
      lng: Prisma.Decimal
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["radarPin"]>
    composites: {}
  }

  type RadarPinGetPayload<S extends boolean | null | undefined | RadarPinDefaultArgs> = $Result.GetResult<Prisma.$RadarPinPayload, S>

  type RadarPinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RadarPinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RadarPinCountAggregateInputType | true
    }

  export interface RadarPinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RadarPin'], meta: { name: 'RadarPin' } }
    /**
     * Find zero or one RadarPin that matches the filter.
     * @param {RadarPinFindUniqueArgs} args - Arguments to find a RadarPin
     * @example
     * // Get one RadarPin
     * const radarPin = await prisma.radarPin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RadarPinFindUniqueArgs>(args: SelectSubset<T, RadarPinFindUniqueArgs<ExtArgs>>): Prisma__RadarPinClient<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RadarPin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RadarPinFindUniqueOrThrowArgs} args - Arguments to find a RadarPin
     * @example
     * // Get one RadarPin
     * const radarPin = await prisma.radarPin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RadarPinFindUniqueOrThrowArgs>(args: SelectSubset<T, RadarPinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RadarPinClient<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RadarPin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadarPinFindFirstArgs} args - Arguments to find a RadarPin
     * @example
     * // Get one RadarPin
     * const radarPin = await prisma.radarPin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RadarPinFindFirstArgs>(args?: SelectSubset<T, RadarPinFindFirstArgs<ExtArgs>>): Prisma__RadarPinClient<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RadarPin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadarPinFindFirstOrThrowArgs} args - Arguments to find a RadarPin
     * @example
     * // Get one RadarPin
     * const radarPin = await prisma.radarPin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RadarPinFindFirstOrThrowArgs>(args?: SelectSubset<T, RadarPinFindFirstOrThrowArgs<ExtArgs>>): Prisma__RadarPinClient<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RadarPins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadarPinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RadarPins
     * const radarPins = await prisma.radarPin.findMany()
     * 
     * // Get first 10 RadarPins
     * const radarPins = await prisma.radarPin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const radarPinWithIdOnly = await prisma.radarPin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RadarPinFindManyArgs>(args?: SelectSubset<T, RadarPinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RadarPin.
     * @param {RadarPinCreateArgs} args - Arguments to create a RadarPin.
     * @example
     * // Create one RadarPin
     * const RadarPin = await prisma.radarPin.create({
     *   data: {
     *     // ... data to create a RadarPin
     *   }
     * })
     * 
     */
    create<T extends RadarPinCreateArgs>(args: SelectSubset<T, RadarPinCreateArgs<ExtArgs>>): Prisma__RadarPinClient<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RadarPins.
     * @param {RadarPinCreateManyArgs} args - Arguments to create many RadarPins.
     * @example
     * // Create many RadarPins
     * const radarPin = await prisma.radarPin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RadarPinCreateManyArgs>(args?: SelectSubset<T, RadarPinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RadarPins and returns the data saved in the database.
     * @param {RadarPinCreateManyAndReturnArgs} args - Arguments to create many RadarPins.
     * @example
     * // Create many RadarPins
     * const radarPin = await prisma.radarPin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RadarPins and only return the `id`
     * const radarPinWithIdOnly = await prisma.radarPin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RadarPinCreateManyAndReturnArgs>(args?: SelectSubset<T, RadarPinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RadarPin.
     * @param {RadarPinDeleteArgs} args - Arguments to delete one RadarPin.
     * @example
     * // Delete one RadarPin
     * const RadarPin = await prisma.radarPin.delete({
     *   where: {
     *     // ... filter to delete one RadarPin
     *   }
     * })
     * 
     */
    delete<T extends RadarPinDeleteArgs>(args: SelectSubset<T, RadarPinDeleteArgs<ExtArgs>>): Prisma__RadarPinClient<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RadarPin.
     * @param {RadarPinUpdateArgs} args - Arguments to update one RadarPin.
     * @example
     * // Update one RadarPin
     * const radarPin = await prisma.radarPin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RadarPinUpdateArgs>(args: SelectSubset<T, RadarPinUpdateArgs<ExtArgs>>): Prisma__RadarPinClient<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RadarPins.
     * @param {RadarPinDeleteManyArgs} args - Arguments to filter RadarPins to delete.
     * @example
     * // Delete a few RadarPins
     * const { count } = await prisma.radarPin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RadarPinDeleteManyArgs>(args?: SelectSubset<T, RadarPinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RadarPins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadarPinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RadarPins
     * const radarPin = await prisma.radarPin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RadarPinUpdateManyArgs>(args: SelectSubset<T, RadarPinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RadarPins and returns the data updated in the database.
     * @param {RadarPinUpdateManyAndReturnArgs} args - Arguments to update many RadarPins.
     * @example
     * // Update many RadarPins
     * const radarPin = await prisma.radarPin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RadarPins and only return the `id`
     * const radarPinWithIdOnly = await prisma.radarPin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RadarPinUpdateManyAndReturnArgs>(args: SelectSubset<T, RadarPinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RadarPin.
     * @param {RadarPinUpsertArgs} args - Arguments to update or create a RadarPin.
     * @example
     * // Update or create a RadarPin
     * const radarPin = await prisma.radarPin.upsert({
     *   create: {
     *     // ... data to create a RadarPin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RadarPin we want to update
     *   }
     * })
     */
    upsert<T extends RadarPinUpsertArgs>(args: SelectSubset<T, RadarPinUpsertArgs<ExtArgs>>): Prisma__RadarPinClient<$Result.GetResult<Prisma.$RadarPinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RadarPins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadarPinCountArgs} args - Arguments to filter RadarPins to count.
     * @example
     * // Count the number of RadarPins
     * const count = await prisma.radarPin.count({
     *   where: {
     *     // ... the filter for the RadarPins we want to count
     *   }
     * })
    **/
    count<T extends RadarPinCountArgs>(
      args?: Subset<T, RadarPinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RadarPinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RadarPin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadarPinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RadarPinAggregateArgs>(args: Subset<T, RadarPinAggregateArgs>): Prisma.PrismaPromise<GetRadarPinAggregateType<T>>

    /**
     * Group by RadarPin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RadarPinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RadarPinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RadarPinGroupByArgs['orderBy'] }
        : { orderBy?: RadarPinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RadarPinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRadarPinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RadarPin model
   */
  readonly fields: RadarPinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RadarPin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RadarPinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends RadarPin$userArgs<ExtArgs> = {}>(args?: Subset<T, RadarPin$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    post<T extends RadarPin$postArgs<ExtArgs> = {}>(args?: Subset<T, RadarPin$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    organization<T extends RadarPin$organizationArgs<ExtArgs> = {}>(args?: Subset<T, RadarPin$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RadarPin model
   */
  interface RadarPinFieldRefs {
    readonly id: FieldRef<"RadarPin", 'Int'>
    readonly userId: FieldRef<"RadarPin", 'Int'>
    readonly postId: FieldRef<"RadarPin", 'Int'>
    readonly organizationId: FieldRef<"RadarPin", 'Int'>
    readonly type: FieldRef<"RadarPin", 'String'>
    readonly title: FieldRef<"RadarPin", 'String'>
    readonly description: FieldRef<"RadarPin", 'String'>
    readonly lat: FieldRef<"RadarPin", 'Decimal'>
    readonly lng: FieldRef<"RadarPin", 'Decimal'>
    readonly expiresAt: FieldRef<"RadarPin", 'DateTime'>
    readonly createdAt: FieldRef<"RadarPin", 'DateTime'>
    readonly updatedAt: FieldRef<"RadarPin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RadarPin findUnique
   */
  export type RadarPinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinInclude<ExtArgs> | null
    /**
     * Filter, which RadarPin to fetch.
     */
    where: RadarPinWhereUniqueInput
  }

  /**
   * RadarPin findUniqueOrThrow
   */
  export type RadarPinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinInclude<ExtArgs> | null
    /**
     * Filter, which RadarPin to fetch.
     */
    where: RadarPinWhereUniqueInput
  }

  /**
   * RadarPin findFirst
   */
  export type RadarPinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinInclude<ExtArgs> | null
    /**
     * Filter, which RadarPin to fetch.
     */
    where?: RadarPinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RadarPins to fetch.
     */
    orderBy?: RadarPinOrderByWithRelationInput | RadarPinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RadarPins.
     */
    cursor?: RadarPinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RadarPins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RadarPins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RadarPins.
     */
    distinct?: RadarPinScalarFieldEnum | RadarPinScalarFieldEnum[]
  }

  /**
   * RadarPin findFirstOrThrow
   */
  export type RadarPinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinInclude<ExtArgs> | null
    /**
     * Filter, which RadarPin to fetch.
     */
    where?: RadarPinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RadarPins to fetch.
     */
    orderBy?: RadarPinOrderByWithRelationInput | RadarPinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RadarPins.
     */
    cursor?: RadarPinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RadarPins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RadarPins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RadarPins.
     */
    distinct?: RadarPinScalarFieldEnum | RadarPinScalarFieldEnum[]
  }

  /**
   * RadarPin findMany
   */
  export type RadarPinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinInclude<ExtArgs> | null
    /**
     * Filter, which RadarPins to fetch.
     */
    where?: RadarPinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RadarPins to fetch.
     */
    orderBy?: RadarPinOrderByWithRelationInput | RadarPinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RadarPins.
     */
    cursor?: RadarPinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RadarPins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RadarPins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RadarPins.
     */
    distinct?: RadarPinScalarFieldEnum | RadarPinScalarFieldEnum[]
  }

  /**
   * RadarPin create
   */
  export type RadarPinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinInclude<ExtArgs> | null
    /**
     * The data needed to create a RadarPin.
     */
    data: XOR<RadarPinCreateInput, RadarPinUncheckedCreateInput>
  }

  /**
   * RadarPin createMany
   */
  export type RadarPinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RadarPins.
     */
    data: RadarPinCreateManyInput | RadarPinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RadarPin createManyAndReturn
   */
  export type RadarPinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * The data used to create many RadarPins.
     */
    data: RadarPinCreateManyInput | RadarPinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RadarPin update
   */
  export type RadarPinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinInclude<ExtArgs> | null
    /**
     * The data needed to update a RadarPin.
     */
    data: XOR<RadarPinUpdateInput, RadarPinUncheckedUpdateInput>
    /**
     * Choose, which RadarPin to update.
     */
    where: RadarPinWhereUniqueInput
  }

  /**
   * RadarPin updateMany
   */
  export type RadarPinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RadarPins.
     */
    data: XOR<RadarPinUpdateManyMutationInput, RadarPinUncheckedUpdateManyInput>
    /**
     * Filter which RadarPins to update
     */
    where?: RadarPinWhereInput
    /**
     * Limit how many RadarPins to update.
     */
    limit?: number
  }

  /**
   * RadarPin updateManyAndReturn
   */
  export type RadarPinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * The data used to update RadarPins.
     */
    data: XOR<RadarPinUpdateManyMutationInput, RadarPinUncheckedUpdateManyInput>
    /**
     * Filter which RadarPins to update
     */
    where?: RadarPinWhereInput
    /**
     * Limit how many RadarPins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RadarPin upsert
   */
  export type RadarPinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinInclude<ExtArgs> | null
    /**
     * The filter to search for the RadarPin to update in case it exists.
     */
    where: RadarPinWhereUniqueInput
    /**
     * In case the RadarPin found by the `where` argument doesn't exist, create a new RadarPin with this data.
     */
    create: XOR<RadarPinCreateInput, RadarPinUncheckedCreateInput>
    /**
     * In case the RadarPin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RadarPinUpdateInput, RadarPinUncheckedUpdateInput>
  }

  /**
   * RadarPin delete
   */
  export type RadarPinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinInclude<ExtArgs> | null
    /**
     * Filter which RadarPin to delete.
     */
    where: RadarPinWhereUniqueInput
  }

  /**
   * RadarPin deleteMany
   */
  export type RadarPinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RadarPins to delete
     */
    where?: RadarPinWhereInput
    /**
     * Limit how many RadarPins to delete.
     */
    limit?: number
  }

  /**
   * RadarPin.user
   */
  export type RadarPin$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RadarPin.post
   */
  export type RadarPin$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * RadarPin.organization
   */
  export type RadarPin$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * RadarPin without action
   */
  export type RadarPinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RadarPin
     */
    select?: RadarPinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RadarPin
     */
    omit?: RadarPinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RadarPinInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    email: 'email',
    bio: 'bio',
    phone: 'phone',
    location: 'location',
    avatar: 'avatar',
    coverPhoto: 'coverPhoto',
    profileVisibility: 'profileVisibility',
    showPhone: 'showPhone',
    showEmail: 'showEmail',
    allowMessages: 'allowMessages',
    showOnline: 'showOnline',
    verified: 'verified',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt',
    lastSeen: 'lastSeen',
    passwordHash: 'passwordHash',
    vkId: 'vkId',
    vkAccessToken: 'vkAccessToken',
    okId: 'okId',
    okAccessToken: 'okAccessToken',
    mailruId: 'mailruId',
    mailruAccessToken: 'mailruAccessToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VkAppUserSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roleLabel: 'roleLabel',
    contactTelegram: 'contactTelegram',
    contactEmail: 'contactEmail',
    homeCityName: 'homeCityName',
    homeLat: 'homeLat',
    homeLng: 'homeLng',
    preferences: 'preferences',
    onboardingProgress: 'onboardingProgress',
    onboardingCompleted: 'onboardingCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VkAppUserSettingsScalarFieldEnum = (typeof VkAppUserSettingsScalarFieldEnum)[keyof typeof VkAppUserSettingsScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    description: 'description',
    logo: 'logo',
    website: 'website',
    phone: 'phone',
    email: 'email',
    address: 'address',
    city: 'city',
    region: 'region',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    shortName: 'shortName',
    bio: 'bio',
    coverPhoto: 'coverPhoto',
    addressCity: 'addressCity',
    addressRegion: 'addressRegion',
    isVerified: 'isVerified',
    ownerUserId: 'ownerUserId',
    status: 'status',
    isActive: 'isActive',
    profileVisibility: 'profileVisibility',
    showPhone: 'showPhone',
    showEmail: 'showEmail',
    allowMessages: 'allowMessages',
    geoLat: 'geoLat',
    geoLng: 'geoLng',
    networkRole: 'networkRole',
    vkLink: 'vkLink'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OrganizationMemberScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    userId: 'userId',
    role: 'role',
    position: 'position',
    canPost: 'canPost',
    joinedAt: 'joinedAt',
    orgAvatar: 'orgAvatar',
    permissions: 'permissions',
    isPublic: 'isPublic'
  };

  export type OrganizationMemberScalarFieldEnum = (typeof OrganizationMemberScalarFieldEnum)[keyof typeof OrganizationMemberScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    vkGroupId: 'vkGroupId',
    accessToken: 'accessToken',
    acceptCrossPosts: 'acceptCrossPosts',
    acceptedTags: 'acceptedTags',
    scheduleIntervalMinutes: 'scheduleIntervalMinutes',
    scheduleStartTime: 'scheduleStartTime',
    scheduleEndTime: 'scheduleEndTime',
    dutyAdminUserId: 'dutyAdminUserId',
    cityId: 'cityId',
    cityName: 'cityName',
    regionName: 'regionName',
    lat: 'lat',
    lng: 'lng',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const CommunityNotificationAdminScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type CommunityNotificationAdminScalarFieldEnum = (typeof CommunityNotificationAdminScalarFieldEnum)[keyof typeof CommunityNotificationAdminScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    mediaUrls: 'mediaUrls',
    status: 'status',
    scheduledAt: 'scheduledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId',
    authorType: 'authorType',
    attachedPets: 'attachedPets',
    attachments: 'attachments',
    tags: 'tags',
    isDeleted: 'isDeleted',
    likesCount: 'likesCount',
    commentsCount: 'commentsCount',
    locationLat: 'locationLat',
    locationLng: 'locationLng',
    locationName: 'locationName',
    replySetting: 'replySetting',
    verifyReplies: 'verifyReplies'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostPublicationScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    organizationId: 'organizationId',
    vkGroupId: 'vkGroupId',
    moderationStatus: 'moderationStatus',
    publishDate: 'publishDate',
    vkPostId: 'vkPostId',
    chatLink: 'chatLink',
    cityId: 'cityId',
    cityName: 'cityName',
    regionName: 'regionName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostPublicationScalarFieldEnum = (typeof PostPublicationScalarFieldEnum)[keyof typeof PostPublicationScalarFieldEnum]


  export const RadarPinScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    organizationId: 'organizationId',
    type: 'type',
    title: 'title',
    description: 'description',
    lat: 'lat',
    lng: 'lng',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RadarPinScalarFieldEnum = (typeof RadarPinScalarFieldEnum)[keyof typeof RadarPinScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    coverPhoto?: StringNullableFilter<"User"> | string | null
    profileVisibility?: StringNullableFilter<"User"> | string | null
    showPhone?: StringNullableFilter<"User"> | string | null
    showEmail?: StringNullableFilter<"User"> | string | null
    allowMessages?: StringNullableFilter<"User"> | string | null
    showOnline?: StringNullableFilter<"User"> | string | null
    verified?: BoolNullableFilter<"User"> | boolean | null
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordHash?: StringFilter<"User"> | string
    vkId?: IntNullableFilter<"User"> | number | null
    vkAccessToken?: StringNullableFilter<"User"> | string | null
    okId?: StringNullableFilter<"User"> | string | null
    okAccessToken?: StringNullableFilter<"User"> | string | null
    mailruId?: StringNullableFilter<"User"> | string | null
    mailruAccessToken?: StringNullableFilter<"User"> | string | null
    vkAppSettings?: XOR<VkAppUserSettingsNullableScalarRelationFilter, VkAppUserSettingsWhereInput> | null
    organizationMembers?: OrganizationMemberListRelationFilter
    ownedOrganizations?: OrganizationListRelationFilter
    communityDutyFor?: CommunityListRelationFilter
    communityAdmins?: CommunityNotificationAdminListRelationFilter
    posts?: PostListRelationFilter
    radarPins?: RadarPinListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    coverPhoto?: SortOrderInput | SortOrder
    profileVisibility?: SortOrderInput | SortOrder
    showPhone?: SortOrderInput | SortOrder
    showEmail?: SortOrderInput | SortOrder
    allowMessages?: SortOrderInput | SortOrder
    showOnline?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    vkId?: SortOrderInput | SortOrder
    vkAccessToken?: SortOrderInput | SortOrder
    okId?: SortOrderInput | SortOrder
    okAccessToken?: SortOrderInput | SortOrder
    mailruId?: SortOrderInput | SortOrder
    mailruAccessToken?: SortOrderInput | SortOrder
    vkAppSettings?: VkAppUserSettingsOrderByWithRelationInput
    organizationMembers?: OrganizationMemberOrderByRelationAggregateInput
    ownedOrganizations?: OrganizationOrderByRelationAggregateInput
    communityDutyFor?: CommunityOrderByRelationAggregateInput
    communityAdmins?: CommunityNotificationAdminOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    radarPins?: RadarPinOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    vkId?: number
    okId?: string
    mailruId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    coverPhoto?: StringNullableFilter<"User"> | string | null
    profileVisibility?: StringNullableFilter<"User"> | string | null
    showPhone?: StringNullableFilter<"User"> | string | null
    showEmail?: StringNullableFilter<"User"> | string | null
    allowMessages?: StringNullableFilter<"User"> | string | null
    showOnline?: StringNullableFilter<"User"> | string | null
    verified?: BoolNullableFilter<"User"> | boolean | null
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordHash?: StringFilter<"User"> | string
    vkAccessToken?: StringNullableFilter<"User"> | string | null
    okAccessToken?: StringNullableFilter<"User"> | string | null
    mailruAccessToken?: StringNullableFilter<"User"> | string | null
    vkAppSettings?: XOR<VkAppUserSettingsNullableScalarRelationFilter, VkAppUserSettingsWhereInput> | null
    organizationMembers?: OrganizationMemberListRelationFilter
    ownedOrganizations?: OrganizationListRelationFilter
    communityDutyFor?: CommunityListRelationFilter
    communityAdmins?: CommunityNotificationAdminListRelationFilter
    posts?: PostListRelationFilter
    radarPins?: RadarPinListRelationFilter
  }, "id" | "email" | "vkId" | "okId" | "mailruId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    coverPhoto?: SortOrderInput | SortOrder
    profileVisibility?: SortOrderInput | SortOrder
    showPhone?: SortOrderInput | SortOrder
    showEmail?: SortOrderInput | SortOrder
    allowMessages?: SortOrderInput | SortOrder
    showOnline?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    lastSeen?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    vkId?: SortOrderInput | SortOrder
    vkAccessToken?: SortOrderInput | SortOrder
    okId?: SortOrderInput | SortOrder
    okAccessToken?: SortOrderInput | SortOrder
    mailruId?: SortOrderInput | SortOrder
    mailruAccessToken?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    coverPhoto?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileVisibility?: StringNullableWithAggregatesFilter<"User"> | string | null
    showPhone?: StringNullableWithAggregatesFilter<"User"> | string | null
    showEmail?: StringNullableWithAggregatesFilter<"User"> | string | null
    allowMessages?: StringNullableWithAggregatesFilter<"User"> | string | null
    showOnline?: StringNullableWithAggregatesFilter<"User"> | string | null
    verified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastSeen?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    vkId?: IntNullableWithAggregatesFilter<"User"> | number | null
    vkAccessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    okId?: StringNullableWithAggregatesFilter<"User"> | string | null
    okAccessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    mailruId?: StringNullableWithAggregatesFilter<"User"> | string | null
    mailruAccessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VkAppUserSettingsWhereInput = {
    AND?: VkAppUserSettingsWhereInput | VkAppUserSettingsWhereInput[]
    OR?: VkAppUserSettingsWhereInput[]
    NOT?: VkAppUserSettingsWhereInput | VkAppUserSettingsWhereInput[]
    id?: IntFilter<"VkAppUserSettings"> | number
    userId?: IntFilter<"VkAppUserSettings"> | number
    roleLabel?: StringNullableFilter<"VkAppUserSettings"> | string | null
    contactTelegram?: StringNullableFilter<"VkAppUserSettings"> | string | null
    contactEmail?: StringNullableFilter<"VkAppUserSettings"> | string | null
    homeCityName?: StringNullableFilter<"VkAppUserSettings"> | string | null
    homeLat?: DecimalNullableFilter<"VkAppUserSettings"> | Decimal | DecimalJsLike | number | string | null
    homeLng?: DecimalNullableFilter<"VkAppUserSettings"> | Decimal | DecimalJsLike | number | string | null
    preferences?: JsonFilter<"VkAppUserSettings">
    onboardingProgress?: IntFilter<"VkAppUserSettings"> | number
    onboardingCompleted?: BoolFilter<"VkAppUserSettings"> | boolean
    createdAt?: DateTimeNullableFilter<"VkAppUserSettings"> | Date | string | null
    updatedAt?: DateTimeFilter<"VkAppUserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VkAppUserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleLabel?: SortOrderInput | SortOrder
    contactTelegram?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    homeCityName?: SortOrderInput | SortOrder
    homeLat?: SortOrderInput | SortOrder
    homeLng?: SortOrderInput | SortOrder
    preferences?: SortOrder
    onboardingProgress?: SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VkAppUserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: VkAppUserSettingsWhereInput | VkAppUserSettingsWhereInput[]
    OR?: VkAppUserSettingsWhereInput[]
    NOT?: VkAppUserSettingsWhereInput | VkAppUserSettingsWhereInput[]
    roleLabel?: StringNullableFilter<"VkAppUserSettings"> | string | null
    contactTelegram?: StringNullableFilter<"VkAppUserSettings"> | string | null
    contactEmail?: StringNullableFilter<"VkAppUserSettings"> | string | null
    homeCityName?: StringNullableFilter<"VkAppUserSettings"> | string | null
    homeLat?: DecimalNullableFilter<"VkAppUserSettings"> | Decimal | DecimalJsLike | number | string | null
    homeLng?: DecimalNullableFilter<"VkAppUserSettings"> | Decimal | DecimalJsLike | number | string | null
    preferences?: JsonFilter<"VkAppUserSettings">
    onboardingProgress?: IntFilter<"VkAppUserSettings"> | number
    onboardingCompleted?: BoolFilter<"VkAppUserSettings"> | boolean
    createdAt?: DateTimeNullableFilter<"VkAppUserSettings"> | Date | string | null
    updatedAt?: DateTimeFilter<"VkAppUserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type VkAppUserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleLabel?: SortOrderInput | SortOrder
    contactTelegram?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    homeCityName?: SortOrderInput | SortOrder
    homeLat?: SortOrderInput | SortOrder
    homeLng?: SortOrderInput | SortOrder
    preferences?: SortOrder
    onboardingProgress?: SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: VkAppUserSettingsCountOrderByAggregateInput
    _avg?: VkAppUserSettingsAvgOrderByAggregateInput
    _max?: VkAppUserSettingsMaxOrderByAggregateInput
    _min?: VkAppUserSettingsMinOrderByAggregateInput
    _sum?: VkAppUserSettingsSumOrderByAggregateInput
  }

  export type VkAppUserSettingsScalarWhereWithAggregatesInput = {
    AND?: VkAppUserSettingsScalarWhereWithAggregatesInput | VkAppUserSettingsScalarWhereWithAggregatesInput[]
    OR?: VkAppUserSettingsScalarWhereWithAggregatesInput[]
    NOT?: VkAppUserSettingsScalarWhereWithAggregatesInput | VkAppUserSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VkAppUserSettings"> | number
    userId?: IntWithAggregatesFilter<"VkAppUserSettings"> | number
    roleLabel?: StringNullableWithAggregatesFilter<"VkAppUserSettings"> | string | null
    contactTelegram?: StringNullableWithAggregatesFilter<"VkAppUserSettings"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"VkAppUserSettings"> | string | null
    homeCityName?: StringNullableWithAggregatesFilter<"VkAppUserSettings"> | string | null
    homeLat?: DecimalNullableWithAggregatesFilter<"VkAppUserSettings"> | Decimal | DecimalJsLike | number | string | null
    homeLng?: DecimalNullableWithAggregatesFilter<"VkAppUserSettings"> | Decimal | DecimalJsLike | number | string | null
    preferences?: JsonWithAggregatesFilter<"VkAppUserSettings">
    onboardingProgress?: IntWithAggregatesFilter<"VkAppUserSettings"> | number
    onboardingCompleted?: BoolWithAggregatesFilter<"VkAppUserSettings"> | boolean
    createdAt?: DateTimeNullableWithAggregatesFilter<"VkAppUserSettings"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"VkAppUserSettings"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    type?: StringFilter<"Organization"> | string
    description?: StringNullableFilter<"Organization"> | string | null
    logo?: StringNullableFilter<"Organization"> | string | null
    website?: StringNullableFilter<"Organization"> | string | null
    phone?: StringNullableFilter<"Organization"> | string | null
    email?: StringNullableFilter<"Organization"> | string | null
    address?: StringNullableFilter<"Organization"> | string | null
    city?: StringNullableFilter<"Organization"> | string | null
    region?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    shortName?: StringNullableFilter<"Organization"> | string | null
    bio?: StringNullableFilter<"Organization"> | string | null
    coverPhoto?: StringNullableFilter<"Organization"> | string | null
    addressCity?: StringNullableFilter<"Organization"> | string | null
    addressRegion?: StringNullableFilter<"Organization"> | string | null
    isVerified?: BoolNullableFilter<"Organization"> | boolean | null
    ownerUserId?: IntNullableFilter<"Organization"> | number | null
    status?: StringNullableFilter<"Organization"> | string | null
    isActive?: BoolNullableFilter<"Organization"> | boolean | null
    profileVisibility?: StringNullableFilter<"Organization"> | string | null
    showPhone?: StringNullableFilter<"Organization"> | string | null
    showEmail?: StringNullableFilter<"Organization"> | string | null
    allowMessages?: StringNullableFilter<"Organization"> | string | null
    geoLat?: DecimalNullableFilter<"Organization"> | Decimal | DecimalJsLike | number | string | null
    geoLng?: DecimalNullableFilter<"Organization"> | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFilter<"Organization"> | string
    vkLink?: StringNullableFilter<"Organization"> | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: OrganizationMemberListRelationFilter
    community?: XOR<CommunityNullableScalarRelationFilter, CommunityWhereInput> | null
    communityAdmins?: CommunityNotificationAdminListRelationFilter
    postPublications?: PostPublicationListRelationFilter
    radarPins?: RadarPinListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    shortName?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    coverPhoto?: SortOrderInput | SortOrder
    addressCity?: SortOrderInput | SortOrder
    addressRegion?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    ownerUserId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    profileVisibility?: SortOrderInput | SortOrder
    showPhone?: SortOrderInput | SortOrder
    showEmail?: SortOrderInput | SortOrder
    allowMessages?: SortOrderInput | SortOrder
    geoLat?: SortOrderInput | SortOrder
    geoLng?: SortOrderInput | SortOrder
    networkRole?: SortOrder
    vkLink?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    members?: OrganizationMemberOrderByRelationAggregateInput
    community?: CommunityOrderByWithRelationInput
    communityAdmins?: CommunityNotificationAdminOrderByRelationAggregateInput
    postPublications?: PostPublicationOrderByRelationAggregateInput
    radarPins?: RadarPinOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    type?: StringFilter<"Organization"> | string
    description?: StringNullableFilter<"Organization"> | string | null
    logo?: StringNullableFilter<"Organization"> | string | null
    website?: StringNullableFilter<"Organization"> | string | null
    phone?: StringNullableFilter<"Organization"> | string | null
    email?: StringNullableFilter<"Organization"> | string | null
    address?: StringNullableFilter<"Organization"> | string | null
    city?: StringNullableFilter<"Organization"> | string | null
    region?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    shortName?: StringNullableFilter<"Organization"> | string | null
    bio?: StringNullableFilter<"Organization"> | string | null
    coverPhoto?: StringNullableFilter<"Organization"> | string | null
    addressCity?: StringNullableFilter<"Organization"> | string | null
    addressRegion?: StringNullableFilter<"Organization"> | string | null
    isVerified?: BoolNullableFilter<"Organization"> | boolean | null
    ownerUserId?: IntNullableFilter<"Organization"> | number | null
    status?: StringNullableFilter<"Organization"> | string | null
    isActive?: BoolNullableFilter<"Organization"> | boolean | null
    profileVisibility?: StringNullableFilter<"Organization"> | string | null
    showPhone?: StringNullableFilter<"Organization"> | string | null
    showEmail?: StringNullableFilter<"Organization"> | string | null
    allowMessages?: StringNullableFilter<"Organization"> | string | null
    geoLat?: DecimalNullableFilter<"Organization"> | Decimal | DecimalJsLike | number | string | null
    geoLng?: DecimalNullableFilter<"Organization"> | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFilter<"Organization"> | string
    vkLink?: StringNullableFilter<"Organization"> | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: OrganizationMemberListRelationFilter
    community?: XOR<CommunityNullableScalarRelationFilter, CommunityWhereInput> | null
    communityAdmins?: CommunityNotificationAdminListRelationFilter
    postPublications?: PostPublicationListRelationFilter
    radarPins?: RadarPinListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    shortName?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    coverPhoto?: SortOrderInput | SortOrder
    addressCity?: SortOrderInput | SortOrder
    addressRegion?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    ownerUserId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    profileVisibility?: SortOrderInput | SortOrder
    showPhone?: SortOrderInput | SortOrder
    showEmail?: SortOrderInput | SortOrder
    allowMessages?: SortOrderInput | SortOrder
    geoLat?: SortOrderInput | SortOrder
    geoLng?: SortOrderInput | SortOrder
    networkRole?: SortOrder
    vkLink?: SortOrderInput | SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organization"> | number
    name?: StringWithAggregatesFilter<"Organization"> | string
    type?: StringWithAggregatesFilter<"Organization"> | string
    description?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    website?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    email?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    address?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    city?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    region?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Organization"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Organization"> | Date | string | null
    shortName?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    coverPhoto?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    addressCity?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    addressRegion?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    isVerified?: BoolNullableWithAggregatesFilter<"Organization"> | boolean | null
    ownerUserId?: IntNullableWithAggregatesFilter<"Organization"> | number | null
    status?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    isActive?: BoolNullableWithAggregatesFilter<"Organization"> | boolean | null
    profileVisibility?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    showPhone?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    showEmail?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    allowMessages?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    geoLat?: DecimalNullableWithAggregatesFilter<"Organization"> | Decimal | DecimalJsLike | number | string | null
    geoLng?: DecimalNullableWithAggregatesFilter<"Organization"> | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringWithAggregatesFilter<"Organization"> | string
    vkLink?: StringNullableWithAggregatesFilter<"Organization"> | string | null
  }

  export type OrganizationMemberWhereInput = {
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    id?: IntFilter<"OrganizationMember"> | number
    organizationId?: IntFilter<"OrganizationMember"> | number
    userId?: IntFilter<"OrganizationMember"> | number
    role?: StringNullableFilter<"OrganizationMember"> | string | null
    position?: StringNullableFilter<"OrganizationMember"> | string | null
    canPost?: BoolNullableFilter<"OrganizationMember"> | boolean | null
    joinedAt?: DateTimeNullableFilter<"OrganizationMember"> | Date | string | null
    orgAvatar?: StringNullableFilter<"OrganizationMember"> | string | null
    permissions?: JsonNullableFilter<"OrganizationMember">
    isPublic?: BoolNullableFilter<"OrganizationMember"> | boolean | null
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrganizationMemberOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    canPost?: SortOrderInput | SortOrder
    joinedAt?: SortOrderInput | SortOrder
    orgAvatar?: SortOrderInput | SortOrder
    permissions?: SortOrderInput | SortOrder
    isPublic?: SortOrderInput | SortOrder
    organization?: OrganizationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OrganizationMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    organizationId_userId?: OrganizationMemberOrganizationIdUserIdCompoundUniqueInput
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    organizationId?: IntFilter<"OrganizationMember"> | number
    userId?: IntFilter<"OrganizationMember"> | number
    role?: StringNullableFilter<"OrganizationMember"> | string | null
    position?: StringNullableFilter<"OrganizationMember"> | string | null
    canPost?: BoolNullableFilter<"OrganizationMember"> | boolean | null
    joinedAt?: DateTimeNullableFilter<"OrganizationMember"> | Date | string | null
    orgAvatar?: StringNullableFilter<"OrganizationMember"> | string | null
    permissions?: JsonNullableFilter<"OrganizationMember">
    isPublic?: BoolNullableFilter<"OrganizationMember"> | boolean | null
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "organizationId_userId">

  export type OrganizationMemberOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    canPost?: SortOrderInput | SortOrder
    joinedAt?: SortOrderInput | SortOrder
    orgAvatar?: SortOrderInput | SortOrder
    permissions?: SortOrderInput | SortOrder
    isPublic?: SortOrderInput | SortOrder
    _count?: OrganizationMemberCountOrderByAggregateInput
    _avg?: OrganizationMemberAvgOrderByAggregateInput
    _max?: OrganizationMemberMaxOrderByAggregateInput
    _min?: OrganizationMemberMinOrderByAggregateInput
    _sum?: OrganizationMemberSumOrderByAggregateInput
  }

  export type OrganizationMemberScalarWhereWithAggregatesInput = {
    AND?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    OR?: OrganizationMemberScalarWhereWithAggregatesInput[]
    NOT?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrganizationMember"> | number
    organizationId?: IntWithAggregatesFilter<"OrganizationMember"> | number
    userId?: IntWithAggregatesFilter<"OrganizationMember"> | number
    role?: StringNullableWithAggregatesFilter<"OrganizationMember"> | string | null
    position?: StringNullableWithAggregatesFilter<"OrganizationMember"> | string | null
    canPost?: BoolNullableWithAggregatesFilter<"OrganizationMember"> | boolean | null
    joinedAt?: DateTimeNullableWithAggregatesFilter<"OrganizationMember"> | Date | string | null
    orgAvatar?: StringNullableWithAggregatesFilter<"OrganizationMember"> | string | null
    permissions?: JsonNullableWithAggregatesFilter<"OrganizationMember">
    isPublic?: BoolNullableWithAggregatesFilter<"OrganizationMember"> | boolean | null
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: IntFilter<"Community"> | number
    organizationId?: IntFilter<"Community"> | number
    vkGroupId?: BigIntFilter<"Community"> | bigint | number
    accessToken?: StringFilter<"Community"> | string
    acceptCrossPosts?: BoolFilter<"Community"> | boolean
    acceptedTags?: JsonFilter<"Community">
    scheduleIntervalMinutes?: IntFilter<"Community"> | number
    scheduleStartTime?: StringFilter<"Community"> | string
    scheduleEndTime?: StringFilter<"Community"> | string
    dutyAdminUserId?: IntNullableFilter<"Community"> | number | null
    cityId?: IntNullableFilter<"Community"> | number | null
    cityName?: StringNullableFilter<"Community"> | string | null
    regionName?: StringNullableFilter<"Community"> | string | null
    lat?: DecimalNullableFilter<"Community"> | Decimal | DecimalJsLike | number | string | null
    lng?: DecimalNullableFilter<"Community"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeNullableFilter<"Community"> | Date | string | null
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    dutyAdmin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    accessToken?: SortOrder
    acceptCrossPosts?: SortOrder
    acceptedTags?: SortOrder
    scheduleIntervalMinutes?: SortOrder
    scheduleStartTime?: SortOrder
    scheduleEndTime?: SortOrder
    dutyAdminUserId?: SortOrderInput | SortOrder
    cityId?: SortOrderInput | SortOrder
    cityName?: SortOrderInput | SortOrder
    regionName?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    dutyAdmin?: UserOrderByWithRelationInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    organizationId?: number
    vkGroupId?: bigint | number
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    accessToken?: StringFilter<"Community"> | string
    acceptCrossPosts?: BoolFilter<"Community"> | boolean
    acceptedTags?: JsonFilter<"Community">
    scheduleIntervalMinutes?: IntFilter<"Community"> | number
    scheduleStartTime?: StringFilter<"Community"> | string
    scheduleEndTime?: StringFilter<"Community"> | string
    dutyAdminUserId?: IntNullableFilter<"Community"> | number | null
    cityId?: IntNullableFilter<"Community"> | number | null
    cityName?: StringNullableFilter<"Community"> | string | null
    regionName?: StringNullableFilter<"Community"> | string | null
    lat?: DecimalNullableFilter<"Community"> | Decimal | DecimalJsLike | number | string | null
    lng?: DecimalNullableFilter<"Community"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeNullableFilter<"Community"> | Date | string | null
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    dutyAdmin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "organizationId" | "vkGroupId">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    accessToken?: SortOrder
    acceptCrossPosts?: SortOrder
    acceptedTags?: SortOrder
    scheduleIntervalMinutes?: SortOrder
    scheduleStartTime?: SortOrder
    scheduleEndTime?: SortOrder
    dutyAdminUserId?: SortOrderInput | SortOrder
    cityId?: SortOrderInput | SortOrder
    cityName?: SortOrderInput | SortOrder
    regionName?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _avg?: CommunityAvgOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
    _sum?: CommunitySumOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Community"> | number
    organizationId?: IntWithAggregatesFilter<"Community"> | number
    vkGroupId?: BigIntWithAggregatesFilter<"Community"> | bigint | number
    accessToken?: StringWithAggregatesFilter<"Community"> | string
    acceptCrossPosts?: BoolWithAggregatesFilter<"Community"> | boolean
    acceptedTags?: JsonWithAggregatesFilter<"Community">
    scheduleIntervalMinutes?: IntWithAggregatesFilter<"Community"> | number
    scheduleStartTime?: StringWithAggregatesFilter<"Community"> | string
    scheduleEndTime?: StringWithAggregatesFilter<"Community"> | string
    dutyAdminUserId?: IntNullableWithAggregatesFilter<"Community"> | number | null
    cityId?: IntNullableWithAggregatesFilter<"Community"> | number | null
    cityName?: StringNullableWithAggregatesFilter<"Community"> | string | null
    regionName?: StringNullableWithAggregatesFilter<"Community"> | string | null
    lat?: DecimalNullableWithAggregatesFilter<"Community"> | Decimal | DecimalJsLike | number | string | null
    lng?: DecimalNullableWithAggregatesFilter<"Community"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Community"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
  }

  export type CommunityNotificationAdminWhereInput = {
    AND?: CommunityNotificationAdminWhereInput | CommunityNotificationAdminWhereInput[]
    OR?: CommunityNotificationAdminWhereInput[]
    NOT?: CommunityNotificationAdminWhereInput | CommunityNotificationAdminWhereInput[]
    id?: IntFilter<"CommunityNotificationAdmin"> | number
    organizationId?: IntFilter<"CommunityNotificationAdmin"> | number
    userId?: IntFilter<"CommunityNotificationAdmin"> | number
    createdAt?: DateTimeNullableFilter<"CommunityNotificationAdmin"> | Date | string | null
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommunityNotificationAdminOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    organization?: OrganizationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommunityNotificationAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    organizationId_userId?: CommunityNotificationAdminOrganizationIdUserIdCompoundUniqueInput
    AND?: CommunityNotificationAdminWhereInput | CommunityNotificationAdminWhereInput[]
    OR?: CommunityNotificationAdminWhereInput[]
    NOT?: CommunityNotificationAdminWhereInput | CommunityNotificationAdminWhereInput[]
    organizationId?: IntFilter<"CommunityNotificationAdmin"> | number
    userId?: IntFilter<"CommunityNotificationAdmin"> | number
    createdAt?: DateTimeNullableFilter<"CommunityNotificationAdmin"> | Date | string | null
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "organizationId_userId">

  export type CommunityNotificationAdminOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: CommunityNotificationAdminCountOrderByAggregateInput
    _avg?: CommunityNotificationAdminAvgOrderByAggregateInput
    _max?: CommunityNotificationAdminMaxOrderByAggregateInput
    _min?: CommunityNotificationAdminMinOrderByAggregateInput
    _sum?: CommunityNotificationAdminSumOrderByAggregateInput
  }

  export type CommunityNotificationAdminScalarWhereWithAggregatesInput = {
    AND?: CommunityNotificationAdminScalarWhereWithAggregatesInput | CommunityNotificationAdminScalarWhereWithAggregatesInput[]
    OR?: CommunityNotificationAdminScalarWhereWithAggregatesInput[]
    NOT?: CommunityNotificationAdminScalarWhereWithAggregatesInput | CommunityNotificationAdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommunityNotificationAdmin"> | number
    organizationId?: IntWithAggregatesFilter<"CommunityNotificationAdmin"> | number
    userId?: IntWithAggregatesFilter<"CommunityNotificationAdmin"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"CommunityNotificationAdmin"> | Date | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    userId?: IntNullableFilter<"Post"> | number | null
    content?: StringNullableFilter<"Post"> | string | null
    mediaUrls?: StringNullableFilter<"Post"> | string | null
    status?: StringNullableFilter<"Post"> | string | null
    scheduledAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    authorId?: IntFilter<"Post"> | number
    authorType?: StringFilter<"Post"> | string
    attachedPets?: StringNullableFilter<"Post"> | string | null
    attachments?: StringNullableFilter<"Post"> | string | null
    tags?: StringNullableFilter<"Post"> | string | null
    isDeleted?: BoolNullableFilter<"Post"> | boolean | null
    likesCount?: IntNullableFilter<"Post"> | number | null
    commentsCount?: IntNullableFilter<"Post"> | number | null
    locationLat?: DecimalNullableFilter<"Post"> | Decimal | DecimalJsLike | number | string | null
    locationLng?: DecimalNullableFilter<"Post"> | Decimal | DecimalJsLike | number | string | null
    locationName?: StringNullableFilter<"Post"> | string | null
    replySetting?: StringNullableFilter<"Post"> | string | null
    verifyReplies?: BoolNullableFilter<"Post"> | boolean | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    publication?: XOR<PostPublicationNullableScalarRelationFilter, PostPublicationWhereInput> | null
    radarPin?: XOR<RadarPinNullableScalarRelationFilter, RadarPinWhereInput> | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    mediaUrls?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    authorId?: SortOrder
    authorType?: SortOrder
    attachedPets?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    likesCount?: SortOrderInput | SortOrder
    commentsCount?: SortOrderInput | SortOrder
    locationLat?: SortOrderInput | SortOrder
    locationLng?: SortOrderInput | SortOrder
    locationName?: SortOrderInput | SortOrder
    replySetting?: SortOrderInput | SortOrder
    verifyReplies?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    publication?: PostPublicationOrderByWithRelationInput
    radarPin?: RadarPinOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    userId?: IntNullableFilter<"Post"> | number | null
    content?: StringNullableFilter<"Post"> | string | null
    mediaUrls?: StringNullableFilter<"Post"> | string | null
    status?: StringNullableFilter<"Post"> | string | null
    scheduledAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    authorId?: IntFilter<"Post"> | number
    authorType?: StringFilter<"Post"> | string
    attachedPets?: StringNullableFilter<"Post"> | string | null
    attachments?: StringNullableFilter<"Post"> | string | null
    tags?: StringNullableFilter<"Post"> | string | null
    isDeleted?: BoolNullableFilter<"Post"> | boolean | null
    likesCount?: IntNullableFilter<"Post"> | number | null
    commentsCount?: IntNullableFilter<"Post"> | number | null
    locationLat?: DecimalNullableFilter<"Post"> | Decimal | DecimalJsLike | number | string | null
    locationLng?: DecimalNullableFilter<"Post"> | Decimal | DecimalJsLike | number | string | null
    locationName?: StringNullableFilter<"Post"> | string | null
    replySetting?: StringNullableFilter<"Post"> | string | null
    verifyReplies?: BoolNullableFilter<"Post"> | boolean | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    publication?: XOR<PostPublicationNullableScalarRelationFilter, PostPublicationWhereInput> | null
    radarPin?: XOR<RadarPinNullableScalarRelationFilter, RadarPinWhereInput> | null
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    mediaUrls?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    authorId?: SortOrder
    authorType?: SortOrder
    attachedPets?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    isDeleted?: SortOrderInput | SortOrder
    likesCount?: SortOrderInput | SortOrder
    commentsCount?: SortOrderInput | SortOrder
    locationLat?: SortOrderInput | SortOrder
    locationLng?: SortOrderInput | SortOrder
    locationName?: SortOrderInput | SortOrder
    replySetting?: SortOrderInput | SortOrder
    verifyReplies?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    userId?: IntNullableWithAggregatesFilter<"Post"> | number | null
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
    mediaUrls?: StringNullableWithAggregatesFilter<"Post"> | string | null
    status?: StringNullableWithAggregatesFilter<"Post"> | string | null
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    authorId?: IntWithAggregatesFilter<"Post"> | number
    authorType?: StringWithAggregatesFilter<"Post"> | string
    attachedPets?: StringNullableWithAggregatesFilter<"Post"> | string | null
    attachments?: StringNullableWithAggregatesFilter<"Post"> | string | null
    tags?: StringNullableWithAggregatesFilter<"Post"> | string | null
    isDeleted?: BoolNullableWithAggregatesFilter<"Post"> | boolean | null
    likesCount?: IntNullableWithAggregatesFilter<"Post"> | number | null
    commentsCount?: IntNullableWithAggregatesFilter<"Post"> | number | null
    locationLat?: DecimalNullableWithAggregatesFilter<"Post"> | Decimal | DecimalJsLike | number | string | null
    locationLng?: DecimalNullableWithAggregatesFilter<"Post"> | Decimal | DecimalJsLike | number | string | null
    locationName?: StringNullableWithAggregatesFilter<"Post"> | string | null
    replySetting?: StringNullableWithAggregatesFilter<"Post"> | string | null
    verifyReplies?: BoolNullableWithAggregatesFilter<"Post"> | boolean | null
  }

  export type PostPublicationWhereInput = {
    AND?: PostPublicationWhereInput | PostPublicationWhereInput[]
    OR?: PostPublicationWhereInput[]
    NOT?: PostPublicationWhereInput | PostPublicationWhereInput[]
    id?: IntFilter<"PostPublication"> | number
    postId?: IntFilter<"PostPublication"> | number
    organizationId?: IntFilter<"PostPublication"> | number
    vkGroupId?: BigIntFilter<"PostPublication"> | bigint | number
    moderationStatus?: StringFilter<"PostPublication"> | string
    publishDate?: DateTimeNullableFilter<"PostPublication"> | Date | string | null
    vkPostId?: BigIntNullableFilter<"PostPublication"> | bigint | number | null
    chatLink?: StringNullableFilter<"PostPublication"> | string | null
    cityId?: IntNullableFilter<"PostPublication"> | number | null
    cityName?: StringNullableFilter<"PostPublication"> | string | null
    regionName?: StringNullableFilter<"PostPublication"> | string | null
    createdAt?: DateTimeNullableFilter<"PostPublication"> | Date | string | null
    updatedAt?: DateTimeFilter<"PostPublication"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type PostPublicationOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    moderationStatus?: SortOrder
    publishDate?: SortOrderInput | SortOrder
    vkPostId?: SortOrderInput | SortOrder
    chatLink?: SortOrderInput | SortOrder
    cityId?: SortOrderInput | SortOrder
    cityName?: SortOrderInput | SortOrder
    regionName?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type PostPublicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    postId?: number
    AND?: PostPublicationWhereInput | PostPublicationWhereInput[]
    OR?: PostPublicationWhereInput[]
    NOT?: PostPublicationWhereInput | PostPublicationWhereInput[]
    organizationId?: IntFilter<"PostPublication"> | number
    vkGroupId?: BigIntFilter<"PostPublication"> | bigint | number
    moderationStatus?: StringFilter<"PostPublication"> | string
    publishDate?: DateTimeNullableFilter<"PostPublication"> | Date | string | null
    vkPostId?: BigIntNullableFilter<"PostPublication"> | bigint | number | null
    chatLink?: StringNullableFilter<"PostPublication"> | string | null
    cityId?: IntNullableFilter<"PostPublication"> | number | null
    cityName?: StringNullableFilter<"PostPublication"> | string | null
    regionName?: StringNullableFilter<"PostPublication"> | string | null
    createdAt?: DateTimeNullableFilter<"PostPublication"> | Date | string | null
    updatedAt?: DateTimeFilter<"PostPublication"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "postId">

  export type PostPublicationOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    moderationStatus?: SortOrder
    publishDate?: SortOrderInput | SortOrder
    vkPostId?: SortOrderInput | SortOrder
    chatLink?: SortOrderInput | SortOrder
    cityId?: SortOrderInput | SortOrder
    cityName?: SortOrderInput | SortOrder
    regionName?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: PostPublicationCountOrderByAggregateInput
    _avg?: PostPublicationAvgOrderByAggregateInput
    _max?: PostPublicationMaxOrderByAggregateInput
    _min?: PostPublicationMinOrderByAggregateInput
    _sum?: PostPublicationSumOrderByAggregateInput
  }

  export type PostPublicationScalarWhereWithAggregatesInput = {
    AND?: PostPublicationScalarWhereWithAggregatesInput | PostPublicationScalarWhereWithAggregatesInput[]
    OR?: PostPublicationScalarWhereWithAggregatesInput[]
    NOT?: PostPublicationScalarWhereWithAggregatesInput | PostPublicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostPublication"> | number
    postId?: IntWithAggregatesFilter<"PostPublication"> | number
    organizationId?: IntWithAggregatesFilter<"PostPublication"> | number
    vkGroupId?: BigIntWithAggregatesFilter<"PostPublication"> | bigint | number
    moderationStatus?: StringWithAggregatesFilter<"PostPublication"> | string
    publishDate?: DateTimeNullableWithAggregatesFilter<"PostPublication"> | Date | string | null
    vkPostId?: BigIntNullableWithAggregatesFilter<"PostPublication"> | bigint | number | null
    chatLink?: StringNullableWithAggregatesFilter<"PostPublication"> | string | null
    cityId?: IntNullableWithAggregatesFilter<"PostPublication"> | number | null
    cityName?: StringNullableWithAggregatesFilter<"PostPublication"> | string | null
    regionName?: StringNullableWithAggregatesFilter<"PostPublication"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"PostPublication"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"PostPublication"> | Date | string
  }

  export type RadarPinWhereInput = {
    AND?: RadarPinWhereInput | RadarPinWhereInput[]
    OR?: RadarPinWhereInput[]
    NOT?: RadarPinWhereInput | RadarPinWhereInput[]
    id?: IntFilter<"RadarPin"> | number
    userId?: IntNullableFilter<"RadarPin"> | number | null
    postId?: IntNullableFilter<"RadarPin"> | number | null
    organizationId?: IntNullableFilter<"RadarPin"> | number | null
    type?: StringFilter<"RadarPin"> | string
    title?: StringFilter<"RadarPin"> | string
    description?: StringNullableFilter<"RadarPin"> | string | null
    lat?: DecimalFilter<"RadarPin"> | Decimal | DecimalJsLike | number | string
    lng?: DecimalFilter<"RadarPin"> | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFilter<"RadarPin"> | Date | string
    createdAt?: DateTimeNullableFilter<"RadarPin"> | Date | string | null
    updatedAt?: DateTimeFilter<"RadarPin"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type RadarPinOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    lat?: SortOrder
    lng?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type RadarPinWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    postId?: number
    AND?: RadarPinWhereInput | RadarPinWhereInput[]
    OR?: RadarPinWhereInput[]
    NOT?: RadarPinWhereInput | RadarPinWhereInput[]
    userId?: IntNullableFilter<"RadarPin"> | number | null
    organizationId?: IntNullableFilter<"RadarPin"> | number | null
    type?: StringFilter<"RadarPin"> | string
    title?: StringFilter<"RadarPin"> | string
    description?: StringNullableFilter<"RadarPin"> | string | null
    lat?: DecimalFilter<"RadarPin"> | Decimal | DecimalJsLike | number | string
    lng?: DecimalFilter<"RadarPin"> | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFilter<"RadarPin"> | Date | string
    createdAt?: DateTimeNullableFilter<"RadarPin"> | Date | string | null
    updatedAt?: DateTimeFilter<"RadarPin"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id" | "postId">

  export type RadarPinOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    lat?: SortOrder
    lng?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: RadarPinCountOrderByAggregateInput
    _avg?: RadarPinAvgOrderByAggregateInput
    _max?: RadarPinMaxOrderByAggregateInput
    _min?: RadarPinMinOrderByAggregateInput
    _sum?: RadarPinSumOrderByAggregateInput
  }

  export type RadarPinScalarWhereWithAggregatesInput = {
    AND?: RadarPinScalarWhereWithAggregatesInput | RadarPinScalarWhereWithAggregatesInput[]
    OR?: RadarPinScalarWhereWithAggregatesInput[]
    NOT?: RadarPinScalarWhereWithAggregatesInput | RadarPinScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RadarPin"> | number
    userId?: IntNullableWithAggregatesFilter<"RadarPin"> | number | null
    postId?: IntNullableWithAggregatesFilter<"RadarPin"> | number | null
    organizationId?: IntNullableWithAggregatesFilter<"RadarPin"> | number | null
    type?: StringWithAggregatesFilter<"RadarPin"> | string
    title?: StringWithAggregatesFilter<"RadarPin"> | string
    description?: StringNullableWithAggregatesFilter<"RadarPin"> | string | null
    lat?: DecimalWithAggregatesFilter<"RadarPin"> | Decimal | DecimalJsLike | number | string
    lng?: DecimalWithAggregatesFilter<"RadarPin"> | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeWithAggregatesFilter<"RadarPin"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"RadarPin"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"RadarPin"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsCreateNestedOneWithoutUserInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    communityDutyFor?: CommunityCreateNestedManyWithoutDutyAdminInput
    communityAdmins?: CommunityNotificationAdminCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    radarPins?: RadarPinCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsUncheckedCreateNestedOneWithoutUserInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    communityDutyFor?: CommunityUncheckedCreateNestedManyWithoutDutyAdminInput
    communityAdmins?: CommunityNotificationAdminUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    radarPins?: RadarPinUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUpdateOneWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    communityDutyFor?: CommunityUpdateManyWithoutDutyAdminNestedInput
    communityAdmins?: CommunityNotificationAdminUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    radarPins?: RadarPinUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUncheckedUpdateOneWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    communityDutyFor?: CommunityUncheckedUpdateManyWithoutDutyAdminNestedInput
    communityAdmins?: CommunityNotificationAdminUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    radarPins?: RadarPinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VkAppUserSettingsCreateInput = {
    roleLabel?: string | null
    contactTelegram?: string | null
    contactEmail?: string | null
    homeCityName?: string | null
    homeLat?: Decimal | DecimalJsLike | number | string | null
    homeLng?: Decimal | DecimalJsLike | number | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    onboardingProgress?: number
    onboardingCompleted?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVkAppSettingsInput
  }

  export type VkAppUserSettingsUncheckedCreateInput = {
    id?: number
    userId: number
    roleLabel?: string | null
    contactTelegram?: string | null
    contactEmail?: string | null
    homeCityName?: string | null
    homeLat?: Decimal | DecimalJsLike | number | string | null
    homeLng?: Decimal | DecimalJsLike | number | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    onboardingProgress?: number
    onboardingCompleted?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type VkAppUserSettingsUpdateInput = {
    roleLabel?: NullableStringFieldUpdateOperationsInput | string | null
    contactTelegram?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    homeCityName?: NullableStringFieldUpdateOperationsInput | string | null
    homeLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    onboardingProgress?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVkAppSettingsNestedInput
  }

  export type VkAppUserSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleLabel?: NullableStringFieldUpdateOperationsInput | string | null
    contactTelegram?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    homeCityName?: NullableStringFieldUpdateOperationsInput | string | null
    homeLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    onboardingProgress?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VkAppUserSettingsCreateManyInput = {
    id?: number
    userId: number
    roleLabel?: string | null
    contactTelegram?: string | null
    contactEmail?: string | null
    homeCityName?: string | null
    homeLat?: Decimal | DecimalJsLike | number | string | null
    homeLng?: Decimal | DecimalJsLike | number | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    onboardingProgress?: number
    onboardingCompleted?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type VkAppUserSettingsUpdateManyMutationInput = {
    roleLabel?: NullableStringFieldUpdateOperationsInput | string | null
    contactTelegram?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    homeCityName?: NullableStringFieldUpdateOperationsInput | string | null
    homeLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    onboardingProgress?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VkAppUserSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleLabel?: NullableStringFieldUpdateOperationsInput | string | null
    contactTelegram?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    homeCityName?: NullableStringFieldUpdateOperationsInput | string | null
    homeLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    onboardingProgress?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    owner?: UserCreateNestedOneWithoutOwnedOrganizationsInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    community?: CommunityCreateNestedOneWithoutOrganizationInput
    communityAdmins?: CommunityNotificationAdminCreateNestedManyWithoutOrganizationInput
    postPublications?: PostPublicationCreateNestedManyWithoutOrganizationInput
    radarPins?: RadarPinCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    ownerUserId?: number | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    community?: CommunityUncheckedCreateNestedOneWithoutOrganizationInput
    communityAdmins?: CommunityNotificationAdminUncheckedCreateNestedManyWithoutOrganizationInput
    postPublications?: PostPublicationUncheckedCreateNestedManyWithoutOrganizationInput
    radarPins?: RadarPinUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneWithoutOwnedOrganizationsNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    community?: CommunityUpdateOneWithoutOrganizationNestedInput
    communityAdmins?: CommunityNotificationAdminUpdateManyWithoutOrganizationNestedInput
    postPublications?: PostPublicationUpdateManyWithoutOrganizationNestedInput
    radarPins?: RadarPinUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    community?: CommunityUncheckedUpdateOneWithoutOrganizationNestedInput
    communityAdmins?: CommunityNotificationAdminUncheckedUpdateManyWithoutOrganizationNestedInput
    postPublications?: PostPublicationUncheckedUpdateManyWithoutOrganizationNestedInput
    radarPins?: RadarPinUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    ownerUserId?: number | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationMemberCreateInput = {
    role?: string | null
    position?: string | null
    canPost?: boolean | null
    joinedAt?: Date | string | null
    orgAvatar?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: boolean | null
    organization: OrganizationCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutOrganizationMembersInput
  }

  export type OrganizationMemberUncheckedCreateInput = {
    id?: number
    organizationId: number
    userId: number
    role?: string | null
    position?: string | null
    canPost?: boolean | null
    joinedAt?: Date | string | null
    orgAvatar?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: boolean | null
  }

  export type OrganizationMemberUpdateInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    canPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutOrganizationMembersNestedInput
  }

  export type OrganizationMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    canPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OrganizationMemberCreateManyInput = {
    id?: number
    organizationId: number
    userId: number
    role?: string | null
    position?: string | null
    canPost?: boolean | null
    joinedAt?: Date | string | null
    orgAvatar?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: boolean | null
  }

  export type OrganizationMemberUpdateManyMutationInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    canPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OrganizationMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    canPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CommunityCreateInput = {
    vkGroupId: bigint | number
    accessToken: string
    acceptCrossPosts?: boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: number
    scheduleStartTime?: string
    scheduleEndTime?: string
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutCommunityInput
    dutyAdmin?: UserCreateNestedOneWithoutCommunityDutyForInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: number
    organizationId: number
    vkGroupId: bigint | number
    accessToken: string
    acceptCrossPosts?: boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: number
    scheduleStartTime?: string
    scheduleEndTime?: string
    dutyAdminUserId?: number | null
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type CommunityUpdateInput = {
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    acceptCrossPosts?: BoolFieldUpdateOperationsInput | boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: IntFieldUpdateOperationsInput | number
    scheduleStartTime?: StringFieldUpdateOperationsInput | string
    scheduleEndTime?: StringFieldUpdateOperationsInput | string
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutCommunityNestedInput
    dutyAdmin?: UserUpdateOneWithoutCommunityDutyForNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    acceptCrossPosts?: BoolFieldUpdateOperationsInput | boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: IntFieldUpdateOperationsInput | number
    scheduleStartTime?: StringFieldUpdateOperationsInput | string
    scheduleEndTime?: StringFieldUpdateOperationsInput | string
    dutyAdminUserId?: NullableIntFieldUpdateOperationsInput | number | null
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityCreateManyInput = {
    id?: number
    organizationId: number
    vkGroupId: bigint | number
    accessToken: string
    acceptCrossPosts?: boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: number
    scheduleStartTime?: string
    scheduleEndTime?: string
    dutyAdminUserId?: number | null
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type CommunityUpdateManyMutationInput = {
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    acceptCrossPosts?: BoolFieldUpdateOperationsInput | boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: IntFieldUpdateOperationsInput | number
    scheduleStartTime?: StringFieldUpdateOperationsInput | string
    scheduleEndTime?: StringFieldUpdateOperationsInput | string
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    acceptCrossPosts?: BoolFieldUpdateOperationsInput | boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: IntFieldUpdateOperationsInput | number
    scheduleStartTime?: StringFieldUpdateOperationsInput | string
    scheduleEndTime?: StringFieldUpdateOperationsInput | string
    dutyAdminUserId?: NullableIntFieldUpdateOperationsInput | number | null
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityNotificationAdminCreateInput = {
    createdAt?: Date | string | null
    organization: OrganizationCreateNestedOneWithoutCommunityAdminsInput
    user: UserCreateNestedOneWithoutCommunityAdminsInput
  }

  export type CommunityNotificationAdminUncheckedCreateInput = {
    id?: number
    organizationId: number
    userId: number
    createdAt?: Date | string | null
  }

  export type CommunityNotificationAdminUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organization?: OrganizationUpdateOneRequiredWithoutCommunityAdminsNestedInput
    user?: UserUpdateOneRequiredWithoutCommunityAdminsNestedInput
  }

  export type CommunityNotificationAdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunityNotificationAdminCreateManyInput = {
    id?: number
    organizationId: number
    userId: number
    createdAt?: Date | string | null
  }

  export type CommunityNotificationAdminUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunityNotificationAdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostCreateInput = {
    userId?: number | null
    content?: string | null
    mediaUrls?: string | null
    status?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    authorType?: string
    attachedPets?: string | null
    attachments?: string | null
    tags?: string | null
    isDeleted?: boolean | null
    likesCount?: number | null
    commentsCount?: number | null
    locationLat?: Decimal | DecimalJsLike | number | string | null
    locationLng?: Decimal | DecimalJsLike | number | string | null
    locationName?: string | null
    replySetting?: string | null
    verifyReplies?: boolean | null
    author: UserCreateNestedOneWithoutPostsInput
    publication?: PostPublicationCreateNestedOneWithoutPostInput
    radarPin?: RadarPinCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    userId?: number | null
    content?: string | null
    mediaUrls?: string | null
    status?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    authorId: number
    authorType?: string
    attachedPets?: string | null
    attachments?: string | null
    tags?: string | null
    isDeleted?: boolean | null
    likesCount?: number | null
    commentsCount?: number | null
    locationLat?: Decimal | DecimalJsLike | number | string | null
    locationLng?: Decimal | DecimalJsLike | number | string | null
    locationName?: string | null
    replySetting?: string | null
    verifyReplies?: boolean | null
    publication?: PostPublicationUncheckedCreateNestedOneWithoutPostInput
    radarPin?: RadarPinUncheckedCreateNestedOneWithoutPostInput
  }

  export type PostUpdateInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrls?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorType?: StringFieldUpdateOperationsInput | string
    attachedPets?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    locationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    replySetting?: NullableStringFieldUpdateOperationsInput | string | null
    verifyReplies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    publication?: PostPublicationUpdateOneWithoutPostNestedInput
    radarPin?: RadarPinUpdateOneWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrls?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    authorType?: StringFieldUpdateOperationsInput | string
    attachedPets?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    locationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    replySetting?: NullableStringFieldUpdateOperationsInput | string | null
    verifyReplies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    publication?: PostPublicationUncheckedUpdateOneWithoutPostNestedInput
    radarPin?: RadarPinUncheckedUpdateOneWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    userId?: number | null
    content?: string | null
    mediaUrls?: string | null
    status?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    authorId: number
    authorType?: string
    attachedPets?: string | null
    attachments?: string | null
    tags?: string | null
    isDeleted?: boolean | null
    likesCount?: number | null
    commentsCount?: number | null
    locationLat?: Decimal | DecimalJsLike | number | string | null
    locationLng?: Decimal | DecimalJsLike | number | string | null
    locationName?: string | null
    replySetting?: string | null
    verifyReplies?: boolean | null
  }

  export type PostUpdateManyMutationInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrls?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorType?: StringFieldUpdateOperationsInput | string
    attachedPets?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    locationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    replySetting?: NullableStringFieldUpdateOperationsInput | string | null
    verifyReplies?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrls?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    authorType?: StringFieldUpdateOperationsInput | string
    attachedPets?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    locationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    replySetting?: NullableStringFieldUpdateOperationsInput | string | null
    verifyReplies?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PostPublicationCreateInput = {
    vkGroupId: bigint | number
    moderationStatus?: string
    publishDate?: Date | string | null
    vkPostId?: bigint | number | null
    chatLink?: string | null
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutPublicationInput
    organization: OrganizationCreateNestedOneWithoutPostPublicationsInput
  }

  export type PostPublicationUncheckedCreateInput = {
    id?: number
    postId: number
    organizationId: number
    vkGroupId: bigint | number
    moderationStatus?: string
    publishDate?: Date | string | null
    vkPostId?: bigint | number | null
    chatLink?: string | null
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type PostPublicationUpdateInput = {
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    moderationStatus?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vkPostId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatLink?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPublicationNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutPostPublicationsNestedInput
  }

  export type PostPublicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    moderationStatus?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vkPostId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatLink?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostPublicationCreateManyInput = {
    id?: number
    postId: number
    organizationId: number
    vkGroupId: bigint | number
    moderationStatus?: string
    publishDate?: Date | string | null
    vkPostId?: bigint | number | null
    chatLink?: string | null
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type PostPublicationUpdateManyMutationInput = {
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    moderationStatus?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vkPostId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatLink?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostPublicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    moderationStatus?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vkPostId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatLink?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadarPinCreateInput = {
    type: string
    title: string
    description?: string | null
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutRadarPinsInput
    post?: PostCreateNestedOneWithoutRadarPinInput
    organization?: OrganizationCreateNestedOneWithoutRadarPinsInput
  }

  export type RadarPinUncheckedCreateInput = {
    id?: number
    userId?: number | null
    postId?: number | null
    organizationId?: number | null
    type: string
    title: string
    description?: string | null
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type RadarPinUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutRadarPinsNestedInput
    post?: PostUpdateOneWithoutRadarPinNestedInput
    organization?: OrganizationUpdateOneWithoutRadarPinsNestedInput
  }

  export type RadarPinUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadarPinCreateManyInput = {
    id?: number
    userId?: number | null
    postId?: number | null
    organizationId?: number | null
    type: string
    title: string
    description?: string | null
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type RadarPinUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadarPinUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VkAppUserSettingsNullableScalarRelationFilter = {
    is?: VkAppUserSettingsWhereInput | null
    isNot?: VkAppUserSettingsWhereInput | null
  }

  export type OrganizationMemberListRelationFilter = {
    every?: OrganizationMemberWhereInput
    some?: OrganizationMemberWhereInput
    none?: OrganizationMemberWhereInput
  }

  export type OrganizationListRelationFilter = {
    every?: OrganizationWhereInput
    some?: OrganizationWhereInput
    none?: OrganizationWhereInput
  }

  export type CommunityListRelationFilter = {
    every?: CommunityWhereInput
    some?: CommunityWhereInput
    none?: CommunityWhereInput
  }

  export type CommunityNotificationAdminListRelationFilter = {
    every?: CommunityNotificationAdminWhereInput
    some?: CommunityNotificationAdminWhereInput
    none?: CommunityNotificationAdminWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type RadarPinListRelationFilter = {
    every?: RadarPinWhereInput
    some?: RadarPinWhereInput
    none?: RadarPinWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrganizationMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityNotificationAdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RadarPinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    avatar?: SortOrder
    coverPhoto?: SortOrder
    profileVisibility?: SortOrder
    showPhone?: SortOrder
    showEmail?: SortOrder
    allowMessages?: SortOrder
    showOnline?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    lastSeen?: SortOrder
    passwordHash?: SortOrder
    vkId?: SortOrder
    vkAccessToken?: SortOrder
    okId?: SortOrder
    okAccessToken?: SortOrder
    mailruId?: SortOrder
    mailruAccessToken?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    vkId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    avatar?: SortOrder
    coverPhoto?: SortOrder
    profileVisibility?: SortOrder
    showPhone?: SortOrder
    showEmail?: SortOrder
    allowMessages?: SortOrder
    showOnline?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    lastSeen?: SortOrder
    passwordHash?: SortOrder
    vkId?: SortOrder
    vkAccessToken?: SortOrder
    okId?: SortOrder
    okAccessToken?: SortOrder
    mailruId?: SortOrder
    mailruAccessToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    avatar?: SortOrder
    coverPhoto?: SortOrder
    profileVisibility?: SortOrder
    showPhone?: SortOrder
    showEmail?: SortOrder
    allowMessages?: SortOrder
    showOnline?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    lastSeen?: SortOrder
    passwordHash?: SortOrder
    vkId?: SortOrder
    vkAccessToken?: SortOrder
    okId?: SortOrder
    okAccessToken?: SortOrder
    mailruId?: SortOrder
    mailruAccessToken?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    vkId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VkAppUserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleLabel?: SortOrder
    contactTelegram?: SortOrder
    contactEmail?: SortOrder
    homeCityName?: SortOrder
    homeLat?: SortOrder
    homeLng?: SortOrder
    preferences?: SortOrder
    onboardingProgress?: SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VkAppUserSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    homeLat?: SortOrder
    homeLng?: SortOrder
    onboardingProgress?: SortOrder
  }

  export type VkAppUserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleLabel?: SortOrder
    contactTelegram?: SortOrder
    contactEmail?: SortOrder
    homeCityName?: SortOrder
    homeLat?: SortOrder
    homeLng?: SortOrder
    onboardingProgress?: SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VkAppUserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleLabel?: SortOrder
    contactTelegram?: SortOrder
    contactEmail?: SortOrder
    homeCityName?: SortOrder
    homeLat?: SortOrder
    homeLng?: SortOrder
    onboardingProgress?: SortOrder
    onboardingCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VkAppUserSettingsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    homeLat?: SortOrder
    homeLng?: SortOrder
    onboardingProgress?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CommunityNullableScalarRelationFilter = {
    is?: CommunityWhereInput | null
    isNot?: CommunityWhereInput | null
  }

  export type PostPublicationListRelationFilter = {
    every?: PostPublicationWhereInput
    some?: PostPublicationWhereInput
    none?: PostPublicationWhereInput
  }

  export type PostPublicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shortName?: SortOrder
    bio?: SortOrder
    coverPhoto?: SortOrder
    addressCity?: SortOrder
    addressRegion?: SortOrder
    isVerified?: SortOrder
    ownerUserId?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    profileVisibility?: SortOrder
    showPhone?: SortOrder
    showEmail?: SortOrder
    allowMessages?: SortOrder
    geoLat?: SortOrder
    geoLng?: SortOrder
    networkRole?: SortOrder
    vkLink?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    geoLat?: SortOrder
    geoLng?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shortName?: SortOrder
    bio?: SortOrder
    coverPhoto?: SortOrder
    addressCity?: SortOrder
    addressRegion?: SortOrder
    isVerified?: SortOrder
    ownerUserId?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    profileVisibility?: SortOrder
    showPhone?: SortOrder
    showEmail?: SortOrder
    allowMessages?: SortOrder
    geoLat?: SortOrder
    geoLng?: SortOrder
    networkRole?: SortOrder
    vkLink?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shortName?: SortOrder
    bio?: SortOrder
    coverPhoto?: SortOrder
    addressCity?: SortOrder
    addressRegion?: SortOrder
    isVerified?: SortOrder
    ownerUserId?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    profileVisibility?: SortOrder
    showPhone?: SortOrder
    showEmail?: SortOrder
    allowMessages?: SortOrder
    geoLat?: SortOrder
    geoLng?: SortOrder
    networkRole?: SortOrder
    vkLink?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
    ownerUserId?: SortOrder
    geoLat?: SortOrder
    geoLng?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type OrganizationMemberOrganizationIdUserIdCompoundUniqueInput = {
    organizationId: number
    userId: number
  }

  export type OrganizationMemberCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    position?: SortOrder
    canPost?: SortOrder
    joinedAt?: SortOrder
    orgAvatar?: SortOrder
    permissions?: SortOrder
    isPublic?: SortOrder
  }

  export type OrganizationMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
  }

  export type OrganizationMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    position?: SortOrder
    canPost?: SortOrder
    joinedAt?: SortOrder
    orgAvatar?: SortOrder
    isPublic?: SortOrder
  }

  export type OrganizationMemberMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    position?: SortOrder
    canPost?: SortOrder
    joinedAt?: SortOrder
    orgAvatar?: SortOrder
    isPublic?: SortOrder
  }

  export type OrganizationMemberSumOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    accessToken?: SortOrder
    acceptCrossPosts?: SortOrder
    acceptedTags?: SortOrder
    scheduleIntervalMinutes?: SortOrder
    scheduleStartTime?: SortOrder
    scheduleEndTime?: SortOrder
    dutyAdminUserId?: SortOrder
    cityId?: SortOrder
    cityName?: SortOrder
    regionName?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    scheduleIntervalMinutes?: SortOrder
    dutyAdminUserId?: SortOrder
    cityId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    accessToken?: SortOrder
    acceptCrossPosts?: SortOrder
    scheduleIntervalMinutes?: SortOrder
    scheduleStartTime?: SortOrder
    scheduleEndTime?: SortOrder
    dutyAdminUserId?: SortOrder
    cityId?: SortOrder
    cityName?: SortOrder
    regionName?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    accessToken?: SortOrder
    acceptCrossPosts?: SortOrder
    scheduleIntervalMinutes?: SortOrder
    scheduleStartTime?: SortOrder
    scheduleEndTime?: SortOrder
    dutyAdminUserId?: SortOrder
    cityId?: SortOrder
    cityName?: SortOrder
    regionName?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunitySumOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    scheduleIntervalMinutes?: SortOrder
    dutyAdminUserId?: SortOrder
    cityId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type CommunityNotificationAdminOrganizationIdUserIdCompoundUniqueInput = {
    organizationId: number
    userId: number
  }

  export type CommunityNotificationAdminCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityNotificationAdminAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
  }

  export type CommunityNotificationAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityNotificationAdminMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityNotificationAdminSumOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    userId?: SortOrder
  }

  export type PostPublicationNullableScalarRelationFilter = {
    is?: PostPublicationWhereInput | null
    isNot?: PostPublicationWhereInput | null
  }

  export type RadarPinNullableScalarRelationFilter = {
    is?: RadarPinWhereInput | null
    isNot?: RadarPinWhereInput | null
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    mediaUrls?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    authorType?: SortOrder
    attachedPets?: SortOrder
    attachments?: SortOrder
    tags?: SortOrder
    isDeleted?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationName?: SortOrder
    replySetting?: SortOrder
    verifyReplies?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    authorId?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    mediaUrls?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    authorType?: SortOrder
    attachedPets?: SortOrder
    attachments?: SortOrder
    tags?: SortOrder
    isDeleted?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationName?: SortOrder
    replySetting?: SortOrder
    verifyReplies?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    mediaUrls?: SortOrder
    status?: SortOrder
    scheduledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    authorType?: SortOrder
    attachedPets?: SortOrder
    attachments?: SortOrder
    tags?: SortOrder
    isDeleted?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationName?: SortOrder
    replySetting?: SortOrder
    verifyReplies?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    authorId?: SortOrder
    likesCount?: SortOrder
    commentsCount?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostPublicationCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    moderationStatus?: SortOrder
    publishDate?: SortOrder
    vkPostId?: SortOrder
    chatLink?: SortOrder
    cityId?: SortOrder
    cityName?: SortOrder
    regionName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostPublicationAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    vkPostId?: SortOrder
    cityId?: SortOrder
  }

  export type PostPublicationMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    moderationStatus?: SortOrder
    publishDate?: SortOrder
    vkPostId?: SortOrder
    chatLink?: SortOrder
    cityId?: SortOrder
    cityName?: SortOrder
    regionName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostPublicationMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    moderationStatus?: SortOrder
    publishDate?: SortOrder
    vkPostId?: SortOrder
    chatLink?: SortOrder
    cityId?: SortOrder
    cityName?: SortOrder
    regionName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostPublicationSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    organizationId?: SortOrder
    vkGroupId?: SortOrder
    vkPostId?: SortOrder
    cityId?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type RadarPinCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    organizationId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RadarPinAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    organizationId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type RadarPinMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    organizationId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RadarPinMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    organizationId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RadarPinSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    organizationId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type VkAppUserSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<VkAppUserSettingsCreateWithoutUserInput, VkAppUserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: VkAppUserSettingsCreateOrConnectWithoutUserInput
    connect?: VkAppUserSettingsWhereUniqueInput
  }

  export type OrganizationMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type OrganizationCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type CommunityCreateNestedManyWithoutDutyAdminInput = {
    create?: XOR<CommunityCreateWithoutDutyAdminInput, CommunityUncheckedCreateWithoutDutyAdminInput> | CommunityCreateWithoutDutyAdminInput[] | CommunityUncheckedCreateWithoutDutyAdminInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutDutyAdminInput | CommunityCreateOrConnectWithoutDutyAdminInput[]
    createMany?: CommunityCreateManyDutyAdminInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityNotificationAdminCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityNotificationAdminCreateWithoutUserInput, CommunityNotificationAdminUncheckedCreateWithoutUserInput> | CommunityNotificationAdminCreateWithoutUserInput[] | CommunityNotificationAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityNotificationAdminCreateOrConnectWithoutUserInput | CommunityNotificationAdminCreateOrConnectWithoutUserInput[]
    createMany?: CommunityNotificationAdminCreateManyUserInputEnvelope
    connect?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type RadarPinCreateNestedManyWithoutUserInput = {
    create?: XOR<RadarPinCreateWithoutUserInput, RadarPinUncheckedCreateWithoutUserInput> | RadarPinCreateWithoutUserInput[] | RadarPinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RadarPinCreateOrConnectWithoutUserInput | RadarPinCreateOrConnectWithoutUserInput[]
    createMany?: RadarPinCreateManyUserInputEnvelope
    connect?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
  }

  export type VkAppUserSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VkAppUserSettingsCreateWithoutUserInput, VkAppUserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: VkAppUserSettingsCreateOrConnectWithoutUserInput
    connect?: VkAppUserSettingsWhereUniqueInput
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type OrganizationUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutDutyAdminInput = {
    create?: XOR<CommunityCreateWithoutDutyAdminInput, CommunityUncheckedCreateWithoutDutyAdminInput> | CommunityCreateWithoutDutyAdminInput[] | CommunityUncheckedCreateWithoutDutyAdminInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutDutyAdminInput | CommunityCreateOrConnectWithoutDutyAdminInput[]
    createMany?: CommunityCreateManyDutyAdminInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityNotificationAdminUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityNotificationAdminCreateWithoutUserInput, CommunityNotificationAdminUncheckedCreateWithoutUserInput> | CommunityNotificationAdminCreateWithoutUserInput[] | CommunityNotificationAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityNotificationAdminCreateOrConnectWithoutUserInput | CommunityNotificationAdminCreateOrConnectWithoutUserInput[]
    createMany?: CommunityNotificationAdminCreateManyUserInputEnvelope
    connect?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type RadarPinUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RadarPinCreateWithoutUserInput, RadarPinUncheckedCreateWithoutUserInput> | RadarPinCreateWithoutUserInput[] | RadarPinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RadarPinCreateOrConnectWithoutUserInput | RadarPinCreateOrConnectWithoutUserInput[]
    createMany?: RadarPinCreateManyUserInputEnvelope
    connect?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VkAppUserSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<VkAppUserSettingsCreateWithoutUserInput, VkAppUserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: VkAppUserSettingsCreateOrConnectWithoutUserInput
    upsert?: VkAppUserSettingsUpsertWithoutUserInput
    disconnect?: VkAppUserSettingsWhereInput | boolean
    delete?: VkAppUserSettingsWhereInput | boolean
    connect?: VkAppUserSettingsWhereUniqueInput
    update?: XOR<XOR<VkAppUserSettingsUpdateToOneWithWhereWithoutUserInput, VkAppUserSettingsUpdateWithoutUserInput>, VkAppUserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutUserInput | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutUserInput | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutUserInput | OrganizationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type OrganizationUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutOwnerInput | OrganizationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutOwnerInput | OrganizationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutOwnerInput | OrganizationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type CommunityUpdateManyWithoutDutyAdminNestedInput = {
    create?: XOR<CommunityCreateWithoutDutyAdminInput, CommunityUncheckedCreateWithoutDutyAdminInput> | CommunityCreateWithoutDutyAdminInput[] | CommunityUncheckedCreateWithoutDutyAdminInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutDutyAdminInput | CommunityCreateOrConnectWithoutDutyAdminInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutDutyAdminInput | CommunityUpsertWithWhereUniqueWithoutDutyAdminInput[]
    createMany?: CommunityCreateManyDutyAdminInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutDutyAdminInput | CommunityUpdateWithWhereUniqueWithoutDutyAdminInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutDutyAdminInput | CommunityUpdateManyWithWhereWithoutDutyAdminInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityNotificationAdminUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityNotificationAdminCreateWithoutUserInput, CommunityNotificationAdminUncheckedCreateWithoutUserInput> | CommunityNotificationAdminCreateWithoutUserInput[] | CommunityNotificationAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityNotificationAdminCreateOrConnectWithoutUserInput | CommunityNotificationAdminCreateOrConnectWithoutUserInput[]
    upsert?: CommunityNotificationAdminUpsertWithWhereUniqueWithoutUserInput | CommunityNotificationAdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityNotificationAdminCreateManyUserInputEnvelope
    set?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    disconnect?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    delete?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    connect?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    update?: CommunityNotificationAdminUpdateWithWhereUniqueWithoutUserInput | CommunityNotificationAdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityNotificationAdminUpdateManyWithWhereWithoutUserInput | CommunityNotificationAdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityNotificationAdminScalarWhereInput | CommunityNotificationAdminScalarWhereInput[]
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type RadarPinUpdateManyWithoutUserNestedInput = {
    create?: XOR<RadarPinCreateWithoutUserInput, RadarPinUncheckedCreateWithoutUserInput> | RadarPinCreateWithoutUserInput[] | RadarPinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RadarPinCreateOrConnectWithoutUserInput | RadarPinCreateOrConnectWithoutUserInput[]
    upsert?: RadarPinUpsertWithWhereUniqueWithoutUserInput | RadarPinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RadarPinCreateManyUserInputEnvelope
    set?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    disconnect?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    delete?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    connect?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    update?: RadarPinUpdateWithWhereUniqueWithoutUserInput | RadarPinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RadarPinUpdateManyWithWhereWithoutUserInput | RadarPinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RadarPinScalarWhereInput | RadarPinScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VkAppUserSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VkAppUserSettingsCreateWithoutUserInput, VkAppUserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: VkAppUserSettingsCreateOrConnectWithoutUserInput
    upsert?: VkAppUserSettingsUpsertWithoutUserInput
    disconnect?: VkAppUserSettingsWhereInput | boolean
    delete?: VkAppUserSettingsWhereInput | boolean
    connect?: VkAppUserSettingsWhereUniqueInput
    update?: XOR<XOR<VkAppUserSettingsUpdateToOneWithWhereWithoutUserInput, VkAppUserSettingsUpdateWithoutUserInput>, VkAppUserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutUserInput | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutUserInput | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutUserInput | OrganizationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type OrganizationUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutOwnerInput | OrganizationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutOwnerInput | OrganizationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutOwnerInput | OrganizationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutDutyAdminNestedInput = {
    create?: XOR<CommunityCreateWithoutDutyAdminInput, CommunityUncheckedCreateWithoutDutyAdminInput> | CommunityCreateWithoutDutyAdminInput[] | CommunityUncheckedCreateWithoutDutyAdminInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutDutyAdminInput | CommunityCreateOrConnectWithoutDutyAdminInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutDutyAdminInput | CommunityUpsertWithWhereUniqueWithoutDutyAdminInput[]
    createMany?: CommunityCreateManyDutyAdminInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutDutyAdminInput | CommunityUpdateWithWhereUniqueWithoutDutyAdminInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutDutyAdminInput | CommunityUpdateManyWithWhereWithoutDutyAdminInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityNotificationAdminUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityNotificationAdminCreateWithoutUserInput, CommunityNotificationAdminUncheckedCreateWithoutUserInput> | CommunityNotificationAdminCreateWithoutUserInput[] | CommunityNotificationAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityNotificationAdminCreateOrConnectWithoutUserInput | CommunityNotificationAdminCreateOrConnectWithoutUserInput[]
    upsert?: CommunityNotificationAdminUpsertWithWhereUniqueWithoutUserInput | CommunityNotificationAdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityNotificationAdminCreateManyUserInputEnvelope
    set?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    disconnect?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    delete?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    connect?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    update?: CommunityNotificationAdminUpdateWithWhereUniqueWithoutUserInput | CommunityNotificationAdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityNotificationAdminUpdateManyWithWhereWithoutUserInput | CommunityNotificationAdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityNotificationAdminScalarWhereInput | CommunityNotificationAdminScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type RadarPinUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RadarPinCreateWithoutUserInput, RadarPinUncheckedCreateWithoutUserInput> | RadarPinCreateWithoutUserInput[] | RadarPinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RadarPinCreateOrConnectWithoutUserInput | RadarPinCreateOrConnectWithoutUserInput[]
    upsert?: RadarPinUpsertWithWhereUniqueWithoutUserInput | RadarPinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RadarPinCreateManyUserInputEnvelope
    set?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    disconnect?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    delete?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    connect?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    update?: RadarPinUpdateWithWhereUniqueWithoutUserInput | RadarPinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RadarPinUpdateManyWithWhereWithoutUserInput | RadarPinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RadarPinScalarWhereInput | RadarPinScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVkAppSettingsInput = {
    create?: XOR<UserCreateWithoutVkAppSettingsInput, UserUncheckedCreateWithoutVkAppSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVkAppSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutVkAppSettingsNestedInput = {
    create?: XOR<UserCreateWithoutVkAppSettingsInput, UserUncheckedCreateWithoutVkAppSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVkAppSettingsInput
    upsert?: UserUpsertWithoutVkAppSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVkAppSettingsInput, UserUpdateWithoutVkAppSettingsInput>, UserUncheckedUpdateWithoutVkAppSettingsInput>
  }

  export type UserCreateNestedOneWithoutOwnedOrganizationsInput = {
    create?: XOR<UserCreateWithoutOwnedOrganizationsInput, UserUncheckedCreateWithoutOwnedOrganizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedOrganizationsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationMemberCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type CommunityCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<CommunityCreateWithoutOrganizationInput, CommunityUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutOrganizationInput
    connect?: CommunityWhereUniqueInput
  }

  export type CommunityNotificationAdminCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<CommunityNotificationAdminCreateWithoutOrganizationInput, CommunityNotificationAdminUncheckedCreateWithoutOrganizationInput> | CommunityNotificationAdminCreateWithoutOrganizationInput[] | CommunityNotificationAdminUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: CommunityNotificationAdminCreateOrConnectWithoutOrganizationInput | CommunityNotificationAdminCreateOrConnectWithoutOrganizationInput[]
    createMany?: CommunityNotificationAdminCreateManyOrganizationInputEnvelope
    connect?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
  }

  export type PostPublicationCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PostPublicationCreateWithoutOrganizationInput, PostPublicationUncheckedCreateWithoutOrganizationInput> | PostPublicationCreateWithoutOrganizationInput[] | PostPublicationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PostPublicationCreateOrConnectWithoutOrganizationInput | PostPublicationCreateOrConnectWithoutOrganizationInput[]
    createMany?: PostPublicationCreateManyOrganizationInputEnvelope
    connect?: PostPublicationWhereUniqueInput | PostPublicationWhereUniqueInput[]
  }

  export type RadarPinCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<RadarPinCreateWithoutOrganizationInput, RadarPinUncheckedCreateWithoutOrganizationInput> | RadarPinCreateWithoutOrganizationInput[] | RadarPinUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: RadarPinCreateOrConnectWithoutOrganizationInput | RadarPinCreateOrConnectWithoutOrganizationInput[]
    createMany?: RadarPinCreateManyOrganizationInputEnvelope
    connect?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<CommunityCreateWithoutOrganizationInput, CommunityUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutOrganizationInput
    connect?: CommunityWhereUniqueInput
  }

  export type CommunityNotificationAdminUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<CommunityNotificationAdminCreateWithoutOrganizationInput, CommunityNotificationAdminUncheckedCreateWithoutOrganizationInput> | CommunityNotificationAdminCreateWithoutOrganizationInput[] | CommunityNotificationAdminUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: CommunityNotificationAdminCreateOrConnectWithoutOrganizationInput | CommunityNotificationAdminCreateOrConnectWithoutOrganizationInput[]
    createMany?: CommunityNotificationAdminCreateManyOrganizationInputEnvelope
    connect?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
  }

  export type PostPublicationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PostPublicationCreateWithoutOrganizationInput, PostPublicationUncheckedCreateWithoutOrganizationInput> | PostPublicationCreateWithoutOrganizationInput[] | PostPublicationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PostPublicationCreateOrConnectWithoutOrganizationInput | PostPublicationCreateOrConnectWithoutOrganizationInput[]
    createMany?: PostPublicationCreateManyOrganizationInputEnvelope
    connect?: PostPublicationWhereUniqueInput | PostPublicationWhereUniqueInput[]
  }

  export type RadarPinUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<RadarPinCreateWithoutOrganizationInput, RadarPinUncheckedCreateWithoutOrganizationInput> | RadarPinCreateWithoutOrganizationInput[] | RadarPinUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: RadarPinCreateOrConnectWithoutOrganizationInput | RadarPinCreateOrConnectWithoutOrganizationInput[]
    createMany?: RadarPinCreateManyOrganizationInputEnvelope
    connect?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutOwnedOrganizationsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedOrganizationsInput, UserUncheckedCreateWithoutOwnedOrganizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedOrganizationsInput
    upsert?: UserUpsertWithoutOwnedOrganizationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedOrganizationsInput, UserUpdateWithoutOwnedOrganizationsInput>, UserUncheckedUpdateWithoutOwnedOrganizationsInput>
  }

  export type OrganizationMemberUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type CommunityUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<CommunityCreateWithoutOrganizationInput, CommunityUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutOrganizationInput
    upsert?: CommunityUpsertWithoutOrganizationInput
    disconnect?: CommunityWhereInput | boolean
    delete?: CommunityWhereInput | boolean
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutOrganizationInput, CommunityUpdateWithoutOrganizationInput>, CommunityUncheckedUpdateWithoutOrganizationInput>
  }

  export type CommunityNotificationAdminUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<CommunityNotificationAdminCreateWithoutOrganizationInput, CommunityNotificationAdminUncheckedCreateWithoutOrganizationInput> | CommunityNotificationAdminCreateWithoutOrganizationInput[] | CommunityNotificationAdminUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: CommunityNotificationAdminCreateOrConnectWithoutOrganizationInput | CommunityNotificationAdminCreateOrConnectWithoutOrganizationInput[]
    upsert?: CommunityNotificationAdminUpsertWithWhereUniqueWithoutOrganizationInput | CommunityNotificationAdminUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: CommunityNotificationAdminCreateManyOrganizationInputEnvelope
    set?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    disconnect?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    delete?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    connect?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    update?: CommunityNotificationAdminUpdateWithWhereUniqueWithoutOrganizationInput | CommunityNotificationAdminUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: CommunityNotificationAdminUpdateManyWithWhereWithoutOrganizationInput | CommunityNotificationAdminUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: CommunityNotificationAdminScalarWhereInput | CommunityNotificationAdminScalarWhereInput[]
  }

  export type PostPublicationUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PostPublicationCreateWithoutOrganizationInput, PostPublicationUncheckedCreateWithoutOrganizationInput> | PostPublicationCreateWithoutOrganizationInput[] | PostPublicationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PostPublicationCreateOrConnectWithoutOrganizationInput | PostPublicationCreateOrConnectWithoutOrganizationInput[]
    upsert?: PostPublicationUpsertWithWhereUniqueWithoutOrganizationInput | PostPublicationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PostPublicationCreateManyOrganizationInputEnvelope
    set?: PostPublicationWhereUniqueInput | PostPublicationWhereUniqueInput[]
    disconnect?: PostPublicationWhereUniqueInput | PostPublicationWhereUniqueInput[]
    delete?: PostPublicationWhereUniqueInput | PostPublicationWhereUniqueInput[]
    connect?: PostPublicationWhereUniqueInput | PostPublicationWhereUniqueInput[]
    update?: PostPublicationUpdateWithWhereUniqueWithoutOrganizationInput | PostPublicationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PostPublicationUpdateManyWithWhereWithoutOrganizationInput | PostPublicationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PostPublicationScalarWhereInput | PostPublicationScalarWhereInput[]
  }

  export type RadarPinUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<RadarPinCreateWithoutOrganizationInput, RadarPinUncheckedCreateWithoutOrganizationInput> | RadarPinCreateWithoutOrganizationInput[] | RadarPinUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: RadarPinCreateOrConnectWithoutOrganizationInput | RadarPinCreateOrConnectWithoutOrganizationInput[]
    upsert?: RadarPinUpsertWithWhereUniqueWithoutOrganizationInput | RadarPinUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: RadarPinCreateManyOrganizationInputEnvelope
    set?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    disconnect?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    delete?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    connect?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    update?: RadarPinUpdateWithWhereUniqueWithoutOrganizationInput | RadarPinUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: RadarPinUpdateManyWithWhereWithoutOrganizationInput | RadarPinUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: RadarPinScalarWhereInput | RadarPinScalarWhereInput[]
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<CommunityCreateWithoutOrganizationInput, CommunityUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutOrganizationInput
    upsert?: CommunityUpsertWithoutOrganizationInput
    disconnect?: CommunityWhereInput | boolean
    delete?: CommunityWhereInput | boolean
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutOrganizationInput, CommunityUpdateWithoutOrganizationInput>, CommunityUncheckedUpdateWithoutOrganizationInput>
  }

  export type CommunityNotificationAdminUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<CommunityNotificationAdminCreateWithoutOrganizationInput, CommunityNotificationAdminUncheckedCreateWithoutOrganizationInput> | CommunityNotificationAdminCreateWithoutOrganizationInput[] | CommunityNotificationAdminUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: CommunityNotificationAdminCreateOrConnectWithoutOrganizationInput | CommunityNotificationAdminCreateOrConnectWithoutOrganizationInput[]
    upsert?: CommunityNotificationAdminUpsertWithWhereUniqueWithoutOrganizationInput | CommunityNotificationAdminUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: CommunityNotificationAdminCreateManyOrganizationInputEnvelope
    set?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    disconnect?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    delete?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    connect?: CommunityNotificationAdminWhereUniqueInput | CommunityNotificationAdminWhereUniqueInput[]
    update?: CommunityNotificationAdminUpdateWithWhereUniqueWithoutOrganizationInput | CommunityNotificationAdminUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: CommunityNotificationAdminUpdateManyWithWhereWithoutOrganizationInput | CommunityNotificationAdminUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: CommunityNotificationAdminScalarWhereInput | CommunityNotificationAdminScalarWhereInput[]
  }

  export type PostPublicationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PostPublicationCreateWithoutOrganizationInput, PostPublicationUncheckedCreateWithoutOrganizationInput> | PostPublicationCreateWithoutOrganizationInput[] | PostPublicationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PostPublicationCreateOrConnectWithoutOrganizationInput | PostPublicationCreateOrConnectWithoutOrganizationInput[]
    upsert?: PostPublicationUpsertWithWhereUniqueWithoutOrganizationInput | PostPublicationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PostPublicationCreateManyOrganizationInputEnvelope
    set?: PostPublicationWhereUniqueInput | PostPublicationWhereUniqueInput[]
    disconnect?: PostPublicationWhereUniqueInput | PostPublicationWhereUniqueInput[]
    delete?: PostPublicationWhereUniqueInput | PostPublicationWhereUniqueInput[]
    connect?: PostPublicationWhereUniqueInput | PostPublicationWhereUniqueInput[]
    update?: PostPublicationUpdateWithWhereUniqueWithoutOrganizationInput | PostPublicationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PostPublicationUpdateManyWithWhereWithoutOrganizationInput | PostPublicationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PostPublicationScalarWhereInput | PostPublicationScalarWhereInput[]
  }

  export type RadarPinUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<RadarPinCreateWithoutOrganizationInput, RadarPinUncheckedCreateWithoutOrganizationInput> | RadarPinCreateWithoutOrganizationInput[] | RadarPinUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: RadarPinCreateOrConnectWithoutOrganizationInput | RadarPinCreateOrConnectWithoutOrganizationInput[]
    upsert?: RadarPinUpsertWithWhereUniqueWithoutOrganizationInput | RadarPinUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: RadarPinCreateManyOrganizationInputEnvelope
    set?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    disconnect?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    delete?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    connect?: RadarPinWhereUniqueInput | RadarPinWhereUniqueInput[]
    update?: RadarPinUpdateWithWhereUniqueWithoutOrganizationInput | RadarPinUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: RadarPinUpdateManyWithWhereWithoutOrganizationInput | RadarPinUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: RadarPinScalarWhereInput | RadarPinScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutMembersInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrganizationMembersInput = {
    create?: XOR<UserCreateWithoutOrganizationMembersInput, UserUncheckedCreateWithoutOrganizationMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationMembersInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    upsert?: OrganizationUpsertWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembersInput, OrganizationUpdateWithoutMembersInput>, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutOrganizationMembersNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationMembersInput, UserUncheckedCreateWithoutOrganizationMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationMembersInput
    upsert?: UserUpsertWithoutOrganizationMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizationMembersInput, UserUpdateWithoutOrganizationMembersInput>, UserUncheckedUpdateWithoutOrganizationMembersInput>
  }

  export type OrganizationCreateNestedOneWithoutCommunityInput = {
    create?: XOR<OrganizationCreateWithoutCommunityInput, OrganizationUncheckedCreateWithoutCommunityInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutCommunityInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommunityDutyForInput = {
    create?: XOR<UserCreateWithoutCommunityDutyForInput, UserUncheckedCreateWithoutCommunityDutyForInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityDutyForInput
    connect?: UserWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type OrganizationUpdateOneRequiredWithoutCommunityNestedInput = {
    create?: XOR<OrganizationCreateWithoutCommunityInput, OrganizationUncheckedCreateWithoutCommunityInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutCommunityInput
    upsert?: OrganizationUpsertWithoutCommunityInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutCommunityInput, OrganizationUpdateWithoutCommunityInput>, OrganizationUncheckedUpdateWithoutCommunityInput>
  }

  export type UserUpdateOneWithoutCommunityDutyForNestedInput = {
    create?: XOR<UserCreateWithoutCommunityDutyForInput, UserUncheckedCreateWithoutCommunityDutyForInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityDutyForInput
    upsert?: UserUpsertWithoutCommunityDutyForInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunityDutyForInput, UserUpdateWithoutCommunityDutyForInput>, UserUncheckedUpdateWithoutCommunityDutyForInput>
  }

  export type OrganizationCreateNestedOneWithoutCommunityAdminsInput = {
    create?: XOR<OrganizationCreateWithoutCommunityAdminsInput, OrganizationUncheckedCreateWithoutCommunityAdminsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutCommunityAdminsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommunityAdminsInput = {
    create?: XOR<UserCreateWithoutCommunityAdminsInput, UserUncheckedCreateWithoutCommunityAdminsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityAdminsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutCommunityAdminsNestedInput = {
    create?: XOR<OrganizationCreateWithoutCommunityAdminsInput, OrganizationUncheckedCreateWithoutCommunityAdminsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutCommunityAdminsInput
    upsert?: OrganizationUpsertWithoutCommunityAdminsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutCommunityAdminsInput, OrganizationUpdateWithoutCommunityAdminsInput>, OrganizationUncheckedUpdateWithoutCommunityAdminsInput>
  }

  export type UserUpdateOneRequiredWithoutCommunityAdminsNestedInput = {
    create?: XOR<UserCreateWithoutCommunityAdminsInput, UserUncheckedCreateWithoutCommunityAdminsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityAdminsInput
    upsert?: UserUpsertWithoutCommunityAdminsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunityAdminsInput, UserUpdateWithoutCommunityAdminsInput>, UserUncheckedUpdateWithoutCommunityAdminsInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostPublicationCreateNestedOneWithoutPostInput = {
    create?: XOR<PostPublicationCreateWithoutPostInput, PostPublicationUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostPublicationCreateOrConnectWithoutPostInput
    connect?: PostPublicationWhereUniqueInput
  }

  export type RadarPinCreateNestedOneWithoutPostInput = {
    create?: XOR<RadarPinCreateWithoutPostInput, RadarPinUncheckedCreateWithoutPostInput>
    connectOrCreate?: RadarPinCreateOrConnectWithoutPostInput
    connect?: RadarPinWhereUniqueInput
  }

  export type PostPublicationUncheckedCreateNestedOneWithoutPostInput = {
    create?: XOR<PostPublicationCreateWithoutPostInput, PostPublicationUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostPublicationCreateOrConnectWithoutPostInput
    connect?: PostPublicationWhereUniqueInput
  }

  export type RadarPinUncheckedCreateNestedOneWithoutPostInput = {
    create?: XOR<RadarPinCreateWithoutPostInput, RadarPinUncheckedCreateWithoutPostInput>
    connectOrCreate?: RadarPinCreateOrConnectWithoutPostInput
    connect?: RadarPinWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type PostPublicationUpdateOneWithoutPostNestedInput = {
    create?: XOR<PostPublicationCreateWithoutPostInput, PostPublicationUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostPublicationCreateOrConnectWithoutPostInput
    upsert?: PostPublicationUpsertWithoutPostInput
    disconnect?: PostPublicationWhereInput | boolean
    delete?: PostPublicationWhereInput | boolean
    connect?: PostPublicationWhereUniqueInput
    update?: XOR<XOR<PostPublicationUpdateToOneWithWhereWithoutPostInput, PostPublicationUpdateWithoutPostInput>, PostPublicationUncheckedUpdateWithoutPostInput>
  }

  export type RadarPinUpdateOneWithoutPostNestedInput = {
    create?: XOR<RadarPinCreateWithoutPostInput, RadarPinUncheckedCreateWithoutPostInput>
    connectOrCreate?: RadarPinCreateOrConnectWithoutPostInput
    upsert?: RadarPinUpsertWithoutPostInput
    disconnect?: RadarPinWhereInput | boolean
    delete?: RadarPinWhereInput | boolean
    connect?: RadarPinWhereUniqueInput
    update?: XOR<XOR<RadarPinUpdateToOneWithWhereWithoutPostInput, RadarPinUpdateWithoutPostInput>, RadarPinUncheckedUpdateWithoutPostInput>
  }

  export type PostPublicationUncheckedUpdateOneWithoutPostNestedInput = {
    create?: XOR<PostPublicationCreateWithoutPostInput, PostPublicationUncheckedCreateWithoutPostInput>
    connectOrCreate?: PostPublicationCreateOrConnectWithoutPostInput
    upsert?: PostPublicationUpsertWithoutPostInput
    disconnect?: PostPublicationWhereInput | boolean
    delete?: PostPublicationWhereInput | boolean
    connect?: PostPublicationWhereUniqueInput
    update?: XOR<XOR<PostPublicationUpdateToOneWithWhereWithoutPostInput, PostPublicationUpdateWithoutPostInput>, PostPublicationUncheckedUpdateWithoutPostInput>
  }

  export type RadarPinUncheckedUpdateOneWithoutPostNestedInput = {
    create?: XOR<RadarPinCreateWithoutPostInput, RadarPinUncheckedCreateWithoutPostInput>
    connectOrCreate?: RadarPinCreateOrConnectWithoutPostInput
    upsert?: RadarPinUpsertWithoutPostInput
    disconnect?: RadarPinWhereInput | boolean
    delete?: RadarPinWhereInput | boolean
    connect?: RadarPinWhereUniqueInput
    update?: XOR<XOR<RadarPinUpdateToOneWithWhereWithoutPostInput, RadarPinUpdateWithoutPostInput>, RadarPinUncheckedUpdateWithoutPostInput>
  }

  export type PostCreateNestedOneWithoutPublicationInput = {
    create?: XOR<PostCreateWithoutPublicationInput, PostUncheckedCreateWithoutPublicationInput>
    connectOrCreate?: PostCreateOrConnectWithoutPublicationInput
    connect?: PostWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutPostPublicationsInput = {
    create?: XOR<OrganizationCreateWithoutPostPublicationsInput, OrganizationUncheckedCreateWithoutPostPublicationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPostPublicationsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type PostUpdateOneRequiredWithoutPublicationNestedInput = {
    create?: XOR<PostCreateWithoutPublicationInput, PostUncheckedCreateWithoutPublicationInput>
    connectOrCreate?: PostCreateOrConnectWithoutPublicationInput
    upsert?: PostUpsertWithoutPublicationInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPublicationInput, PostUpdateWithoutPublicationInput>, PostUncheckedUpdateWithoutPublicationInput>
  }

  export type OrganizationUpdateOneRequiredWithoutPostPublicationsNestedInput = {
    create?: XOR<OrganizationCreateWithoutPostPublicationsInput, OrganizationUncheckedCreateWithoutPostPublicationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPostPublicationsInput
    upsert?: OrganizationUpsertWithoutPostPublicationsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutPostPublicationsInput, OrganizationUpdateWithoutPostPublicationsInput>, OrganizationUncheckedUpdateWithoutPostPublicationsInput>
  }

  export type UserCreateNestedOneWithoutRadarPinsInput = {
    create?: XOR<UserCreateWithoutRadarPinsInput, UserUncheckedCreateWithoutRadarPinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRadarPinsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutRadarPinInput = {
    create?: XOR<PostCreateWithoutRadarPinInput, PostUncheckedCreateWithoutRadarPinInput>
    connectOrCreate?: PostCreateOrConnectWithoutRadarPinInput
    connect?: PostWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutRadarPinsInput = {
    create?: XOR<OrganizationCreateWithoutRadarPinsInput, OrganizationUncheckedCreateWithoutRadarPinsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutRadarPinsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneWithoutRadarPinsNestedInput = {
    create?: XOR<UserCreateWithoutRadarPinsInput, UserUncheckedCreateWithoutRadarPinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRadarPinsInput
    upsert?: UserUpsertWithoutRadarPinsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRadarPinsInput, UserUpdateWithoutRadarPinsInput>, UserUncheckedUpdateWithoutRadarPinsInput>
  }

  export type PostUpdateOneWithoutRadarPinNestedInput = {
    create?: XOR<PostCreateWithoutRadarPinInput, PostUncheckedCreateWithoutRadarPinInput>
    connectOrCreate?: PostCreateOrConnectWithoutRadarPinInput
    upsert?: PostUpsertWithoutRadarPinInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutRadarPinInput, PostUpdateWithoutRadarPinInput>, PostUncheckedUpdateWithoutRadarPinInput>
  }

  export type OrganizationUpdateOneWithoutRadarPinsNestedInput = {
    create?: XOR<OrganizationCreateWithoutRadarPinsInput, OrganizationUncheckedCreateWithoutRadarPinsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutRadarPinsInput
    upsert?: OrganizationUpsertWithoutRadarPinsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutRadarPinsInput, OrganizationUpdateWithoutRadarPinsInput>, OrganizationUncheckedUpdateWithoutRadarPinsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type VkAppUserSettingsCreateWithoutUserInput = {
    roleLabel?: string | null
    contactTelegram?: string | null
    contactEmail?: string | null
    homeCityName?: string | null
    homeLat?: Decimal | DecimalJsLike | number | string | null
    homeLng?: Decimal | DecimalJsLike | number | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    onboardingProgress?: number
    onboardingCompleted?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type VkAppUserSettingsUncheckedCreateWithoutUserInput = {
    id?: number
    roleLabel?: string | null
    contactTelegram?: string | null
    contactEmail?: string | null
    homeCityName?: string | null
    homeLat?: Decimal | DecimalJsLike | number | string | null
    homeLng?: Decimal | DecimalJsLike | number | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    onboardingProgress?: number
    onboardingCompleted?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type VkAppUserSettingsCreateOrConnectWithoutUserInput = {
    where: VkAppUserSettingsWhereUniqueInput
    create: XOR<VkAppUserSettingsCreateWithoutUserInput, VkAppUserSettingsUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMemberCreateWithoutUserInput = {
    role?: string | null
    position?: string | null
    canPost?: boolean | null
    joinedAt?: Date | string | null
    orgAvatar?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: boolean | null
    organization: OrganizationCreateNestedOneWithoutMembersInput
  }

  export type OrganizationMemberUncheckedCreateWithoutUserInput = {
    id?: number
    organizationId: number
    role?: string | null
    position?: string | null
    canPost?: boolean | null
    joinedAt?: Date | string | null
    orgAvatar?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: boolean | null
  }

  export type OrganizationMemberCreateOrConnectWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMemberCreateManyUserInputEnvelope = {
    data: OrganizationMemberCreateManyUserInput | OrganizationMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationCreateWithoutOwnerInput = {
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    community?: CommunityCreateNestedOneWithoutOrganizationInput
    communityAdmins?: CommunityNotificationAdminCreateNestedManyWithoutOrganizationInput
    postPublications?: PostPublicationCreateNestedManyWithoutOrganizationInput
    radarPins?: RadarPinCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    community?: CommunityUncheckedCreateNestedOneWithoutOrganizationInput
    communityAdmins?: CommunityNotificationAdminUncheckedCreateNestedManyWithoutOrganizationInput
    postPublications?: PostPublicationUncheckedCreateNestedManyWithoutOrganizationInput
    radarPins?: RadarPinUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput>
  }

  export type OrganizationCreateManyOwnerInputEnvelope = {
    data: OrganizationCreateManyOwnerInput | OrganizationCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CommunityCreateWithoutDutyAdminInput = {
    vkGroupId: bigint | number
    accessToken: string
    acceptCrossPosts?: boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: number
    scheduleStartTime?: string
    scheduleEndTime?: string
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutDutyAdminInput = {
    id?: number
    organizationId: number
    vkGroupId: bigint | number
    accessToken: string
    acceptCrossPosts?: boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: number
    scheduleStartTime?: string
    scheduleEndTime?: string
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type CommunityCreateOrConnectWithoutDutyAdminInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutDutyAdminInput, CommunityUncheckedCreateWithoutDutyAdminInput>
  }

  export type CommunityCreateManyDutyAdminInputEnvelope = {
    data: CommunityCreateManyDutyAdminInput | CommunityCreateManyDutyAdminInput[]
    skipDuplicates?: boolean
  }

  export type CommunityNotificationAdminCreateWithoutUserInput = {
    createdAt?: Date | string | null
    organization: OrganizationCreateNestedOneWithoutCommunityAdminsInput
  }

  export type CommunityNotificationAdminUncheckedCreateWithoutUserInput = {
    id?: number
    organizationId: number
    createdAt?: Date | string | null
  }

  export type CommunityNotificationAdminCreateOrConnectWithoutUserInput = {
    where: CommunityNotificationAdminWhereUniqueInput
    create: XOR<CommunityNotificationAdminCreateWithoutUserInput, CommunityNotificationAdminUncheckedCreateWithoutUserInput>
  }

  export type CommunityNotificationAdminCreateManyUserInputEnvelope = {
    data: CommunityNotificationAdminCreateManyUserInput | CommunityNotificationAdminCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutAuthorInput = {
    userId?: number | null
    content?: string | null
    mediaUrls?: string | null
    status?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    authorType?: string
    attachedPets?: string | null
    attachments?: string | null
    tags?: string | null
    isDeleted?: boolean | null
    likesCount?: number | null
    commentsCount?: number | null
    locationLat?: Decimal | DecimalJsLike | number | string | null
    locationLng?: Decimal | DecimalJsLike | number | string | null
    locationName?: string | null
    replySetting?: string | null
    verifyReplies?: boolean | null
    publication?: PostPublicationCreateNestedOneWithoutPostInput
    radarPin?: RadarPinCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    userId?: number | null
    content?: string | null
    mediaUrls?: string | null
    status?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    authorType?: string
    attachedPets?: string | null
    attachments?: string | null
    tags?: string | null
    isDeleted?: boolean | null
    likesCount?: number | null
    commentsCount?: number | null
    locationLat?: Decimal | DecimalJsLike | number | string | null
    locationLng?: Decimal | DecimalJsLike | number | string | null
    locationName?: string | null
    replySetting?: string | null
    verifyReplies?: boolean | null
    publication?: PostPublicationUncheckedCreateNestedOneWithoutPostInput
    radarPin?: RadarPinUncheckedCreateNestedOneWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RadarPinCreateWithoutUserInput = {
    type: string
    title: string
    description?: string | null
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string
    post?: PostCreateNestedOneWithoutRadarPinInput
    organization?: OrganizationCreateNestedOneWithoutRadarPinsInput
  }

  export type RadarPinUncheckedCreateWithoutUserInput = {
    id?: number
    postId?: number | null
    organizationId?: number | null
    type: string
    title: string
    description?: string | null
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type RadarPinCreateOrConnectWithoutUserInput = {
    where: RadarPinWhereUniqueInput
    create: XOR<RadarPinCreateWithoutUserInput, RadarPinUncheckedCreateWithoutUserInput>
  }

  export type RadarPinCreateManyUserInputEnvelope = {
    data: RadarPinCreateManyUserInput | RadarPinCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VkAppUserSettingsUpsertWithoutUserInput = {
    update: XOR<VkAppUserSettingsUpdateWithoutUserInput, VkAppUserSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<VkAppUserSettingsCreateWithoutUserInput, VkAppUserSettingsUncheckedCreateWithoutUserInput>
    where?: VkAppUserSettingsWhereInput
  }

  export type VkAppUserSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: VkAppUserSettingsWhereInput
    data: XOR<VkAppUserSettingsUpdateWithoutUserInput, VkAppUserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type VkAppUserSettingsUpdateWithoutUserInput = {
    roleLabel?: NullableStringFieldUpdateOperationsInput | string | null
    contactTelegram?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    homeCityName?: NullableStringFieldUpdateOperationsInput | string | null
    homeLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    onboardingProgress?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VkAppUserSettingsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleLabel?: NullableStringFieldUpdateOperationsInput | string | null
    contactTelegram?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    homeCityName?: NullableStringFieldUpdateOperationsInput | string | null
    homeLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    homeLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    onboardingProgress?: IntFieldUpdateOperationsInput | number
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutUserInput, OrganizationMemberUncheckedUpdateWithoutUserInput>
    create: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutUserInput, OrganizationMemberUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutUserInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type OrganizationMemberScalarWhereInput = {
    AND?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    OR?: OrganizationMemberScalarWhereInput[]
    NOT?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    id?: IntFilter<"OrganizationMember"> | number
    organizationId?: IntFilter<"OrganizationMember"> | number
    userId?: IntFilter<"OrganizationMember"> | number
    role?: StringNullableFilter<"OrganizationMember"> | string | null
    position?: StringNullableFilter<"OrganizationMember"> | string | null
    canPost?: BoolNullableFilter<"OrganizationMember"> | boolean | null
    joinedAt?: DateTimeNullableFilter<"OrganizationMember"> | Date | string | null
    orgAvatar?: StringNullableFilter<"OrganizationMember"> | string | null
    permissions?: JsonNullableFilter<"OrganizationMember">
    isPublic?: BoolNullableFilter<"OrganizationMember"> | boolean | null
  }

  export type OrganizationUpsertWithWhereUniqueWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    update: XOR<OrganizationUpdateWithoutOwnerInput, OrganizationUncheckedUpdateWithoutOwnerInput>
    create: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput>
  }

  export type OrganizationUpdateWithWhereUniqueWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    data: XOR<OrganizationUpdateWithoutOwnerInput, OrganizationUncheckedUpdateWithoutOwnerInput>
  }

  export type OrganizationUpdateManyWithWhereWithoutOwnerInput = {
    where: OrganizationScalarWhereInput
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyWithoutOwnerInput>
  }

  export type OrganizationScalarWhereInput = {
    AND?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    OR?: OrganizationScalarWhereInput[]
    NOT?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    type?: StringFilter<"Organization"> | string
    description?: StringNullableFilter<"Organization"> | string | null
    logo?: StringNullableFilter<"Organization"> | string | null
    website?: StringNullableFilter<"Organization"> | string | null
    phone?: StringNullableFilter<"Organization"> | string | null
    email?: StringNullableFilter<"Organization"> | string | null
    address?: StringNullableFilter<"Organization"> | string | null
    city?: StringNullableFilter<"Organization"> | string | null
    region?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Organization"> | Date | string | null
    shortName?: StringNullableFilter<"Organization"> | string | null
    bio?: StringNullableFilter<"Organization"> | string | null
    coverPhoto?: StringNullableFilter<"Organization"> | string | null
    addressCity?: StringNullableFilter<"Organization"> | string | null
    addressRegion?: StringNullableFilter<"Organization"> | string | null
    isVerified?: BoolNullableFilter<"Organization"> | boolean | null
    ownerUserId?: IntNullableFilter<"Organization"> | number | null
    status?: StringNullableFilter<"Organization"> | string | null
    isActive?: BoolNullableFilter<"Organization"> | boolean | null
    profileVisibility?: StringNullableFilter<"Organization"> | string | null
    showPhone?: StringNullableFilter<"Organization"> | string | null
    showEmail?: StringNullableFilter<"Organization"> | string | null
    allowMessages?: StringNullableFilter<"Organization"> | string | null
    geoLat?: DecimalNullableFilter<"Organization"> | Decimal | DecimalJsLike | number | string | null
    geoLng?: DecimalNullableFilter<"Organization"> | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFilter<"Organization"> | string
    vkLink?: StringNullableFilter<"Organization"> | string | null
  }

  export type CommunityUpsertWithWhereUniqueWithoutDutyAdminInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutDutyAdminInput, CommunityUncheckedUpdateWithoutDutyAdminInput>
    create: XOR<CommunityCreateWithoutDutyAdminInput, CommunityUncheckedCreateWithoutDutyAdminInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutDutyAdminInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutDutyAdminInput, CommunityUncheckedUpdateWithoutDutyAdminInput>
  }

  export type CommunityUpdateManyWithWhereWithoutDutyAdminInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutDutyAdminInput>
  }

  export type CommunityScalarWhereInput = {
    AND?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    OR?: CommunityScalarWhereInput[]
    NOT?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    id?: IntFilter<"Community"> | number
    organizationId?: IntFilter<"Community"> | number
    vkGroupId?: BigIntFilter<"Community"> | bigint | number
    accessToken?: StringFilter<"Community"> | string
    acceptCrossPosts?: BoolFilter<"Community"> | boolean
    acceptedTags?: JsonFilter<"Community">
    scheduleIntervalMinutes?: IntFilter<"Community"> | number
    scheduleStartTime?: StringFilter<"Community"> | string
    scheduleEndTime?: StringFilter<"Community"> | string
    dutyAdminUserId?: IntNullableFilter<"Community"> | number | null
    cityId?: IntNullableFilter<"Community"> | number | null
    cityName?: StringNullableFilter<"Community"> | string | null
    regionName?: StringNullableFilter<"Community"> | string | null
    lat?: DecimalNullableFilter<"Community"> | Decimal | DecimalJsLike | number | string | null
    lng?: DecimalNullableFilter<"Community"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeNullableFilter<"Community"> | Date | string | null
    updatedAt?: DateTimeFilter<"Community"> | Date | string
  }

  export type CommunityNotificationAdminUpsertWithWhereUniqueWithoutUserInput = {
    where: CommunityNotificationAdminWhereUniqueInput
    update: XOR<CommunityNotificationAdminUpdateWithoutUserInput, CommunityNotificationAdminUncheckedUpdateWithoutUserInput>
    create: XOR<CommunityNotificationAdminCreateWithoutUserInput, CommunityNotificationAdminUncheckedCreateWithoutUserInput>
  }

  export type CommunityNotificationAdminUpdateWithWhereUniqueWithoutUserInput = {
    where: CommunityNotificationAdminWhereUniqueInput
    data: XOR<CommunityNotificationAdminUpdateWithoutUserInput, CommunityNotificationAdminUncheckedUpdateWithoutUserInput>
  }

  export type CommunityNotificationAdminUpdateManyWithWhereWithoutUserInput = {
    where: CommunityNotificationAdminScalarWhereInput
    data: XOR<CommunityNotificationAdminUpdateManyMutationInput, CommunityNotificationAdminUncheckedUpdateManyWithoutUserInput>
  }

  export type CommunityNotificationAdminScalarWhereInput = {
    AND?: CommunityNotificationAdminScalarWhereInput | CommunityNotificationAdminScalarWhereInput[]
    OR?: CommunityNotificationAdminScalarWhereInput[]
    NOT?: CommunityNotificationAdminScalarWhereInput | CommunityNotificationAdminScalarWhereInput[]
    id?: IntFilter<"CommunityNotificationAdmin"> | number
    organizationId?: IntFilter<"CommunityNotificationAdmin"> | number
    userId?: IntFilter<"CommunityNotificationAdmin"> | number
    createdAt?: DateTimeNullableFilter<"CommunityNotificationAdmin"> | Date | string | null
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    userId?: IntNullableFilter<"Post"> | number | null
    content?: StringNullableFilter<"Post"> | string | null
    mediaUrls?: StringNullableFilter<"Post"> | string | null
    status?: StringNullableFilter<"Post"> | string | null
    scheduledAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    authorId?: IntFilter<"Post"> | number
    authorType?: StringFilter<"Post"> | string
    attachedPets?: StringNullableFilter<"Post"> | string | null
    attachments?: StringNullableFilter<"Post"> | string | null
    tags?: StringNullableFilter<"Post"> | string | null
    isDeleted?: BoolNullableFilter<"Post"> | boolean | null
    likesCount?: IntNullableFilter<"Post"> | number | null
    commentsCount?: IntNullableFilter<"Post"> | number | null
    locationLat?: DecimalNullableFilter<"Post"> | Decimal | DecimalJsLike | number | string | null
    locationLng?: DecimalNullableFilter<"Post"> | Decimal | DecimalJsLike | number | string | null
    locationName?: StringNullableFilter<"Post"> | string | null
    replySetting?: StringNullableFilter<"Post"> | string | null
    verifyReplies?: BoolNullableFilter<"Post"> | boolean | null
  }

  export type RadarPinUpsertWithWhereUniqueWithoutUserInput = {
    where: RadarPinWhereUniqueInput
    update: XOR<RadarPinUpdateWithoutUserInput, RadarPinUncheckedUpdateWithoutUserInput>
    create: XOR<RadarPinCreateWithoutUserInput, RadarPinUncheckedCreateWithoutUserInput>
  }

  export type RadarPinUpdateWithWhereUniqueWithoutUserInput = {
    where: RadarPinWhereUniqueInput
    data: XOR<RadarPinUpdateWithoutUserInput, RadarPinUncheckedUpdateWithoutUserInput>
  }

  export type RadarPinUpdateManyWithWhereWithoutUserInput = {
    where: RadarPinScalarWhereInput
    data: XOR<RadarPinUpdateManyMutationInput, RadarPinUncheckedUpdateManyWithoutUserInput>
  }

  export type RadarPinScalarWhereInput = {
    AND?: RadarPinScalarWhereInput | RadarPinScalarWhereInput[]
    OR?: RadarPinScalarWhereInput[]
    NOT?: RadarPinScalarWhereInput | RadarPinScalarWhereInput[]
    id?: IntFilter<"RadarPin"> | number
    userId?: IntNullableFilter<"RadarPin"> | number | null
    postId?: IntNullableFilter<"RadarPin"> | number | null
    organizationId?: IntNullableFilter<"RadarPin"> | number | null
    type?: StringFilter<"RadarPin"> | string
    title?: StringFilter<"RadarPin"> | string
    description?: StringNullableFilter<"RadarPin"> | string | null
    lat?: DecimalFilter<"RadarPin"> | Decimal | DecimalJsLike | number | string
    lng?: DecimalFilter<"RadarPin"> | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFilter<"RadarPin"> | Date | string
    createdAt?: DateTimeNullableFilter<"RadarPin"> | Date | string | null
    updatedAt?: DateTimeFilter<"RadarPin"> | Date | string
  }

  export type UserCreateWithoutVkAppSettingsInput = {
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    communityDutyFor?: CommunityCreateNestedManyWithoutDutyAdminInput
    communityAdmins?: CommunityNotificationAdminCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    radarPins?: RadarPinCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVkAppSettingsInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    communityDutyFor?: CommunityUncheckedCreateNestedManyWithoutDutyAdminInput
    communityAdmins?: CommunityNotificationAdminUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    radarPins?: RadarPinUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVkAppSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVkAppSettingsInput, UserUncheckedCreateWithoutVkAppSettingsInput>
  }

  export type UserUpsertWithoutVkAppSettingsInput = {
    update: XOR<UserUpdateWithoutVkAppSettingsInput, UserUncheckedUpdateWithoutVkAppSettingsInput>
    create: XOR<UserCreateWithoutVkAppSettingsInput, UserUncheckedCreateWithoutVkAppSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVkAppSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVkAppSettingsInput, UserUncheckedUpdateWithoutVkAppSettingsInput>
  }

  export type UserUpdateWithoutVkAppSettingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    communityDutyFor?: CommunityUpdateManyWithoutDutyAdminNestedInput
    communityAdmins?: CommunityNotificationAdminUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    radarPins?: RadarPinUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVkAppSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    communityDutyFor?: CommunityUncheckedUpdateManyWithoutDutyAdminNestedInput
    communityAdmins?: CommunityNotificationAdminUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    radarPins?: RadarPinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOwnedOrganizationsInput = {
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsCreateNestedOneWithoutUserInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    communityDutyFor?: CommunityCreateNestedManyWithoutDutyAdminInput
    communityAdmins?: CommunityNotificationAdminCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    radarPins?: RadarPinCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedOrganizationsInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsUncheckedCreateNestedOneWithoutUserInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    communityDutyFor?: CommunityUncheckedCreateNestedManyWithoutDutyAdminInput
    communityAdmins?: CommunityNotificationAdminUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    radarPins?: RadarPinUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedOrganizationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedOrganizationsInput, UserUncheckedCreateWithoutOwnedOrganizationsInput>
  }

  export type OrganizationMemberCreateWithoutOrganizationInput = {
    role?: string | null
    position?: string | null
    canPost?: boolean | null
    joinedAt?: Date | string | null
    orgAvatar?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: boolean | null
    user: UserCreateNestedOneWithoutOrganizationMembersInput
  }

  export type OrganizationMemberUncheckedCreateWithoutOrganizationInput = {
    id?: number
    userId: number
    role?: string | null
    position?: string | null
    canPost?: boolean | null
    joinedAt?: Date | string | null
    orgAvatar?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: boolean | null
  }

  export type OrganizationMemberCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberCreateManyOrganizationInputEnvelope = {
    data: OrganizationMemberCreateManyOrganizationInput | OrganizationMemberCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type CommunityCreateWithoutOrganizationInput = {
    vkGroupId: bigint | number
    accessToken: string
    acceptCrossPosts?: boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: number
    scheduleStartTime?: string
    scheduleEndTime?: string
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
    dutyAdmin?: UserCreateNestedOneWithoutCommunityDutyForInput
  }

  export type CommunityUncheckedCreateWithoutOrganizationInput = {
    id?: number
    vkGroupId: bigint | number
    accessToken: string
    acceptCrossPosts?: boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: number
    scheduleStartTime?: string
    scheduleEndTime?: string
    dutyAdminUserId?: number | null
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type CommunityCreateOrConnectWithoutOrganizationInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutOrganizationInput, CommunityUncheckedCreateWithoutOrganizationInput>
  }

  export type CommunityNotificationAdminCreateWithoutOrganizationInput = {
    createdAt?: Date | string | null
    user: UserCreateNestedOneWithoutCommunityAdminsInput
  }

  export type CommunityNotificationAdminUncheckedCreateWithoutOrganizationInput = {
    id?: number
    userId: number
    createdAt?: Date | string | null
  }

  export type CommunityNotificationAdminCreateOrConnectWithoutOrganizationInput = {
    where: CommunityNotificationAdminWhereUniqueInput
    create: XOR<CommunityNotificationAdminCreateWithoutOrganizationInput, CommunityNotificationAdminUncheckedCreateWithoutOrganizationInput>
  }

  export type CommunityNotificationAdminCreateManyOrganizationInputEnvelope = {
    data: CommunityNotificationAdminCreateManyOrganizationInput | CommunityNotificationAdminCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type PostPublicationCreateWithoutOrganizationInput = {
    vkGroupId: bigint | number
    moderationStatus?: string
    publishDate?: Date | string | null
    vkPostId?: bigint | number | null
    chatLink?: string | null
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutPublicationInput
  }

  export type PostPublicationUncheckedCreateWithoutOrganizationInput = {
    id?: number
    postId: number
    vkGroupId: bigint | number
    moderationStatus?: string
    publishDate?: Date | string | null
    vkPostId?: bigint | number | null
    chatLink?: string | null
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type PostPublicationCreateOrConnectWithoutOrganizationInput = {
    where: PostPublicationWhereUniqueInput
    create: XOR<PostPublicationCreateWithoutOrganizationInput, PostPublicationUncheckedCreateWithoutOrganizationInput>
  }

  export type PostPublicationCreateManyOrganizationInputEnvelope = {
    data: PostPublicationCreateManyOrganizationInput | PostPublicationCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type RadarPinCreateWithoutOrganizationInput = {
    type: string
    title: string
    description?: string | null
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutRadarPinsInput
    post?: PostCreateNestedOneWithoutRadarPinInput
  }

  export type RadarPinUncheckedCreateWithoutOrganizationInput = {
    id?: number
    userId?: number | null
    postId?: number | null
    type: string
    title: string
    description?: string | null
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type RadarPinCreateOrConnectWithoutOrganizationInput = {
    where: RadarPinWhereUniqueInput
    create: XOR<RadarPinCreateWithoutOrganizationInput, RadarPinUncheckedCreateWithoutOrganizationInput>
  }

  export type RadarPinCreateManyOrganizationInputEnvelope = {
    data: RadarPinCreateManyOrganizationInput | RadarPinCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedOrganizationsInput = {
    update: XOR<UserUpdateWithoutOwnedOrganizationsInput, UserUncheckedUpdateWithoutOwnedOrganizationsInput>
    create: XOR<UserCreateWithoutOwnedOrganizationsInput, UserUncheckedCreateWithoutOwnedOrganizationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedOrganizationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedOrganizationsInput, UserUncheckedUpdateWithoutOwnedOrganizationsInput>
  }

  export type UserUpdateWithoutOwnedOrganizationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUpdateOneWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    communityDutyFor?: CommunityUpdateManyWithoutDutyAdminNestedInput
    communityAdmins?: CommunityNotificationAdminUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    radarPins?: RadarPinUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedOrganizationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUncheckedUpdateOneWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    communityDutyFor?: CommunityUncheckedUpdateManyWithoutDutyAdminNestedInput
    communityAdmins?: CommunityNotificationAdminUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    radarPins?: RadarPinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type CommunityUpsertWithoutOrganizationInput = {
    update: XOR<CommunityUpdateWithoutOrganizationInput, CommunityUncheckedUpdateWithoutOrganizationInput>
    create: XOR<CommunityCreateWithoutOrganizationInput, CommunityUncheckedCreateWithoutOrganizationInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutOrganizationInput, CommunityUncheckedUpdateWithoutOrganizationInput>
  }

  export type CommunityUpdateWithoutOrganizationInput = {
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    acceptCrossPosts?: BoolFieldUpdateOperationsInput | boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: IntFieldUpdateOperationsInput | number
    scheduleStartTime?: StringFieldUpdateOperationsInput | string
    scheduleEndTime?: StringFieldUpdateOperationsInput | string
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dutyAdmin?: UserUpdateOneWithoutCommunityDutyForNestedInput
  }

  export type CommunityUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    acceptCrossPosts?: BoolFieldUpdateOperationsInput | boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: IntFieldUpdateOperationsInput | number
    scheduleStartTime?: StringFieldUpdateOperationsInput | string
    scheduleEndTime?: StringFieldUpdateOperationsInput | string
    dutyAdminUserId?: NullableIntFieldUpdateOperationsInput | number | null
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityNotificationAdminUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: CommunityNotificationAdminWhereUniqueInput
    update: XOR<CommunityNotificationAdminUpdateWithoutOrganizationInput, CommunityNotificationAdminUncheckedUpdateWithoutOrganizationInput>
    create: XOR<CommunityNotificationAdminCreateWithoutOrganizationInput, CommunityNotificationAdminUncheckedCreateWithoutOrganizationInput>
  }

  export type CommunityNotificationAdminUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: CommunityNotificationAdminWhereUniqueInput
    data: XOR<CommunityNotificationAdminUpdateWithoutOrganizationInput, CommunityNotificationAdminUncheckedUpdateWithoutOrganizationInput>
  }

  export type CommunityNotificationAdminUpdateManyWithWhereWithoutOrganizationInput = {
    where: CommunityNotificationAdminScalarWhereInput
    data: XOR<CommunityNotificationAdminUpdateManyMutationInput, CommunityNotificationAdminUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PostPublicationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PostPublicationWhereUniqueInput
    update: XOR<PostPublicationUpdateWithoutOrganizationInput, PostPublicationUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PostPublicationCreateWithoutOrganizationInput, PostPublicationUncheckedCreateWithoutOrganizationInput>
  }

  export type PostPublicationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PostPublicationWhereUniqueInput
    data: XOR<PostPublicationUpdateWithoutOrganizationInput, PostPublicationUncheckedUpdateWithoutOrganizationInput>
  }

  export type PostPublicationUpdateManyWithWhereWithoutOrganizationInput = {
    where: PostPublicationScalarWhereInput
    data: XOR<PostPublicationUpdateManyMutationInput, PostPublicationUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PostPublicationScalarWhereInput = {
    AND?: PostPublicationScalarWhereInput | PostPublicationScalarWhereInput[]
    OR?: PostPublicationScalarWhereInput[]
    NOT?: PostPublicationScalarWhereInput | PostPublicationScalarWhereInput[]
    id?: IntFilter<"PostPublication"> | number
    postId?: IntFilter<"PostPublication"> | number
    organizationId?: IntFilter<"PostPublication"> | number
    vkGroupId?: BigIntFilter<"PostPublication"> | bigint | number
    moderationStatus?: StringFilter<"PostPublication"> | string
    publishDate?: DateTimeNullableFilter<"PostPublication"> | Date | string | null
    vkPostId?: BigIntNullableFilter<"PostPublication"> | bigint | number | null
    chatLink?: StringNullableFilter<"PostPublication"> | string | null
    cityId?: IntNullableFilter<"PostPublication"> | number | null
    cityName?: StringNullableFilter<"PostPublication"> | string | null
    regionName?: StringNullableFilter<"PostPublication"> | string | null
    createdAt?: DateTimeNullableFilter<"PostPublication"> | Date | string | null
    updatedAt?: DateTimeFilter<"PostPublication"> | Date | string
  }

  export type RadarPinUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: RadarPinWhereUniqueInput
    update: XOR<RadarPinUpdateWithoutOrganizationInput, RadarPinUncheckedUpdateWithoutOrganizationInput>
    create: XOR<RadarPinCreateWithoutOrganizationInput, RadarPinUncheckedCreateWithoutOrganizationInput>
  }

  export type RadarPinUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: RadarPinWhereUniqueInput
    data: XOR<RadarPinUpdateWithoutOrganizationInput, RadarPinUncheckedUpdateWithoutOrganizationInput>
  }

  export type RadarPinUpdateManyWithWhereWithoutOrganizationInput = {
    where: RadarPinScalarWhereInput
    data: XOR<RadarPinUpdateManyMutationInput, RadarPinUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrganizationCreateWithoutMembersInput = {
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    owner?: UserCreateNestedOneWithoutOwnedOrganizationsInput
    community?: CommunityCreateNestedOneWithoutOrganizationInput
    communityAdmins?: CommunityNotificationAdminCreateNestedManyWithoutOrganizationInput
    postPublications?: PostPublicationCreateNestedManyWithoutOrganizationInput
    radarPins?: RadarPinCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    ownerUserId?: number | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    community?: CommunityUncheckedCreateNestedOneWithoutOrganizationInput
    communityAdmins?: CommunityNotificationAdminUncheckedCreateNestedManyWithoutOrganizationInput
    postPublications?: PostPublicationUncheckedCreateNestedManyWithoutOrganizationInput
    radarPins?: RadarPinUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMembersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutOrganizationMembersInput = {
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsCreateNestedOneWithoutUserInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    communityDutyFor?: CommunityCreateNestedManyWithoutDutyAdminInput
    communityAdmins?: CommunityNotificationAdminCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    radarPins?: RadarPinCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationMembersInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsUncheckedCreateNestedOneWithoutUserInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    communityDutyFor?: CommunityUncheckedCreateNestedManyWithoutDutyAdminInput
    communityAdmins?: CommunityNotificationAdminUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    radarPins?: RadarPinUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationMembersInput, UserUncheckedCreateWithoutOrganizationMembersInput>
  }

  export type OrganizationUpsertWithoutMembersInput = {
    update: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneWithoutOwnedOrganizationsNestedInput
    community?: CommunityUpdateOneWithoutOrganizationNestedInput
    communityAdmins?: CommunityNotificationAdminUpdateManyWithoutOrganizationNestedInput
    postPublications?: PostPublicationUpdateManyWithoutOrganizationNestedInput
    radarPins?: RadarPinUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    community?: CommunityUncheckedUpdateOneWithoutOrganizationNestedInput
    communityAdmins?: CommunityNotificationAdminUncheckedUpdateManyWithoutOrganizationNestedInput
    postPublications?: PostPublicationUncheckedUpdateManyWithoutOrganizationNestedInput
    radarPins?: RadarPinUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutOrganizationMembersInput = {
    update: XOR<UserUpdateWithoutOrganizationMembersInput, UserUncheckedUpdateWithoutOrganizationMembersInput>
    create: XOR<UserCreateWithoutOrganizationMembersInput, UserUncheckedCreateWithoutOrganizationMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizationMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizationMembersInput, UserUncheckedUpdateWithoutOrganizationMembersInput>
  }

  export type UserUpdateWithoutOrganizationMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUpdateOneWithoutUserNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    communityDutyFor?: CommunityUpdateManyWithoutDutyAdminNestedInput
    communityAdmins?: CommunityNotificationAdminUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    radarPins?: RadarPinUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUncheckedUpdateOneWithoutUserNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    communityDutyFor?: CommunityUncheckedUpdateManyWithoutDutyAdminNestedInput
    communityAdmins?: CommunityNotificationAdminUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    radarPins?: RadarPinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationCreateWithoutCommunityInput = {
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    owner?: UserCreateNestedOneWithoutOwnedOrganizationsInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    communityAdmins?: CommunityNotificationAdminCreateNestedManyWithoutOrganizationInput
    postPublications?: PostPublicationCreateNestedManyWithoutOrganizationInput
    radarPins?: RadarPinCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutCommunityInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    ownerUserId?: number | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    communityAdmins?: CommunityNotificationAdminUncheckedCreateNestedManyWithoutOrganizationInput
    postPublications?: PostPublicationUncheckedCreateNestedManyWithoutOrganizationInput
    radarPins?: RadarPinUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutCommunityInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutCommunityInput, OrganizationUncheckedCreateWithoutCommunityInput>
  }

  export type UserCreateWithoutCommunityDutyForInput = {
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsCreateNestedOneWithoutUserInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    communityAdmins?: CommunityNotificationAdminCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    radarPins?: RadarPinCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommunityDutyForInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsUncheckedCreateNestedOneWithoutUserInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    communityAdmins?: CommunityNotificationAdminUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    radarPins?: RadarPinUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommunityDutyForInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunityDutyForInput, UserUncheckedCreateWithoutCommunityDutyForInput>
  }

  export type OrganizationUpsertWithoutCommunityInput = {
    update: XOR<OrganizationUpdateWithoutCommunityInput, OrganizationUncheckedUpdateWithoutCommunityInput>
    create: XOR<OrganizationCreateWithoutCommunityInput, OrganizationUncheckedCreateWithoutCommunityInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutCommunityInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutCommunityInput, OrganizationUncheckedUpdateWithoutCommunityInput>
  }

  export type OrganizationUpdateWithoutCommunityInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneWithoutOwnedOrganizationsNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    communityAdmins?: CommunityNotificationAdminUpdateManyWithoutOrganizationNestedInput
    postPublications?: PostPublicationUpdateManyWithoutOrganizationNestedInput
    radarPins?: RadarPinUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    communityAdmins?: CommunityNotificationAdminUncheckedUpdateManyWithoutOrganizationNestedInput
    postPublications?: PostPublicationUncheckedUpdateManyWithoutOrganizationNestedInput
    radarPins?: RadarPinUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutCommunityDutyForInput = {
    update: XOR<UserUpdateWithoutCommunityDutyForInput, UserUncheckedUpdateWithoutCommunityDutyForInput>
    create: XOR<UserCreateWithoutCommunityDutyForInput, UserUncheckedCreateWithoutCommunityDutyForInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunityDutyForInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunityDutyForInput, UserUncheckedUpdateWithoutCommunityDutyForInput>
  }

  export type UserUpdateWithoutCommunityDutyForInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUpdateOneWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    communityAdmins?: CommunityNotificationAdminUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    radarPins?: RadarPinUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunityDutyForInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUncheckedUpdateOneWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    communityAdmins?: CommunityNotificationAdminUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    radarPins?: RadarPinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationCreateWithoutCommunityAdminsInput = {
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    owner?: UserCreateNestedOneWithoutOwnedOrganizationsInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    community?: CommunityCreateNestedOneWithoutOrganizationInput
    postPublications?: PostPublicationCreateNestedManyWithoutOrganizationInput
    radarPins?: RadarPinCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutCommunityAdminsInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    ownerUserId?: number | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    community?: CommunityUncheckedCreateNestedOneWithoutOrganizationInput
    postPublications?: PostPublicationUncheckedCreateNestedManyWithoutOrganizationInput
    radarPins?: RadarPinUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutCommunityAdminsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutCommunityAdminsInput, OrganizationUncheckedCreateWithoutCommunityAdminsInput>
  }

  export type UserCreateWithoutCommunityAdminsInput = {
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsCreateNestedOneWithoutUserInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    communityDutyFor?: CommunityCreateNestedManyWithoutDutyAdminInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    radarPins?: RadarPinCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommunityAdminsInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsUncheckedCreateNestedOneWithoutUserInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    communityDutyFor?: CommunityUncheckedCreateNestedManyWithoutDutyAdminInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    radarPins?: RadarPinUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommunityAdminsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunityAdminsInput, UserUncheckedCreateWithoutCommunityAdminsInput>
  }

  export type OrganizationUpsertWithoutCommunityAdminsInput = {
    update: XOR<OrganizationUpdateWithoutCommunityAdminsInput, OrganizationUncheckedUpdateWithoutCommunityAdminsInput>
    create: XOR<OrganizationCreateWithoutCommunityAdminsInput, OrganizationUncheckedCreateWithoutCommunityAdminsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutCommunityAdminsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutCommunityAdminsInput, OrganizationUncheckedUpdateWithoutCommunityAdminsInput>
  }

  export type OrganizationUpdateWithoutCommunityAdminsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneWithoutOwnedOrganizationsNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    community?: CommunityUpdateOneWithoutOrganizationNestedInput
    postPublications?: PostPublicationUpdateManyWithoutOrganizationNestedInput
    radarPins?: RadarPinUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutCommunityAdminsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    community?: CommunityUncheckedUpdateOneWithoutOrganizationNestedInput
    postPublications?: PostPublicationUncheckedUpdateManyWithoutOrganizationNestedInput
    radarPins?: RadarPinUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutCommunityAdminsInput = {
    update: XOR<UserUpdateWithoutCommunityAdminsInput, UserUncheckedUpdateWithoutCommunityAdminsInput>
    create: XOR<UserCreateWithoutCommunityAdminsInput, UserUncheckedCreateWithoutCommunityAdminsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunityAdminsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunityAdminsInput, UserUncheckedUpdateWithoutCommunityAdminsInput>
  }

  export type UserUpdateWithoutCommunityAdminsInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUpdateOneWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    communityDutyFor?: CommunityUpdateManyWithoutDutyAdminNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    radarPins?: RadarPinUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunityAdminsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUncheckedUpdateOneWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    communityDutyFor?: CommunityUncheckedUpdateManyWithoutDutyAdminNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    radarPins?: RadarPinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsCreateNestedOneWithoutUserInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    communityDutyFor?: CommunityCreateNestedManyWithoutDutyAdminInput
    communityAdmins?: CommunityNotificationAdminCreateNestedManyWithoutUserInput
    radarPins?: RadarPinCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsUncheckedCreateNestedOneWithoutUserInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    communityDutyFor?: CommunityUncheckedCreateNestedManyWithoutDutyAdminInput
    communityAdmins?: CommunityNotificationAdminUncheckedCreateNestedManyWithoutUserInput
    radarPins?: RadarPinUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type PostPublicationCreateWithoutPostInput = {
    vkGroupId: bigint | number
    moderationStatus?: string
    publishDate?: Date | string | null
    vkPostId?: bigint | number | null
    chatLink?: string | null
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutPostPublicationsInput
  }

  export type PostPublicationUncheckedCreateWithoutPostInput = {
    id?: number
    organizationId: number
    vkGroupId: bigint | number
    moderationStatus?: string
    publishDate?: Date | string | null
    vkPostId?: bigint | number | null
    chatLink?: string | null
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type PostPublicationCreateOrConnectWithoutPostInput = {
    where: PostPublicationWhereUniqueInput
    create: XOR<PostPublicationCreateWithoutPostInput, PostPublicationUncheckedCreateWithoutPostInput>
  }

  export type RadarPinCreateWithoutPostInput = {
    type: string
    title: string
    description?: string | null
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutRadarPinsInput
    organization?: OrganizationCreateNestedOneWithoutRadarPinsInput
  }

  export type RadarPinUncheckedCreateWithoutPostInput = {
    id?: number
    userId?: number | null
    organizationId?: number | null
    type: string
    title: string
    description?: string | null
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type RadarPinCreateOrConnectWithoutPostInput = {
    where: RadarPinWhereUniqueInput
    create: XOR<RadarPinCreateWithoutPostInput, RadarPinUncheckedCreateWithoutPostInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUpdateOneWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    communityDutyFor?: CommunityUpdateManyWithoutDutyAdminNestedInput
    communityAdmins?: CommunityNotificationAdminUpdateManyWithoutUserNestedInput
    radarPins?: RadarPinUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUncheckedUpdateOneWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    communityDutyFor?: CommunityUncheckedUpdateManyWithoutDutyAdminNestedInput
    communityAdmins?: CommunityNotificationAdminUncheckedUpdateManyWithoutUserNestedInput
    radarPins?: RadarPinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostPublicationUpsertWithoutPostInput = {
    update: XOR<PostPublicationUpdateWithoutPostInput, PostPublicationUncheckedUpdateWithoutPostInput>
    create: XOR<PostPublicationCreateWithoutPostInput, PostPublicationUncheckedCreateWithoutPostInput>
    where?: PostPublicationWhereInput
  }

  export type PostPublicationUpdateToOneWithWhereWithoutPostInput = {
    where?: PostPublicationWhereInput
    data: XOR<PostPublicationUpdateWithoutPostInput, PostPublicationUncheckedUpdateWithoutPostInput>
  }

  export type PostPublicationUpdateWithoutPostInput = {
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    moderationStatus?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vkPostId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatLink?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPostPublicationsNestedInput
  }

  export type PostPublicationUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    moderationStatus?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vkPostId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatLink?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadarPinUpsertWithoutPostInput = {
    update: XOR<RadarPinUpdateWithoutPostInput, RadarPinUncheckedUpdateWithoutPostInput>
    create: XOR<RadarPinCreateWithoutPostInput, RadarPinUncheckedCreateWithoutPostInput>
    where?: RadarPinWhereInput
  }

  export type RadarPinUpdateToOneWithWhereWithoutPostInput = {
    where?: RadarPinWhereInput
    data: XOR<RadarPinUpdateWithoutPostInput, RadarPinUncheckedUpdateWithoutPostInput>
  }

  export type RadarPinUpdateWithoutPostInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutRadarPinsNestedInput
    organization?: OrganizationUpdateOneWithoutRadarPinsNestedInput
  }

  export type RadarPinUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateWithoutPublicationInput = {
    userId?: number | null
    content?: string | null
    mediaUrls?: string | null
    status?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    authorType?: string
    attachedPets?: string | null
    attachments?: string | null
    tags?: string | null
    isDeleted?: boolean | null
    likesCount?: number | null
    commentsCount?: number | null
    locationLat?: Decimal | DecimalJsLike | number | string | null
    locationLng?: Decimal | DecimalJsLike | number | string | null
    locationName?: string | null
    replySetting?: string | null
    verifyReplies?: boolean | null
    author: UserCreateNestedOneWithoutPostsInput
    radarPin?: RadarPinCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutPublicationInput = {
    id?: number
    userId?: number | null
    content?: string | null
    mediaUrls?: string | null
    status?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    authorId: number
    authorType?: string
    attachedPets?: string | null
    attachments?: string | null
    tags?: string | null
    isDeleted?: boolean | null
    likesCount?: number | null
    commentsCount?: number | null
    locationLat?: Decimal | DecimalJsLike | number | string | null
    locationLng?: Decimal | DecimalJsLike | number | string | null
    locationName?: string | null
    replySetting?: string | null
    verifyReplies?: boolean | null
    radarPin?: RadarPinUncheckedCreateNestedOneWithoutPostInput
  }

  export type PostCreateOrConnectWithoutPublicationInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPublicationInput, PostUncheckedCreateWithoutPublicationInput>
  }

  export type OrganizationCreateWithoutPostPublicationsInput = {
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    owner?: UserCreateNestedOneWithoutOwnedOrganizationsInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    community?: CommunityCreateNestedOneWithoutOrganizationInput
    communityAdmins?: CommunityNotificationAdminCreateNestedManyWithoutOrganizationInput
    radarPins?: RadarPinCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutPostPublicationsInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    ownerUserId?: number | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    community?: CommunityUncheckedCreateNestedOneWithoutOrganizationInput
    communityAdmins?: CommunityNotificationAdminUncheckedCreateNestedManyWithoutOrganizationInput
    radarPins?: RadarPinUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutPostPublicationsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPostPublicationsInput, OrganizationUncheckedCreateWithoutPostPublicationsInput>
  }

  export type PostUpsertWithoutPublicationInput = {
    update: XOR<PostUpdateWithoutPublicationInput, PostUncheckedUpdateWithoutPublicationInput>
    create: XOR<PostCreateWithoutPublicationInput, PostUncheckedCreateWithoutPublicationInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPublicationInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPublicationInput, PostUncheckedUpdateWithoutPublicationInput>
  }

  export type PostUpdateWithoutPublicationInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrls?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorType?: StringFieldUpdateOperationsInput | string
    attachedPets?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    locationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    replySetting?: NullableStringFieldUpdateOperationsInput | string | null
    verifyReplies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    radarPin?: RadarPinUpdateOneWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutPublicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrls?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    authorType?: StringFieldUpdateOperationsInput | string
    attachedPets?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    locationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    replySetting?: NullableStringFieldUpdateOperationsInput | string | null
    verifyReplies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    radarPin?: RadarPinUncheckedUpdateOneWithoutPostNestedInput
  }

  export type OrganizationUpsertWithoutPostPublicationsInput = {
    update: XOR<OrganizationUpdateWithoutPostPublicationsInput, OrganizationUncheckedUpdateWithoutPostPublicationsInput>
    create: XOR<OrganizationCreateWithoutPostPublicationsInput, OrganizationUncheckedCreateWithoutPostPublicationsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutPostPublicationsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutPostPublicationsInput, OrganizationUncheckedUpdateWithoutPostPublicationsInput>
  }

  export type OrganizationUpdateWithoutPostPublicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneWithoutOwnedOrganizationsNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    community?: CommunityUpdateOneWithoutOrganizationNestedInput
    communityAdmins?: CommunityNotificationAdminUpdateManyWithoutOrganizationNestedInput
    radarPins?: RadarPinUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutPostPublicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    community?: CommunityUncheckedUpdateOneWithoutOrganizationNestedInput
    communityAdmins?: CommunityNotificationAdminUncheckedUpdateManyWithoutOrganizationNestedInput
    radarPins?: RadarPinUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateWithoutRadarPinsInput = {
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsCreateNestedOneWithoutUserInput
    organizationMembers?: OrganizationMemberCreateNestedManyWithoutUserInput
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    communityDutyFor?: CommunityCreateNestedManyWithoutDutyAdminInput
    communityAdmins?: CommunityNotificationAdminCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutRadarPinsInput = {
    id?: number
    name: string
    lastName?: string | null
    email: string
    bio?: string | null
    phone?: string | null
    location?: string | null
    avatar?: string | null
    coverPhoto?: string | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    showOnline?: string | null
    verified?: boolean | null
    verifiedAt?: Date | string | null
    createdAt?: Date | string | null
    lastSeen?: Date | string | null
    passwordHash: string
    vkId?: number | null
    vkAccessToken?: string | null
    okId?: string | null
    okAccessToken?: string | null
    mailruId?: string | null
    mailruAccessToken?: string | null
    vkAppSettings?: VkAppUserSettingsUncheckedCreateNestedOneWithoutUserInput
    organizationMembers?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    communityDutyFor?: CommunityUncheckedCreateNestedManyWithoutDutyAdminInput
    communityAdmins?: CommunityNotificationAdminUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutRadarPinsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRadarPinsInput, UserUncheckedCreateWithoutRadarPinsInput>
  }

  export type PostCreateWithoutRadarPinInput = {
    userId?: number | null
    content?: string | null
    mediaUrls?: string | null
    status?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    authorType?: string
    attachedPets?: string | null
    attachments?: string | null
    tags?: string | null
    isDeleted?: boolean | null
    likesCount?: number | null
    commentsCount?: number | null
    locationLat?: Decimal | DecimalJsLike | number | string | null
    locationLng?: Decimal | DecimalJsLike | number | string | null
    locationName?: string | null
    replySetting?: string | null
    verifyReplies?: boolean | null
    author: UserCreateNestedOneWithoutPostsInput
    publication?: PostPublicationCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutRadarPinInput = {
    id?: number
    userId?: number | null
    content?: string | null
    mediaUrls?: string | null
    status?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    authorId: number
    authorType?: string
    attachedPets?: string | null
    attachments?: string | null
    tags?: string | null
    isDeleted?: boolean | null
    likesCount?: number | null
    commentsCount?: number | null
    locationLat?: Decimal | DecimalJsLike | number | string | null
    locationLng?: Decimal | DecimalJsLike | number | string | null
    locationName?: string | null
    replySetting?: string | null
    verifyReplies?: boolean | null
    publication?: PostPublicationUncheckedCreateNestedOneWithoutPostInput
  }

  export type PostCreateOrConnectWithoutRadarPinInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutRadarPinInput, PostUncheckedCreateWithoutRadarPinInput>
  }

  export type OrganizationCreateWithoutRadarPinsInput = {
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    owner?: UserCreateNestedOneWithoutOwnedOrganizationsInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    community?: CommunityCreateNestedOneWithoutOrganizationInput
    communityAdmins?: CommunityNotificationAdminCreateNestedManyWithoutOrganizationInput
    postPublications?: PostPublicationCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutRadarPinsInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    ownerUserId?: number | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    community?: CommunityUncheckedCreateNestedOneWithoutOrganizationInput
    communityAdmins?: CommunityNotificationAdminUncheckedCreateNestedManyWithoutOrganizationInput
    postPublications?: PostPublicationUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutRadarPinsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutRadarPinsInput, OrganizationUncheckedCreateWithoutRadarPinsInput>
  }

  export type UserUpsertWithoutRadarPinsInput = {
    update: XOR<UserUpdateWithoutRadarPinsInput, UserUncheckedUpdateWithoutRadarPinsInput>
    create: XOR<UserCreateWithoutRadarPinsInput, UserUncheckedCreateWithoutRadarPinsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRadarPinsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRadarPinsInput, UserUncheckedUpdateWithoutRadarPinsInput>
  }

  export type UserUpdateWithoutRadarPinsInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUpdateOneWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUpdateManyWithoutUserNestedInput
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    communityDutyFor?: CommunityUpdateManyWithoutDutyAdminNestedInput
    communityAdmins?: CommunityNotificationAdminUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutRadarPinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    showOnline?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    vkId?: NullableIntFieldUpdateOperationsInput | number | null
    vkAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    okId?: NullableStringFieldUpdateOperationsInput | string | null
    okAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    mailruId?: NullableStringFieldUpdateOperationsInput | string | null
    mailruAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    vkAppSettings?: VkAppUserSettingsUncheckedUpdateOneWithoutUserNestedInput
    organizationMembers?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    communityDutyFor?: CommunityUncheckedUpdateManyWithoutDutyAdminNestedInput
    communityAdmins?: CommunityNotificationAdminUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PostUpsertWithoutRadarPinInput = {
    update: XOR<PostUpdateWithoutRadarPinInput, PostUncheckedUpdateWithoutRadarPinInput>
    create: XOR<PostCreateWithoutRadarPinInput, PostUncheckedCreateWithoutRadarPinInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutRadarPinInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutRadarPinInput, PostUncheckedUpdateWithoutRadarPinInput>
  }

  export type PostUpdateWithoutRadarPinInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrls?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorType?: StringFieldUpdateOperationsInput | string
    attachedPets?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    locationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    replySetting?: NullableStringFieldUpdateOperationsInput | string | null
    verifyReplies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    publication?: PostPublicationUpdateOneWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutRadarPinInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrls?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    authorType?: StringFieldUpdateOperationsInput | string
    attachedPets?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    locationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    replySetting?: NullableStringFieldUpdateOperationsInput | string | null
    verifyReplies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    publication?: PostPublicationUncheckedUpdateOneWithoutPostNestedInput
  }

  export type OrganizationUpsertWithoutRadarPinsInput = {
    update: XOR<OrganizationUpdateWithoutRadarPinsInput, OrganizationUncheckedUpdateWithoutRadarPinsInput>
    create: XOR<OrganizationCreateWithoutRadarPinsInput, OrganizationUncheckedCreateWithoutRadarPinsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutRadarPinsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutRadarPinsInput, OrganizationUncheckedUpdateWithoutRadarPinsInput>
  }

  export type OrganizationUpdateWithoutRadarPinsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneWithoutOwnedOrganizationsNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    community?: CommunityUpdateOneWithoutOrganizationNestedInput
    communityAdmins?: CommunityNotificationAdminUpdateManyWithoutOrganizationNestedInput
    postPublications?: PostPublicationUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutRadarPinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ownerUserId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    community?: CommunityUncheckedUpdateOneWithoutOrganizationNestedInput
    communityAdmins?: CommunityNotificationAdminUncheckedUpdateManyWithoutOrganizationNestedInput
    postPublications?: PostPublicationUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationMemberCreateManyUserInput = {
    id?: number
    organizationId: number
    role?: string | null
    position?: string | null
    canPost?: boolean | null
    joinedAt?: Date | string | null
    orgAvatar?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: boolean | null
  }

  export type OrganizationCreateManyOwnerInput = {
    id?: number
    name: string
    type: string
    description?: string | null
    logo?: string | null
    website?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    city?: string | null
    region?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    shortName?: string | null
    bio?: string | null
    coverPhoto?: string | null
    addressCity?: string | null
    addressRegion?: string | null
    isVerified?: boolean | null
    status?: string | null
    isActive?: boolean | null
    profileVisibility?: string | null
    showPhone?: string | null
    showEmail?: string | null
    allowMessages?: string | null
    geoLat?: Decimal | DecimalJsLike | number | string | null
    geoLng?: Decimal | DecimalJsLike | number | string | null
    networkRole?: string
    vkLink?: string | null
  }

  export type CommunityCreateManyDutyAdminInput = {
    id?: number
    organizationId: number
    vkGroupId: bigint | number
    accessToken: string
    acceptCrossPosts?: boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: number
    scheduleStartTime?: string
    scheduleEndTime?: string
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    lat?: Decimal | DecimalJsLike | number | string | null
    lng?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type CommunityNotificationAdminCreateManyUserInput = {
    id?: number
    organizationId: number
    createdAt?: Date | string | null
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    userId?: number | null
    content?: string | null
    mediaUrls?: string | null
    status?: string | null
    scheduledAt?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    authorType?: string
    attachedPets?: string | null
    attachments?: string | null
    tags?: string | null
    isDeleted?: boolean | null
    likesCount?: number | null
    commentsCount?: number | null
    locationLat?: Decimal | DecimalJsLike | number | string | null
    locationLng?: Decimal | DecimalJsLike | number | string | null
    locationName?: string | null
    replySetting?: string | null
    verifyReplies?: boolean | null
  }

  export type RadarPinCreateManyUserInput = {
    id?: number
    postId?: number | null
    organizationId?: number | null
    type: string
    title: string
    description?: string | null
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type OrganizationMemberUpdateWithoutUserInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    canPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput
  }

  export type OrganizationMemberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    canPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    canPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OrganizationUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    community?: CommunityUpdateOneWithoutOrganizationNestedInput
    communityAdmins?: CommunityNotificationAdminUpdateManyWithoutOrganizationNestedInput
    postPublications?: PostPublicationUpdateManyWithoutOrganizationNestedInput
    radarPins?: RadarPinUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    community?: CommunityUncheckedUpdateOneWithoutOrganizationNestedInput
    communityAdmins?: CommunityNotificationAdminUncheckedUpdateManyWithoutOrganizationNestedInput
    postPublications?: PostPublicationUncheckedUpdateManyWithoutOrganizationNestedInput
    radarPins?: RadarPinUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressRegion?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    profileVisibility?: NullableStringFieldUpdateOperationsInput | string | null
    showPhone?: NullableStringFieldUpdateOperationsInput | string | null
    showEmail?: NullableStringFieldUpdateOperationsInput | string | null
    allowMessages?: NullableStringFieldUpdateOperationsInput | string | null
    geoLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    geoLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    networkRole?: StringFieldUpdateOperationsInput | string
    vkLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommunityUpdateWithoutDutyAdminInput = {
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    acceptCrossPosts?: BoolFieldUpdateOperationsInput | boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: IntFieldUpdateOperationsInput | number
    scheduleStartTime?: StringFieldUpdateOperationsInput | string
    scheduleEndTime?: StringFieldUpdateOperationsInput | string
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutDutyAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    acceptCrossPosts?: BoolFieldUpdateOperationsInput | boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: IntFieldUpdateOperationsInput | number
    scheduleStartTime?: StringFieldUpdateOperationsInput | string
    scheduleEndTime?: StringFieldUpdateOperationsInput | string
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateManyWithoutDutyAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    accessToken?: StringFieldUpdateOperationsInput | string
    acceptCrossPosts?: BoolFieldUpdateOperationsInput | boolean
    acceptedTags?: JsonNullValueInput | InputJsonValue
    scheduleIntervalMinutes?: IntFieldUpdateOperationsInput | number
    scheduleStartTime?: StringFieldUpdateOperationsInput | string
    scheduleEndTime?: StringFieldUpdateOperationsInput | string
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityNotificationAdminUpdateWithoutUserInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organization?: OrganizationUpdateOneRequiredWithoutCommunityAdminsNestedInput
  }

  export type CommunityNotificationAdminUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunityNotificationAdminUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizationId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostUpdateWithoutAuthorInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrls?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorType?: StringFieldUpdateOperationsInput | string
    attachedPets?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    locationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    replySetting?: NullableStringFieldUpdateOperationsInput | string | null
    verifyReplies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    publication?: PostPublicationUpdateOneWithoutPostNestedInput
    radarPin?: RadarPinUpdateOneWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrls?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorType?: StringFieldUpdateOperationsInput | string
    attachedPets?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    locationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    replySetting?: NullableStringFieldUpdateOperationsInput | string | null
    verifyReplies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    publication?: PostPublicationUncheckedUpdateOneWithoutPostNestedInput
    radarPin?: RadarPinUncheckedUpdateOneWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrls?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorType?: StringFieldUpdateOperationsInput | string
    attachedPets?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likesCount?: NullableIntFieldUpdateOperationsInput | number | null
    commentsCount?: NullableIntFieldUpdateOperationsInput | number | null
    locationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    replySetting?: NullableStringFieldUpdateOperationsInput | string | null
    verifyReplies?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RadarPinUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutRadarPinNestedInput
    organization?: OrganizationUpdateOneWithoutRadarPinsNestedInput
  }

  export type RadarPinUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadarPinUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    organizationId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberCreateManyOrganizationInput = {
    id?: number
    userId: number
    role?: string | null
    position?: string | null
    canPost?: boolean | null
    joinedAt?: Date | string | null
    orgAvatar?: string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: boolean | null
  }

  export type CommunityNotificationAdminCreateManyOrganizationInput = {
    id?: number
    userId: number
    createdAt?: Date | string | null
  }

  export type PostPublicationCreateManyOrganizationInput = {
    id?: number
    postId: number
    vkGroupId: bigint | number
    moderationStatus?: string
    publishDate?: Date | string | null
    vkPostId?: bigint | number | null
    chatLink?: string | null
    cityId?: number | null
    cityName?: string | null
    regionName?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type RadarPinCreateManyOrganizationInput = {
    id?: number
    userId?: number | null
    postId?: number | null
    type: string
    title: string
    description?: string | null
    lat: Decimal | DecimalJsLike | number | string
    lng: Decimal | DecimalJsLike | number | string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type OrganizationMemberUpdateWithoutOrganizationInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    canPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutOrganizationMembersNestedInput
  }

  export type OrganizationMemberUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    canPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    canPost?: NullableBoolFieldUpdateOperationsInput | boolean | null
    joinedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isPublic?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CommunityNotificationAdminUpdateWithoutOrganizationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCommunityAdminsNestedInput
  }

  export type CommunityNotificationAdminUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunityNotificationAdminUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PostPublicationUpdateWithoutOrganizationInput = {
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    moderationStatus?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vkPostId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatLink?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutPublicationNestedInput
  }

  export type PostPublicationUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    moderationStatus?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vkPostId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatLink?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostPublicationUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    vkGroupId?: BigIntFieldUpdateOperationsInput | bigint | number
    moderationStatus?: StringFieldUpdateOperationsInput | string
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vkPostId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    chatLink?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableIntFieldUpdateOperationsInput | number | null
    cityName?: NullableStringFieldUpdateOperationsInput | string | null
    regionName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadarPinUpdateWithoutOrganizationInput = {
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutRadarPinsNestedInput
    post?: PostUpdateOneWithoutRadarPinNestedInput
  }

  export type RadarPinUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RadarPinUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lng?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}