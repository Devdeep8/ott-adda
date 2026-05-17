
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model SubscriptionPlan
 * 
 */
export type SubscriptionPlan = $Result.DefaultSelection<Prisma.$SubscriptionPlanPayload>
/**
 * Model UserSubscription
 * 
 */
export type UserSubscription = $Result.DefaultSelection<Prisma.$UserSubscriptionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Series
 * 
 */
export type Series = $Result.DefaultSelection<Prisma.$SeriesPayload>
/**
 * Model Episode
 * 
 */
export type Episode = $Result.DefaultSelection<Prisma.$EpisodePayload>
/**
 * Model VideoAsset
 * 
 */
export type VideoAsset = $Result.DefaultSelection<Prisma.$VideoAssetPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model SeriesCategory
 * 
 */
export type SeriesCategory = $Result.DefaultSelection<Prisma.$SeriesCategoryPayload>
/**
 * Model WatchHistory
 * 
 */
export type WatchHistory = $Result.DefaultSelection<Prisma.$WatchHistoryPayload>
/**
 * Model WatchList
 * 
 */
export type WatchList = $Result.DefaultSelection<Prisma.$WatchListPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AdminRole: {
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED',
  PENDING: 'PENDING',
  PAUSED: 'PAUSED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const SubscriptionPlanType: {
  FREE: 'FREE',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
};

export type SubscriptionPlanType = (typeof SubscriptionPlanType)[keyof typeof SubscriptionPlanType]


export const ContentType: {
  SERIES: 'SERIES',
  MOVIE: 'MOVIE',
  DOCUMENTARY: 'DOCUMENTARY'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]


export const ContentStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ACTIVE: 'ACTIVE',
  UPCOMING: 'UPCOMING',
  ARCHIVED: 'ARCHIVED'
};

export type ContentStatus = (typeof ContentStatus)[keyof typeof ContentStatus]


export const CategoryType: {
  TOP_PICKS: 'TOP_PICKS',
  RECOMMENDED: 'RECOMMENDED',
  NEW_RELEASES: 'NEW_RELEASES',
  UPCOMING: 'UPCOMING',
  TRENDING: 'TRENDING',
  CUSTOM: 'CUSTOM'
};

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const SeriesStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  UPCOMING: 'UPCOMING',
  ARCHIVED: 'ARCHIVED'
};

export type SeriesStatus = (typeof SeriesStatus)[keyof typeof SeriesStatus]


export const EpisodeStatus: {
  PROCESSING: 'PROCESSING',
  READY: 'READY',
  FAILED: 'FAILED'
};

export type EpisodeStatus = (typeof EpisodeStatus)[keyof typeof EpisodeStatus]


export const VideoStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  READY: 'READY',
  FAILED: 'FAILED'
};

export type VideoStatus = (typeof VideoStatus)[keyof typeof VideoStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AdminRole = $Enums.AdminRole

export const AdminRole: typeof $Enums.AdminRole

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type SubscriptionPlanType = $Enums.SubscriptionPlanType

export const SubscriptionPlanType: typeof $Enums.SubscriptionPlanType

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

export type ContentStatus = $Enums.ContentStatus

export const ContentStatus: typeof $Enums.ContentStatus

export type CategoryType = $Enums.CategoryType

export const CategoryType: typeof $Enums.CategoryType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type SeriesStatus = $Enums.SeriesStatus

export const SeriesStatus: typeof $Enums.SeriesStatus

export type EpisodeStatus = $Enums.EpisodeStatus

export const EpisodeStatus: typeof $Enums.EpisodeStatus

export type VideoStatus = $Enums.VideoStatus

export const VideoStatus: typeof $Enums.VideoStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPlans
    * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
    * ```
    */
  get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSubscription`: Exposes CRUD operations for the **UserSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSubscriptions
    * const userSubscriptions = await prisma.userSubscription.findMany()
    * ```
    */
  get userSubscription(): Prisma.UserSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.series`: Exposes CRUD operations for the **Series** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Series
    * const series = await prisma.series.findMany()
    * ```
    */
  get series(): Prisma.SeriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoAsset`: Exposes CRUD operations for the **VideoAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoAssets
    * const videoAssets = await prisma.videoAsset.findMany()
    * ```
    */
  get videoAsset(): Prisma.VideoAssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seriesCategory`: Exposes CRUD operations for the **SeriesCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeriesCategories
    * const seriesCategories = await prisma.seriesCategory.findMany()
    * ```
    */
  get seriesCategory(): Prisma.SeriesCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchHistory`: Exposes CRUD operations for the **WatchHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchHistories
    * const watchHistories = await prisma.watchHistory.findMany()
    * ```
    */
  get watchHistory(): Prisma.WatchHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchList`: Exposes CRUD operations for the **WatchList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchLists
    * const watchLists = await prisma.watchList.findMany()
    * ```
    */
  get watchList(): Prisma.WatchListDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
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
    Admin: 'Admin',
    User: 'User',
    UserProfile: 'UserProfile',
    SubscriptionPlan: 'SubscriptionPlan',
    UserSubscription: 'UserSubscription',
    Payment: 'Payment',
    Series: 'Series',
    Episode: 'Episode',
    VideoAsset: 'VideoAsset',
    Category: 'Category',
    SeriesCategory: 'SeriesCategory',
    WatchHistory: 'WatchHistory',
    WatchList: 'WatchList'
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
      modelProps: "admin" | "user" | "userProfile" | "subscriptionPlan" | "userSubscription" | "payment" | "series" | "episode" | "videoAsset" | "category" | "seriesCategory" | "watchHistory" | "watchList"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
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
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPlan: {
        payload: Prisma.$SubscriptionPlanPayload<ExtArgs>
        fields: Prisma.SubscriptionPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          update: {
            args: Prisma.SubscriptionPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPlan>
          }
          groupBy: {
            args: Prisma.SubscriptionPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPlanCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanCountAggregateOutputType> | number
          }
        }
      }
      UserSubscription: {
        payload: Prisma.$UserSubscriptionPayload<ExtArgs>
        fields: Prisma.UserSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.UserSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findMany: {
            args: Prisma.UserSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          create: {
            args: Prisma.UserSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          createMany: {
            args: Prisma.UserSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.UserSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          update: {
            args: Prisma.UserSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.UserSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.UserSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.UserSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSubscription>
          }
          groupBy: {
            args: Prisma.UserSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Series: {
        payload: Prisma.$SeriesPayload<ExtArgs>
        fields: Prisma.SeriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findFirst: {
            args: Prisma.SeriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findMany: {
            args: Prisma.SeriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          create: {
            args: Prisma.SeriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          createMany: {
            args: Prisma.SeriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          delete: {
            args: Prisma.SeriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          update: {
            args: Prisma.SeriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          deleteMany: {
            args: Prisma.SeriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          upsert: {
            args: Prisma.SeriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          aggregate: {
            args: Prisma.SeriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeries>
          }
          groupBy: {
            args: Prisma.SeriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeriesCountArgs<ExtArgs>
            result: $Utils.Optional<SeriesCountAggregateOutputType> | number
          }
        }
      }
      Episode: {
        payload: Prisma.$EpisodePayload<ExtArgs>
        fields: Prisma.EpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findFirst: {
            args: Prisma.EpisodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          findMany: {
            args: Prisma.EpisodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          create: {
            args: Prisma.EpisodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          createMany: {
            args: Prisma.EpisodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpisodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          delete: {
            args: Prisma.EpisodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          update: {
            args: Prisma.EpisodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          deleteMany: {
            args: Prisma.EpisodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EpisodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>[]
          }
          upsert: {
            args: Prisma.EpisodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodePayload>
          }
          aggregate: {
            args: Prisma.EpisodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisode>
          }
          groupBy: {
            args: Prisma.EpisodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodeCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodeCountAggregateOutputType> | number
          }
        }
      }
      VideoAsset: {
        payload: Prisma.$VideoAssetPayload<ExtArgs>
        fields: Prisma.VideoAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAssetPayload>
          }
          findFirst: {
            args: Prisma.VideoAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAssetPayload>
          }
          findMany: {
            args: Prisma.VideoAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAssetPayload>[]
          }
          create: {
            args: Prisma.VideoAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAssetPayload>
          }
          createMany: {
            args: Prisma.VideoAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoAssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAssetPayload>[]
          }
          delete: {
            args: Prisma.VideoAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAssetPayload>
          }
          update: {
            args: Prisma.VideoAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAssetPayload>
          }
          deleteMany: {
            args: Prisma.VideoAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoAssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAssetPayload>[]
          }
          upsert: {
            args: Prisma.VideoAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoAssetPayload>
          }
          aggregate: {
            args: Prisma.VideoAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoAsset>
          }
          groupBy: {
            args: Prisma.VideoAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoAssetCountArgs<ExtArgs>
            result: $Utils.Optional<VideoAssetCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      SeriesCategory: {
        payload: Prisma.$SeriesCategoryPayload<ExtArgs>
        fields: Prisma.SeriesCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeriesCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeriesCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesCategoryPayload>
          }
          findFirst: {
            args: Prisma.SeriesCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeriesCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesCategoryPayload>
          }
          findMany: {
            args: Prisma.SeriesCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesCategoryPayload>[]
          }
          create: {
            args: Prisma.SeriesCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesCategoryPayload>
          }
          createMany: {
            args: Prisma.SeriesCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeriesCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesCategoryPayload>[]
          }
          delete: {
            args: Prisma.SeriesCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesCategoryPayload>
          }
          update: {
            args: Prisma.SeriesCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SeriesCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeriesCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeriesCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesCategoryPayload>[]
          }
          upsert: {
            args: Prisma.SeriesCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesCategoryPayload>
          }
          aggregate: {
            args: Prisma.SeriesCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeriesCategory>
          }
          groupBy: {
            args: Prisma.SeriesCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeriesCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeriesCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SeriesCategoryCountAggregateOutputType> | number
          }
        }
      }
      WatchHistory: {
        payload: Prisma.$WatchHistoryPayload<ExtArgs>
        fields: Prisma.WatchHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>
          }
          findFirst: {
            args: Prisma.WatchHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>
          }
          findMany: {
            args: Prisma.WatchHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>[]
          }
          create: {
            args: Prisma.WatchHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>
          }
          createMany: {
            args: Prisma.WatchHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>[]
          }
          delete: {
            args: Prisma.WatchHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>
          }
          update: {
            args: Prisma.WatchHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>
          }
          deleteMany: {
            args: Prisma.WatchHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>[]
          }
          upsert: {
            args: Prisma.WatchHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchHistoryPayload>
          }
          aggregate: {
            args: Prisma.WatchHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchHistory>
          }
          groupBy: {
            args: Prisma.WatchHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<WatchHistoryCountAggregateOutputType> | number
          }
        }
      }
      WatchList: {
        payload: Prisma.$WatchListPayload<ExtArgs>
        fields: Prisma.WatchListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          findFirst: {
            args: Prisma.WatchListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          findMany: {
            args: Prisma.WatchListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>[]
          }
          create: {
            args: Prisma.WatchListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          createMany: {
            args: Prisma.WatchListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>[]
          }
          delete: {
            args: Prisma.WatchListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          update: {
            args: Prisma.WatchListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          deleteMany: {
            args: Prisma.WatchListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>[]
          }
          upsert: {
            args: Prisma.WatchListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListPayload>
          }
          aggregate: {
            args: Prisma.WatchListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchList>
          }
          groupBy: {
            args: Prisma.WatchListGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchListGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchListCountArgs<ExtArgs>
            result: $Utils.Optional<WatchListCountAggregateOutputType> | number
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
    admin?: AdminOmit
    user?: UserOmit
    userProfile?: UserProfileOmit
    subscriptionPlan?: SubscriptionPlanOmit
    userSubscription?: UserSubscriptionOmit
    payment?: PaymentOmit
    series?: SeriesOmit
    episode?: EpisodeOmit
    videoAsset?: VideoAssetOmit
    category?: CategoryOmit
    seriesCategory?: SeriesCategoryOmit
    watchHistory?: WatchHistoryOmit
    watchList?: WatchListOmit
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
    payments: number
    watchHistory: number
    watchList: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    watchHistory?: boolean | UserCountOutputTypeCountWatchHistoryArgs
    watchList?: boolean | UserCountOutputTypeCountWatchListArgs
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
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchListWhereInput
  }


  /**
   * Count Type SubscriptionPlanCountOutputType
   */

  export type SubscriptionPlanCountOutputType = {
    payments: number
    subscriptions: number
  }

  export type SubscriptionPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | SubscriptionPlanCountOutputTypeCountPaymentsArgs
    subscriptions?: boolean | SubscriptionPlanCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanCountOutputType
     */
    select?: SubscriptionPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
  }


  /**
   * Count Type SeriesCountOutputType
   */

  export type SeriesCountOutputType = {
    categories: number
    episodes: number
    watchHistory: number
    watchList: number
  }

  export type SeriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | SeriesCountOutputTypeCountCategoriesArgs
    episodes?: boolean | SeriesCountOutputTypeCountEpisodesArgs
    watchHistory?: boolean | SeriesCountOutputTypeCountWatchHistoryArgs
    watchList?: boolean | SeriesCountOutputTypeCountWatchListArgs
  }

  // Custom InputTypes
  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCountOutputType
     */
    select?: SeriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesCategoryWhereInput
  }

  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
  }

  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeCountWatchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchHistoryWhereInput
  }

  /**
   * SeriesCountOutputType without action
   */
  export type SeriesCountOutputTypeCountWatchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchListWhereInput
  }


  /**
   * Count Type EpisodeCountOutputType
   */

  export type EpisodeCountOutputType = {
    watchHistory: number
  }

  export type EpisodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchHistory?: boolean | EpisodeCountOutputTypeCountWatchHistoryArgs
  }

  // Custom InputTypes
  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodeCountOutputType
     */
    select?: EpisodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeCountWatchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchHistoryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    series: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | CategoryCountOutputTypeCountSeriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSeriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesCategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.AdminRole | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.AdminRole | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    isActive: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    email: string
    password: string
    firstName: string
    lastName: string | null
    role: $Enums.AdminRole
    isActive: boolean
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "role" | "isActive" | "lastLoginAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      firstName: string
      lastName: string | null
      role: $Enums.AdminRole
      isActive: boolean
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly firstName: FieldRef<"Admin", 'String'>
    readonly lastName: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'AdminRole'>
    readonly isActive: FieldRef<"Admin", 'Boolean'>
    readonly lastLoginAt: FieldRef<"Admin", 'DateTime'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
    readonly deletedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    emailVerified: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    phone: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    emailVerified: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    phone: number
    role: number
    isActive: number
    emailVerified: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    phone?: true
    role?: true
    isActive?: true
    emailVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    phone?: true
    role?: true
    isActive?: true
    emailVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    phone?: true
    role?: true
    isActive?: true
    emailVerified?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string | null
    phone: string | null
    role: $Enums.UserRole
    isActive: boolean
    emailVerified: boolean
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    payments?: boolean | User$paymentsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    watchHistory?: boolean | User$watchHistoryArgs<ExtArgs>
    watchList?: boolean | User$watchListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "phone" | "role" | "isActive" | "emailVerified" | "lastLoginAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | User$paymentsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    watchHistory?: boolean | User$watchHistoryArgs<ExtArgs>
    watchList?: boolean | User$watchListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      subscription: Prisma.$UserSubscriptionPayload<ExtArgs> | null
      watchHistory: Prisma.$WatchHistoryPayload<ExtArgs>[]
      watchList: Prisma.$WatchListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string | null
      phone: string | null
      role: $Enums.UserRole
      isActive: boolean
      emailVerified: boolean
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
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
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    watchHistory<T extends User$watchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$watchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchList<T extends User$watchListArgs<ExtArgs> = {}>(args?: Subset<T, User$watchListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
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
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
  }

  /**
   * User.watchHistory
   */
  export type User$watchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    where?: WatchHistoryWhereInput
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    cursor?: WatchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchHistoryScalarFieldEnum | WatchHistoryScalarFieldEnum[]
  }

  /**
   * User.watchList
   */
  export type User$watchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    where?: WatchListWhereInput
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    cursor?: WatchListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
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
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    id: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    id: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: number | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    displayName: string | null
    avatarUrl: string | null
    dateOfBirth: Date | null
    gender: string | null
    language: string | null
    country: string | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    displayName: string | null
    avatarUrl: string | null
    dateOfBirth: Date | null
    gender: string | null
    language: string | null
    country: string | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    displayName: number
    avatarUrl: number
    dateOfBirth: number
    gender: number
    language: number
    country: number
    preferences: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    id?: true
  }

  export type UserProfileSumAggregateInputType = {
    id?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    displayName?: true
    avatarUrl?: true
    dateOfBirth?: true
    gender?: true
    language?: true
    country?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    displayName?: true
    avatarUrl?: true
    dateOfBirth?: true
    gender?: true
    language?: true
    country?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    displayName?: true
    avatarUrl?: true
    dateOfBirth?: true
    gender?: true
    language?: true
    country?: true
    preferences?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: number
    userId: string
    firstName: string | null
    lastName: string | null
    displayName: string | null
    avatarUrl: string | null
    dateOfBirth: Date | null
    gender: string | null
    language: string
    country: string | null
    preferences: JsonValue | null
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    language?: boolean
    country?: boolean
    preferences?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    language?: boolean
    country?: boolean
    preferences?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    language?: boolean
    country?: boolean
    preferences?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    language?: boolean
    country?: boolean
    preferences?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "displayName" | "avatarUrl" | "dateOfBirth" | "gender" | "language" | "country" | "preferences", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      firstName: string | null
      lastName: string | null
      displayName: string | null
      avatarUrl: string | null
      dateOfBirth: Date | null
      gender: string | null
      language: string
      country: string | null
      preferences: Prisma.JsonValue | null
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'Int'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly firstName: FieldRef<"UserProfile", 'String'>
    readonly lastName: FieldRef<"UserProfile", 'String'>
    readonly displayName: FieldRef<"UserProfile", 'String'>
    readonly avatarUrl: FieldRef<"UserProfile", 'String'>
    readonly dateOfBirth: FieldRef<"UserProfile", 'DateTime'>
    readonly gender: FieldRef<"UserProfile", 'String'>
    readonly language: FieldRef<"UserProfile", 'String'>
    readonly country: FieldRef<"UserProfile", 'String'>
    readonly preferences: FieldRef<"UserProfile", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionPlan
   */

  export type AggregateSubscriptionPlan = {
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  export type SubscriptionPlanAvgAggregateOutputType = {
    priceInPaise: number | null
    durationDays: number | null
  }

  export type SubscriptionPlanSumAggregateOutputType = {
    priceInPaise: number | null
    durationDays: number | null
  }

  export type SubscriptionPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    priceInPaise: number | null
    durationDays: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    priceInPaise: number | null
    durationDays: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionPlanCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    priceInPaise: number
    durationDays: number
    features: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionPlanAvgAggregateInputType = {
    priceInPaise?: true
    durationDays?: true
  }

  export type SubscriptionPlanSumAggregateInputType = {
    priceInPaise?: true
    durationDays?: true
  }

  export type SubscriptionPlanMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    priceInPaise?: true
    durationDays?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    priceInPaise?: true
    durationDays?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionPlanCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    priceInPaise?: true
    durationDays?: true
    features?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlan to aggregate.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPlans
    **/
    _count?: true | SubscriptionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type GetSubscriptionPlanAggregateType<T extends SubscriptionPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
  }




  export type SubscriptionPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanWhereInput
    orderBy?: SubscriptionPlanOrderByWithAggregationInput | SubscriptionPlanOrderByWithAggregationInput[]
    by: SubscriptionPlanScalarFieldEnum[] | SubscriptionPlanScalarFieldEnum
    having?: SubscriptionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPlanCountAggregateInputType | true
    _avg?: SubscriptionPlanAvgAggregateInputType
    _sum?: SubscriptionPlanSumAggregateInputType
    _min?: SubscriptionPlanMinAggregateInputType
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type SubscriptionPlanGroupByOutputType = {
    id: string
    name: string
    slug: string
    priceInPaise: number
    durationDays: number
    features: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  type GetSubscriptionPlanGroupByPayload<T extends SubscriptionPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    priceInPaise?: boolean
    durationDays?: boolean
    features?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payments?: boolean | SubscriptionPlan$paymentsArgs<ExtArgs>
    subscriptions?: boolean | SubscriptionPlan$subscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    priceInPaise?: boolean
    durationDays?: boolean
    features?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    priceInPaise?: boolean
    durationDays?: boolean
    features?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    priceInPaise?: boolean
    durationDays?: boolean
    features?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "priceInPaise" | "durationDays" | "features" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["subscriptionPlan"]>
  export type SubscriptionPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | SubscriptionPlan$paymentsArgs<ExtArgs>
    subscriptions?: boolean | SubscriptionPlan$subscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubscriptionPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubscriptionPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPlan"
    objects: {
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      subscriptions: Prisma.$UserSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      priceInPaise: number
      durationDays: number
      features: string[]
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscriptionPlan"]>
    composites: {}
  }

  type SubscriptionPlanGetPayload<S extends boolean | null | undefined | SubscriptionPlanDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPlanPayload, S>

  type SubscriptionPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionPlanCountAggregateInputType | true
    }

  export interface SubscriptionPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPlan'], meta: { name: 'SubscriptionPlan' } }
    /**
     * Find zero or one SubscriptionPlan that matches the filter.
     * @param {SubscriptionPlanFindUniqueArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPlanFindUniqueArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPlanFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPlanFindFirstArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
     * 
     * // Get first 10 SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPlanFindManyArgs>(args?: SelectSubset<T, SubscriptionPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionPlan.
     * @param {SubscriptionPlanCreateArgs} args - Arguments to create a SubscriptionPlan.
     * @example
     * // Create one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.create({
     *   data: {
     *     // ... data to create a SubscriptionPlan
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPlanCreateArgs>(args: SelectSubset<T, SubscriptionPlanCreateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionPlans.
     * @param {SubscriptionPlanCreateManyArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPlanCreateManyArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionPlans and returns the data saved in the database.
     * @param {SubscriptionPlanCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionPlan.
     * @param {SubscriptionPlanDeleteArgs} args - Arguments to delete one SubscriptionPlan.
     * @example
     * // Delete one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlan
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPlanDeleteArgs>(args: SelectSubset<T, SubscriptionPlanDeleteArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionPlan.
     * @param {SubscriptionPlanUpdateArgs} args - Arguments to update one SubscriptionPlan.
     * @example
     * // Update one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPlanUpdateArgs>(args: SelectSubset<T, SubscriptionPlanUpdateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionPlans.
     * @param {SubscriptionPlanDeleteManyArgs} args - Arguments to filter SubscriptionPlans to delete.
     * @example
     * // Delete a few SubscriptionPlans
     * const { count } = await prisma.subscriptionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPlanDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPlanUpdateManyArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans and returns the data updated in the database.
     * @param {SubscriptionPlanUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionPlans.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionPlan.
     * @param {SubscriptionPlanUpsertArgs} args - Arguments to update or create a SubscriptionPlan.
     * @example
     * // Update or create a SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlan we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPlanUpsertArgs>(args: SelectSubset<T, SubscriptionPlanUpsertArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanCountArgs} args - Arguments to filter SubscriptionPlans to count.
     * @example
     * // Count the number of SubscriptionPlans
     * const count = await prisma.subscriptionPlan.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlans we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPlanCountArgs>(
      args?: Subset<T, SubscriptionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionPlanAggregateArgs>(args: Subset<T, SubscriptionPlanAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPlanAggregateType<T>>

    /**
     * Group by SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPlan model
   */
  readonly fields: SubscriptionPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends SubscriptionPlan$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends SubscriptionPlan$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubscriptionPlan model
   */
  interface SubscriptionPlanFieldRefs {
    readonly id: FieldRef<"SubscriptionPlan", 'String'>
    readonly name: FieldRef<"SubscriptionPlan", 'String'>
    readonly slug: FieldRef<"SubscriptionPlan", 'String'>
    readonly priceInPaise: FieldRef<"SubscriptionPlan", 'Int'>
    readonly durationDays: FieldRef<"SubscriptionPlan", 'Int'>
    readonly features: FieldRef<"SubscriptionPlan", 'String[]'>
    readonly isActive: FieldRef<"SubscriptionPlan", 'Boolean'>
    readonly createdAt: FieldRef<"SubscriptionPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"SubscriptionPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPlan findUnique
   */
  export type SubscriptionPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findUniqueOrThrow
   */
  export type SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findFirst
   */
  export type SubscriptionPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findFirstOrThrow
   */
  export type SubscriptionPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findMany
   */
  export type SubscriptionPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlans to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan create
   */
  export type SubscriptionPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
  }

  /**
   * SubscriptionPlan createMany
   */
  export type SubscriptionPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan createManyAndReturn
   */
  export type SubscriptionPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan update
   */
  export type SubscriptionPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPlan to update.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan updateMany
   */
  export type SubscriptionPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan updateManyAndReturn
   */
  export type SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan upsert
   */
  export type SubscriptionPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPlan to update in case it exists.
     */
    where: SubscriptionPlanWhereUniqueInput
    /**
     * In case the SubscriptionPlan found by the `where` argument doesn't exist, create a new SubscriptionPlan with this data.
     */
    create: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
    /**
     * In case the SubscriptionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
  }

  /**
   * SubscriptionPlan delete
   */
  export type SubscriptionPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPlan to delete.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan deleteMany
   */
  export type SubscriptionPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlans to delete
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan.payments
   */
  export type SubscriptionPlan$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan.subscriptions
   */
  export type SubscriptionPlan$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    cursor?: UserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan without action
   */
  export type SubscriptionPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
  }


  /**
   * Model UserSubscription
   */

  export type AggregateUserSubscription = {
    _count: UserSubscriptionCountAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  export type UserSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    status: $Enums.SubscriptionStatus | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    status: $Enums.SubscriptionStatus | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    planId: number
    status: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscription to aggregate.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSubscriptions
    **/
    _count?: true | UserSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type GetUserSubscriptionAggregateType<T extends UserSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSubscription[P]>
      : GetScalarType<T[P], AggregateUserSubscription[P]>
  }




  export type UserSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithAggregationInput | UserSubscriptionOrderByWithAggregationInput[]
    by: UserSubscriptionScalarFieldEnum[] | UserSubscriptionScalarFieldEnum
    having?: UserSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSubscriptionCountAggregateInputType | true
    _min?: UserSubscriptionMinAggregateInputType
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type UserSubscriptionGroupByOutputType = {
    id: string
    userId: string
    planId: string
    status: $Enums.SubscriptionStatus
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: UserSubscriptionCountAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  type GetUserSubscriptionGroupByPayload<T extends UserSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type UserSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    planId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planId" | "status" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["userSubscription"]>
  export type UserSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSubscription"
    objects: {
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planId: string
      status: $Enums.SubscriptionStatus
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSubscription"]>
    composites: {}
  }

  type UserSubscriptionGetPayload<S extends boolean | null | undefined | UserSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$UserSubscriptionPayload, S>

  type UserSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSubscriptionCountAggregateInputType | true
    }

  export interface UserSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSubscription'], meta: { name: 'UserSubscription' } }
    /**
     * Find zero or one UserSubscription that matches the filter.
     * @param {UserSubscriptionFindUniqueArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSubscriptionFindUniqueArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSubscriptionFindFirstArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany()
     * 
     * // Get first 10 UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSubscriptionFindManyArgs>(args?: SelectSubset<T, UserSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSubscription.
     * @param {UserSubscriptionCreateArgs} args - Arguments to create a UserSubscription.
     * @example
     * // Create one UserSubscription
     * const UserSubscription = await prisma.userSubscription.create({
     *   data: {
     *     // ... data to create a UserSubscription
     *   }
     * })
     * 
     */
    create<T extends UserSubscriptionCreateArgs>(args: SelectSubset<T, UserSubscriptionCreateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSubscriptions.
     * @param {UserSubscriptionCreateManyArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSubscriptionCreateManyArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSubscriptions and returns the data saved in the database.
     * @param {UserSubscriptionCreateManyAndReturnArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSubscription.
     * @param {UserSubscriptionDeleteArgs} args - Arguments to delete one UserSubscription.
     * @example
     * // Delete one UserSubscription
     * const UserSubscription = await prisma.userSubscription.delete({
     *   where: {
     *     // ... filter to delete one UserSubscription
     *   }
     * })
     * 
     */
    delete<T extends UserSubscriptionDeleteArgs>(args: SelectSubset<T, UserSubscriptionDeleteArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSubscription.
     * @param {UserSubscriptionUpdateArgs} args - Arguments to update one UserSubscription.
     * @example
     * // Update one UserSubscription
     * const userSubscription = await prisma.userSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSubscriptionUpdateArgs>(args: SelectSubset<T, UserSubscriptionUpdateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSubscriptions.
     * @param {UserSubscriptionDeleteManyArgs} args - Arguments to filter UserSubscriptions to delete.
     * @example
     * // Delete a few UserSubscriptions
     * const { count } = await prisma.userSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSubscriptionDeleteManyArgs>(args?: SelectSubset<T, UserSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSubscriptionUpdateManyArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions and returns the data updated in the database.
     * @param {UserSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many UserSubscriptions.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSubscription.
     * @param {UserSubscriptionUpsertArgs} args - Arguments to update or create a UserSubscription.
     * @example
     * // Update or create a UserSubscription
     * const userSubscription = await prisma.userSubscription.upsert({
     *   create: {
     *     // ... data to create a UserSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSubscription we want to update
     *   }
     * })
     */
    upsert<T extends UserSubscriptionUpsertArgs>(args: SelectSubset<T, UserSubscriptionUpsertArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionCountArgs} args - Arguments to filter UserSubscriptions to count.
     * @example
     * // Count the number of UserSubscriptions
     * const count = await prisma.userSubscription.count({
     *   where: {
     *     // ... the filter for the UserSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends UserSubscriptionCountArgs>(
      args?: Subset<T, UserSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSubscriptionAggregateArgs>(args: Subset<T, UserSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetUserSubscriptionAggregateType<T>>

    /**
     * Group by UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends UserSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: UserSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSubscription model
   */
  readonly fields: UserSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSubscription model
   */
  interface UserSubscriptionFieldRefs {
    readonly id: FieldRef<"UserSubscription", 'String'>
    readonly userId: FieldRef<"UserSubscription", 'String'>
    readonly planId: FieldRef<"UserSubscription", 'String'>
    readonly status: FieldRef<"UserSubscription", 'SubscriptionStatus'>
    readonly startDate: FieldRef<"UserSubscription", 'DateTime'>
    readonly endDate: FieldRef<"UserSubscription", 'DateTime'>
    readonly createdAt: FieldRef<"UserSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSubscription findUnique
   */
  export type UserSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findUniqueOrThrow
   */
  export type UserSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findFirst
   */
  export type UserSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findFirstOrThrow
   */
  export type UserSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findMany
   */
  export type UserSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscriptions to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription create
   */
  export type UserSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSubscription.
     */
    data: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
  }

  /**
   * UserSubscription createMany
   */
  export type UserSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSubscription createManyAndReturn
   */
  export type UserSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription update
   */
  export type UserSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSubscription.
     */
    data: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which UserSubscription to update.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription updateMany
   */
  export type UserSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
  }

  /**
   * UserSubscription updateManyAndReturn
   */
  export type UserSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription upsert
   */
  export type UserSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSubscription to update in case it exists.
     */
    where: UserSubscriptionWhereUniqueInput
    /**
     * In case the UserSubscription found by the `where` argument doesn't exist, create a new UserSubscription with this data.
     */
    create: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
    /**
     * In case the UserSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
  }

  /**
   * UserSubscription delete
   */
  export type UserSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which UserSubscription to delete.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription deleteMany
   */
  export type UserSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscriptions to delete
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * UserSubscription without action
   */
  export type UserSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amountInPaise: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amountInPaise: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    amountInPaise: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    amountInPaise: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    planId: number
    amountInPaise: number
    currency: number
    status: number
    razorpayOrderId: number
    razorpayPaymentId: number
    razorpaySignature: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amountInPaise?: true
  }

  export type PaymentSumAggregateInputType = {
    amountInPaise?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    amountInPaise?: true
    currency?: true
    status?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    amountInPaise?: true
    currency?: true
    status?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    amountInPaise?: true
    currency?: true
    status?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    planId: string
    amountInPaise: number
    currency: string
    status: $Enums.PaymentStatus
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    amountInPaise?: boolean
    currency?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    amountInPaise?: boolean
    currency?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    amountInPaise?: boolean
    currency?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    planId?: boolean
    amountInPaise?: boolean
    currency?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planId" | "amountInPaise" | "currency" | "status" | "razorpayOrderId" | "razorpayPaymentId" | "razorpaySignature" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planId: string
      amountInPaise: number
      currency: string
      status: $Enums.PaymentStatus
      razorpayOrderId: string | null
      razorpayPaymentId: string | null
      razorpaySignature: string | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly planId: FieldRef<"Payment", 'String'>
    readonly amountInPaise: FieldRef<"Payment", 'Int'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly razorpayOrderId: FieldRef<"Payment", 'String'>
    readonly razorpayPaymentId: FieldRef<"Payment", 'String'>
    readonly razorpaySignature: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Series
   */

  export type AggregateSeries = {
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  export type SeriesAvgAggregateOutputType = {
    totalEpisodes: number | null
    viewCount: number | null
  }

  export type SeriesSumAggregateOutputType = {
    totalEpisodes: number | null
    viewCount: number | null
  }

  export type SeriesMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    thumbnailUrl: string | null
    bannerUrl: string | null
    status: $Enums.SeriesStatus | null
    releaseDate: Date | null
    totalEpisodes: number | null
    viewCount: number | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeriesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    thumbnailUrl: string | null
    bannerUrl: string | null
    status: $Enums.SeriesStatus | null
    releaseDate: Date | null
    totalEpisodes: number | null
    viewCount: number | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeriesCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    genres: number
    thumbnailUrl: number
    bannerUrl: number
    status: number
    releaseDate: number
    totalEpisodes: number
    viewCount: number
    isFeatured: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeriesAvgAggregateInputType = {
    totalEpisodes?: true
    viewCount?: true
  }

  export type SeriesSumAggregateInputType = {
    totalEpisodes?: true
    viewCount?: true
  }

  export type SeriesMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    thumbnailUrl?: true
    bannerUrl?: true
    status?: true
    releaseDate?: true
    totalEpisodes?: true
    viewCount?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeriesMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    thumbnailUrl?: true
    bannerUrl?: true
    status?: true
    releaseDate?: true
    totalEpisodes?: true
    viewCount?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeriesCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    genres?: true
    thumbnailUrl?: true
    bannerUrl?: true
    status?: true
    releaseDate?: true
    totalEpisodes?: true
    viewCount?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to aggregate.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Series
    **/
    _count?: true | SeriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeriesMaxAggregateInputType
  }

  export type GetSeriesAggregateType<T extends SeriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSeries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeries[P]>
      : GetScalarType<T[P], AggregateSeries[P]>
  }




  export type SeriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesWhereInput
    orderBy?: SeriesOrderByWithAggregationInput | SeriesOrderByWithAggregationInput[]
    by: SeriesScalarFieldEnum[] | SeriesScalarFieldEnum
    having?: SeriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeriesCountAggregateInputType | true
    _avg?: SeriesAvgAggregateInputType
    _sum?: SeriesSumAggregateInputType
    _min?: SeriesMinAggregateInputType
    _max?: SeriesMaxAggregateInputType
  }

  export type SeriesGroupByOutputType = {
    id: string
    title: string
    slug: string
    description: string | null
    genres: string[]
    thumbnailUrl: string | null
    bannerUrl: string | null
    status: $Enums.SeriesStatus
    releaseDate: Date | null
    totalEpisodes: number
    viewCount: number
    isFeatured: boolean
    createdAt: Date
    updatedAt: Date
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  type GetSeriesGroupByPayload<T extends SeriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeriesGroupByOutputType[P]>
            : GetScalarType<T[P], SeriesGroupByOutputType[P]>
        }
      >
    >


  export type SeriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    genres?: boolean
    thumbnailUrl?: boolean
    bannerUrl?: boolean
    status?: boolean
    releaseDate?: boolean
    totalEpisodes?: boolean
    viewCount?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | Series$categoriesArgs<ExtArgs>
    episodes?: boolean | Series$episodesArgs<ExtArgs>
    watchHistory?: boolean | Series$watchHistoryArgs<ExtArgs>
    watchList?: boolean | Series$watchListArgs<ExtArgs>
    _count?: boolean | SeriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["series"]>

  export type SeriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    genres?: boolean
    thumbnailUrl?: boolean
    bannerUrl?: boolean
    status?: boolean
    releaseDate?: boolean
    totalEpisodes?: boolean
    viewCount?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["series"]>

  export type SeriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    genres?: boolean
    thumbnailUrl?: boolean
    bannerUrl?: boolean
    status?: boolean
    releaseDate?: boolean
    totalEpisodes?: boolean
    viewCount?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["series"]>

  export type SeriesSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    genres?: boolean
    thumbnailUrl?: boolean
    bannerUrl?: boolean
    status?: boolean
    releaseDate?: boolean
    totalEpisodes?: boolean
    viewCount?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description" | "genres" | "thumbnailUrl" | "bannerUrl" | "status" | "releaseDate" | "totalEpisodes" | "viewCount" | "isFeatured" | "createdAt" | "updatedAt", ExtArgs["result"]["series"]>
  export type SeriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Series$categoriesArgs<ExtArgs>
    episodes?: boolean | Series$episodesArgs<ExtArgs>
    watchHistory?: boolean | Series$watchHistoryArgs<ExtArgs>
    watchList?: boolean | Series$watchListArgs<ExtArgs>
    _count?: boolean | SeriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SeriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SeriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Series"
    objects: {
      categories: Prisma.$SeriesCategoryPayload<ExtArgs>[]
      episodes: Prisma.$EpisodePayload<ExtArgs>[]
      watchHistory: Prisma.$WatchHistoryPayload<ExtArgs>[]
      watchList: Prisma.$WatchListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      description: string | null
      genres: string[]
      thumbnailUrl: string | null
      bannerUrl: string | null
      status: $Enums.SeriesStatus
      releaseDate: Date | null
      totalEpisodes: number
      viewCount: number
      isFeatured: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["series"]>
    composites: {}
  }

  type SeriesGetPayload<S extends boolean | null | undefined | SeriesDefaultArgs> = $Result.GetResult<Prisma.$SeriesPayload, S>

  type SeriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeriesCountAggregateInputType | true
    }

  export interface SeriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Series'], meta: { name: 'Series' } }
    /**
     * Find zero or one Series that matches the filter.
     * @param {SeriesFindUniqueArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeriesFindUniqueArgs>(args: SelectSubset<T, SeriesFindUniqueArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Series that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeriesFindUniqueOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeriesFindUniqueOrThrowArgs>(args: SelectSubset<T, SeriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeriesFindFirstArgs>(args?: SelectSubset<T, SeriesFindFirstArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Series that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeriesFindFirstOrThrowArgs>(args?: SelectSubset<T, SeriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Series
     * const series = await prisma.series.findMany()
     * 
     * // Get first 10 Series
     * const series = await prisma.series.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seriesWithIdOnly = await prisma.series.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeriesFindManyArgs>(args?: SelectSubset<T, SeriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Series.
     * @param {SeriesCreateArgs} args - Arguments to create a Series.
     * @example
     * // Create one Series
     * const Series = await prisma.series.create({
     *   data: {
     *     // ... data to create a Series
     *   }
     * })
     * 
     */
    create<T extends SeriesCreateArgs>(args: SelectSubset<T, SeriesCreateArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Series.
     * @param {SeriesCreateManyArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const series = await prisma.series.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeriesCreateManyArgs>(args?: SelectSubset<T, SeriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Series and returns the data saved in the database.
     * @param {SeriesCreateManyAndReturnArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const series = await prisma.series.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Series and only return the `id`
     * const seriesWithIdOnly = await prisma.series.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeriesCreateManyAndReturnArgs>(args?: SelectSubset<T, SeriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Series.
     * @param {SeriesDeleteArgs} args - Arguments to delete one Series.
     * @example
     * // Delete one Series
     * const Series = await prisma.series.delete({
     *   where: {
     *     // ... filter to delete one Series
     *   }
     * })
     * 
     */
    delete<T extends SeriesDeleteArgs>(args: SelectSubset<T, SeriesDeleteArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Series.
     * @param {SeriesUpdateArgs} args - Arguments to update one Series.
     * @example
     * // Update one Series
     * const series = await prisma.series.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeriesUpdateArgs>(args: SelectSubset<T, SeriesUpdateArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Series.
     * @param {SeriesDeleteManyArgs} args - Arguments to filter Series to delete.
     * @example
     * // Delete a few Series
     * const { count } = await prisma.series.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeriesDeleteManyArgs>(args?: SelectSubset<T, SeriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Series
     * const series = await prisma.series.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeriesUpdateManyArgs>(args: SelectSubset<T, SeriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series and returns the data updated in the database.
     * @param {SeriesUpdateManyAndReturnArgs} args - Arguments to update many Series.
     * @example
     * // Update many Series
     * const series = await prisma.series.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Series and only return the `id`
     * const seriesWithIdOnly = await prisma.series.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeriesUpdateManyAndReturnArgs>(args: SelectSubset<T, SeriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Series.
     * @param {SeriesUpsertArgs} args - Arguments to update or create a Series.
     * @example
     * // Update or create a Series
     * const series = await prisma.series.upsert({
     *   create: {
     *     // ... data to create a Series
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Series we want to update
     *   }
     * })
     */
    upsert<T extends SeriesUpsertArgs>(args: SelectSubset<T, SeriesUpsertArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCountArgs} args - Arguments to filter Series to count.
     * @example
     * // Count the number of Series
     * const count = await prisma.series.count({
     *   where: {
     *     // ... the filter for the Series we want to count
     *   }
     * })
    **/
    count<T extends SeriesCountArgs>(
      args?: Subset<T, SeriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeriesAggregateArgs>(args: Subset<T, SeriesAggregateArgs>): Prisma.PrismaPromise<GetSeriesAggregateType<T>>

    /**
     * Group by Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGroupByArgs} args - Group by arguments.
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
      T extends SeriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeriesGroupByArgs['orderBy'] }
        : { orderBy?: SeriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Series model
   */
  readonly fields: SeriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Series.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Series$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Series$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    episodes<T extends Series$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Series$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchHistory<T extends Series$watchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Series$watchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchList<T extends Series$watchListArgs<ExtArgs> = {}>(args?: Subset<T, Series$watchListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Series model
   */
  interface SeriesFieldRefs {
    readonly id: FieldRef<"Series", 'String'>
    readonly title: FieldRef<"Series", 'String'>
    readonly slug: FieldRef<"Series", 'String'>
    readonly description: FieldRef<"Series", 'String'>
    readonly genres: FieldRef<"Series", 'String[]'>
    readonly thumbnailUrl: FieldRef<"Series", 'String'>
    readonly bannerUrl: FieldRef<"Series", 'String'>
    readonly status: FieldRef<"Series", 'SeriesStatus'>
    readonly releaseDate: FieldRef<"Series", 'DateTime'>
    readonly totalEpisodes: FieldRef<"Series", 'Int'>
    readonly viewCount: FieldRef<"Series", 'Int'>
    readonly isFeatured: FieldRef<"Series", 'Boolean'>
    readonly createdAt: FieldRef<"Series", 'DateTime'>
    readonly updatedAt: FieldRef<"Series", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Series findUnique
   */
  export type SeriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series findUniqueOrThrow
   */
  export type SeriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series findFirst
   */
  export type SeriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series findFirstOrThrow
   */
  export type SeriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series findMany
   */
  export type SeriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series create
   */
  export type SeriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Series.
     */
    data: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
  }

  /**
   * Series createMany
   */
  export type SeriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Series.
     */
    data: SeriesCreateManyInput | SeriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Series createManyAndReturn
   */
  export type SeriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * The data used to create many Series.
     */
    data: SeriesCreateManyInput | SeriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Series update
   */
  export type SeriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Series.
     */
    data: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
    /**
     * Choose, which Series to update.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series updateMany
   */
  export type SeriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Series.
     */
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SeriesWhereInput
    /**
     * Limit how many Series to update.
     */
    limit?: number
  }

  /**
   * Series updateManyAndReturn
   */
  export type SeriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * The data used to update Series.
     */
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SeriesWhereInput
    /**
     * Limit how many Series to update.
     */
    limit?: number
  }

  /**
   * Series upsert
   */
  export type SeriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Series to update in case it exists.
     */
    where: SeriesWhereUniqueInput
    /**
     * In case the Series found by the `where` argument doesn't exist, create a new Series with this data.
     */
    create: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
    /**
     * In case the Series was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
  }

  /**
   * Series delete
   */
  export type SeriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter which Series to delete.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series deleteMany
   */
  export type SeriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to delete
     */
    where?: SeriesWhereInput
    /**
     * Limit how many Series to delete.
     */
    limit?: number
  }

  /**
   * Series.categories
   */
  export type Series$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryInclude<ExtArgs> | null
    where?: SeriesCategoryWhereInput
    orderBy?: SeriesCategoryOrderByWithRelationInput | SeriesCategoryOrderByWithRelationInput[]
    cursor?: SeriesCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeriesCategoryScalarFieldEnum | SeriesCategoryScalarFieldEnum[]
  }

  /**
   * Series.episodes
   */
  export type Series$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    cursor?: EpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Series.watchHistory
   */
  export type Series$watchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    where?: WatchHistoryWhereInput
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    cursor?: WatchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchHistoryScalarFieldEnum | WatchHistoryScalarFieldEnum[]
  }

  /**
   * Series.watchList
   */
  export type Series$watchListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    where?: WatchListWhereInput
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    cursor?: WatchListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
  }

  /**
   * Series without action
   */
  export type SeriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Series
     */
    omit?: SeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
  }


  /**
   * Model Episode
   */

  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    episodeNumber: number | null
    durationSeconds: number | null
    viewCount: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    episodeNumber: number | null
    durationSeconds: number | null
    viewCount: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    id: string | null
    seriesId: string | null
    title: string | null
    episodeNumber: number | null
    description: string | null
    thumbnailUrl: string | null
    durationSeconds: number | null
    isFree: boolean | null
    viewCount: number | null
    status: $Enums.EpisodeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeMaxAggregateOutputType = {
    id: string | null
    seriesId: string | null
    title: string | null
    episodeNumber: number | null
    description: string | null
    thumbnailUrl: string | null
    durationSeconds: number | null
    isFree: boolean | null
    viewCount: number | null
    status: $Enums.EpisodeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeCountAggregateOutputType = {
    id: number
    seriesId: number
    title: number
    episodeNumber: number
    description: number
    thumbnailUrl: number
    durationSeconds: number
    isFree: number
    viewCount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    episodeNumber?: true
    durationSeconds?: true
    viewCount?: true
  }

  export type EpisodeSumAggregateInputType = {
    episodeNumber?: true
    durationSeconds?: true
    viewCount?: true
  }

  export type EpisodeMinAggregateInputType = {
    id?: true
    seriesId?: true
    title?: true
    episodeNumber?: true
    description?: true
    thumbnailUrl?: true
    durationSeconds?: true
    isFree?: true
    viewCount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeMaxAggregateInputType = {
    id?: true
    seriesId?: true
    title?: true
    episodeNumber?: true
    description?: true
    thumbnailUrl?: true
    durationSeconds?: true
    isFree?: true
    viewCount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeCountAggregateInputType = {
    id?: true
    seriesId?: true
    title?: true
    episodeNumber?: true
    description?: true
    thumbnailUrl?: true
    durationSeconds?: true
    isFree?: true
    viewCount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episode to aggregate.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodeWhereInput
    orderBy?: EpisodeOrderByWithAggregationInput | EpisodeOrderByWithAggregationInput[]
    by: EpisodeScalarFieldEnum[] | EpisodeScalarFieldEnum
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }

  export type EpisodeGroupByOutputType = {
    id: string
    seriesId: string
    title: string
    episodeNumber: number
    description: string | null
    thumbnailUrl: string | null
    durationSeconds: number
    isFree: boolean
    viewCount: number
    status: $Enums.EpisodeStatus
    createdAt: Date
    updatedAt: Date
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seriesId?: boolean
    title?: boolean
    episodeNumber?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    durationSeconds?: boolean
    isFree?: boolean
    viewCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    videoAsset?: boolean | Episode$videoAssetArgs<ExtArgs>
    watchHistory?: boolean | Episode$watchHistoryArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seriesId?: boolean
    title?: boolean
    episodeNumber?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    durationSeconds?: boolean
    isFree?: boolean
    viewCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    series?: boolean | SeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seriesId?: boolean
    title?: boolean
    episodeNumber?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    durationSeconds?: boolean
    isFree?: boolean
    viewCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    series?: boolean | SeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episode"]>

  export type EpisodeSelectScalar = {
    id?: boolean
    seriesId?: boolean
    title?: boolean
    episodeNumber?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    durationSeconds?: boolean
    isFree?: boolean
    viewCount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EpisodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seriesId" | "title" | "episodeNumber" | "description" | "thumbnailUrl" | "durationSeconds" | "isFree" | "viewCount" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["episode"]>
  export type EpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    videoAsset?: boolean | Episode$videoAssetArgs<ExtArgs>
    watchHistory?: boolean | Episode$watchHistoryArgs<ExtArgs>
    _count?: boolean | EpisodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | SeriesDefaultArgs<ExtArgs>
  }
  export type EpisodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | SeriesDefaultArgs<ExtArgs>
  }

  export type $EpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episode"
    objects: {
      series: Prisma.$SeriesPayload<ExtArgs>
      videoAsset: Prisma.$VideoAssetPayload<ExtArgs> | null
      watchHistory: Prisma.$WatchHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seriesId: string
      title: string
      episodeNumber: number
      description: string | null
      thumbnailUrl: string | null
      durationSeconds: number
      isFree: boolean
      viewCount: number
      status: $Enums.EpisodeStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["episode"]>
    composites: {}
  }

  type EpisodeGetPayload<S extends boolean | null | undefined | EpisodeDefaultArgs> = $Result.GetResult<Prisma.$EpisodePayload, S>

  type EpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpisodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodeCountAggregateInputType | true
    }

  export interface EpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episode'], meta: { name: 'Episode' } }
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpisodeFindUniqueArgs>(args: SelectSubset<T, EpisodeFindUniqueArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Episode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs>(args: SelectSubset<T, EpisodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpisodeFindFirstArgs>(args?: SelectSubset<T, EpisodeFindFirstArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Episode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs>(args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodeWithIdOnly = await prisma.episode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpisodeFindManyArgs>(args?: SelectSubset<T, EpisodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
     */
    create<T extends EpisodeCreateArgs>(args: SelectSubset<T, EpisodeCreateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Episodes.
     * @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpisodeCreateManyArgs>(args?: SelectSubset<T, EpisodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Episodes and returns the data saved in the database.
     * @param {EpisodeCreateManyAndReturnArgs} args - Arguments to create many Episodes.
     * @example
     * // Create many Episodes
     * const episode = await prisma.episode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpisodeCreateManyAndReturnArgs>(args?: SelectSubset<T, EpisodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
     */
    delete<T extends EpisodeDeleteArgs>(args: SelectSubset<T, EpisodeDeleteArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpisodeUpdateArgs>(args: SelectSubset<T, EpisodeUpdateArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpisodeDeleteManyArgs>(args?: SelectSubset<T, EpisodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpisodeUpdateManyArgs>(args: SelectSubset<T, EpisodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes and returns the data updated in the database.
     * @param {EpisodeUpdateManyAndReturnArgs} args - Arguments to update many Episodes.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Episodes and only return the `id`
     * const episodeWithIdOnly = await prisma.episode.updateManyAndReturn({
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
    updateManyAndReturn<T extends EpisodeUpdateManyAndReturnArgs>(args: SelectSubset<T, EpisodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
     */
    upsert<T extends EpisodeUpsertArgs>(args: SelectSubset<T, EpisodeUpsertArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): Prisma.PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
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
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episode model
   */
  readonly fields: EpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    series<T extends SeriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeriesDefaultArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    videoAsset<T extends Episode$videoAssetArgs<ExtArgs> = {}>(args?: Subset<T, Episode$videoAssetArgs<ExtArgs>>): Prisma__VideoAssetClient<$Result.GetResult<Prisma.$VideoAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    watchHistory<T extends Episode$watchHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Episode$watchHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Episode model
   */
  interface EpisodeFieldRefs {
    readonly id: FieldRef<"Episode", 'String'>
    readonly seriesId: FieldRef<"Episode", 'String'>
    readonly title: FieldRef<"Episode", 'String'>
    readonly episodeNumber: FieldRef<"Episode", 'Int'>
    readonly description: FieldRef<"Episode", 'String'>
    readonly thumbnailUrl: FieldRef<"Episode", 'String'>
    readonly durationSeconds: FieldRef<"Episode", 'Int'>
    readonly isFree: FieldRef<"Episode", 'Boolean'>
    readonly viewCount: FieldRef<"Episode", 'Int'>
    readonly status: FieldRef<"Episode", 'EpisodeStatus'>
    readonly createdAt: FieldRef<"Episode", 'DateTime'>
    readonly updatedAt: FieldRef<"Episode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Episode findUnique
   */
  export type EpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode findFirst
   */
  export type EpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episode to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodeOrderByWithRelationInput | EpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodeScalarFieldEnum | EpisodeScalarFieldEnum[]
  }

  /**
   * Episode create
   */
  export type EpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Episode.
     */
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }

  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Episode createManyAndReturn
   */
  export type EpisodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to create many Episodes.
     */
    data: EpisodeCreateManyInput | EpisodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode update
   */
  export type EpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Episode.
     */
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
  }

  /**
   * Episode updateManyAndReturn
   */
  export type EpisodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Episode to update in case it exists.
     */
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     */
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }

  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
    /**
     * Filter which Episode to delete.
     */
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodeWhereInput
    /**
     * Limit how many Episodes to delete.
     */
    limit?: number
  }

  /**
   * Episode.videoAsset
   */
  export type Episode$videoAssetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAsset
     */
    select?: VideoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAsset
     */
    omit?: VideoAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAssetInclude<ExtArgs> | null
    where?: VideoAssetWhereInput
  }

  /**
   * Episode.watchHistory
   */
  export type Episode$watchHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    where?: WatchHistoryWhereInput
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    cursor?: WatchHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchHistoryScalarFieldEnum | WatchHistoryScalarFieldEnum[]
  }

  /**
   * Episode without action
   */
  export type EpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episode
     */
    select?: EpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Episode
     */
    omit?: EpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodeInclude<ExtArgs> | null
  }


  /**
   * Model VideoAsset
   */

  export type AggregateVideoAsset = {
    _count: VideoAssetCountAggregateOutputType | null
    _avg: VideoAssetAvgAggregateOutputType | null
    _sum: VideoAssetSumAggregateOutputType | null
    _min: VideoAssetMinAggregateOutputType | null
    _max: VideoAssetMaxAggregateOutputType | null
  }

  export type VideoAssetAvgAggregateOutputType = {
    durationSeconds: number | null
    fileSizeBytes: number | null
  }

  export type VideoAssetSumAggregateOutputType = {
    durationSeconds: number | null
    fileSizeBytes: bigint | null
  }

  export type VideoAssetMinAggregateOutputType = {
    id: string | null
    episodeId: string | null
    originalPath: string | null
    hlsDirectory: string | null
    hlsManifestPath: string | null
    durationSeconds: number | null
    fileSizeBytes: bigint | null
    resolution: string | null
    status: $Enums.VideoStatus | null
    processingError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoAssetMaxAggregateOutputType = {
    id: string | null
    episodeId: string | null
    originalPath: string | null
    hlsDirectory: string | null
    hlsManifestPath: string | null
    durationSeconds: number | null
    fileSizeBytes: bigint | null
    resolution: string | null
    status: $Enums.VideoStatus | null
    processingError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoAssetCountAggregateOutputType = {
    id: number
    episodeId: number
    originalPath: number
    hlsDirectory: number
    hlsManifestPath: number
    durationSeconds: number
    fileSizeBytes: number
    resolution: number
    status: number
    processingError: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoAssetAvgAggregateInputType = {
    durationSeconds?: true
    fileSizeBytes?: true
  }

  export type VideoAssetSumAggregateInputType = {
    durationSeconds?: true
    fileSizeBytes?: true
  }

  export type VideoAssetMinAggregateInputType = {
    id?: true
    episodeId?: true
    originalPath?: true
    hlsDirectory?: true
    hlsManifestPath?: true
    durationSeconds?: true
    fileSizeBytes?: true
    resolution?: true
    status?: true
    processingError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoAssetMaxAggregateInputType = {
    id?: true
    episodeId?: true
    originalPath?: true
    hlsDirectory?: true
    hlsManifestPath?: true
    durationSeconds?: true
    fileSizeBytes?: true
    resolution?: true
    status?: true
    processingError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoAssetCountAggregateInputType = {
    id?: true
    episodeId?: true
    originalPath?: true
    hlsDirectory?: true
    hlsManifestPath?: true
    durationSeconds?: true
    fileSizeBytes?: true
    resolution?: true
    status?: true
    processingError?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoAsset to aggregate.
     */
    where?: VideoAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoAssets to fetch.
     */
    orderBy?: VideoAssetOrderByWithRelationInput | VideoAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoAssets
    **/
    _count?: true | VideoAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoAssetMaxAggregateInputType
  }

  export type GetVideoAssetAggregateType<T extends VideoAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoAsset[P]>
      : GetScalarType<T[P], AggregateVideoAsset[P]>
  }




  export type VideoAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoAssetWhereInput
    orderBy?: VideoAssetOrderByWithAggregationInput | VideoAssetOrderByWithAggregationInput[]
    by: VideoAssetScalarFieldEnum[] | VideoAssetScalarFieldEnum
    having?: VideoAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoAssetCountAggregateInputType | true
    _avg?: VideoAssetAvgAggregateInputType
    _sum?: VideoAssetSumAggregateInputType
    _min?: VideoAssetMinAggregateInputType
    _max?: VideoAssetMaxAggregateInputType
  }

  export type VideoAssetGroupByOutputType = {
    id: string
    episodeId: string
    originalPath: string | null
    hlsDirectory: string | null
    hlsManifestPath: string | null
    durationSeconds: number
    fileSizeBytes: bigint
    resolution: string | null
    status: $Enums.VideoStatus
    processingError: string | null
    createdAt: Date
    updatedAt: Date
    _count: VideoAssetCountAggregateOutputType | null
    _avg: VideoAssetAvgAggregateOutputType | null
    _sum: VideoAssetSumAggregateOutputType | null
    _min: VideoAssetMinAggregateOutputType | null
    _max: VideoAssetMaxAggregateOutputType | null
  }

  type GetVideoAssetGroupByPayload<T extends VideoAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoAssetGroupByOutputType[P]>
            : GetScalarType<T[P], VideoAssetGroupByOutputType[P]>
        }
      >
    >


  export type VideoAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    episodeId?: boolean
    originalPath?: boolean
    hlsDirectory?: boolean
    hlsManifestPath?: boolean
    durationSeconds?: boolean
    fileSizeBytes?: boolean
    resolution?: boolean
    status?: boolean
    processingError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoAsset"]>

  export type VideoAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    episodeId?: boolean
    originalPath?: boolean
    hlsDirectory?: boolean
    hlsManifestPath?: boolean
    durationSeconds?: boolean
    fileSizeBytes?: boolean
    resolution?: boolean
    status?: boolean
    processingError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoAsset"]>

  export type VideoAssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    episodeId?: boolean
    originalPath?: boolean
    hlsDirectory?: boolean
    hlsManifestPath?: boolean
    durationSeconds?: boolean
    fileSizeBytes?: boolean
    resolution?: boolean
    status?: boolean
    processingError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoAsset"]>

  export type VideoAssetSelectScalar = {
    id?: boolean
    episodeId?: boolean
    originalPath?: boolean
    hlsDirectory?: boolean
    hlsManifestPath?: boolean
    durationSeconds?: boolean
    fileSizeBytes?: boolean
    resolution?: boolean
    status?: boolean
    processingError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoAssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "episodeId" | "originalPath" | "hlsDirectory" | "hlsManifestPath" | "durationSeconds" | "fileSizeBytes" | "resolution" | "status" | "processingError" | "createdAt" | "updatedAt", ExtArgs["result"]["videoAsset"]>
  export type VideoAssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }
  export type VideoAssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }
  export type VideoAssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
  }

  export type $VideoAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoAsset"
    objects: {
      episode: Prisma.$EpisodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      episodeId: string
      originalPath: string | null
      hlsDirectory: string | null
      hlsManifestPath: string | null
      durationSeconds: number
      fileSizeBytes: bigint
      resolution: string | null
      status: $Enums.VideoStatus
      processingError: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["videoAsset"]>
    composites: {}
  }

  type VideoAssetGetPayload<S extends boolean | null | undefined | VideoAssetDefaultArgs> = $Result.GetResult<Prisma.$VideoAssetPayload, S>

  type VideoAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoAssetCountAggregateInputType | true
    }

  export interface VideoAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoAsset'], meta: { name: 'VideoAsset' } }
    /**
     * Find zero or one VideoAsset that matches the filter.
     * @param {VideoAssetFindUniqueArgs} args - Arguments to find a VideoAsset
     * @example
     * // Get one VideoAsset
     * const videoAsset = await prisma.videoAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoAssetFindUniqueArgs>(args: SelectSubset<T, VideoAssetFindUniqueArgs<ExtArgs>>): Prisma__VideoAssetClient<$Result.GetResult<Prisma.$VideoAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoAsset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoAssetFindUniqueOrThrowArgs} args - Arguments to find a VideoAsset
     * @example
     * // Get one VideoAsset
     * const videoAsset = await prisma.videoAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoAssetClient<$Result.GetResult<Prisma.$VideoAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAssetFindFirstArgs} args - Arguments to find a VideoAsset
     * @example
     * // Get one VideoAsset
     * const videoAsset = await prisma.videoAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoAssetFindFirstArgs>(args?: SelectSubset<T, VideoAssetFindFirstArgs<ExtArgs>>): Prisma__VideoAssetClient<$Result.GetResult<Prisma.$VideoAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAssetFindFirstOrThrowArgs} args - Arguments to find a VideoAsset
     * @example
     * // Get one VideoAsset
     * const videoAsset = await prisma.videoAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoAssetClient<$Result.GetResult<Prisma.$VideoAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoAssets
     * const videoAssets = await prisma.videoAsset.findMany()
     * 
     * // Get first 10 VideoAssets
     * const videoAssets = await prisma.videoAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoAssetWithIdOnly = await prisma.videoAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoAssetFindManyArgs>(args?: SelectSubset<T, VideoAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoAsset.
     * @param {VideoAssetCreateArgs} args - Arguments to create a VideoAsset.
     * @example
     * // Create one VideoAsset
     * const VideoAsset = await prisma.videoAsset.create({
     *   data: {
     *     // ... data to create a VideoAsset
     *   }
     * })
     * 
     */
    create<T extends VideoAssetCreateArgs>(args: SelectSubset<T, VideoAssetCreateArgs<ExtArgs>>): Prisma__VideoAssetClient<$Result.GetResult<Prisma.$VideoAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoAssets.
     * @param {VideoAssetCreateManyArgs} args - Arguments to create many VideoAssets.
     * @example
     * // Create many VideoAssets
     * const videoAsset = await prisma.videoAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoAssetCreateManyArgs>(args?: SelectSubset<T, VideoAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoAssets and returns the data saved in the database.
     * @param {VideoAssetCreateManyAndReturnArgs} args - Arguments to create many VideoAssets.
     * @example
     * // Create many VideoAssets
     * const videoAsset = await prisma.videoAsset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoAssets and only return the `id`
     * const videoAssetWithIdOnly = await prisma.videoAsset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoAssetCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoAsset.
     * @param {VideoAssetDeleteArgs} args - Arguments to delete one VideoAsset.
     * @example
     * // Delete one VideoAsset
     * const VideoAsset = await prisma.videoAsset.delete({
     *   where: {
     *     // ... filter to delete one VideoAsset
     *   }
     * })
     * 
     */
    delete<T extends VideoAssetDeleteArgs>(args: SelectSubset<T, VideoAssetDeleteArgs<ExtArgs>>): Prisma__VideoAssetClient<$Result.GetResult<Prisma.$VideoAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoAsset.
     * @param {VideoAssetUpdateArgs} args - Arguments to update one VideoAsset.
     * @example
     * // Update one VideoAsset
     * const videoAsset = await prisma.videoAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoAssetUpdateArgs>(args: SelectSubset<T, VideoAssetUpdateArgs<ExtArgs>>): Prisma__VideoAssetClient<$Result.GetResult<Prisma.$VideoAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoAssets.
     * @param {VideoAssetDeleteManyArgs} args - Arguments to filter VideoAssets to delete.
     * @example
     * // Delete a few VideoAssets
     * const { count } = await prisma.videoAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoAssetDeleteManyArgs>(args?: SelectSubset<T, VideoAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoAssets
     * const videoAsset = await prisma.videoAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoAssetUpdateManyArgs>(args: SelectSubset<T, VideoAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoAssets and returns the data updated in the database.
     * @param {VideoAssetUpdateManyAndReturnArgs} args - Arguments to update many VideoAssets.
     * @example
     * // Update many VideoAssets
     * const videoAsset = await prisma.videoAsset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoAssets and only return the `id`
     * const videoAssetWithIdOnly = await prisma.videoAsset.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoAssetUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoAsset.
     * @param {VideoAssetUpsertArgs} args - Arguments to update or create a VideoAsset.
     * @example
     * // Update or create a VideoAsset
     * const videoAsset = await prisma.videoAsset.upsert({
     *   create: {
     *     // ... data to create a VideoAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoAsset we want to update
     *   }
     * })
     */
    upsert<T extends VideoAssetUpsertArgs>(args: SelectSubset<T, VideoAssetUpsertArgs<ExtArgs>>): Prisma__VideoAssetClient<$Result.GetResult<Prisma.$VideoAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAssetCountArgs} args - Arguments to filter VideoAssets to count.
     * @example
     * // Count the number of VideoAssets
     * const count = await prisma.videoAsset.count({
     *   where: {
     *     // ... the filter for the VideoAssets we want to count
     *   }
     * })
    **/
    count<T extends VideoAssetCountArgs>(
      args?: Subset<T, VideoAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAssetAggregateArgs>(args: Subset<T, VideoAssetAggregateArgs>): Prisma.PrismaPromise<GetVideoAssetAggregateType<T>>

    /**
     * Group by VideoAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAssetGroupByArgs} args - Group by arguments.
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
      T extends VideoAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoAssetGroupByArgs['orderBy'] }
        : { orderBy?: VideoAssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoAsset model
   */
  readonly fields: VideoAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episode<T extends EpisodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EpisodeDefaultArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VideoAsset model
   */
  interface VideoAssetFieldRefs {
    readonly id: FieldRef<"VideoAsset", 'String'>
    readonly episodeId: FieldRef<"VideoAsset", 'String'>
    readonly originalPath: FieldRef<"VideoAsset", 'String'>
    readonly hlsDirectory: FieldRef<"VideoAsset", 'String'>
    readonly hlsManifestPath: FieldRef<"VideoAsset", 'String'>
    readonly durationSeconds: FieldRef<"VideoAsset", 'Int'>
    readonly fileSizeBytes: FieldRef<"VideoAsset", 'BigInt'>
    readonly resolution: FieldRef<"VideoAsset", 'String'>
    readonly status: FieldRef<"VideoAsset", 'VideoStatus'>
    readonly processingError: FieldRef<"VideoAsset", 'String'>
    readonly createdAt: FieldRef<"VideoAsset", 'DateTime'>
    readonly updatedAt: FieldRef<"VideoAsset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VideoAsset findUnique
   */
  export type VideoAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAsset
     */
    select?: VideoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAsset
     */
    omit?: VideoAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAssetInclude<ExtArgs> | null
    /**
     * Filter, which VideoAsset to fetch.
     */
    where: VideoAssetWhereUniqueInput
  }

  /**
   * VideoAsset findUniqueOrThrow
   */
  export type VideoAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAsset
     */
    select?: VideoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAsset
     */
    omit?: VideoAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAssetInclude<ExtArgs> | null
    /**
     * Filter, which VideoAsset to fetch.
     */
    where: VideoAssetWhereUniqueInput
  }

  /**
   * VideoAsset findFirst
   */
  export type VideoAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAsset
     */
    select?: VideoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAsset
     */
    omit?: VideoAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAssetInclude<ExtArgs> | null
    /**
     * Filter, which VideoAsset to fetch.
     */
    where?: VideoAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoAssets to fetch.
     */
    orderBy?: VideoAssetOrderByWithRelationInput | VideoAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoAssets.
     */
    cursor?: VideoAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoAssets.
     */
    distinct?: VideoAssetScalarFieldEnum | VideoAssetScalarFieldEnum[]
  }

  /**
   * VideoAsset findFirstOrThrow
   */
  export type VideoAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAsset
     */
    select?: VideoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAsset
     */
    omit?: VideoAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAssetInclude<ExtArgs> | null
    /**
     * Filter, which VideoAsset to fetch.
     */
    where?: VideoAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoAssets to fetch.
     */
    orderBy?: VideoAssetOrderByWithRelationInput | VideoAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoAssets.
     */
    cursor?: VideoAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoAssets.
     */
    distinct?: VideoAssetScalarFieldEnum | VideoAssetScalarFieldEnum[]
  }

  /**
   * VideoAsset findMany
   */
  export type VideoAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAsset
     */
    select?: VideoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAsset
     */
    omit?: VideoAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAssetInclude<ExtArgs> | null
    /**
     * Filter, which VideoAssets to fetch.
     */
    where?: VideoAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoAssets to fetch.
     */
    orderBy?: VideoAssetOrderByWithRelationInput | VideoAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoAssets.
     */
    cursor?: VideoAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoAssets.
     */
    distinct?: VideoAssetScalarFieldEnum | VideoAssetScalarFieldEnum[]
  }

  /**
   * VideoAsset create
   */
  export type VideoAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAsset
     */
    select?: VideoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAsset
     */
    omit?: VideoAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAssetInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoAsset.
     */
    data: XOR<VideoAssetCreateInput, VideoAssetUncheckedCreateInput>
  }

  /**
   * VideoAsset createMany
   */
  export type VideoAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoAssets.
     */
    data: VideoAssetCreateManyInput | VideoAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoAsset createManyAndReturn
   */
  export type VideoAssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAsset
     */
    select?: VideoAssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAsset
     */
    omit?: VideoAssetOmit<ExtArgs> | null
    /**
     * The data used to create many VideoAssets.
     */
    data: VideoAssetCreateManyInput | VideoAssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoAsset update
   */
  export type VideoAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAsset
     */
    select?: VideoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAsset
     */
    omit?: VideoAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAssetInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoAsset.
     */
    data: XOR<VideoAssetUpdateInput, VideoAssetUncheckedUpdateInput>
    /**
     * Choose, which VideoAsset to update.
     */
    where: VideoAssetWhereUniqueInput
  }

  /**
   * VideoAsset updateMany
   */
  export type VideoAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoAssets.
     */
    data: XOR<VideoAssetUpdateManyMutationInput, VideoAssetUncheckedUpdateManyInput>
    /**
     * Filter which VideoAssets to update
     */
    where?: VideoAssetWhereInput
    /**
     * Limit how many VideoAssets to update.
     */
    limit?: number
  }

  /**
   * VideoAsset updateManyAndReturn
   */
  export type VideoAssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAsset
     */
    select?: VideoAssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAsset
     */
    omit?: VideoAssetOmit<ExtArgs> | null
    /**
     * The data used to update VideoAssets.
     */
    data: XOR<VideoAssetUpdateManyMutationInput, VideoAssetUncheckedUpdateManyInput>
    /**
     * Filter which VideoAssets to update
     */
    where?: VideoAssetWhereInput
    /**
     * Limit how many VideoAssets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoAsset upsert
   */
  export type VideoAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAsset
     */
    select?: VideoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAsset
     */
    omit?: VideoAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAssetInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoAsset to update in case it exists.
     */
    where: VideoAssetWhereUniqueInput
    /**
     * In case the VideoAsset found by the `where` argument doesn't exist, create a new VideoAsset with this data.
     */
    create: XOR<VideoAssetCreateInput, VideoAssetUncheckedCreateInput>
    /**
     * In case the VideoAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoAssetUpdateInput, VideoAssetUncheckedUpdateInput>
  }

  /**
   * VideoAsset delete
   */
  export type VideoAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAsset
     */
    select?: VideoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAsset
     */
    omit?: VideoAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAssetInclude<ExtArgs> | null
    /**
     * Filter which VideoAsset to delete.
     */
    where: VideoAssetWhereUniqueInput
  }

  /**
   * VideoAsset deleteMany
   */
  export type VideoAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoAssets to delete
     */
    where?: VideoAssetWhereInput
    /**
     * Limit how many VideoAssets to delete.
     */
    limit?: number
  }

  /**
   * VideoAsset without action
   */
  export type VideoAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoAsset
     */
    select?: VideoAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoAsset
     */
    omit?: VideoAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoAssetInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type CategorySumAggregateOutputType = {
    displayOrder: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    displayOrder: number | null
    isAutomatic: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    displayOrder: number | null
    isAutomatic: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    displayOrder: number
    isAutomatic: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    displayOrder?: true
  }

  export type CategorySumAggregateInputType = {
    displayOrder?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    displayOrder?: true
    isAutomatic?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    displayOrder?: true
    isAutomatic?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    displayOrder?: true
    isAutomatic?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    displayOrder: number
    isAutomatic: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    displayOrder?: boolean
    isAutomatic?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    series?: boolean | Category$seriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    displayOrder?: boolean
    isAutomatic?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    displayOrder?: boolean
    isAutomatic?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    displayOrder?: boolean
    isAutomatic?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "displayOrder" | "isAutomatic" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | Category$seriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      series: Prisma.$SeriesCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      displayOrder: number
      isAutomatic: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    series<T extends Category$seriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$seriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly displayOrder: FieldRef<"Category", 'Int'>
    readonly isAutomatic: FieldRef<"Category", 'Boolean'>
    readonly isActive: FieldRef<"Category", 'Boolean'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.series
   */
  export type Category$seriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryInclude<ExtArgs> | null
    where?: SeriesCategoryWhereInput
    orderBy?: SeriesCategoryOrderByWithRelationInput | SeriesCategoryOrderByWithRelationInput[]
    cursor?: SeriesCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeriesCategoryScalarFieldEnum | SeriesCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model SeriesCategory
   */

  export type AggregateSeriesCategory = {
    _count: SeriesCategoryCountAggregateOutputType | null
    _avg: SeriesCategoryAvgAggregateOutputType | null
    _sum: SeriesCategorySumAggregateOutputType | null
    _min: SeriesCategoryMinAggregateOutputType | null
    _max: SeriesCategoryMaxAggregateOutputType | null
  }

  export type SeriesCategoryAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type SeriesCategorySumAggregateOutputType = {
    displayOrder: number | null
  }

  export type SeriesCategoryMinAggregateOutputType = {
    id: string | null
    seriesId: string | null
    categoryId: string | null
    displayOrder: number | null
    createdAt: Date | null
  }

  export type SeriesCategoryMaxAggregateOutputType = {
    id: string | null
    seriesId: string | null
    categoryId: string | null
    displayOrder: number | null
    createdAt: Date | null
  }

  export type SeriesCategoryCountAggregateOutputType = {
    id: number
    seriesId: number
    categoryId: number
    displayOrder: number
    createdAt: number
    _all: number
  }


  export type SeriesCategoryAvgAggregateInputType = {
    displayOrder?: true
  }

  export type SeriesCategorySumAggregateInputType = {
    displayOrder?: true
  }

  export type SeriesCategoryMinAggregateInputType = {
    id?: true
    seriesId?: true
    categoryId?: true
    displayOrder?: true
    createdAt?: true
  }

  export type SeriesCategoryMaxAggregateInputType = {
    id?: true
    seriesId?: true
    categoryId?: true
    displayOrder?: true
    createdAt?: true
  }

  export type SeriesCategoryCountAggregateInputType = {
    id?: true
    seriesId?: true
    categoryId?: true
    displayOrder?: true
    createdAt?: true
    _all?: true
  }

  export type SeriesCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeriesCategory to aggregate.
     */
    where?: SeriesCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesCategories to fetch.
     */
    orderBy?: SeriesCategoryOrderByWithRelationInput | SeriesCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeriesCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeriesCategories
    **/
    _count?: true | SeriesCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeriesCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeriesCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeriesCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeriesCategoryMaxAggregateInputType
  }

  export type GetSeriesCategoryAggregateType<T extends SeriesCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSeriesCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeriesCategory[P]>
      : GetScalarType<T[P], AggregateSeriesCategory[P]>
  }




  export type SeriesCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesCategoryWhereInput
    orderBy?: SeriesCategoryOrderByWithAggregationInput | SeriesCategoryOrderByWithAggregationInput[]
    by: SeriesCategoryScalarFieldEnum[] | SeriesCategoryScalarFieldEnum
    having?: SeriesCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeriesCategoryCountAggregateInputType | true
    _avg?: SeriesCategoryAvgAggregateInputType
    _sum?: SeriesCategorySumAggregateInputType
    _min?: SeriesCategoryMinAggregateInputType
    _max?: SeriesCategoryMaxAggregateInputType
  }

  export type SeriesCategoryGroupByOutputType = {
    id: string
    seriesId: string
    categoryId: string
    displayOrder: number
    createdAt: Date
    _count: SeriesCategoryCountAggregateOutputType | null
    _avg: SeriesCategoryAvgAggregateOutputType | null
    _sum: SeriesCategorySumAggregateOutputType | null
    _min: SeriesCategoryMinAggregateOutputType | null
    _max: SeriesCategoryMaxAggregateOutputType | null
  }

  type GetSeriesCategoryGroupByPayload<T extends SeriesCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeriesCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeriesCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeriesCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SeriesCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SeriesCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seriesId?: boolean
    categoryId?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seriesCategory"]>

  export type SeriesCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seriesId?: boolean
    categoryId?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seriesCategory"]>

  export type SeriesCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seriesId?: boolean
    categoryId?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seriesCategory"]>

  export type SeriesCategorySelectScalar = {
    id?: boolean
    seriesId?: boolean
    categoryId?: boolean
    displayOrder?: boolean
    createdAt?: boolean
  }

  export type SeriesCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seriesId" | "categoryId" | "displayOrder" | "createdAt", ExtArgs["result"]["seriesCategory"]>
  export type SeriesCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
  }
  export type SeriesCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
  }
  export type SeriesCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
  }

  export type $SeriesCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeriesCategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      series: Prisma.$SeriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seriesId: string
      categoryId: string
      displayOrder: number
      createdAt: Date
    }, ExtArgs["result"]["seriesCategory"]>
    composites: {}
  }

  type SeriesCategoryGetPayload<S extends boolean | null | undefined | SeriesCategoryDefaultArgs> = $Result.GetResult<Prisma.$SeriesCategoryPayload, S>

  type SeriesCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeriesCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeriesCategoryCountAggregateInputType | true
    }

  export interface SeriesCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeriesCategory'], meta: { name: 'SeriesCategory' } }
    /**
     * Find zero or one SeriesCategory that matches the filter.
     * @param {SeriesCategoryFindUniqueArgs} args - Arguments to find a SeriesCategory
     * @example
     * // Get one SeriesCategory
     * const seriesCategory = await prisma.seriesCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeriesCategoryFindUniqueArgs>(args: SelectSubset<T, SeriesCategoryFindUniqueArgs<ExtArgs>>): Prisma__SeriesCategoryClient<$Result.GetResult<Prisma.$SeriesCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeriesCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeriesCategoryFindUniqueOrThrowArgs} args - Arguments to find a SeriesCategory
     * @example
     * // Get one SeriesCategory
     * const seriesCategory = await prisma.seriesCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeriesCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SeriesCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeriesCategoryClient<$Result.GetResult<Prisma.$SeriesCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeriesCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCategoryFindFirstArgs} args - Arguments to find a SeriesCategory
     * @example
     * // Get one SeriesCategory
     * const seriesCategory = await prisma.seriesCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeriesCategoryFindFirstArgs>(args?: SelectSubset<T, SeriesCategoryFindFirstArgs<ExtArgs>>): Prisma__SeriesCategoryClient<$Result.GetResult<Prisma.$SeriesCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeriesCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCategoryFindFirstOrThrowArgs} args - Arguments to find a SeriesCategory
     * @example
     * // Get one SeriesCategory
     * const seriesCategory = await prisma.seriesCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeriesCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SeriesCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeriesCategoryClient<$Result.GetResult<Prisma.$SeriesCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeriesCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeriesCategories
     * const seriesCategories = await prisma.seriesCategory.findMany()
     * 
     * // Get first 10 SeriesCategories
     * const seriesCategories = await prisma.seriesCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seriesCategoryWithIdOnly = await prisma.seriesCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeriesCategoryFindManyArgs>(args?: SelectSubset<T, SeriesCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeriesCategory.
     * @param {SeriesCategoryCreateArgs} args - Arguments to create a SeriesCategory.
     * @example
     * // Create one SeriesCategory
     * const SeriesCategory = await prisma.seriesCategory.create({
     *   data: {
     *     // ... data to create a SeriesCategory
     *   }
     * })
     * 
     */
    create<T extends SeriesCategoryCreateArgs>(args: SelectSubset<T, SeriesCategoryCreateArgs<ExtArgs>>): Prisma__SeriesCategoryClient<$Result.GetResult<Prisma.$SeriesCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeriesCategories.
     * @param {SeriesCategoryCreateManyArgs} args - Arguments to create many SeriesCategories.
     * @example
     * // Create many SeriesCategories
     * const seriesCategory = await prisma.seriesCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeriesCategoryCreateManyArgs>(args?: SelectSubset<T, SeriesCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeriesCategories and returns the data saved in the database.
     * @param {SeriesCategoryCreateManyAndReturnArgs} args - Arguments to create many SeriesCategories.
     * @example
     * // Create many SeriesCategories
     * const seriesCategory = await prisma.seriesCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeriesCategories and only return the `id`
     * const seriesCategoryWithIdOnly = await prisma.seriesCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeriesCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SeriesCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeriesCategory.
     * @param {SeriesCategoryDeleteArgs} args - Arguments to delete one SeriesCategory.
     * @example
     * // Delete one SeriesCategory
     * const SeriesCategory = await prisma.seriesCategory.delete({
     *   where: {
     *     // ... filter to delete one SeriesCategory
     *   }
     * })
     * 
     */
    delete<T extends SeriesCategoryDeleteArgs>(args: SelectSubset<T, SeriesCategoryDeleteArgs<ExtArgs>>): Prisma__SeriesCategoryClient<$Result.GetResult<Prisma.$SeriesCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeriesCategory.
     * @param {SeriesCategoryUpdateArgs} args - Arguments to update one SeriesCategory.
     * @example
     * // Update one SeriesCategory
     * const seriesCategory = await prisma.seriesCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeriesCategoryUpdateArgs>(args: SelectSubset<T, SeriesCategoryUpdateArgs<ExtArgs>>): Prisma__SeriesCategoryClient<$Result.GetResult<Prisma.$SeriesCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeriesCategories.
     * @param {SeriesCategoryDeleteManyArgs} args - Arguments to filter SeriesCategories to delete.
     * @example
     * // Delete a few SeriesCategories
     * const { count } = await prisma.seriesCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeriesCategoryDeleteManyArgs>(args?: SelectSubset<T, SeriesCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeriesCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeriesCategories
     * const seriesCategory = await prisma.seriesCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeriesCategoryUpdateManyArgs>(args: SelectSubset<T, SeriesCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeriesCategories and returns the data updated in the database.
     * @param {SeriesCategoryUpdateManyAndReturnArgs} args - Arguments to update many SeriesCategories.
     * @example
     * // Update many SeriesCategories
     * const seriesCategory = await prisma.seriesCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeriesCategories and only return the `id`
     * const seriesCategoryWithIdOnly = await prisma.seriesCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeriesCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SeriesCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeriesCategory.
     * @param {SeriesCategoryUpsertArgs} args - Arguments to update or create a SeriesCategory.
     * @example
     * // Update or create a SeriesCategory
     * const seriesCategory = await prisma.seriesCategory.upsert({
     *   create: {
     *     // ... data to create a SeriesCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeriesCategory we want to update
     *   }
     * })
     */
    upsert<T extends SeriesCategoryUpsertArgs>(args: SelectSubset<T, SeriesCategoryUpsertArgs<ExtArgs>>): Prisma__SeriesCategoryClient<$Result.GetResult<Prisma.$SeriesCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeriesCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCategoryCountArgs} args - Arguments to filter SeriesCategories to count.
     * @example
     * // Count the number of SeriesCategories
     * const count = await prisma.seriesCategory.count({
     *   where: {
     *     // ... the filter for the SeriesCategories we want to count
     *   }
     * })
    **/
    count<T extends SeriesCategoryCountArgs>(
      args?: Subset<T, SeriesCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeriesCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeriesCategoryAggregateArgs>(args: Subset<T, SeriesCategoryAggregateArgs>): Prisma.PrismaPromise<GetSeriesCategoryAggregateType<T>>

    /**
     * Group by SeriesCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCategoryGroupByArgs} args - Group by arguments.
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
      T extends SeriesCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeriesCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SeriesCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeriesCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeriesCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeriesCategory model
   */
  readonly fields: SeriesCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeriesCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeriesCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    series<T extends SeriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeriesDefaultArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SeriesCategory model
   */
  interface SeriesCategoryFieldRefs {
    readonly id: FieldRef<"SeriesCategory", 'String'>
    readonly seriesId: FieldRef<"SeriesCategory", 'String'>
    readonly categoryId: FieldRef<"SeriesCategory", 'String'>
    readonly displayOrder: FieldRef<"SeriesCategory", 'Int'>
    readonly createdAt: FieldRef<"SeriesCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeriesCategory findUnique
   */
  export type SeriesCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SeriesCategory to fetch.
     */
    where: SeriesCategoryWhereUniqueInput
  }

  /**
   * SeriesCategory findUniqueOrThrow
   */
  export type SeriesCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SeriesCategory to fetch.
     */
    where: SeriesCategoryWhereUniqueInput
  }

  /**
   * SeriesCategory findFirst
   */
  export type SeriesCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SeriesCategory to fetch.
     */
    where?: SeriesCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesCategories to fetch.
     */
    orderBy?: SeriesCategoryOrderByWithRelationInput | SeriesCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeriesCategories.
     */
    cursor?: SeriesCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeriesCategories.
     */
    distinct?: SeriesCategoryScalarFieldEnum | SeriesCategoryScalarFieldEnum[]
  }

  /**
   * SeriesCategory findFirstOrThrow
   */
  export type SeriesCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SeriesCategory to fetch.
     */
    where?: SeriesCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesCategories to fetch.
     */
    orderBy?: SeriesCategoryOrderByWithRelationInput | SeriesCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeriesCategories.
     */
    cursor?: SeriesCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeriesCategories.
     */
    distinct?: SeriesCategoryScalarFieldEnum | SeriesCategoryScalarFieldEnum[]
  }

  /**
   * SeriesCategory findMany
   */
  export type SeriesCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SeriesCategories to fetch.
     */
    where?: SeriesCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesCategories to fetch.
     */
    orderBy?: SeriesCategoryOrderByWithRelationInput | SeriesCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeriesCategories.
     */
    cursor?: SeriesCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeriesCategories.
     */
    distinct?: SeriesCategoryScalarFieldEnum | SeriesCategoryScalarFieldEnum[]
  }

  /**
   * SeriesCategory create
   */
  export type SeriesCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SeriesCategory.
     */
    data: XOR<SeriesCategoryCreateInput, SeriesCategoryUncheckedCreateInput>
  }

  /**
   * SeriesCategory createMany
   */
  export type SeriesCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeriesCategories.
     */
    data: SeriesCategoryCreateManyInput | SeriesCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeriesCategory createManyAndReturn
   */
  export type SeriesCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many SeriesCategories.
     */
    data: SeriesCategoryCreateManyInput | SeriesCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeriesCategory update
   */
  export type SeriesCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SeriesCategory.
     */
    data: XOR<SeriesCategoryUpdateInput, SeriesCategoryUncheckedUpdateInput>
    /**
     * Choose, which SeriesCategory to update.
     */
    where: SeriesCategoryWhereUniqueInput
  }

  /**
   * SeriesCategory updateMany
   */
  export type SeriesCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeriesCategories.
     */
    data: XOR<SeriesCategoryUpdateManyMutationInput, SeriesCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SeriesCategories to update
     */
    where?: SeriesCategoryWhereInput
    /**
     * Limit how many SeriesCategories to update.
     */
    limit?: number
  }

  /**
   * SeriesCategory updateManyAndReturn
   */
  export type SeriesCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * The data used to update SeriesCategories.
     */
    data: XOR<SeriesCategoryUpdateManyMutationInput, SeriesCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SeriesCategories to update
     */
    where?: SeriesCategoryWhereInput
    /**
     * Limit how many SeriesCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeriesCategory upsert
   */
  export type SeriesCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SeriesCategory to update in case it exists.
     */
    where: SeriesCategoryWhereUniqueInput
    /**
     * In case the SeriesCategory found by the `where` argument doesn't exist, create a new SeriesCategory with this data.
     */
    create: XOR<SeriesCategoryCreateInput, SeriesCategoryUncheckedCreateInput>
    /**
     * In case the SeriesCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeriesCategoryUpdateInput, SeriesCategoryUncheckedUpdateInput>
  }

  /**
   * SeriesCategory delete
   */
  export type SeriesCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryInclude<ExtArgs> | null
    /**
     * Filter which SeriesCategory to delete.
     */
    where: SeriesCategoryWhereUniqueInput
  }

  /**
   * SeriesCategory deleteMany
   */
  export type SeriesCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeriesCategories to delete
     */
    where?: SeriesCategoryWhereInput
    /**
     * Limit how many SeriesCategories to delete.
     */
    limit?: number
  }

  /**
   * SeriesCategory without action
   */
  export type SeriesCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeriesCategory
     */
    select?: SeriesCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeriesCategory
     */
    omit?: SeriesCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesCategoryInclude<ExtArgs> | null
  }


  /**
   * Model WatchHistory
   */

  export type AggregateWatchHistory = {
    _count: WatchHistoryCountAggregateOutputType | null
    _avg: WatchHistoryAvgAggregateOutputType | null
    _sum: WatchHistorySumAggregateOutputType | null
    _min: WatchHistoryMinAggregateOutputType | null
    _max: WatchHistoryMaxAggregateOutputType | null
  }

  export type WatchHistoryAvgAggregateOutputType = {
    progressSeconds: number | null
    durationSeconds: number | null
  }

  export type WatchHistorySumAggregateOutputType = {
    progressSeconds: number | null
    durationSeconds: number | null
  }

  export type WatchHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    episodeId: string | null
    seriesId: string | null
    progressSeconds: number | null
    durationSeconds: number | null
    isCompleted: boolean | null
    watchedAt: Date | null
    updatedAt: Date | null
  }

  export type WatchHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    episodeId: string | null
    seriesId: string | null
    progressSeconds: number | null
    durationSeconds: number | null
    isCompleted: boolean | null
    watchedAt: Date | null
    updatedAt: Date | null
  }

  export type WatchHistoryCountAggregateOutputType = {
    id: number
    userId: number
    episodeId: number
    seriesId: number
    progressSeconds: number
    durationSeconds: number
    isCompleted: number
    watchedAt: number
    updatedAt: number
    _all: number
  }


  export type WatchHistoryAvgAggregateInputType = {
    progressSeconds?: true
    durationSeconds?: true
  }

  export type WatchHistorySumAggregateInputType = {
    progressSeconds?: true
    durationSeconds?: true
  }

  export type WatchHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    episodeId?: true
    seriesId?: true
    progressSeconds?: true
    durationSeconds?: true
    isCompleted?: true
    watchedAt?: true
    updatedAt?: true
  }

  export type WatchHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    episodeId?: true
    seriesId?: true
    progressSeconds?: true
    durationSeconds?: true
    isCompleted?: true
    watchedAt?: true
    updatedAt?: true
  }

  export type WatchHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    episodeId?: true
    seriesId?: true
    progressSeconds?: true
    durationSeconds?: true
    isCompleted?: true
    watchedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WatchHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchHistory to aggregate.
     */
    where?: WatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchHistories to fetch.
     */
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchHistories
    **/
    _count?: true | WatchHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchHistoryMaxAggregateInputType
  }

  export type GetWatchHistoryAggregateType<T extends WatchHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchHistory[P]>
      : GetScalarType<T[P], AggregateWatchHistory[P]>
  }




  export type WatchHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchHistoryWhereInput
    orderBy?: WatchHistoryOrderByWithAggregationInput | WatchHistoryOrderByWithAggregationInput[]
    by: WatchHistoryScalarFieldEnum[] | WatchHistoryScalarFieldEnum
    having?: WatchHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchHistoryCountAggregateInputType | true
    _avg?: WatchHistoryAvgAggregateInputType
    _sum?: WatchHistorySumAggregateInputType
    _min?: WatchHistoryMinAggregateInputType
    _max?: WatchHistoryMaxAggregateInputType
  }

  export type WatchHistoryGroupByOutputType = {
    id: string
    userId: string
    episodeId: string
    seriesId: string
    progressSeconds: number
    durationSeconds: number
    isCompleted: boolean
    watchedAt: Date
    updatedAt: Date
    _count: WatchHistoryCountAggregateOutputType | null
    _avg: WatchHistoryAvgAggregateOutputType | null
    _sum: WatchHistorySumAggregateOutputType | null
    _min: WatchHistoryMinAggregateOutputType | null
    _max: WatchHistoryMaxAggregateOutputType | null
  }

  type GetWatchHistoryGroupByPayload<T extends WatchHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], WatchHistoryGroupByOutputType[P]>
        }
      >
    >


  export type WatchHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    episodeId?: boolean
    seriesId?: boolean
    progressSeconds?: boolean
    durationSeconds?: boolean
    isCompleted?: boolean
    watchedAt?: boolean
    updatedAt?: boolean
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchHistory"]>

  export type WatchHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    episodeId?: boolean
    seriesId?: boolean
    progressSeconds?: boolean
    durationSeconds?: boolean
    isCompleted?: boolean
    watchedAt?: boolean
    updatedAt?: boolean
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchHistory"]>

  export type WatchHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    episodeId?: boolean
    seriesId?: boolean
    progressSeconds?: boolean
    durationSeconds?: boolean
    isCompleted?: boolean
    watchedAt?: boolean
    updatedAt?: boolean
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchHistory"]>

  export type WatchHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    episodeId?: boolean
    seriesId?: boolean
    progressSeconds?: boolean
    durationSeconds?: boolean
    isCompleted?: boolean
    watchedAt?: boolean
    updatedAt?: boolean
  }

  export type WatchHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "episodeId" | "seriesId" | "progressSeconds" | "durationSeconds" | "isCompleted" | "watchedAt" | "updatedAt", ExtArgs["result"]["watchHistory"]>
  export type WatchHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episode?: boolean | EpisodeDefaultArgs<ExtArgs>
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WatchHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchHistory"
    objects: {
      episode: Prisma.$EpisodePayload<ExtArgs>
      series: Prisma.$SeriesPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      episodeId: string
      seriesId: string
      progressSeconds: number
      durationSeconds: number
      isCompleted: boolean
      watchedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["watchHistory"]>
    composites: {}
  }

  type WatchHistoryGetPayload<S extends boolean | null | undefined | WatchHistoryDefaultArgs> = $Result.GetResult<Prisma.$WatchHistoryPayload, S>

  type WatchHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchHistoryCountAggregateInputType | true
    }

  export interface WatchHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchHistory'], meta: { name: 'WatchHistory' } }
    /**
     * Find zero or one WatchHistory that matches the filter.
     * @param {WatchHistoryFindUniqueArgs} args - Arguments to find a WatchHistory
     * @example
     * // Get one WatchHistory
     * const watchHistory = await prisma.watchHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchHistoryFindUniqueArgs>(args: SelectSubset<T, WatchHistoryFindUniqueArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WatchHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchHistoryFindUniqueOrThrowArgs} args - Arguments to find a WatchHistory
     * @example
     * // Get one WatchHistory
     * const watchHistory = await prisma.watchHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryFindFirstArgs} args - Arguments to find a WatchHistory
     * @example
     * // Get one WatchHistory
     * const watchHistory = await prisma.watchHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchHistoryFindFirstArgs>(args?: SelectSubset<T, WatchHistoryFindFirstArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryFindFirstOrThrowArgs} args - Arguments to find a WatchHistory
     * @example
     * // Get one WatchHistory
     * const watchHistory = await prisma.watchHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WatchHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchHistories
     * const watchHistories = await prisma.watchHistory.findMany()
     * 
     * // Get first 10 WatchHistories
     * const watchHistories = await prisma.watchHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchHistoryWithIdOnly = await prisma.watchHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchHistoryFindManyArgs>(args?: SelectSubset<T, WatchHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WatchHistory.
     * @param {WatchHistoryCreateArgs} args - Arguments to create a WatchHistory.
     * @example
     * // Create one WatchHistory
     * const WatchHistory = await prisma.watchHistory.create({
     *   data: {
     *     // ... data to create a WatchHistory
     *   }
     * })
     * 
     */
    create<T extends WatchHistoryCreateArgs>(args: SelectSubset<T, WatchHistoryCreateArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WatchHistories.
     * @param {WatchHistoryCreateManyArgs} args - Arguments to create many WatchHistories.
     * @example
     * // Create many WatchHistories
     * const watchHistory = await prisma.watchHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchHistoryCreateManyArgs>(args?: SelectSubset<T, WatchHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchHistories and returns the data saved in the database.
     * @param {WatchHistoryCreateManyAndReturnArgs} args - Arguments to create many WatchHistories.
     * @example
     * // Create many WatchHistories
     * const watchHistory = await prisma.watchHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchHistories and only return the `id`
     * const watchHistoryWithIdOnly = await prisma.watchHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WatchHistory.
     * @param {WatchHistoryDeleteArgs} args - Arguments to delete one WatchHistory.
     * @example
     * // Delete one WatchHistory
     * const WatchHistory = await prisma.watchHistory.delete({
     *   where: {
     *     // ... filter to delete one WatchHistory
     *   }
     * })
     * 
     */
    delete<T extends WatchHistoryDeleteArgs>(args: SelectSubset<T, WatchHistoryDeleteArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WatchHistory.
     * @param {WatchHistoryUpdateArgs} args - Arguments to update one WatchHistory.
     * @example
     * // Update one WatchHistory
     * const watchHistory = await prisma.watchHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchHistoryUpdateArgs>(args: SelectSubset<T, WatchHistoryUpdateArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WatchHistories.
     * @param {WatchHistoryDeleteManyArgs} args - Arguments to filter WatchHistories to delete.
     * @example
     * // Delete a few WatchHistories
     * const { count } = await prisma.watchHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchHistoryDeleteManyArgs>(args?: SelectSubset<T, WatchHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchHistories
     * const watchHistory = await prisma.watchHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchHistoryUpdateManyArgs>(args: SelectSubset<T, WatchHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchHistories and returns the data updated in the database.
     * @param {WatchHistoryUpdateManyAndReturnArgs} args - Arguments to update many WatchHistories.
     * @example
     * // Update many WatchHistories
     * const watchHistory = await prisma.watchHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WatchHistories and only return the `id`
     * const watchHistoryWithIdOnly = await prisma.watchHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends WatchHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WatchHistory.
     * @param {WatchHistoryUpsertArgs} args - Arguments to update or create a WatchHistory.
     * @example
     * // Update or create a WatchHistory
     * const watchHistory = await prisma.watchHistory.upsert({
     *   create: {
     *     // ... data to create a WatchHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchHistory we want to update
     *   }
     * })
     */
    upsert<T extends WatchHistoryUpsertArgs>(args: SelectSubset<T, WatchHistoryUpsertArgs<ExtArgs>>): Prisma__WatchHistoryClient<$Result.GetResult<Prisma.$WatchHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WatchHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryCountArgs} args - Arguments to filter WatchHistories to count.
     * @example
     * // Count the number of WatchHistories
     * const count = await prisma.watchHistory.count({
     *   where: {
     *     // ... the filter for the WatchHistories we want to count
     *   }
     * })
    **/
    count<T extends WatchHistoryCountArgs>(
      args?: Subset<T, WatchHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchHistoryAggregateArgs>(args: Subset<T, WatchHistoryAggregateArgs>): Prisma.PrismaPromise<GetWatchHistoryAggregateType<T>>

    /**
     * Group by WatchHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchHistoryGroupByArgs} args - Group by arguments.
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
      T extends WatchHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchHistoryGroupByArgs['orderBy'] }
        : { orderBy?: WatchHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchHistory model
   */
  readonly fields: WatchHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episode<T extends EpisodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EpisodeDefaultArgs<ExtArgs>>): Prisma__EpisodeClient<$Result.GetResult<Prisma.$EpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    series<T extends SeriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeriesDefaultArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WatchHistory model
   */
  interface WatchHistoryFieldRefs {
    readonly id: FieldRef<"WatchHistory", 'String'>
    readonly userId: FieldRef<"WatchHistory", 'String'>
    readonly episodeId: FieldRef<"WatchHistory", 'String'>
    readonly seriesId: FieldRef<"WatchHistory", 'String'>
    readonly progressSeconds: FieldRef<"WatchHistory", 'Int'>
    readonly durationSeconds: FieldRef<"WatchHistory", 'Int'>
    readonly isCompleted: FieldRef<"WatchHistory", 'Boolean'>
    readonly watchedAt: FieldRef<"WatchHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"WatchHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WatchHistory findUnique
   */
  export type WatchHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WatchHistory to fetch.
     */
    where: WatchHistoryWhereUniqueInput
  }

  /**
   * WatchHistory findUniqueOrThrow
   */
  export type WatchHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WatchHistory to fetch.
     */
    where: WatchHistoryWhereUniqueInput
  }

  /**
   * WatchHistory findFirst
   */
  export type WatchHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WatchHistory to fetch.
     */
    where?: WatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchHistories to fetch.
     */
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchHistories.
     */
    cursor?: WatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchHistories.
     */
    distinct?: WatchHistoryScalarFieldEnum | WatchHistoryScalarFieldEnum[]
  }

  /**
   * WatchHistory findFirstOrThrow
   */
  export type WatchHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WatchHistory to fetch.
     */
    where?: WatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchHistories to fetch.
     */
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchHistories.
     */
    cursor?: WatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchHistories.
     */
    distinct?: WatchHistoryScalarFieldEnum | WatchHistoryScalarFieldEnum[]
  }

  /**
   * WatchHistory findMany
   */
  export type WatchHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * Filter, which WatchHistories to fetch.
     */
    where?: WatchHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchHistories to fetch.
     */
    orderBy?: WatchHistoryOrderByWithRelationInput | WatchHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchHistories.
     */
    cursor?: WatchHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchHistories.
     */
    distinct?: WatchHistoryScalarFieldEnum | WatchHistoryScalarFieldEnum[]
  }

  /**
   * WatchHistory create
   */
  export type WatchHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchHistory.
     */
    data: XOR<WatchHistoryCreateInput, WatchHistoryUncheckedCreateInput>
  }

  /**
   * WatchHistory createMany
   */
  export type WatchHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchHistories.
     */
    data: WatchHistoryCreateManyInput | WatchHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchHistory createManyAndReturn
   */
  export type WatchHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many WatchHistories.
     */
    data: WatchHistoryCreateManyInput | WatchHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchHistory update
   */
  export type WatchHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchHistory.
     */
    data: XOR<WatchHistoryUpdateInput, WatchHistoryUncheckedUpdateInput>
    /**
     * Choose, which WatchHistory to update.
     */
    where: WatchHistoryWhereUniqueInput
  }

  /**
   * WatchHistory updateMany
   */
  export type WatchHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchHistories.
     */
    data: XOR<WatchHistoryUpdateManyMutationInput, WatchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WatchHistories to update
     */
    where?: WatchHistoryWhereInput
    /**
     * Limit how many WatchHistories to update.
     */
    limit?: number
  }

  /**
   * WatchHistory updateManyAndReturn
   */
  export type WatchHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * The data used to update WatchHistories.
     */
    data: XOR<WatchHistoryUpdateManyMutationInput, WatchHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WatchHistories to update
     */
    where?: WatchHistoryWhereInput
    /**
     * Limit how many WatchHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchHistory upsert
   */
  export type WatchHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchHistory to update in case it exists.
     */
    where: WatchHistoryWhereUniqueInput
    /**
     * In case the WatchHistory found by the `where` argument doesn't exist, create a new WatchHistory with this data.
     */
    create: XOR<WatchHistoryCreateInput, WatchHistoryUncheckedCreateInput>
    /**
     * In case the WatchHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchHistoryUpdateInput, WatchHistoryUncheckedUpdateInput>
  }

  /**
   * WatchHistory delete
   */
  export type WatchHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
    /**
     * Filter which WatchHistory to delete.
     */
    where: WatchHistoryWhereUniqueInput
  }

  /**
   * WatchHistory deleteMany
   */
  export type WatchHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchHistories to delete
     */
    where?: WatchHistoryWhereInput
    /**
     * Limit how many WatchHistories to delete.
     */
    limit?: number
  }

  /**
   * WatchHistory without action
   */
  export type WatchHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchHistory
     */
    select?: WatchHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchHistory
     */
    omit?: WatchHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchHistoryInclude<ExtArgs> | null
  }


  /**
   * Model WatchList
   */

  export type AggregateWatchList = {
    _count: WatchListCountAggregateOutputType | null
    _min: WatchListMinAggregateOutputType | null
    _max: WatchListMaxAggregateOutputType | null
  }

  export type WatchListMinAggregateOutputType = {
    id: string | null
    userId: string | null
    seriesId: string | null
    addedAt: Date | null
  }

  export type WatchListMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    seriesId: string | null
    addedAt: Date | null
  }

  export type WatchListCountAggregateOutputType = {
    id: number
    userId: number
    seriesId: number
    addedAt: number
    _all: number
  }


  export type WatchListMinAggregateInputType = {
    id?: true
    userId?: true
    seriesId?: true
    addedAt?: true
  }

  export type WatchListMaxAggregateInputType = {
    id?: true
    userId?: true
    seriesId?: true
    addedAt?: true
  }

  export type WatchListCountAggregateInputType = {
    id?: true
    userId?: true
    seriesId?: true
    addedAt?: true
    _all?: true
  }

  export type WatchListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchList to aggregate.
     */
    where?: WatchListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchLists to fetch.
     */
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchLists
    **/
    _count?: true | WatchListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchListMaxAggregateInputType
  }

  export type GetWatchListAggregateType<T extends WatchListAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchList[P]>
      : GetScalarType<T[P], AggregateWatchList[P]>
  }




  export type WatchListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchListWhereInput
    orderBy?: WatchListOrderByWithAggregationInput | WatchListOrderByWithAggregationInput[]
    by: WatchListScalarFieldEnum[] | WatchListScalarFieldEnum
    having?: WatchListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchListCountAggregateInputType | true
    _min?: WatchListMinAggregateInputType
    _max?: WatchListMaxAggregateInputType
  }

  export type WatchListGroupByOutputType = {
    id: string
    userId: string
    seriesId: string
    addedAt: Date
    _count: WatchListCountAggregateOutputType | null
    _min: WatchListMinAggregateOutputType | null
    _max: WatchListMaxAggregateOutputType | null
  }

  type GetWatchListGroupByPayload<T extends WatchListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchListGroupByOutputType[P]>
            : GetScalarType<T[P], WatchListGroupByOutputType[P]>
        }
      >
    >


  export type WatchListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    seriesId?: boolean
    addedAt?: boolean
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchList"]>

  export type WatchListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    seriesId?: boolean
    addedAt?: boolean
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchList"]>

  export type WatchListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    seriesId?: boolean
    addedAt?: boolean
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchList"]>

  export type WatchListSelectScalar = {
    id?: boolean
    userId?: boolean
    seriesId?: boolean
    addedAt?: boolean
  }

  export type WatchListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "seriesId" | "addedAt", ExtArgs["result"]["watchList"]>
  export type WatchListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    series?: boolean | SeriesDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WatchListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchList"
    objects: {
      series: Prisma.$SeriesPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      seriesId: string
      addedAt: Date
    }, ExtArgs["result"]["watchList"]>
    composites: {}
  }

  type WatchListGetPayload<S extends boolean | null | undefined | WatchListDefaultArgs> = $Result.GetResult<Prisma.$WatchListPayload, S>

  type WatchListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchListCountAggregateInputType | true
    }

  export interface WatchListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchList'], meta: { name: 'WatchList' } }
    /**
     * Find zero or one WatchList that matches the filter.
     * @param {WatchListFindUniqueArgs} args - Arguments to find a WatchList
     * @example
     * // Get one WatchList
     * const watchList = await prisma.watchList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchListFindUniqueArgs>(args: SelectSubset<T, WatchListFindUniqueArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WatchList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchListFindUniqueOrThrowArgs} args - Arguments to find a WatchList
     * @example
     * // Get one WatchList
     * const watchList = await prisma.watchList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchListFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListFindFirstArgs} args - Arguments to find a WatchList
     * @example
     * // Get one WatchList
     * const watchList = await prisma.watchList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchListFindFirstArgs>(args?: SelectSubset<T, WatchListFindFirstArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListFindFirstOrThrowArgs} args - Arguments to find a WatchList
     * @example
     * // Get one WatchList
     * const watchList = await prisma.watchList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchListFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchListFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WatchLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchLists
     * const watchLists = await prisma.watchList.findMany()
     * 
     * // Get first 10 WatchLists
     * const watchLists = await prisma.watchList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchListWithIdOnly = await prisma.watchList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchListFindManyArgs>(args?: SelectSubset<T, WatchListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WatchList.
     * @param {WatchListCreateArgs} args - Arguments to create a WatchList.
     * @example
     * // Create one WatchList
     * const WatchList = await prisma.watchList.create({
     *   data: {
     *     // ... data to create a WatchList
     *   }
     * })
     * 
     */
    create<T extends WatchListCreateArgs>(args: SelectSubset<T, WatchListCreateArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WatchLists.
     * @param {WatchListCreateManyArgs} args - Arguments to create many WatchLists.
     * @example
     * // Create many WatchLists
     * const watchList = await prisma.watchList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchListCreateManyArgs>(args?: SelectSubset<T, WatchListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchLists and returns the data saved in the database.
     * @param {WatchListCreateManyAndReturnArgs} args - Arguments to create many WatchLists.
     * @example
     * // Create many WatchLists
     * const watchList = await prisma.watchList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchLists and only return the `id`
     * const watchListWithIdOnly = await prisma.watchList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchListCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WatchList.
     * @param {WatchListDeleteArgs} args - Arguments to delete one WatchList.
     * @example
     * // Delete one WatchList
     * const WatchList = await prisma.watchList.delete({
     *   where: {
     *     // ... filter to delete one WatchList
     *   }
     * })
     * 
     */
    delete<T extends WatchListDeleteArgs>(args: SelectSubset<T, WatchListDeleteArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WatchList.
     * @param {WatchListUpdateArgs} args - Arguments to update one WatchList.
     * @example
     * // Update one WatchList
     * const watchList = await prisma.watchList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchListUpdateArgs>(args: SelectSubset<T, WatchListUpdateArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WatchLists.
     * @param {WatchListDeleteManyArgs} args - Arguments to filter WatchLists to delete.
     * @example
     * // Delete a few WatchLists
     * const { count } = await prisma.watchList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchListDeleteManyArgs>(args?: SelectSubset<T, WatchListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchLists
     * const watchList = await prisma.watchList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchListUpdateManyArgs>(args: SelectSubset<T, WatchListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchLists and returns the data updated in the database.
     * @param {WatchListUpdateManyAndReturnArgs} args - Arguments to update many WatchLists.
     * @example
     * // Update many WatchLists
     * const watchList = await prisma.watchList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WatchLists and only return the `id`
     * const watchListWithIdOnly = await prisma.watchList.updateManyAndReturn({
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
    updateManyAndReturn<T extends WatchListUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WatchList.
     * @param {WatchListUpsertArgs} args - Arguments to update or create a WatchList.
     * @example
     * // Update or create a WatchList
     * const watchList = await prisma.watchList.upsert({
     *   create: {
     *     // ... data to create a WatchList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchList we want to update
     *   }
     * })
     */
    upsert<T extends WatchListUpsertArgs>(args: SelectSubset<T, WatchListUpsertArgs<ExtArgs>>): Prisma__WatchListClient<$Result.GetResult<Prisma.$WatchListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WatchLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListCountArgs} args - Arguments to filter WatchLists to count.
     * @example
     * // Count the number of WatchLists
     * const count = await prisma.watchList.count({
     *   where: {
     *     // ... the filter for the WatchLists we want to count
     *   }
     * })
    **/
    count<T extends WatchListCountArgs>(
      args?: Subset<T, WatchListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchListAggregateArgs>(args: Subset<T, WatchListAggregateArgs>): Prisma.PrismaPromise<GetWatchListAggregateType<T>>

    /**
     * Group by WatchList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListGroupByArgs} args - Group by arguments.
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
      T extends WatchListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchListGroupByArgs['orderBy'] }
        : { orderBy?: WatchListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchList model
   */
  readonly fields: WatchListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    series<T extends SeriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeriesDefaultArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WatchList model
   */
  interface WatchListFieldRefs {
    readonly id: FieldRef<"WatchList", 'String'>
    readonly userId: FieldRef<"WatchList", 'String'>
    readonly seriesId: FieldRef<"WatchList", 'String'>
    readonly addedAt: FieldRef<"WatchList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WatchList findUnique
   */
  export type WatchListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchList to fetch.
     */
    where: WatchListWhereUniqueInput
  }

  /**
   * WatchList findUniqueOrThrow
   */
  export type WatchListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchList to fetch.
     */
    where: WatchListWhereUniqueInput
  }

  /**
   * WatchList findFirst
   */
  export type WatchListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchList to fetch.
     */
    where?: WatchListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchLists to fetch.
     */
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchLists.
     */
    cursor?: WatchListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchLists.
     */
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
  }

  /**
   * WatchList findFirstOrThrow
   */
  export type WatchListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchList to fetch.
     */
    where?: WatchListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchLists to fetch.
     */
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchLists.
     */
    cursor?: WatchListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchLists.
     */
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
  }

  /**
   * WatchList findMany
   */
  export type WatchListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter, which WatchLists to fetch.
     */
    where?: WatchListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchLists to fetch.
     */
    orderBy?: WatchListOrderByWithRelationInput | WatchListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchLists.
     */
    cursor?: WatchListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchLists.
     */
    distinct?: WatchListScalarFieldEnum | WatchListScalarFieldEnum[]
  }

  /**
   * WatchList create
   */
  export type WatchListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchList.
     */
    data: XOR<WatchListCreateInput, WatchListUncheckedCreateInput>
  }

  /**
   * WatchList createMany
   */
  export type WatchListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchLists.
     */
    data: WatchListCreateManyInput | WatchListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchList createManyAndReturn
   */
  export type WatchListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * The data used to create many WatchLists.
     */
    data: WatchListCreateManyInput | WatchListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchList update
   */
  export type WatchListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchList.
     */
    data: XOR<WatchListUpdateInput, WatchListUncheckedUpdateInput>
    /**
     * Choose, which WatchList to update.
     */
    where: WatchListWhereUniqueInput
  }

  /**
   * WatchList updateMany
   */
  export type WatchListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchLists.
     */
    data: XOR<WatchListUpdateManyMutationInput, WatchListUncheckedUpdateManyInput>
    /**
     * Filter which WatchLists to update
     */
    where?: WatchListWhereInput
    /**
     * Limit how many WatchLists to update.
     */
    limit?: number
  }

  /**
   * WatchList updateManyAndReturn
   */
  export type WatchListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * The data used to update WatchLists.
     */
    data: XOR<WatchListUpdateManyMutationInput, WatchListUncheckedUpdateManyInput>
    /**
     * Filter which WatchLists to update
     */
    where?: WatchListWhereInput
    /**
     * Limit how many WatchLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchList upsert
   */
  export type WatchListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchList to update in case it exists.
     */
    where: WatchListWhereUniqueInput
    /**
     * In case the WatchList found by the `where` argument doesn't exist, create a new WatchList with this data.
     */
    create: XOR<WatchListCreateInput, WatchListUncheckedCreateInput>
    /**
     * In case the WatchList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchListUpdateInput, WatchListUncheckedUpdateInput>
  }

  /**
   * WatchList delete
   */
  export type WatchListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
    /**
     * Filter which WatchList to delete.
     */
    where: WatchListWhereUniqueInput
  }

  /**
   * WatchList deleteMany
   */
  export type WatchListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchLists to delete
     */
    where?: WatchListWhereInput
    /**
     * Limit how many WatchLists to delete.
     */
    limit?: number
  }

  /**
   * WatchList without action
   */
  export type WatchListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchList
     */
    select?: WatchListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchList
     */
    omit?: WatchListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    phone: 'phone',
    role: 'role',
    isActive: 'isActive',
    emailVerified: 'emailVerified',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    displayName: 'displayName',
    avatarUrl: 'avatarUrl',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    language: 'language',
    country: 'country',
    preferences: 'preferences'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const SubscriptionPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    priceInPaise: 'priceInPaise',
    durationDays: 'durationDays',
    features: 'features',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionPlanScalarFieldEnum = (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum]


  export const UserSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSubscriptionScalarFieldEnum = (typeof UserSubscriptionScalarFieldEnum)[keyof typeof UserSubscriptionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    amountInPaise: 'amountInPaise',
    currency: 'currency',
    status: 'status',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    razorpaySignature: 'razorpaySignature',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SeriesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    genres: 'genres',
    thumbnailUrl: 'thumbnailUrl',
    bannerUrl: 'bannerUrl',
    status: 'status',
    releaseDate: 'releaseDate',
    totalEpisodes: 'totalEpisodes',
    viewCount: 'viewCount',
    isFeatured: 'isFeatured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeriesScalarFieldEnum = (typeof SeriesScalarFieldEnum)[keyof typeof SeriesScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
    id: 'id',
    seriesId: 'seriesId',
    title: 'title',
    episodeNumber: 'episodeNumber',
    description: 'description',
    thumbnailUrl: 'thumbnailUrl',
    durationSeconds: 'durationSeconds',
    isFree: 'isFree',
    viewCount: 'viewCount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const VideoAssetScalarFieldEnum: {
    id: 'id',
    episodeId: 'episodeId',
    originalPath: 'originalPath',
    hlsDirectory: 'hlsDirectory',
    hlsManifestPath: 'hlsManifestPath',
    durationSeconds: 'durationSeconds',
    fileSizeBytes: 'fileSizeBytes',
    resolution: 'resolution',
    status: 'status',
    processingError: 'processingError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoAssetScalarFieldEnum = (typeof VideoAssetScalarFieldEnum)[keyof typeof VideoAssetScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    displayOrder: 'displayOrder',
    isAutomatic: 'isAutomatic',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SeriesCategoryScalarFieldEnum: {
    id: 'id',
    seriesId: 'seriesId',
    categoryId: 'categoryId',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt'
  };

  export type SeriesCategoryScalarFieldEnum = (typeof SeriesCategoryScalarFieldEnum)[keyof typeof SeriesCategoryScalarFieldEnum]


  export const WatchHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    episodeId: 'episodeId',
    seriesId: 'seriesId',
    progressSeconds: 'progressSeconds',
    durationSeconds: 'durationSeconds',
    isCompleted: 'isCompleted',
    watchedAt: 'watchedAt',
    updatedAt: 'updatedAt'
  };

  export type WatchHistoryScalarFieldEnum = (typeof WatchHistoryScalarFieldEnum)[keyof typeof WatchHistoryScalarFieldEnum]


  export const WatchListScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    seriesId: 'seriesId',
    addedAt: 'addedAt'
  };

  export type WatchListScalarFieldEnum = (typeof WatchListScalarFieldEnum)[keyof typeof WatchListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'AdminRole'
   */
  export type EnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole'>
    


  /**
   * Reference to a field of type 'AdminRole[]'
   */
  export type ListEnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole[]'>
    


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'SeriesStatus'
   */
  export type EnumSeriesStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeriesStatus'>
    


  /**
   * Reference to a field of type 'SeriesStatus[]'
   */
  export type ListEnumSeriesStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeriesStatus[]'>
    


  /**
   * Reference to a field of type 'EpisodeStatus'
   */
  export type EnumEpisodeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EpisodeStatus'>
    


  /**
   * Reference to a field of type 'EpisodeStatus[]'
   */
  export type ListEnumEpisodeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EpisodeStatus[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'VideoStatus'
   */
  export type EnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus'>
    


  /**
   * Reference to a field of type 'VideoStatus[]'
   */
  export type ListEnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus[]'>
    


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


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    firstName?: StringFilter<"Admin"> | string
    lastName?: StringNullableFilter<"Admin"> | string | null
    role?: EnumAdminRoleFilter<"Admin"> | $Enums.AdminRole
    isActive?: BoolFilter<"Admin"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    firstName?: StringFilter<"Admin"> | string
    lastName?: StringNullableFilter<"Admin"> | string | null
    role?: EnumAdminRoleFilter<"Admin"> | $Enums.AdminRole
    isActive?: BoolFilter<"Admin"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    firstName?: StringWithAggregatesFilter<"Admin"> | string
    lastName?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    role?: EnumAdminRoleWithAggregatesFilter<"Admin"> | $Enums.AdminRole
    isActive?: BoolWithAggregatesFilter<"Admin"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    payments?: PaymentListRelationFilter
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    subscription?: XOR<UserSubscriptionNullableScalarRelationFilter, UserSubscriptionWhereInput> | null
    watchHistory?: WatchHistoryListRelationFilter
    watchList?: WatchListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    payments?: PaymentOrderByRelationAggregateInput
    profile?: UserProfileOrderByWithRelationInput
    subscription?: UserSubscriptionOrderByWithRelationInput
    watchHistory?: WatchHistoryOrderByRelationAggregateInput
    watchList?: WatchListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    payments?: PaymentListRelationFilter
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    subscription?: XOR<UserSubscriptionNullableScalarRelationFilter, UserSubscriptionWhereInput> | null
    watchHistory?: WatchHistoryListRelationFilter
    watchList?: WatchListListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: IntFilter<"UserProfile"> | number
    userId?: StringFilter<"UserProfile"> | string
    firstName?: StringNullableFilter<"UserProfile"> | string | null
    lastName?: StringNullableFilter<"UserProfile"> | string | null
    displayName?: StringNullableFilter<"UserProfile"> | string | null
    avatarUrl?: StringNullableFilter<"UserProfile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    gender?: StringNullableFilter<"UserProfile"> | string | null
    language?: StringFilter<"UserProfile"> | string
    country?: StringNullableFilter<"UserProfile"> | string | null
    preferences?: JsonNullableFilter<"UserProfile">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    language?: SortOrder
    country?: SortOrderInput | SortOrder
    preferences?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    firstName?: StringNullableFilter<"UserProfile"> | string | null
    lastName?: StringNullableFilter<"UserProfile"> | string | null
    displayName?: StringNullableFilter<"UserProfile"> | string | null
    avatarUrl?: StringNullableFilter<"UserProfile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    gender?: StringNullableFilter<"UserProfile"> | string | null
    language?: StringFilter<"UserProfile"> | string
    country?: StringNullableFilter<"UserProfile"> | string | null
    preferences?: JsonNullableFilter<"UserProfile">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    language?: SortOrder
    country?: SortOrderInput | SortOrder
    preferences?: SortOrderInput | SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProfile"> | number
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    firstName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    language?: StringWithAggregatesFilter<"UserProfile"> | string
    country?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    preferences?: JsonNullableWithAggregatesFilter<"UserProfile">
  }

  export type SubscriptionPlanWhereInput = {
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    id?: StringFilter<"SubscriptionPlan"> | string
    name?: StringFilter<"SubscriptionPlan"> | string
    slug?: StringFilter<"SubscriptionPlan"> | string
    priceInPaise?: IntFilter<"SubscriptionPlan"> | number
    durationDays?: IntFilter<"SubscriptionPlan"> | number
    features?: StringNullableListFilter<"SubscriptionPlan">
    isActive?: BoolFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    payments?: PaymentListRelationFilter
    subscriptions?: UserSubscriptionListRelationFilter
  }

  export type SubscriptionPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    priceInPaise?: SortOrder
    durationDays?: SortOrder
    features?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payments?: PaymentOrderByRelationAggregateInput
    subscriptions?: UserSubscriptionOrderByRelationAggregateInput
  }

  export type SubscriptionPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    name?: StringFilter<"SubscriptionPlan"> | string
    priceInPaise?: IntFilter<"SubscriptionPlan"> | number
    durationDays?: IntFilter<"SubscriptionPlan"> | number
    features?: StringNullableListFilter<"SubscriptionPlan">
    isActive?: BoolFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    payments?: PaymentListRelationFilter
    subscriptions?: UserSubscriptionListRelationFilter
  }, "id" | "slug">

  export type SubscriptionPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    priceInPaise?: SortOrder
    durationDays?: SortOrder
    features?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionPlanCountOrderByAggregateInput
    _avg?: SubscriptionPlanAvgOrderByAggregateInput
    _max?: SubscriptionPlanMaxOrderByAggregateInput
    _min?: SubscriptionPlanMinOrderByAggregateInput
    _sum?: SubscriptionPlanSumOrderByAggregateInput
  }

  export type SubscriptionPlanScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPlanScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    name?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    slug?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    priceInPaise?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    durationDays?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    features?: StringNullableListFilter<"SubscriptionPlan">
    isActive?: BoolWithAggregatesFilter<"SubscriptionPlan"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
  }

  export type UserSubscriptionWhereInput = {
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    planId?: StringFilter<"UserSubscription"> | string
    status?: EnumSubscriptionStatusFilter<"UserSubscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeFilter<"UserSubscription"> | Date | string
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SubscriptionPlanOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    planId?: StringFilter<"UserSubscription"> | string
    status?: EnumSubscriptionStatusFilter<"UserSubscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeFilter<"UserSubscription"> | Date | string
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSubscriptionCountOrderByAggregateInput
    _max?: UserSubscriptionMaxOrderByAggregateInput
    _min?: UserSubscriptionMinOrderByAggregateInput
  }

  export type UserSubscriptionScalarWhereWithAggregatesInput = {
    AND?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    OR?: UserSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSubscription"> | string
    userId?: StringWithAggregatesFilter<"UserSubscription"> | string
    planId?: StringWithAggregatesFilter<"UserSubscription"> | string
    status?: EnumSubscriptionStatusWithAggregatesFilter<"UserSubscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    planId?: StringFilter<"Payment"> | string
    amountInPaise?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    razorpayOrderId?: StringNullableFilter<"Payment"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    amountInPaise?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SubscriptionPlanOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    planId?: StringFilter<"Payment"> | string
    amountInPaise?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    razorpayOrderId?: StringNullableFilter<"Payment"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    amountInPaise?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    planId?: StringWithAggregatesFilter<"Payment"> | string
    amountInPaise?: IntWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    razorpayOrderId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type SeriesWhereInput = {
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    id?: StringFilter<"Series"> | string
    title?: StringFilter<"Series"> | string
    slug?: StringFilter<"Series"> | string
    description?: StringNullableFilter<"Series"> | string | null
    genres?: StringNullableListFilter<"Series">
    thumbnailUrl?: StringNullableFilter<"Series"> | string | null
    bannerUrl?: StringNullableFilter<"Series"> | string | null
    status?: EnumSeriesStatusFilter<"Series"> | $Enums.SeriesStatus
    releaseDate?: DateTimeNullableFilter<"Series"> | Date | string | null
    totalEpisodes?: IntFilter<"Series"> | number
    viewCount?: IntFilter<"Series"> | number
    isFeatured?: BoolFilter<"Series"> | boolean
    createdAt?: DateTimeFilter<"Series"> | Date | string
    updatedAt?: DateTimeFilter<"Series"> | Date | string
    categories?: SeriesCategoryListRelationFilter
    episodes?: EpisodeListRelationFilter
    watchHistory?: WatchHistoryListRelationFilter
    watchList?: WatchListListRelationFilter
  }

  export type SeriesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    genres?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    totalEpisodes?: SortOrder
    viewCount?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: SeriesCategoryOrderByRelationAggregateInput
    episodes?: EpisodeOrderByRelationAggregateInput
    watchHistory?: WatchHistoryOrderByRelationAggregateInput
    watchList?: WatchListOrderByRelationAggregateInput
  }

  export type SeriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    title?: StringFilter<"Series"> | string
    description?: StringNullableFilter<"Series"> | string | null
    genres?: StringNullableListFilter<"Series">
    thumbnailUrl?: StringNullableFilter<"Series"> | string | null
    bannerUrl?: StringNullableFilter<"Series"> | string | null
    status?: EnumSeriesStatusFilter<"Series"> | $Enums.SeriesStatus
    releaseDate?: DateTimeNullableFilter<"Series"> | Date | string | null
    totalEpisodes?: IntFilter<"Series"> | number
    viewCount?: IntFilter<"Series"> | number
    isFeatured?: BoolFilter<"Series"> | boolean
    createdAt?: DateTimeFilter<"Series"> | Date | string
    updatedAt?: DateTimeFilter<"Series"> | Date | string
    categories?: SeriesCategoryListRelationFilter
    episodes?: EpisodeListRelationFilter
    watchHistory?: WatchHistoryListRelationFilter
    watchList?: WatchListListRelationFilter
  }, "id" | "slug">

  export type SeriesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    genres?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    releaseDate?: SortOrderInput | SortOrder
    totalEpisodes?: SortOrder
    viewCount?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeriesCountOrderByAggregateInput
    _avg?: SeriesAvgOrderByAggregateInput
    _max?: SeriesMaxOrderByAggregateInput
    _min?: SeriesMinOrderByAggregateInput
    _sum?: SeriesSumOrderByAggregateInput
  }

  export type SeriesScalarWhereWithAggregatesInput = {
    AND?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    OR?: SeriesScalarWhereWithAggregatesInput[]
    NOT?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Series"> | string
    title?: StringWithAggregatesFilter<"Series"> | string
    slug?: StringWithAggregatesFilter<"Series"> | string
    description?: StringNullableWithAggregatesFilter<"Series"> | string | null
    genres?: StringNullableListFilter<"Series">
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Series"> | string | null
    bannerUrl?: StringNullableWithAggregatesFilter<"Series"> | string | null
    status?: EnumSeriesStatusWithAggregatesFilter<"Series"> | $Enums.SeriesStatus
    releaseDate?: DateTimeNullableWithAggregatesFilter<"Series"> | Date | string | null
    totalEpisodes?: IntWithAggregatesFilter<"Series"> | number
    viewCount?: IntWithAggregatesFilter<"Series"> | number
    isFeatured?: BoolWithAggregatesFilter<"Series"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Series"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Series"> | Date | string
  }

  export type EpisodeWhereInput = {
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    id?: StringFilter<"Episode"> | string
    seriesId?: StringFilter<"Episode"> | string
    title?: StringFilter<"Episode"> | string
    episodeNumber?: IntFilter<"Episode"> | number
    description?: StringNullableFilter<"Episode"> | string | null
    thumbnailUrl?: StringNullableFilter<"Episode"> | string | null
    durationSeconds?: IntFilter<"Episode"> | number
    isFree?: BoolFilter<"Episode"> | boolean
    viewCount?: IntFilter<"Episode"> | number
    status?: EnumEpisodeStatusFilter<"Episode"> | $Enums.EpisodeStatus
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    series?: XOR<SeriesScalarRelationFilter, SeriesWhereInput>
    videoAsset?: XOR<VideoAssetNullableScalarRelationFilter, VideoAssetWhereInput> | null
    watchHistory?: WatchHistoryListRelationFilter
  }

  export type EpisodeOrderByWithRelationInput = {
    id?: SortOrder
    seriesId?: SortOrder
    title?: SortOrder
    episodeNumber?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    durationSeconds?: SortOrder
    isFree?: SortOrder
    viewCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    series?: SeriesOrderByWithRelationInput
    videoAsset?: VideoAssetOrderByWithRelationInput
    watchHistory?: WatchHistoryOrderByRelationAggregateInput
  }

  export type EpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    seriesId_episodeNumber?: EpisodeSeriesIdEpisodeNumberCompoundUniqueInput
    AND?: EpisodeWhereInput | EpisodeWhereInput[]
    OR?: EpisodeWhereInput[]
    NOT?: EpisodeWhereInput | EpisodeWhereInput[]
    seriesId?: StringFilter<"Episode"> | string
    title?: StringFilter<"Episode"> | string
    episodeNumber?: IntFilter<"Episode"> | number
    description?: StringNullableFilter<"Episode"> | string | null
    thumbnailUrl?: StringNullableFilter<"Episode"> | string | null
    durationSeconds?: IntFilter<"Episode"> | number
    isFree?: BoolFilter<"Episode"> | boolean
    viewCount?: IntFilter<"Episode"> | number
    status?: EnumEpisodeStatusFilter<"Episode"> | $Enums.EpisodeStatus
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
    series?: XOR<SeriesScalarRelationFilter, SeriesWhereInput>
    videoAsset?: XOR<VideoAssetNullableScalarRelationFilter, VideoAssetWhereInput> | null
    watchHistory?: WatchHistoryListRelationFilter
  }, "id" | "seriesId_episodeNumber">

  export type EpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    seriesId?: SortOrder
    title?: SortOrder
    episodeNumber?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    durationSeconds?: SortOrder
    isFree?: SortOrder
    viewCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    OR?: EpisodeScalarWhereWithAggregatesInput[]
    NOT?: EpisodeScalarWhereWithAggregatesInput | EpisodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Episode"> | string
    seriesId?: StringWithAggregatesFilter<"Episode"> | string
    title?: StringWithAggregatesFilter<"Episode"> | string
    episodeNumber?: IntWithAggregatesFilter<"Episode"> | number
    description?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Episode"> | string | null
    durationSeconds?: IntWithAggregatesFilter<"Episode"> | number
    isFree?: BoolWithAggregatesFilter<"Episode"> | boolean
    viewCount?: IntWithAggregatesFilter<"Episode"> | number
    status?: EnumEpisodeStatusWithAggregatesFilter<"Episode"> | $Enums.EpisodeStatus
    createdAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Episode"> | Date | string
  }

  export type VideoAssetWhereInput = {
    AND?: VideoAssetWhereInput | VideoAssetWhereInput[]
    OR?: VideoAssetWhereInput[]
    NOT?: VideoAssetWhereInput | VideoAssetWhereInput[]
    id?: StringFilter<"VideoAsset"> | string
    episodeId?: StringFilter<"VideoAsset"> | string
    originalPath?: StringNullableFilter<"VideoAsset"> | string | null
    hlsDirectory?: StringNullableFilter<"VideoAsset"> | string | null
    hlsManifestPath?: StringNullableFilter<"VideoAsset"> | string | null
    durationSeconds?: IntFilter<"VideoAsset"> | number
    fileSizeBytes?: BigIntFilter<"VideoAsset"> | bigint | number
    resolution?: StringNullableFilter<"VideoAsset"> | string | null
    status?: EnumVideoStatusFilter<"VideoAsset"> | $Enums.VideoStatus
    processingError?: StringNullableFilter<"VideoAsset"> | string | null
    createdAt?: DateTimeFilter<"VideoAsset"> | Date | string
    updatedAt?: DateTimeFilter<"VideoAsset"> | Date | string
    episode?: XOR<EpisodeScalarRelationFilter, EpisodeWhereInput>
  }

  export type VideoAssetOrderByWithRelationInput = {
    id?: SortOrder
    episodeId?: SortOrder
    originalPath?: SortOrderInput | SortOrder
    hlsDirectory?: SortOrderInput | SortOrder
    hlsManifestPath?: SortOrderInput | SortOrder
    durationSeconds?: SortOrder
    fileSizeBytes?: SortOrder
    resolution?: SortOrderInput | SortOrder
    status?: SortOrder
    processingError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    episode?: EpisodeOrderByWithRelationInput
  }

  export type VideoAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    episodeId?: string
    AND?: VideoAssetWhereInput | VideoAssetWhereInput[]
    OR?: VideoAssetWhereInput[]
    NOT?: VideoAssetWhereInput | VideoAssetWhereInput[]
    originalPath?: StringNullableFilter<"VideoAsset"> | string | null
    hlsDirectory?: StringNullableFilter<"VideoAsset"> | string | null
    hlsManifestPath?: StringNullableFilter<"VideoAsset"> | string | null
    durationSeconds?: IntFilter<"VideoAsset"> | number
    fileSizeBytes?: BigIntFilter<"VideoAsset"> | bigint | number
    resolution?: StringNullableFilter<"VideoAsset"> | string | null
    status?: EnumVideoStatusFilter<"VideoAsset"> | $Enums.VideoStatus
    processingError?: StringNullableFilter<"VideoAsset"> | string | null
    createdAt?: DateTimeFilter<"VideoAsset"> | Date | string
    updatedAt?: DateTimeFilter<"VideoAsset"> | Date | string
    episode?: XOR<EpisodeScalarRelationFilter, EpisodeWhereInput>
  }, "id" | "episodeId">

  export type VideoAssetOrderByWithAggregationInput = {
    id?: SortOrder
    episodeId?: SortOrder
    originalPath?: SortOrderInput | SortOrder
    hlsDirectory?: SortOrderInput | SortOrder
    hlsManifestPath?: SortOrderInput | SortOrder
    durationSeconds?: SortOrder
    fileSizeBytes?: SortOrder
    resolution?: SortOrderInput | SortOrder
    status?: SortOrder
    processingError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoAssetCountOrderByAggregateInput
    _avg?: VideoAssetAvgOrderByAggregateInput
    _max?: VideoAssetMaxOrderByAggregateInput
    _min?: VideoAssetMinOrderByAggregateInput
    _sum?: VideoAssetSumOrderByAggregateInput
  }

  export type VideoAssetScalarWhereWithAggregatesInput = {
    AND?: VideoAssetScalarWhereWithAggregatesInput | VideoAssetScalarWhereWithAggregatesInput[]
    OR?: VideoAssetScalarWhereWithAggregatesInput[]
    NOT?: VideoAssetScalarWhereWithAggregatesInput | VideoAssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoAsset"> | string
    episodeId?: StringWithAggregatesFilter<"VideoAsset"> | string
    originalPath?: StringNullableWithAggregatesFilter<"VideoAsset"> | string | null
    hlsDirectory?: StringNullableWithAggregatesFilter<"VideoAsset"> | string | null
    hlsManifestPath?: StringNullableWithAggregatesFilter<"VideoAsset"> | string | null
    durationSeconds?: IntWithAggregatesFilter<"VideoAsset"> | number
    fileSizeBytes?: BigIntWithAggregatesFilter<"VideoAsset"> | bigint | number
    resolution?: StringNullableWithAggregatesFilter<"VideoAsset"> | string | null
    status?: EnumVideoStatusWithAggregatesFilter<"VideoAsset"> | $Enums.VideoStatus
    processingError?: StringNullableWithAggregatesFilter<"VideoAsset"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VideoAsset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VideoAsset"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    displayOrder?: IntFilter<"Category"> | number
    isAutomatic?: BoolFilter<"Category"> | boolean
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    series?: SeriesCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isAutomatic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    series?: SeriesCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    displayOrder?: IntFilter<"Category"> | number
    isAutomatic?: BoolFilter<"Category"> | boolean
    isActive?: BoolFilter<"Category"> | boolean
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    series?: SeriesCategoryListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    isAutomatic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    displayOrder?: IntWithAggregatesFilter<"Category"> | number
    isAutomatic?: BoolWithAggregatesFilter<"Category"> | boolean
    isActive?: BoolWithAggregatesFilter<"Category"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SeriesCategoryWhereInput = {
    AND?: SeriesCategoryWhereInput | SeriesCategoryWhereInput[]
    OR?: SeriesCategoryWhereInput[]
    NOT?: SeriesCategoryWhereInput | SeriesCategoryWhereInput[]
    id?: StringFilter<"SeriesCategory"> | string
    seriesId?: StringFilter<"SeriesCategory"> | string
    categoryId?: StringFilter<"SeriesCategory"> | string
    displayOrder?: IntFilter<"SeriesCategory"> | number
    createdAt?: DateTimeFilter<"SeriesCategory"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    series?: XOR<SeriesScalarRelationFilter, SeriesWhereInput>
  }

  export type SeriesCategoryOrderByWithRelationInput = {
    id?: SortOrder
    seriesId?: SortOrder
    categoryId?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    series?: SeriesOrderByWithRelationInput
  }

  export type SeriesCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    seriesId_categoryId?: SeriesCategorySeriesIdCategoryIdCompoundUniqueInput
    AND?: SeriesCategoryWhereInput | SeriesCategoryWhereInput[]
    OR?: SeriesCategoryWhereInput[]
    NOT?: SeriesCategoryWhereInput | SeriesCategoryWhereInput[]
    seriesId?: StringFilter<"SeriesCategory"> | string
    categoryId?: StringFilter<"SeriesCategory"> | string
    displayOrder?: IntFilter<"SeriesCategory"> | number
    createdAt?: DateTimeFilter<"SeriesCategory"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    series?: XOR<SeriesScalarRelationFilter, SeriesWhereInput>
  }, "id" | "seriesId_categoryId">

  export type SeriesCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    seriesId?: SortOrder
    categoryId?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    _count?: SeriesCategoryCountOrderByAggregateInput
    _avg?: SeriesCategoryAvgOrderByAggregateInput
    _max?: SeriesCategoryMaxOrderByAggregateInput
    _min?: SeriesCategoryMinOrderByAggregateInput
    _sum?: SeriesCategorySumOrderByAggregateInput
  }

  export type SeriesCategoryScalarWhereWithAggregatesInput = {
    AND?: SeriesCategoryScalarWhereWithAggregatesInput | SeriesCategoryScalarWhereWithAggregatesInput[]
    OR?: SeriesCategoryScalarWhereWithAggregatesInput[]
    NOT?: SeriesCategoryScalarWhereWithAggregatesInput | SeriesCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SeriesCategory"> | string
    seriesId?: StringWithAggregatesFilter<"SeriesCategory"> | string
    categoryId?: StringWithAggregatesFilter<"SeriesCategory"> | string
    displayOrder?: IntWithAggregatesFilter<"SeriesCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SeriesCategory"> | Date | string
  }

  export type WatchHistoryWhereInput = {
    AND?: WatchHistoryWhereInput | WatchHistoryWhereInput[]
    OR?: WatchHistoryWhereInput[]
    NOT?: WatchHistoryWhereInput | WatchHistoryWhereInput[]
    id?: StringFilter<"WatchHistory"> | string
    userId?: StringFilter<"WatchHistory"> | string
    episodeId?: StringFilter<"WatchHistory"> | string
    seriesId?: StringFilter<"WatchHistory"> | string
    progressSeconds?: IntFilter<"WatchHistory"> | number
    durationSeconds?: IntFilter<"WatchHistory"> | number
    isCompleted?: BoolFilter<"WatchHistory"> | boolean
    watchedAt?: DateTimeFilter<"WatchHistory"> | Date | string
    updatedAt?: DateTimeFilter<"WatchHistory"> | Date | string
    episode?: XOR<EpisodeScalarRelationFilter, EpisodeWhereInput>
    series?: XOR<SeriesScalarRelationFilter, SeriesWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WatchHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    episodeId?: SortOrder
    seriesId?: SortOrder
    progressSeconds?: SortOrder
    durationSeconds?: SortOrder
    isCompleted?: SortOrder
    watchedAt?: SortOrder
    updatedAt?: SortOrder
    episode?: EpisodeOrderByWithRelationInput
    series?: SeriesOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WatchHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_episodeId?: WatchHistoryUserIdEpisodeIdCompoundUniqueInput
    AND?: WatchHistoryWhereInput | WatchHistoryWhereInput[]
    OR?: WatchHistoryWhereInput[]
    NOT?: WatchHistoryWhereInput | WatchHistoryWhereInput[]
    userId?: StringFilter<"WatchHistory"> | string
    episodeId?: StringFilter<"WatchHistory"> | string
    seriesId?: StringFilter<"WatchHistory"> | string
    progressSeconds?: IntFilter<"WatchHistory"> | number
    durationSeconds?: IntFilter<"WatchHistory"> | number
    isCompleted?: BoolFilter<"WatchHistory"> | boolean
    watchedAt?: DateTimeFilter<"WatchHistory"> | Date | string
    updatedAt?: DateTimeFilter<"WatchHistory"> | Date | string
    episode?: XOR<EpisodeScalarRelationFilter, EpisodeWhereInput>
    series?: XOR<SeriesScalarRelationFilter, SeriesWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_episodeId">

  export type WatchHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    episodeId?: SortOrder
    seriesId?: SortOrder
    progressSeconds?: SortOrder
    durationSeconds?: SortOrder
    isCompleted?: SortOrder
    watchedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WatchHistoryCountOrderByAggregateInput
    _avg?: WatchHistoryAvgOrderByAggregateInput
    _max?: WatchHistoryMaxOrderByAggregateInput
    _min?: WatchHistoryMinOrderByAggregateInput
    _sum?: WatchHistorySumOrderByAggregateInput
  }

  export type WatchHistoryScalarWhereWithAggregatesInput = {
    AND?: WatchHistoryScalarWhereWithAggregatesInput | WatchHistoryScalarWhereWithAggregatesInput[]
    OR?: WatchHistoryScalarWhereWithAggregatesInput[]
    NOT?: WatchHistoryScalarWhereWithAggregatesInput | WatchHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WatchHistory"> | string
    userId?: StringWithAggregatesFilter<"WatchHistory"> | string
    episodeId?: StringWithAggregatesFilter<"WatchHistory"> | string
    seriesId?: StringWithAggregatesFilter<"WatchHistory"> | string
    progressSeconds?: IntWithAggregatesFilter<"WatchHistory"> | number
    durationSeconds?: IntWithAggregatesFilter<"WatchHistory"> | number
    isCompleted?: BoolWithAggregatesFilter<"WatchHistory"> | boolean
    watchedAt?: DateTimeWithAggregatesFilter<"WatchHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WatchHistory"> | Date | string
  }

  export type WatchListWhereInput = {
    AND?: WatchListWhereInput | WatchListWhereInput[]
    OR?: WatchListWhereInput[]
    NOT?: WatchListWhereInput | WatchListWhereInput[]
    id?: StringFilter<"WatchList"> | string
    userId?: StringFilter<"WatchList"> | string
    seriesId?: StringFilter<"WatchList"> | string
    addedAt?: DateTimeFilter<"WatchList"> | Date | string
    series?: XOR<SeriesScalarRelationFilter, SeriesWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WatchListOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    seriesId?: SortOrder
    addedAt?: SortOrder
    series?: SeriesOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WatchListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_seriesId?: WatchListUserIdSeriesIdCompoundUniqueInput
    AND?: WatchListWhereInput | WatchListWhereInput[]
    OR?: WatchListWhereInput[]
    NOT?: WatchListWhereInput | WatchListWhereInput[]
    userId?: StringFilter<"WatchList"> | string
    seriesId?: StringFilter<"WatchList"> | string
    addedAt?: DateTimeFilter<"WatchList"> | Date | string
    series?: XOR<SeriesScalarRelationFilter, SeriesWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_seriesId">

  export type WatchListOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    seriesId?: SortOrder
    addedAt?: SortOrder
    _count?: WatchListCountOrderByAggregateInput
    _max?: WatchListMaxOrderByAggregateInput
    _min?: WatchListMinOrderByAggregateInput
  }

  export type WatchListScalarWhereWithAggregatesInput = {
    AND?: WatchListScalarWhereWithAggregatesInput | WatchListScalarWhereWithAggregatesInput[]
    OR?: WatchListScalarWhereWithAggregatesInput[]
    NOT?: WatchListScalarWhereWithAggregatesInput | WatchListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WatchList"> | string
    userId?: StringWithAggregatesFilter<"WatchList"> | string
    seriesId?: StringWithAggregatesFilter<"WatchList"> | string
    addedAt?: DateTimeWithAggregatesFilter<"WatchList"> | Date | string
  }

  export type AdminCreateInput = {
    email: string
    password: string
    firstName: string
    lastName?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminCreateManyInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName?: string | null
    role?: $Enums.AdminRole
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    subscription?: UserSubscriptionCreateNestedOneWithoutUserInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutUserInput
    watchList?: WatchListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    subscription?: UserSubscriptionUncheckedCreateNestedOneWithoutUserInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    subscription?: UserSubscriptionUpdateOneWithoutUserNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutUserNestedInput
    watchList?: WatchListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    subscription?: UserSubscriptionUncheckedUpdateOneWithoutUserNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserProfileCreateInput = {
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    language?: string
    country?: string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: number
    userId: string
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    language?: string
    country?: string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileCreateManyInput = {
    id?: number
    userId: string
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    language?: string
    country?: string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileUpdateManyMutationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SubscriptionPlanCreateInput = {
    id?: string
    name: string
    slug: string
    priceInPaise: number
    durationDays: number
    features?: SubscriptionPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutPlanInput
    subscriptions?: UserSubscriptionCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    priceInPaise: number
    durationDays: number
    features?: SubscriptionPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutPlanInput
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceInPaise?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutPlanNestedInput
    subscriptions?: UserSubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceInPaise?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutPlanNestedInput
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanCreateManyInput = {
    id?: string
    name: string
    slug: string
    priceInPaise: number
    durationDays: number
    features?: SubscriptionPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceInPaise?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceInPaise?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateInput = {
    id?: string
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    planId: string
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateManyInput = {
    id?: string
    userId: string
    planId: string
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amountInPaise: number
    currency?: string
    status?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutPaymentsInput
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    planId: string
    amountInPaise: number
    currency?: string
    status?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutPaymentsNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    amountInPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    planId: string
    amountInPaise: number
    currency?: string
    status?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    amountInPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    genres?: SeriesCreategenresInput | string[]
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.SeriesStatus
    releaseDate?: Date | string | null
    totalEpisodes?: number
    viewCount?: number
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: SeriesCategoryCreateNestedManyWithoutSeriesInput
    episodes?: EpisodeCreateNestedManyWithoutSeriesInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutSeriesInput
    watchList?: WatchListCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    genres?: SeriesCreategenresInput | string[]
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.SeriesStatus
    releaseDate?: Date | string | null
    totalEpisodes?: number
    viewCount?: number
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: SeriesCategoryUncheckedCreateNestedManyWithoutSeriesInput
    episodes?: EpisodeUncheckedCreateNestedManyWithoutSeriesInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutSeriesInput
    watchList?: WatchListUncheckedCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: SeriesUpdategenresInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalEpisodes?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: SeriesCategoryUpdateManyWithoutSeriesNestedInput
    episodes?: EpisodeUpdateManyWithoutSeriesNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutSeriesNestedInput
    watchList?: WatchListUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: SeriesUpdategenresInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalEpisodes?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: SeriesCategoryUncheckedUpdateManyWithoutSeriesNestedInput
    episodes?: EpisodeUncheckedUpdateManyWithoutSeriesNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutSeriesNestedInput
    watchList?: WatchListUncheckedUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesCreateManyInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    genres?: SeriesCreategenresInput | string[]
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.SeriesStatus
    releaseDate?: Date | string | null
    totalEpisodes?: number
    viewCount?: number
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: SeriesUpdategenresInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalEpisodes?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: SeriesUpdategenresInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalEpisodes?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateInput = {
    id?: string
    title: string
    episodeNumber: number
    description?: string | null
    thumbnailUrl?: string | null
    durationSeconds?: number
    isFree?: boolean
    viewCount?: number
    status?: $Enums.EpisodeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    series: SeriesCreateNestedOneWithoutEpisodesInput
    videoAsset?: VideoAssetCreateNestedOneWithoutEpisodeInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateInput = {
    id?: string
    seriesId: string
    title: string
    episodeNumber: number
    description?: string | null
    thumbnailUrl?: string | null
    durationSeconds?: number
    isFree?: boolean
    viewCount?: number
    status?: $Enums.EpisodeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    videoAsset?: VideoAssetUncheckedCreateNestedOneWithoutEpisodeInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumEpisodeStatusFieldUpdateOperationsInput | $Enums.EpisodeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateOneRequiredWithoutEpisodesNestedInput
    videoAsset?: VideoAssetUpdateOneWithoutEpisodeNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumEpisodeStatusFieldUpdateOperationsInput | $Enums.EpisodeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoAsset?: VideoAssetUncheckedUpdateOneWithoutEpisodeNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeCreateManyInput = {
    id?: string
    seriesId: string
    title: string
    episodeNumber: number
    description?: string | null
    thumbnailUrl?: string | null
    durationSeconds?: number
    isFree?: boolean
    viewCount?: number
    status?: $Enums.EpisodeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumEpisodeStatusFieldUpdateOperationsInput | $Enums.EpisodeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumEpisodeStatusFieldUpdateOperationsInput | $Enums.EpisodeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoAssetCreateInput = {
    id?: string
    originalPath?: string | null
    hlsDirectory?: string | null
    hlsManifestPath?: string | null
    durationSeconds?: number
    fileSizeBytes?: bigint | number
    resolution?: string | null
    status?: $Enums.VideoStatus
    processingError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episode: EpisodeCreateNestedOneWithoutVideoAssetInput
  }

  export type VideoAssetUncheckedCreateInput = {
    id?: string
    episodeId: string
    originalPath?: string | null
    hlsDirectory?: string | null
    hlsManifestPath?: string | null
    durationSeconds?: number
    fileSizeBytes?: bigint | number
    resolution?: string | null
    status?: $Enums.VideoStatus
    processingError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoAssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalPath?: NullableStringFieldUpdateOperationsInput | string | null
    hlsDirectory?: NullableStringFieldUpdateOperationsInput | string | null
    hlsManifestPath?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    fileSizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episode?: EpisodeUpdateOneRequiredWithoutVideoAssetNestedInput
  }

  export type VideoAssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeId?: StringFieldUpdateOperationsInput | string
    originalPath?: NullableStringFieldUpdateOperationsInput | string | null
    hlsDirectory?: NullableStringFieldUpdateOperationsInput | string | null
    hlsManifestPath?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    fileSizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoAssetCreateManyInput = {
    id?: string
    episodeId: string
    originalPath?: string | null
    hlsDirectory?: string | null
    hlsManifestPath?: string | null
    durationSeconds?: number
    fileSizeBytes?: bigint | number
    resolution?: string | null
    status?: $Enums.VideoStatus
    processingError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoAssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalPath?: NullableStringFieldUpdateOperationsInput | string | null
    hlsDirectory?: NullableStringFieldUpdateOperationsInput | string | null
    hlsManifestPath?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    fileSizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoAssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeId?: StringFieldUpdateOperationsInput | string
    originalPath?: NullableStringFieldUpdateOperationsInput | string | null
    hlsDirectory?: NullableStringFieldUpdateOperationsInput | string | null
    hlsManifestPath?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    fileSizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    displayOrder?: number
    isAutomatic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    series?: SeriesCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    displayOrder?: number
    isAutomatic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    series?: SeriesCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    displayOrder?: number
    isAutomatic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCategoryCreateInput = {
    id?: string
    displayOrder?: number
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutSeriesInput
    series: SeriesCreateNestedOneWithoutCategoriesInput
  }

  export type SeriesCategoryUncheckedCreateInput = {
    id?: string
    seriesId: string
    categoryId: string
    displayOrder?: number
    createdAt?: Date | string
  }

  export type SeriesCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSeriesNestedInput
    series?: SeriesUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type SeriesCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCategoryCreateManyInput = {
    id?: string
    seriesId: string
    categoryId: string
    displayOrder?: number
    createdAt?: Date | string
  }

  export type SeriesCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryCreateInput = {
    id?: string
    progressSeconds?: number
    durationSeconds?: number
    isCompleted?: boolean
    watchedAt?: Date | string
    updatedAt?: Date | string
    episode: EpisodeCreateNestedOneWithoutWatchHistoryInput
    series: SeriesCreateNestedOneWithoutWatchHistoryInput
    user: UserCreateNestedOneWithoutWatchHistoryInput
  }

  export type WatchHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    episodeId: string
    seriesId: string
    progressSeconds?: number
    durationSeconds?: number
    isCompleted?: boolean
    watchedAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressSeconds?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episode?: EpisodeUpdateOneRequiredWithoutWatchHistoryNestedInput
    series?: SeriesUpdateOneRequiredWithoutWatchHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutWatchHistoryNestedInput
  }

  export type WatchHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    episodeId?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    progressSeconds?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryCreateManyInput = {
    id?: string
    userId: string
    episodeId: string
    seriesId: string
    progressSeconds?: number
    durationSeconds?: number
    isCompleted?: boolean
    watchedAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressSeconds?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    episodeId?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    progressSeconds?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListCreateInput = {
    id?: string
    addedAt?: Date | string
    series: SeriesCreateNestedOneWithoutWatchListInput
    user: UserCreateNestedOneWithoutWatchListInput
  }

  export type WatchListUncheckedCreateInput = {
    id?: string
    userId: string
    seriesId: string
    addedAt?: Date | string
  }

  export type WatchListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateOneRequiredWithoutWatchListNestedInput
    user?: UserUpdateOneRequiredWithoutWatchListNestedInput
  }

  export type WatchListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListCreateManyInput = {
    id?: string
    userId: string
    seriesId: string
    addedAt?: Date | string
  }

  export type WatchListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type UserSubscriptionNullableScalarRelationFilter = {
    is?: UserSubscriptionWhereInput | null
    isNot?: UserSubscriptionWhereInput | null
  }

  export type WatchHistoryListRelationFilter = {
    every?: WatchHistoryWhereInput
    some?: WatchHistoryWhereInput
    none?: WatchHistoryWhereInput
  }

  export type WatchListListRelationFilter = {
    every?: WatchListWhereInput
    some?: WatchListWhereInput
    none?: WatchListWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    language?: SortOrder
    country?: SortOrder
    preferences?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    language?: SortOrder
    country?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    language?: SortOrder
    country?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserSubscriptionListRelationFilter = {
    every?: UserSubscriptionWhereInput
    some?: UserSubscriptionWhereInput
    none?: UserSubscriptionWhereInput
  }

  export type UserSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    priceInPaise?: SortOrder
    durationDays?: SortOrder
    features?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanAvgOrderByAggregateInput = {
    priceInPaise?: SortOrder
    durationDays?: SortOrder
  }

  export type SubscriptionPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    priceInPaise?: SortOrder
    durationDays?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    priceInPaise?: SortOrder
    durationDays?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanSumOrderByAggregateInput = {
    priceInPaise?: SortOrder
    durationDays?: SortOrder
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type SubscriptionPlanScalarRelationFilter = {
    is?: SubscriptionPlanWhereInput
    isNot?: SubscriptionPlanWhereInput
  }

  export type UserSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    amountInPaise?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amountInPaise?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    amountInPaise?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    amountInPaise?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amountInPaise?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumSeriesStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SeriesStatus | EnumSeriesStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSeriesStatusFilter<$PrismaModel> | $Enums.SeriesStatus
  }

  export type SeriesCategoryListRelationFilter = {
    every?: SeriesCategoryWhereInput
    some?: SeriesCategoryWhereInput
    none?: SeriesCategoryWhereInput
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type SeriesCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeriesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    genres?: SortOrder
    thumbnailUrl?: SortOrder
    bannerUrl?: SortOrder
    status?: SortOrder
    releaseDate?: SortOrder
    totalEpisodes?: SortOrder
    viewCount?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesAvgOrderByAggregateInput = {
    totalEpisodes?: SortOrder
    viewCount?: SortOrder
  }

  export type SeriesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    bannerUrl?: SortOrder
    status?: SortOrder
    releaseDate?: SortOrder
    totalEpisodes?: SortOrder
    viewCount?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    bannerUrl?: SortOrder
    status?: SortOrder
    releaseDate?: SortOrder
    totalEpisodes?: SortOrder
    viewCount?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesSumOrderByAggregateInput = {
    totalEpisodes?: SortOrder
    viewCount?: SortOrder
  }

  export type EnumSeriesStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeriesStatus | EnumSeriesStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSeriesStatusWithAggregatesFilter<$PrismaModel> | $Enums.SeriesStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeriesStatusFilter<$PrismaModel>
    _max?: NestedEnumSeriesStatusFilter<$PrismaModel>
  }

  export type EnumEpisodeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EpisodeStatus | EnumEpisodeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EpisodeStatus[] | ListEnumEpisodeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EpisodeStatus[] | ListEnumEpisodeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEpisodeStatusFilter<$PrismaModel> | $Enums.EpisodeStatus
  }

  export type SeriesScalarRelationFilter = {
    is?: SeriesWhereInput
    isNot?: SeriesWhereInput
  }

  export type VideoAssetNullableScalarRelationFilter = {
    is?: VideoAssetWhereInput | null
    isNot?: VideoAssetWhereInput | null
  }

  export type EpisodeSeriesIdEpisodeNumberCompoundUniqueInput = {
    seriesId: string
    episodeNumber: number
  }

  export type EpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    seriesId?: SortOrder
    title?: SortOrder
    episodeNumber?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    durationSeconds?: SortOrder
    isFree?: SortOrder
    viewCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    episodeNumber?: SortOrder
    durationSeconds?: SortOrder
    viewCount?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    seriesId?: SortOrder
    title?: SortOrder
    episodeNumber?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    durationSeconds?: SortOrder
    isFree?: SortOrder
    viewCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    seriesId?: SortOrder
    title?: SortOrder
    episodeNumber?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    durationSeconds?: SortOrder
    isFree?: SortOrder
    viewCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    episodeNumber?: SortOrder
    durationSeconds?: SortOrder
    viewCount?: SortOrder
  }

  export type EnumEpisodeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EpisodeStatus | EnumEpisodeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EpisodeStatus[] | ListEnumEpisodeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EpisodeStatus[] | ListEnumEpisodeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEpisodeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EpisodeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEpisodeStatusFilter<$PrismaModel>
    _max?: NestedEnumEpisodeStatusFilter<$PrismaModel>
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

  export type EnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
  }

  export type EpisodeScalarRelationFilter = {
    is?: EpisodeWhereInput
    isNot?: EpisodeWhereInput
  }

  export type VideoAssetCountOrderByAggregateInput = {
    id?: SortOrder
    episodeId?: SortOrder
    originalPath?: SortOrder
    hlsDirectory?: SortOrder
    hlsManifestPath?: SortOrder
    durationSeconds?: SortOrder
    fileSizeBytes?: SortOrder
    resolution?: SortOrder
    status?: SortOrder
    processingError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoAssetAvgOrderByAggregateInput = {
    durationSeconds?: SortOrder
    fileSizeBytes?: SortOrder
  }

  export type VideoAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    episodeId?: SortOrder
    originalPath?: SortOrder
    hlsDirectory?: SortOrder
    hlsManifestPath?: SortOrder
    durationSeconds?: SortOrder
    fileSizeBytes?: SortOrder
    resolution?: SortOrder
    status?: SortOrder
    processingError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoAssetMinOrderByAggregateInput = {
    id?: SortOrder
    episodeId?: SortOrder
    originalPath?: SortOrder
    hlsDirectory?: SortOrder
    hlsManifestPath?: SortOrder
    durationSeconds?: SortOrder
    fileSizeBytes?: SortOrder
    resolution?: SortOrder
    status?: SortOrder
    processingError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoAssetSumOrderByAggregateInput = {
    durationSeconds?: SortOrder
    fileSizeBytes?: SortOrder
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

  export type EnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isAutomatic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isAutomatic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    isAutomatic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SeriesCategorySeriesIdCategoryIdCompoundUniqueInput = {
    seriesId: string
    categoryId: string
  }

  export type SeriesCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    seriesId?: SortOrder
    categoryId?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type SeriesCategoryAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type SeriesCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    seriesId?: SortOrder
    categoryId?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type SeriesCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    seriesId?: SortOrder
    categoryId?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type SeriesCategorySumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type WatchHistoryUserIdEpisodeIdCompoundUniqueInput = {
    userId: string
    episodeId: string
  }

  export type WatchHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    episodeId?: SortOrder
    seriesId?: SortOrder
    progressSeconds?: SortOrder
    durationSeconds?: SortOrder
    isCompleted?: SortOrder
    watchedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchHistoryAvgOrderByAggregateInput = {
    progressSeconds?: SortOrder
    durationSeconds?: SortOrder
  }

  export type WatchHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    episodeId?: SortOrder
    seriesId?: SortOrder
    progressSeconds?: SortOrder
    durationSeconds?: SortOrder
    isCompleted?: SortOrder
    watchedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    episodeId?: SortOrder
    seriesId?: SortOrder
    progressSeconds?: SortOrder
    durationSeconds?: SortOrder
    isCompleted?: SortOrder
    watchedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchHistorySumOrderByAggregateInput = {
    progressSeconds?: SortOrder
    durationSeconds?: SortOrder
  }

  export type WatchListUserIdSeriesIdCompoundUniqueInput = {
    userId: string
    seriesId: string
  }

  export type WatchListCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    seriesId?: SortOrder
    addedAt?: SortOrder
  }

  export type WatchListMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    seriesId?: SortOrder
    addedAt?: SortOrder
  }

  export type WatchListMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    seriesId?: SortOrder
    addedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAdminRoleFieldUpdateOperationsInput = {
    set?: $Enums.AdminRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserSubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput
    connect?: UserSubscriptionWhereUniqueInput
  }

  export type WatchHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchHistoryCreateWithoutUserInput, WatchHistoryUncheckedCreateWithoutUserInput> | WatchHistoryCreateWithoutUserInput[] | WatchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutUserInput | WatchHistoryCreateOrConnectWithoutUserInput[]
    createMany?: WatchHistoryCreateManyUserInputEnvelope
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
  }

  export type WatchListCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput> | WatchListCreateWithoutUserInput[] | WatchListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutUserInput | WatchListCreateOrConnectWithoutUserInput[]
    createMany?: WatchListCreateManyUserInputEnvelope
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserSubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput
    connect?: UserSubscriptionWhereUniqueInput
  }

  export type WatchHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchHistoryCreateWithoutUserInput, WatchHistoryUncheckedCreateWithoutUserInput> | WatchHistoryCreateWithoutUserInput[] | WatchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutUserInput | WatchHistoryCreateOrConnectWithoutUserInput[]
    createMany?: WatchHistoryCreateManyUserInputEnvelope
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
  }

  export type WatchListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput> | WatchListCreateWithoutUserInput[] | WatchListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutUserInput | WatchListCreateOrConnectWithoutUserInput[]
    createMany?: WatchListCreateManyUserInputEnvelope
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserSubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput
    upsert?: UserSubscriptionUpsertWithoutUserInput
    disconnect?: UserSubscriptionWhereInput | boolean
    delete?: UserSubscriptionWhereInput | boolean
    connect?: UserSubscriptionWhereUniqueInput
    update?: XOR<XOR<UserSubscriptionUpdateToOneWithWhereWithoutUserInput, UserSubscriptionUpdateWithoutUserInput>, UserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type WatchHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchHistoryCreateWithoutUserInput, WatchHistoryUncheckedCreateWithoutUserInput> | WatchHistoryCreateWithoutUserInput[] | WatchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutUserInput | WatchHistoryCreateOrConnectWithoutUserInput[]
    upsert?: WatchHistoryUpsertWithWhereUniqueWithoutUserInput | WatchHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchHistoryCreateManyUserInputEnvelope
    set?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    disconnect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    delete?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    update?: WatchHistoryUpdateWithWhereUniqueWithoutUserInput | WatchHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchHistoryUpdateManyWithWhereWithoutUserInput | WatchHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
  }

  export type WatchListUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput> | WatchListCreateWithoutUserInput[] | WatchListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutUserInput | WatchListCreateOrConnectWithoutUserInput[]
    upsert?: WatchListUpsertWithWhereUniqueWithoutUserInput | WatchListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchListCreateManyUserInputEnvelope
    set?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    disconnect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    delete?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    update?: WatchListUpdateWithWhereUniqueWithoutUserInput | WatchListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchListUpdateManyWithWhereWithoutUserInput | WatchListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserSubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput
    upsert?: UserSubscriptionUpsertWithoutUserInput
    disconnect?: UserSubscriptionWhereInput | boolean
    delete?: UserSubscriptionWhereInput | boolean
    connect?: UserSubscriptionWhereUniqueInput
    update?: XOR<XOR<UserSubscriptionUpdateToOneWithWhereWithoutUserInput, UserSubscriptionUpdateWithoutUserInput>, UserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type WatchHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchHistoryCreateWithoutUserInput, WatchHistoryUncheckedCreateWithoutUserInput> | WatchHistoryCreateWithoutUserInput[] | WatchHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutUserInput | WatchHistoryCreateOrConnectWithoutUserInput[]
    upsert?: WatchHistoryUpsertWithWhereUniqueWithoutUserInput | WatchHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchHistoryCreateManyUserInputEnvelope
    set?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    disconnect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    delete?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    update?: WatchHistoryUpdateWithWhereUniqueWithoutUserInput | WatchHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchHistoryUpdateManyWithWhereWithoutUserInput | WatchHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
  }

  export type WatchListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput> | WatchListCreateWithoutUserInput[] | WatchListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutUserInput | WatchListCreateOrConnectWithoutUserInput[]
    upsert?: WatchListUpsertWithWhereUniqueWithoutUserInput | WatchListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchListCreateManyUserInputEnvelope
    set?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    disconnect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    delete?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    update?: WatchListUpdateWithWhereUniqueWithoutUserInput | WatchListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchListUpdateManyWithWhereWithoutUserInput | WatchListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type SubscriptionPlanCreatefeaturesInput = {
    set: string[]
  }

  export type PaymentCreateNestedManyWithoutPlanInput = {
    create?: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput> | PaymentCreateWithoutPlanInput[] | PaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPlanInput | PaymentCreateOrConnectWithoutPlanInput[]
    createMany?: PaymentCreateManyPlanInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UserSubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<UserSubscriptionCreateWithoutPlanInput, UserSubscriptionUncheckedCreateWithoutPlanInput> | UserSubscriptionCreateWithoutPlanInput[] | UserSubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPlanInput | UserSubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: UserSubscriptionCreateManyPlanInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput> | PaymentCreateWithoutPlanInput[] | PaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPlanInput | PaymentCreateOrConnectWithoutPlanInput[]
    createMany?: PaymentCreateManyPlanInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UserSubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<UserSubscriptionCreateWithoutPlanInput, UserSubscriptionUncheckedCreateWithoutPlanInput> | UserSubscriptionCreateWithoutPlanInput[] | UserSubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPlanInput | UserSubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: UserSubscriptionCreateManyPlanInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type SubscriptionPlanUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PaymentUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput> | PaymentCreateWithoutPlanInput[] | PaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPlanInput | PaymentCreateOrConnectWithoutPlanInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPlanInput | PaymentUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PaymentCreateManyPlanInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPlanInput | PaymentUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPlanInput | PaymentUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserSubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutPlanInput, UserSubscriptionUncheckedCreateWithoutPlanInput> | UserSubscriptionCreateWithoutPlanInput[] | UserSubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPlanInput | UserSubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutPlanInput | UserSubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: UserSubscriptionCreateManyPlanInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutPlanInput | UserSubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutPlanInput | UserSubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput> | PaymentCreateWithoutPlanInput[] | PaymentUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutPlanInput | PaymentCreateOrConnectWithoutPlanInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutPlanInput | PaymentUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PaymentCreateManyPlanInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutPlanInput | PaymentUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutPlanInput | PaymentUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutPlanInput, UserSubscriptionUncheckedCreateWithoutPlanInput> | UserSubscriptionCreateWithoutPlanInput[] | UserSubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutPlanInput | UserSubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutPlanInput | UserSubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: UserSubscriptionCreateManyPlanInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutPlanInput | UserSubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutPlanInput | UserSubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput
    upsert?: SubscriptionPlanUpsertWithoutSubscriptionsInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutSubscriptionsInput, SubscriptionPlanUpdateWithoutSubscriptionsInput>, SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type SubscriptionPlanCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SubscriptionPlanCreateWithoutPaymentsInput, SubscriptionPlanUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutPaymentsInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutPaymentsInput, SubscriptionPlanUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutPaymentsInput
    upsert?: SubscriptionPlanUpsertWithoutPaymentsInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutPaymentsInput, SubscriptionPlanUpdateWithoutPaymentsInput>, SubscriptionPlanUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type SeriesCreategenresInput = {
    set: string[]
  }

  export type SeriesCategoryCreateNestedManyWithoutSeriesInput = {
    create?: XOR<SeriesCategoryCreateWithoutSeriesInput, SeriesCategoryUncheckedCreateWithoutSeriesInput> | SeriesCategoryCreateWithoutSeriesInput[] | SeriesCategoryUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: SeriesCategoryCreateOrConnectWithoutSeriesInput | SeriesCategoryCreateOrConnectWithoutSeriesInput[]
    createMany?: SeriesCategoryCreateManySeriesInputEnvelope
    connect?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
  }

  export type EpisodeCreateNestedManyWithoutSeriesInput = {
    create?: XOR<EpisodeCreateWithoutSeriesInput, EpisodeUncheckedCreateWithoutSeriesInput> | EpisodeCreateWithoutSeriesInput[] | EpisodeUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeriesInput | EpisodeCreateOrConnectWithoutSeriesInput[]
    createMany?: EpisodeCreateManySeriesInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type WatchHistoryCreateNestedManyWithoutSeriesInput = {
    create?: XOR<WatchHistoryCreateWithoutSeriesInput, WatchHistoryUncheckedCreateWithoutSeriesInput> | WatchHistoryCreateWithoutSeriesInput[] | WatchHistoryUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutSeriesInput | WatchHistoryCreateOrConnectWithoutSeriesInput[]
    createMany?: WatchHistoryCreateManySeriesInputEnvelope
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
  }

  export type WatchListCreateNestedManyWithoutSeriesInput = {
    create?: XOR<WatchListCreateWithoutSeriesInput, WatchListUncheckedCreateWithoutSeriesInput> | WatchListCreateWithoutSeriesInput[] | WatchListUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutSeriesInput | WatchListCreateOrConnectWithoutSeriesInput[]
    createMany?: WatchListCreateManySeriesInputEnvelope
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
  }

  export type SeriesCategoryUncheckedCreateNestedManyWithoutSeriesInput = {
    create?: XOR<SeriesCategoryCreateWithoutSeriesInput, SeriesCategoryUncheckedCreateWithoutSeriesInput> | SeriesCategoryCreateWithoutSeriesInput[] | SeriesCategoryUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: SeriesCategoryCreateOrConnectWithoutSeriesInput | SeriesCategoryCreateOrConnectWithoutSeriesInput[]
    createMany?: SeriesCategoryCreateManySeriesInputEnvelope
    connect?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
  }

  export type EpisodeUncheckedCreateNestedManyWithoutSeriesInput = {
    create?: XOR<EpisodeCreateWithoutSeriesInput, EpisodeUncheckedCreateWithoutSeriesInput> | EpisodeCreateWithoutSeriesInput[] | EpisodeUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeriesInput | EpisodeCreateOrConnectWithoutSeriesInput[]
    createMany?: EpisodeCreateManySeriesInputEnvelope
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
  }

  export type WatchHistoryUncheckedCreateNestedManyWithoutSeriesInput = {
    create?: XOR<WatchHistoryCreateWithoutSeriesInput, WatchHistoryUncheckedCreateWithoutSeriesInput> | WatchHistoryCreateWithoutSeriesInput[] | WatchHistoryUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutSeriesInput | WatchHistoryCreateOrConnectWithoutSeriesInput[]
    createMany?: WatchHistoryCreateManySeriesInputEnvelope
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
  }

  export type WatchListUncheckedCreateNestedManyWithoutSeriesInput = {
    create?: XOR<WatchListCreateWithoutSeriesInput, WatchListUncheckedCreateWithoutSeriesInput> | WatchListCreateWithoutSeriesInput[] | WatchListUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutSeriesInput | WatchListCreateOrConnectWithoutSeriesInput[]
    createMany?: WatchListCreateManySeriesInputEnvelope
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
  }

  export type SeriesUpdategenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumSeriesStatusFieldUpdateOperationsInput = {
    set?: $Enums.SeriesStatus
  }

  export type SeriesCategoryUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<SeriesCategoryCreateWithoutSeriesInput, SeriesCategoryUncheckedCreateWithoutSeriesInput> | SeriesCategoryCreateWithoutSeriesInput[] | SeriesCategoryUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: SeriesCategoryCreateOrConnectWithoutSeriesInput | SeriesCategoryCreateOrConnectWithoutSeriesInput[]
    upsert?: SeriesCategoryUpsertWithWhereUniqueWithoutSeriesInput | SeriesCategoryUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: SeriesCategoryCreateManySeriesInputEnvelope
    set?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    disconnect?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    delete?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    connect?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    update?: SeriesCategoryUpdateWithWhereUniqueWithoutSeriesInput | SeriesCategoryUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: SeriesCategoryUpdateManyWithWhereWithoutSeriesInput | SeriesCategoryUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: SeriesCategoryScalarWhereInput | SeriesCategoryScalarWhereInput[]
  }

  export type EpisodeUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<EpisodeCreateWithoutSeriesInput, EpisodeUncheckedCreateWithoutSeriesInput> | EpisodeCreateWithoutSeriesInput[] | EpisodeUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeriesInput | EpisodeCreateOrConnectWithoutSeriesInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutSeriesInput | EpisodeUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: EpisodeCreateManySeriesInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutSeriesInput | EpisodeUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutSeriesInput | EpisodeUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type WatchHistoryUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<WatchHistoryCreateWithoutSeriesInput, WatchHistoryUncheckedCreateWithoutSeriesInput> | WatchHistoryCreateWithoutSeriesInput[] | WatchHistoryUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutSeriesInput | WatchHistoryCreateOrConnectWithoutSeriesInput[]
    upsert?: WatchHistoryUpsertWithWhereUniqueWithoutSeriesInput | WatchHistoryUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: WatchHistoryCreateManySeriesInputEnvelope
    set?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    disconnect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    delete?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    update?: WatchHistoryUpdateWithWhereUniqueWithoutSeriesInput | WatchHistoryUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: WatchHistoryUpdateManyWithWhereWithoutSeriesInput | WatchHistoryUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
  }

  export type WatchListUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<WatchListCreateWithoutSeriesInput, WatchListUncheckedCreateWithoutSeriesInput> | WatchListCreateWithoutSeriesInput[] | WatchListUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutSeriesInput | WatchListCreateOrConnectWithoutSeriesInput[]
    upsert?: WatchListUpsertWithWhereUniqueWithoutSeriesInput | WatchListUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: WatchListCreateManySeriesInputEnvelope
    set?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    disconnect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    delete?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    update?: WatchListUpdateWithWhereUniqueWithoutSeriesInput | WatchListUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: WatchListUpdateManyWithWhereWithoutSeriesInput | WatchListUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
  }

  export type SeriesCategoryUncheckedUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<SeriesCategoryCreateWithoutSeriesInput, SeriesCategoryUncheckedCreateWithoutSeriesInput> | SeriesCategoryCreateWithoutSeriesInput[] | SeriesCategoryUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: SeriesCategoryCreateOrConnectWithoutSeriesInput | SeriesCategoryCreateOrConnectWithoutSeriesInput[]
    upsert?: SeriesCategoryUpsertWithWhereUniqueWithoutSeriesInput | SeriesCategoryUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: SeriesCategoryCreateManySeriesInputEnvelope
    set?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    disconnect?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    delete?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    connect?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    update?: SeriesCategoryUpdateWithWhereUniqueWithoutSeriesInput | SeriesCategoryUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: SeriesCategoryUpdateManyWithWhereWithoutSeriesInput | SeriesCategoryUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: SeriesCategoryScalarWhereInput | SeriesCategoryScalarWhereInput[]
  }

  export type EpisodeUncheckedUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<EpisodeCreateWithoutSeriesInput, EpisodeUncheckedCreateWithoutSeriesInput> | EpisodeCreateWithoutSeriesInput[] | EpisodeUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeriesInput | EpisodeCreateOrConnectWithoutSeriesInput[]
    upsert?: EpisodeUpsertWithWhereUniqueWithoutSeriesInput | EpisodeUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: EpisodeCreateManySeriesInputEnvelope
    set?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    disconnect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    delete?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    connect?: EpisodeWhereUniqueInput | EpisodeWhereUniqueInput[]
    update?: EpisodeUpdateWithWhereUniqueWithoutSeriesInput | EpisodeUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: EpisodeUpdateManyWithWhereWithoutSeriesInput | EpisodeUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
  }

  export type WatchHistoryUncheckedUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<WatchHistoryCreateWithoutSeriesInput, WatchHistoryUncheckedCreateWithoutSeriesInput> | WatchHistoryCreateWithoutSeriesInput[] | WatchHistoryUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutSeriesInput | WatchHistoryCreateOrConnectWithoutSeriesInput[]
    upsert?: WatchHistoryUpsertWithWhereUniqueWithoutSeriesInput | WatchHistoryUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: WatchHistoryCreateManySeriesInputEnvelope
    set?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    disconnect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    delete?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    update?: WatchHistoryUpdateWithWhereUniqueWithoutSeriesInput | WatchHistoryUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: WatchHistoryUpdateManyWithWhereWithoutSeriesInput | WatchHistoryUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
  }

  export type WatchListUncheckedUpdateManyWithoutSeriesNestedInput = {
    create?: XOR<WatchListCreateWithoutSeriesInput, WatchListUncheckedCreateWithoutSeriesInput> | WatchListCreateWithoutSeriesInput[] | WatchListUncheckedCreateWithoutSeriesInput[]
    connectOrCreate?: WatchListCreateOrConnectWithoutSeriesInput | WatchListCreateOrConnectWithoutSeriesInput[]
    upsert?: WatchListUpsertWithWhereUniqueWithoutSeriesInput | WatchListUpsertWithWhereUniqueWithoutSeriesInput[]
    createMany?: WatchListCreateManySeriesInputEnvelope
    set?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    disconnect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    delete?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    connect?: WatchListWhereUniqueInput | WatchListWhereUniqueInput[]
    update?: WatchListUpdateWithWhereUniqueWithoutSeriesInput | WatchListUpdateWithWhereUniqueWithoutSeriesInput[]
    updateMany?: WatchListUpdateManyWithWhereWithoutSeriesInput | WatchListUpdateManyWithWhereWithoutSeriesInput[]
    deleteMany?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
  }

  export type SeriesCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<SeriesCreateWithoutEpisodesInput, SeriesUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutEpisodesInput
    connect?: SeriesWhereUniqueInput
  }

  export type VideoAssetCreateNestedOneWithoutEpisodeInput = {
    create?: XOR<VideoAssetCreateWithoutEpisodeInput, VideoAssetUncheckedCreateWithoutEpisodeInput>
    connectOrCreate?: VideoAssetCreateOrConnectWithoutEpisodeInput
    connect?: VideoAssetWhereUniqueInput
  }

  export type WatchHistoryCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<WatchHistoryCreateWithoutEpisodeInput, WatchHistoryUncheckedCreateWithoutEpisodeInput> | WatchHistoryCreateWithoutEpisodeInput[] | WatchHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutEpisodeInput | WatchHistoryCreateOrConnectWithoutEpisodeInput[]
    createMany?: WatchHistoryCreateManyEpisodeInputEnvelope
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
  }

  export type VideoAssetUncheckedCreateNestedOneWithoutEpisodeInput = {
    create?: XOR<VideoAssetCreateWithoutEpisodeInput, VideoAssetUncheckedCreateWithoutEpisodeInput>
    connectOrCreate?: VideoAssetCreateOrConnectWithoutEpisodeInput
    connect?: VideoAssetWhereUniqueInput
  }

  export type WatchHistoryUncheckedCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<WatchHistoryCreateWithoutEpisodeInput, WatchHistoryUncheckedCreateWithoutEpisodeInput> | WatchHistoryCreateWithoutEpisodeInput[] | WatchHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutEpisodeInput | WatchHistoryCreateOrConnectWithoutEpisodeInput[]
    createMany?: WatchHistoryCreateManyEpisodeInputEnvelope
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
  }

  export type EnumEpisodeStatusFieldUpdateOperationsInput = {
    set?: $Enums.EpisodeStatus
  }

  export type SeriesUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<SeriesCreateWithoutEpisodesInput, SeriesUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutEpisodesInput
    upsert?: SeriesUpsertWithoutEpisodesInput
    connect?: SeriesWhereUniqueInput
    update?: XOR<XOR<SeriesUpdateToOneWithWhereWithoutEpisodesInput, SeriesUpdateWithoutEpisodesInput>, SeriesUncheckedUpdateWithoutEpisodesInput>
  }

  export type VideoAssetUpdateOneWithoutEpisodeNestedInput = {
    create?: XOR<VideoAssetCreateWithoutEpisodeInput, VideoAssetUncheckedCreateWithoutEpisodeInput>
    connectOrCreate?: VideoAssetCreateOrConnectWithoutEpisodeInput
    upsert?: VideoAssetUpsertWithoutEpisodeInput
    disconnect?: VideoAssetWhereInput | boolean
    delete?: VideoAssetWhereInput | boolean
    connect?: VideoAssetWhereUniqueInput
    update?: XOR<XOR<VideoAssetUpdateToOneWithWhereWithoutEpisodeInput, VideoAssetUpdateWithoutEpisodeInput>, VideoAssetUncheckedUpdateWithoutEpisodeInput>
  }

  export type WatchHistoryUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<WatchHistoryCreateWithoutEpisodeInput, WatchHistoryUncheckedCreateWithoutEpisodeInput> | WatchHistoryCreateWithoutEpisodeInput[] | WatchHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutEpisodeInput | WatchHistoryCreateOrConnectWithoutEpisodeInput[]
    upsert?: WatchHistoryUpsertWithWhereUniqueWithoutEpisodeInput | WatchHistoryUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: WatchHistoryCreateManyEpisodeInputEnvelope
    set?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    disconnect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    delete?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    update?: WatchHistoryUpdateWithWhereUniqueWithoutEpisodeInput | WatchHistoryUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: WatchHistoryUpdateManyWithWhereWithoutEpisodeInput | WatchHistoryUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
  }

  export type VideoAssetUncheckedUpdateOneWithoutEpisodeNestedInput = {
    create?: XOR<VideoAssetCreateWithoutEpisodeInput, VideoAssetUncheckedCreateWithoutEpisodeInput>
    connectOrCreate?: VideoAssetCreateOrConnectWithoutEpisodeInput
    upsert?: VideoAssetUpsertWithoutEpisodeInput
    disconnect?: VideoAssetWhereInput | boolean
    delete?: VideoAssetWhereInput | boolean
    connect?: VideoAssetWhereUniqueInput
    update?: XOR<XOR<VideoAssetUpdateToOneWithWhereWithoutEpisodeInput, VideoAssetUpdateWithoutEpisodeInput>, VideoAssetUncheckedUpdateWithoutEpisodeInput>
  }

  export type WatchHistoryUncheckedUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<WatchHistoryCreateWithoutEpisodeInput, WatchHistoryUncheckedCreateWithoutEpisodeInput> | WatchHistoryCreateWithoutEpisodeInput[] | WatchHistoryUncheckedCreateWithoutEpisodeInput[]
    connectOrCreate?: WatchHistoryCreateOrConnectWithoutEpisodeInput | WatchHistoryCreateOrConnectWithoutEpisodeInput[]
    upsert?: WatchHistoryUpsertWithWhereUniqueWithoutEpisodeInput | WatchHistoryUpsertWithWhereUniqueWithoutEpisodeInput[]
    createMany?: WatchHistoryCreateManyEpisodeInputEnvelope
    set?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    disconnect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    delete?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    connect?: WatchHistoryWhereUniqueInput | WatchHistoryWhereUniqueInput[]
    update?: WatchHistoryUpdateWithWhereUniqueWithoutEpisodeInput | WatchHistoryUpdateWithWhereUniqueWithoutEpisodeInput[]
    updateMany?: WatchHistoryUpdateManyWithWhereWithoutEpisodeInput | WatchHistoryUpdateManyWithWhereWithoutEpisodeInput[]
    deleteMany?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
  }

  export type EpisodeCreateNestedOneWithoutVideoAssetInput = {
    create?: XOR<EpisodeCreateWithoutVideoAssetInput, EpisodeUncheckedCreateWithoutVideoAssetInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutVideoAssetInput
    connect?: EpisodeWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumVideoStatusFieldUpdateOperationsInput = {
    set?: $Enums.VideoStatus
  }

  export type EpisodeUpdateOneRequiredWithoutVideoAssetNestedInput = {
    create?: XOR<EpisodeCreateWithoutVideoAssetInput, EpisodeUncheckedCreateWithoutVideoAssetInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutVideoAssetInput
    upsert?: EpisodeUpsertWithoutVideoAssetInput
    connect?: EpisodeWhereUniqueInput
    update?: XOR<XOR<EpisodeUpdateToOneWithWhereWithoutVideoAssetInput, EpisodeUpdateWithoutVideoAssetInput>, EpisodeUncheckedUpdateWithoutVideoAssetInput>
  }

  export type SeriesCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SeriesCategoryCreateWithoutCategoryInput, SeriesCategoryUncheckedCreateWithoutCategoryInput> | SeriesCategoryCreateWithoutCategoryInput[] | SeriesCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SeriesCategoryCreateOrConnectWithoutCategoryInput | SeriesCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SeriesCategoryCreateManyCategoryInputEnvelope
    connect?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
  }

  export type SeriesCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SeriesCategoryCreateWithoutCategoryInput, SeriesCategoryUncheckedCreateWithoutCategoryInput> | SeriesCategoryCreateWithoutCategoryInput[] | SeriesCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SeriesCategoryCreateOrConnectWithoutCategoryInput | SeriesCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SeriesCategoryCreateManyCategoryInputEnvelope
    connect?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
  }

  export type SeriesCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SeriesCategoryCreateWithoutCategoryInput, SeriesCategoryUncheckedCreateWithoutCategoryInput> | SeriesCategoryCreateWithoutCategoryInput[] | SeriesCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SeriesCategoryCreateOrConnectWithoutCategoryInput | SeriesCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SeriesCategoryUpsertWithWhereUniqueWithoutCategoryInput | SeriesCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SeriesCategoryCreateManyCategoryInputEnvelope
    set?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    disconnect?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    delete?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    connect?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    update?: SeriesCategoryUpdateWithWhereUniqueWithoutCategoryInput | SeriesCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SeriesCategoryUpdateManyWithWhereWithoutCategoryInput | SeriesCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SeriesCategoryScalarWhereInput | SeriesCategoryScalarWhereInput[]
  }

  export type SeriesCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SeriesCategoryCreateWithoutCategoryInput, SeriesCategoryUncheckedCreateWithoutCategoryInput> | SeriesCategoryCreateWithoutCategoryInput[] | SeriesCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SeriesCategoryCreateOrConnectWithoutCategoryInput | SeriesCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SeriesCategoryUpsertWithWhereUniqueWithoutCategoryInput | SeriesCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SeriesCategoryCreateManyCategoryInputEnvelope
    set?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    disconnect?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    delete?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    connect?: SeriesCategoryWhereUniqueInput | SeriesCategoryWhereUniqueInput[]
    update?: SeriesCategoryUpdateWithWhereUniqueWithoutCategoryInput | SeriesCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SeriesCategoryUpdateManyWithWhereWithoutCategoryInput | SeriesCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SeriesCategoryScalarWhereInput | SeriesCategoryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSeriesInput = {
    create?: XOR<CategoryCreateWithoutSeriesInput, CategoryUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSeriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type SeriesCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<SeriesCreateWithoutCategoriesInput, SeriesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutCategoriesInput
    connect?: SeriesWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutSeriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSeriesInput, CategoryUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSeriesInput
    upsert?: CategoryUpsertWithoutSeriesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSeriesInput, CategoryUpdateWithoutSeriesInput>, CategoryUncheckedUpdateWithoutSeriesInput>
  }

  export type SeriesUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<SeriesCreateWithoutCategoriesInput, SeriesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutCategoriesInput
    upsert?: SeriesUpsertWithoutCategoriesInput
    connect?: SeriesWhereUniqueInput
    update?: XOR<XOR<SeriesUpdateToOneWithWhereWithoutCategoriesInput, SeriesUpdateWithoutCategoriesInput>, SeriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type EpisodeCreateNestedOneWithoutWatchHistoryInput = {
    create?: XOR<EpisodeCreateWithoutWatchHistoryInput, EpisodeUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutWatchHistoryInput
    connect?: EpisodeWhereUniqueInput
  }

  export type SeriesCreateNestedOneWithoutWatchHistoryInput = {
    create?: XOR<SeriesCreateWithoutWatchHistoryInput, SeriesUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutWatchHistoryInput
    connect?: SeriesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWatchHistoryInput = {
    create?: XOR<UserCreateWithoutWatchHistoryInput, UserUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type EpisodeUpdateOneRequiredWithoutWatchHistoryNestedInput = {
    create?: XOR<EpisodeCreateWithoutWatchHistoryInput, EpisodeUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutWatchHistoryInput
    upsert?: EpisodeUpsertWithoutWatchHistoryInput
    connect?: EpisodeWhereUniqueInput
    update?: XOR<XOR<EpisodeUpdateToOneWithWhereWithoutWatchHistoryInput, EpisodeUpdateWithoutWatchHistoryInput>, EpisodeUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type SeriesUpdateOneRequiredWithoutWatchHistoryNestedInput = {
    create?: XOR<SeriesCreateWithoutWatchHistoryInput, SeriesUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutWatchHistoryInput
    upsert?: SeriesUpsertWithoutWatchHistoryInput
    connect?: SeriesWhereUniqueInput
    update?: XOR<XOR<SeriesUpdateToOneWithWhereWithoutWatchHistoryInput, SeriesUpdateWithoutWatchHistoryInput>, SeriesUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutWatchHistoryNestedInput = {
    create?: XOR<UserCreateWithoutWatchHistoryInput, UserUncheckedCreateWithoutWatchHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchHistoryInput
    upsert?: UserUpsertWithoutWatchHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchHistoryInput, UserUpdateWithoutWatchHistoryInput>, UserUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type SeriesCreateNestedOneWithoutWatchListInput = {
    create?: XOR<SeriesCreateWithoutWatchListInput, SeriesUncheckedCreateWithoutWatchListInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutWatchListInput
    connect?: SeriesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWatchListInput = {
    create?: XOR<UserCreateWithoutWatchListInput, UserUncheckedCreateWithoutWatchListInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchListInput
    connect?: UserWhereUniqueInput
  }

  export type SeriesUpdateOneRequiredWithoutWatchListNestedInput = {
    create?: XOR<SeriesCreateWithoutWatchListInput, SeriesUncheckedCreateWithoutWatchListInput>
    connectOrCreate?: SeriesCreateOrConnectWithoutWatchListInput
    upsert?: SeriesUpsertWithoutWatchListInput
    connect?: SeriesWhereUniqueInput
    update?: XOR<XOR<SeriesUpdateToOneWithWhereWithoutWatchListInput, SeriesUpdateWithoutWatchListInput>, SeriesUncheckedUpdateWithoutWatchListInput>
  }

  export type UserUpdateOneRequiredWithoutWatchListNestedInput = {
    create?: XOR<UserCreateWithoutWatchListInput, UserUncheckedCreateWithoutWatchListInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchListInput
    upsert?: UserUpsertWithoutWatchListInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchListInput, UserUpdateWithoutWatchListInput>, UserUncheckedUpdateWithoutWatchListInput>
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

  export type NestedEnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminRole[] | ListEnumAdminRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumSeriesStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SeriesStatus | EnumSeriesStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSeriesStatusFilter<$PrismaModel> | $Enums.SeriesStatus
  }

  export type NestedEnumSeriesStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeriesStatus | EnumSeriesStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSeriesStatusWithAggregatesFilter<$PrismaModel> | $Enums.SeriesStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeriesStatusFilter<$PrismaModel>
    _max?: NestedEnumSeriesStatusFilter<$PrismaModel>
  }

  export type NestedEnumEpisodeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EpisodeStatus | EnumEpisodeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EpisodeStatus[] | ListEnumEpisodeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EpisodeStatus[] | ListEnumEpisodeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEpisodeStatusFilter<$PrismaModel> | $Enums.EpisodeStatus
  }

  export type NestedEnumEpisodeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EpisodeStatus | EnumEpisodeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EpisodeStatus[] | ListEnumEpisodeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EpisodeStatus[] | ListEnumEpisodeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEpisodeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EpisodeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEpisodeStatusFilter<$PrismaModel>
    _max?: NestedEnumEpisodeStatusFilter<$PrismaModel>
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

  export type NestedEnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
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

  export type NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amountInPaise: number
    currency?: string
    status?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    planId: string
    amountInPaise: number
    currency?: string
    status?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileCreateWithoutUserInput = {
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    language?: string
    country?: string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    displayName?: string | null
    avatarUrl?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    language?: string
    country?: string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionCreateWithoutUserInput = {
    id?: string
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type UserSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    planId: string
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionCreateOrConnectWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type WatchHistoryCreateWithoutUserInput = {
    id?: string
    progressSeconds?: number
    durationSeconds?: number
    isCompleted?: boolean
    watchedAt?: Date | string
    updatedAt?: Date | string
    episode: EpisodeCreateNestedOneWithoutWatchHistoryInput
    series: SeriesCreateNestedOneWithoutWatchHistoryInput
  }

  export type WatchHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    episodeId: string
    seriesId: string
    progressSeconds?: number
    durationSeconds?: number
    isCompleted?: boolean
    watchedAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchHistoryCreateOrConnectWithoutUserInput = {
    where: WatchHistoryWhereUniqueInput
    create: XOR<WatchHistoryCreateWithoutUserInput, WatchHistoryUncheckedCreateWithoutUserInput>
  }

  export type WatchHistoryCreateManyUserInputEnvelope = {
    data: WatchHistoryCreateManyUserInput | WatchHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchListCreateWithoutUserInput = {
    id?: string
    addedAt?: Date | string
    series: SeriesCreateNestedOneWithoutWatchListInput
  }

  export type WatchListUncheckedCreateWithoutUserInput = {
    id?: string
    seriesId: string
    addedAt?: Date | string
  }

  export type WatchListCreateOrConnectWithoutUserInput = {
    where: WatchListWhereUniqueInput
    create: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput>
  }

  export type WatchListCreateManyUserInputEnvelope = {
    data: WatchListCreateManyUserInput | WatchListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    planId?: StringFilter<"Payment"> | string
    amountInPaise?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    razorpayOrderId?: StringNullableFilter<"Payment"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserSubscriptionUpsertWithoutUserInput = {
    update: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
    where?: UserSubscriptionWhereInput
  }

  export type UserSubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSubscriptionWhereInput
    data: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchHistoryWhereUniqueInput
    update: XOR<WatchHistoryUpdateWithoutUserInput, WatchHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<WatchHistoryCreateWithoutUserInput, WatchHistoryUncheckedCreateWithoutUserInput>
  }

  export type WatchHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchHistoryWhereUniqueInput
    data: XOR<WatchHistoryUpdateWithoutUserInput, WatchHistoryUncheckedUpdateWithoutUserInput>
  }

  export type WatchHistoryUpdateManyWithWhereWithoutUserInput = {
    where: WatchHistoryScalarWhereInput
    data: XOR<WatchHistoryUpdateManyMutationInput, WatchHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchHistoryScalarWhereInput = {
    AND?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
    OR?: WatchHistoryScalarWhereInput[]
    NOT?: WatchHistoryScalarWhereInput | WatchHistoryScalarWhereInput[]
    id?: StringFilter<"WatchHistory"> | string
    userId?: StringFilter<"WatchHistory"> | string
    episodeId?: StringFilter<"WatchHistory"> | string
    seriesId?: StringFilter<"WatchHistory"> | string
    progressSeconds?: IntFilter<"WatchHistory"> | number
    durationSeconds?: IntFilter<"WatchHistory"> | number
    isCompleted?: BoolFilter<"WatchHistory"> | boolean
    watchedAt?: DateTimeFilter<"WatchHistory"> | Date | string
    updatedAt?: DateTimeFilter<"WatchHistory"> | Date | string
  }

  export type WatchListUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchListWhereUniqueInput
    update: XOR<WatchListUpdateWithoutUserInput, WatchListUncheckedUpdateWithoutUserInput>
    create: XOR<WatchListCreateWithoutUserInput, WatchListUncheckedCreateWithoutUserInput>
  }

  export type WatchListUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchListWhereUniqueInput
    data: XOR<WatchListUpdateWithoutUserInput, WatchListUncheckedUpdateWithoutUserInput>
  }

  export type WatchListUpdateManyWithWhereWithoutUserInput = {
    where: WatchListScalarWhereInput
    data: XOR<WatchListUpdateManyMutationInput, WatchListUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchListScalarWhereInput = {
    AND?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
    OR?: WatchListScalarWhereInput[]
    NOT?: WatchListScalarWhereInput | WatchListScalarWhereInput[]
    id?: StringFilter<"WatchList"> | string
    userId?: StringFilter<"WatchList"> | string
    seriesId?: StringFilter<"WatchList"> | string
    addedAt?: DateTimeFilter<"WatchList"> | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionCreateNestedOneWithoutUserInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutUserInput
    watchList?: WatchListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionUncheckedCreateNestedOneWithoutUserInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUpdateOneWithoutUserNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutUserNestedInput
    watchList?: WatchListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUncheckedUpdateOneWithoutUserNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentCreateWithoutPlanInput = {
    id?: string
    amountInPaise: number
    currency?: string
    status?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutPlanInput = {
    id?: string
    userId: string
    amountInPaise: number
    currency?: string
    status?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutPlanInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput>
  }

  export type PaymentCreateManyPlanInputEnvelope = {
    data: PaymentCreateManyPlanInput | PaymentCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserSubscriptionCreateWithoutPlanInput = {
    id?: string
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    userId: string
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionCreateOrConnectWithoutPlanInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutPlanInput, UserSubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type UserSubscriptionCreateManyPlanInputEnvelope = {
    data: UserSubscriptionCreateManyPlanInput | UserSubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type PaymentUpsertWithWhereUniqueWithoutPlanInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutPlanInput, PaymentUncheckedUpdateWithoutPlanInput>
    create: XOR<PaymentCreateWithoutPlanInput, PaymentUncheckedCreateWithoutPlanInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutPlanInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutPlanInput, PaymentUncheckedUpdateWithoutPlanInput>
  }

  export type PaymentUpdateManyWithWhereWithoutPlanInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutPlanInput>
  }

  export type UserSubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: UserSubscriptionWhereUniqueInput
    update: XOR<UserSubscriptionUpdateWithoutPlanInput, UserSubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<UserSubscriptionCreateWithoutPlanInput, UserSubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type UserSubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: UserSubscriptionWhereUniqueInput
    data: XOR<UserSubscriptionUpdateWithoutPlanInput, UserSubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type UserSubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: UserSubscriptionScalarWhereInput
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type UserSubscriptionScalarWhereInput = {
    AND?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    OR?: UserSubscriptionScalarWhereInput[]
    NOT?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    planId?: StringFilter<"UserSubscription"> | string
    status?: EnumSubscriptionStatusFilter<"UserSubscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"UserSubscription"> | Date | string
    endDate?: DateTimeFilter<"UserSubscription"> | Date | string
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
  }

  export type SubscriptionPlanCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    slug: string
    priceInPaise: number
    durationDays: number
    features?: SubscriptionPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    slug: string
    priceInPaise: number
    durationDays: number
    features?: SubscriptionPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutUserInput
    watchList?: WatchListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionPlanUpsertWithoutSubscriptionsInput = {
    update: XOR<SubscriptionPlanUpdateWithoutSubscriptionsInput, SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutSubscriptionsInput, SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type SubscriptionPlanUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceInPaise?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceInPaise?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutUserNestedInput
    watchList?: WatchListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubscriptionPlanCreateWithoutPaymentsInput = {
    id?: string
    name: string
    slug: string
    priceInPaise: number
    durationDays: number
    features?: SubscriptionPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: UserSubscriptionCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    slug: string
    priceInPaise: number
    durationDays: number
    features?: SubscriptionPlanCreatefeaturesInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanCreateOrConnectWithoutPaymentsInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutPaymentsInput, SubscriptionPlanUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: UserProfileCreateNestedOneWithoutUserInput
    subscription?: UserSubscriptionCreateNestedOneWithoutUserInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutUserInput
    watchList?: WatchListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    subscription?: UserSubscriptionUncheckedCreateNestedOneWithoutUserInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutUserInput
    watchList?: WatchListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type SubscriptionPlanUpsertWithoutPaymentsInput = {
    update: XOR<SubscriptionPlanUpdateWithoutPaymentsInput, SubscriptionPlanUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SubscriptionPlanCreateWithoutPaymentsInput, SubscriptionPlanUncheckedCreateWithoutPaymentsInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutPaymentsInput, SubscriptionPlanUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubscriptionPlanUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceInPaise?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: UserSubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    priceInPaise?: IntFieldUpdateOperationsInput | number
    durationDays?: IntFieldUpdateOperationsInput | number
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: UserSubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    subscription?: UserSubscriptionUpdateOneWithoutUserNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutUserNestedInput
    watchList?: WatchListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    subscription?: UserSubscriptionUncheckedUpdateOneWithoutUserNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutUserNestedInput
    watchList?: WatchListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SeriesCategoryCreateWithoutSeriesInput = {
    id?: string
    displayOrder?: number
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutSeriesInput
  }

  export type SeriesCategoryUncheckedCreateWithoutSeriesInput = {
    id?: string
    categoryId: string
    displayOrder?: number
    createdAt?: Date | string
  }

  export type SeriesCategoryCreateOrConnectWithoutSeriesInput = {
    where: SeriesCategoryWhereUniqueInput
    create: XOR<SeriesCategoryCreateWithoutSeriesInput, SeriesCategoryUncheckedCreateWithoutSeriesInput>
  }

  export type SeriesCategoryCreateManySeriesInputEnvelope = {
    data: SeriesCategoryCreateManySeriesInput | SeriesCategoryCreateManySeriesInput[]
    skipDuplicates?: boolean
  }

  export type EpisodeCreateWithoutSeriesInput = {
    id?: string
    title: string
    episodeNumber: number
    description?: string | null
    thumbnailUrl?: string | null
    durationSeconds?: number
    isFree?: boolean
    viewCount?: number
    status?: $Enums.EpisodeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    videoAsset?: VideoAssetCreateNestedOneWithoutEpisodeInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutSeriesInput = {
    id?: string
    title: string
    episodeNumber: number
    description?: string | null
    thumbnailUrl?: string | null
    durationSeconds?: number
    isFree?: boolean
    viewCount?: number
    status?: $Enums.EpisodeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    videoAsset?: VideoAssetUncheckedCreateNestedOneWithoutEpisodeInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeCreateOrConnectWithoutSeriesInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutSeriesInput, EpisodeUncheckedCreateWithoutSeriesInput>
  }

  export type EpisodeCreateManySeriesInputEnvelope = {
    data: EpisodeCreateManySeriesInput | EpisodeCreateManySeriesInput[]
    skipDuplicates?: boolean
  }

  export type WatchHistoryCreateWithoutSeriesInput = {
    id?: string
    progressSeconds?: number
    durationSeconds?: number
    isCompleted?: boolean
    watchedAt?: Date | string
    updatedAt?: Date | string
    episode: EpisodeCreateNestedOneWithoutWatchHistoryInput
    user: UserCreateNestedOneWithoutWatchHistoryInput
  }

  export type WatchHistoryUncheckedCreateWithoutSeriesInput = {
    id?: string
    userId: string
    episodeId: string
    progressSeconds?: number
    durationSeconds?: number
    isCompleted?: boolean
    watchedAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchHistoryCreateOrConnectWithoutSeriesInput = {
    where: WatchHistoryWhereUniqueInput
    create: XOR<WatchHistoryCreateWithoutSeriesInput, WatchHistoryUncheckedCreateWithoutSeriesInput>
  }

  export type WatchHistoryCreateManySeriesInputEnvelope = {
    data: WatchHistoryCreateManySeriesInput | WatchHistoryCreateManySeriesInput[]
    skipDuplicates?: boolean
  }

  export type WatchListCreateWithoutSeriesInput = {
    id?: string
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchListInput
  }

  export type WatchListUncheckedCreateWithoutSeriesInput = {
    id?: string
    userId: string
    addedAt?: Date | string
  }

  export type WatchListCreateOrConnectWithoutSeriesInput = {
    where: WatchListWhereUniqueInput
    create: XOR<WatchListCreateWithoutSeriesInput, WatchListUncheckedCreateWithoutSeriesInput>
  }

  export type WatchListCreateManySeriesInputEnvelope = {
    data: WatchListCreateManySeriesInput | WatchListCreateManySeriesInput[]
    skipDuplicates?: boolean
  }

  export type SeriesCategoryUpsertWithWhereUniqueWithoutSeriesInput = {
    where: SeriesCategoryWhereUniqueInput
    update: XOR<SeriesCategoryUpdateWithoutSeriesInput, SeriesCategoryUncheckedUpdateWithoutSeriesInput>
    create: XOR<SeriesCategoryCreateWithoutSeriesInput, SeriesCategoryUncheckedCreateWithoutSeriesInput>
  }

  export type SeriesCategoryUpdateWithWhereUniqueWithoutSeriesInput = {
    where: SeriesCategoryWhereUniqueInput
    data: XOR<SeriesCategoryUpdateWithoutSeriesInput, SeriesCategoryUncheckedUpdateWithoutSeriesInput>
  }

  export type SeriesCategoryUpdateManyWithWhereWithoutSeriesInput = {
    where: SeriesCategoryScalarWhereInput
    data: XOR<SeriesCategoryUpdateManyMutationInput, SeriesCategoryUncheckedUpdateManyWithoutSeriesInput>
  }

  export type SeriesCategoryScalarWhereInput = {
    AND?: SeriesCategoryScalarWhereInput | SeriesCategoryScalarWhereInput[]
    OR?: SeriesCategoryScalarWhereInput[]
    NOT?: SeriesCategoryScalarWhereInput | SeriesCategoryScalarWhereInput[]
    id?: StringFilter<"SeriesCategory"> | string
    seriesId?: StringFilter<"SeriesCategory"> | string
    categoryId?: StringFilter<"SeriesCategory"> | string
    displayOrder?: IntFilter<"SeriesCategory"> | number
    createdAt?: DateTimeFilter<"SeriesCategory"> | Date | string
  }

  export type EpisodeUpsertWithWhereUniqueWithoutSeriesInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutSeriesInput, EpisodeUncheckedUpdateWithoutSeriesInput>
    create: XOR<EpisodeCreateWithoutSeriesInput, EpisodeUncheckedCreateWithoutSeriesInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutSeriesInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutSeriesInput, EpisodeUncheckedUpdateWithoutSeriesInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutSeriesInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutSeriesInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    OR?: EpisodeScalarWhereInput[]
    NOT?: EpisodeScalarWhereInput | EpisodeScalarWhereInput[]
    id?: StringFilter<"Episode"> | string
    seriesId?: StringFilter<"Episode"> | string
    title?: StringFilter<"Episode"> | string
    episodeNumber?: IntFilter<"Episode"> | number
    description?: StringNullableFilter<"Episode"> | string | null
    thumbnailUrl?: StringNullableFilter<"Episode"> | string | null
    durationSeconds?: IntFilter<"Episode"> | number
    isFree?: BoolFilter<"Episode"> | boolean
    viewCount?: IntFilter<"Episode"> | number
    status?: EnumEpisodeStatusFilter<"Episode"> | $Enums.EpisodeStatus
    createdAt?: DateTimeFilter<"Episode"> | Date | string
    updatedAt?: DateTimeFilter<"Episode"> | Date | string
  }

  export type WatchHistoryUpsertWithWhereUniqueWithoutSeriesInput = {
    where: WatchHistoryWhereUniqueInput
    update: XOR<WatchHistoryUpdateWithoutSeriesInput, WatchHistoryUncheckedUpdateWithoutSeriesInput>
    create: XOR<WatchHistoryCreateWithoutSeriesInput, WatchHistoryUncheckedCreateWithoutSeriesInput>
  }

  export type WatchHistoryUpdateWithWhereUniqueWithoutSeriesInput = {
    where: WatchHistoryWhereUniqueInput
    data: XOR<WatchHistoryUpdateWithoutSeriesInput, WatchHistoryUncheckedUpdateWithoutSeriesInput>
  }

  export type WatchHistoryUpdateManyWithWhereWithoutSeriesInput = {
    where: WatchHistoryScalarWhereInput
    data: XOR<WatchHistoryUpdateManyMutationInput, WatchHistoryUncheckedUpdateManyWithoutSeriesInput>
  }

  export type WatchListUpsertWithWhereUniqueWithoutSeriesInput = {
    where: WatchListWhereUniqueInput
    update: XOR<WatchListUpdateWithoutSeriesInput, WatchListUncheckedUpdateWithoutSeriesInput>
    create: XOR<WatchListCreateWithoutSeriesInput, WatchListUncheckedCreateWithoutSeriesInput>
  }

  export type WatchListUpdateWithWhereUniqueWithoutSeriesInput = {
    where: WatchListWhereUniqueInput
    data: XOR<WatchListUpdateWithoutSeriesInput, WatchListUncheckedUpdateWithoutSeriesInput>
  }

  export type WatchListUpdateManyWithWhereWithoutSeriesInput = {
    where: WatchListScalarWhereInput
    data: XOR<WatchListUpdateManyMutationInput, WatchListUncheckedUpdateManyWithoutSeriesInput>
  }

  export type SeriesCreateWithoutEpisodesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    genres?: SeriesCreategenresInput | string[]
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.SeriesStatus
    releaseDate?: Date | string | null
    totalEpisodes?: number
    viewCount?: number
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: SeriesCategoryCreateNestedManyWithoutSeriesInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutSeriesInput
    watchList?: WatchListCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUncheckedCreateWithoutEpisodesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    genres?: SeriesCreategenresInput | string[]
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.SeriesStatus
    releaseDate?: Date | string | null
    totalEpisodes?: number
    viewCount?: number
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: SeriesCategoryUncheckedCreateNestedManyWithoutSeriesInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutSeriesInput
    watchList?: WatchListUncheckedCreateNestedManyWithoutSeriesInput
  }

  export type SeriesCreateOrConnectWithoutEpisodesInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutEpisodesInput, SeriesUncheckedCreateWithoutEpisodesInput>
  }

  export type VideoAssetCreateWithoutEpisodeInput = {
    id?: string
    originalPath?: string | null
    hlsDirectory?: string | null
    hlsManifestPath?: string | null
    durationSeconds?: number
    fileSizeBytes?: bigint | number
    resolution?: string | null
    status?: $Enums.VideoStatus
    processingError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoAssetUncheckedCreateWithoutEpisodeInput = {
    id?: string
    originalPath?: string | null
    hlsDirectory?: string | null
    hlsManifestPath?: string | null
    durationSeconds?: number
    fileSizeBytes?: bigint | number
    resolution?: string | null
    status?: $Enums.VideoStatus
    processingError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoAssetCreateOrConnectWithoutEpisodeInput = {
    where: VideoAssetWhereUniqueInput
    create: XOR<VideoAssetCreateWithoutEpisodeInput, VideoAssetUncheckedCreateWithoutEpisodeInput>
  }

  export type WatchHistoryCreateWithoutEpisodeInput = {
    id?: string
    progressSeconds?: number
    durationSeconds?: number
    isCompleted?: boolean
    watchedAt?: Date | string
    updatedAt?: Date | string
    series: SeriesCreateNestedOneWithoutWatchHistoryInput
    user: UserCreateNestedOneWithoutWatchHistoryInput
  }

  export type WatchHistoryUncheckedCreateWithoutEpisodeInput = {
    id?: string
    userId: string
    seriesId: string
    progressSeconds?: number
    durationSeconds?: number
    isCompleted?: boolean
    watchedAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchHistoryCreateOrConnectWithoutEpisodeInput = {
    where: WatchHistoryWhereUniqueInput
    create: XOR<WatchHistoryCreateWithoutEpisodeInput, WatchHistoryUncheckedCreateWithoutEpisodeInput>
  }

  export type WatchHistoryCreateManyEpisodeInputEnvelope = {
    data: WatchHistoryCreateManyEpisodeInput | WatchHistoryCreateManyEpisodeInput[]
    skipDuplicates?: boolean
  }

  export type SeriesUpsertWithoutEpisodesInput = {
    update: XOR<SeriesUpdateWithoutEpisodesInput, SeriesUncheckedUpdateWithoutEpisodesInput>
    create: XOR<SeriesCreateWithoutEpisodesInput, SeriesUncheckedCreateWithoutEpisodesInput>
    where?: SeriesWhereInput
  }

  export type SeriesUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: SeriesWhereInput
    data: XOR<SeriesUpdateWithoutEpisodesInput, SeriesUncheckedUpdateWithoutEpisodesInput>
  }

  export type SeriesUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: SeriesUpdategenresInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalEpisodes?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: SeriesCategoryUpdateManyWithoutSeriesNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutSeriesNestedInput
    watchList?: WatchListUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: SeriesUpdategenresInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalEpisodes?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: SeriesCategoryUncheckedUpdateManyWithoutSeriesNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutSeriesNestedInput
    watchList?: WatchListUncheckedUpdateManyWithoutSeriesNestedInput
  }

  export type VideoAssetUpsertWithoutEpisodeInput = {
    update: XOR<VideoAssetUpdateWithoutEpisodeInput, VideoAssetUncheckedUpdateWithoutEpisodeInput>
    create: XOR<VideoAssetCreateWithoutEpisodeInput, VideoAssetUncheckedCreateWithoutEpisodeInput>
    where?: VideoAssetWhereInput
  }

  export type VideoAssetUpdateToOneWithWhereWithoutEpisodeInput = {
    where?: VideoAssetWhereInput
    data: XOR<VideoAssetUpdateWithoutEpisodeInput, VideoAssetUncheckedUpdateWithoutEpisodeInput>
  }

  export type VideoAssetUpdateWithoutEpisodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalPath?: NullableStringFieldUpdateOperationsInput | string | null
    hlsDirectory?: NullableStringFieldUpdateOperationsInput | string | null
    hlsManifestPath?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    fileSizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoAssetUncheckedUpdateWithoutEpisodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalPath?: NullableStringFieldUpdateOperationsInput | string | null
    hlsDirectory?: NullableStringFieldUpdateOperationsInput | string | null
    hlsManifestPath?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    fileSizeBytes?: BigIntFieldUpdateOperationsInput | bigint | number
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryUpsertWithWhereUniqueWithoutEpisodeInput = {
    where: WatchHistoryWhereUniqueInput
    update: XOR<WatchHistoryUpdateWithoutEpisodeInput, WatchHistoryUncheckedUpdateWithoutEpisodeInput>
    create: XOR<WatchHistoryCreateWithoutEpisodeInput, WatchHistoryUncheckedCreateWithoutEpisodeInput>
  }

  export type WatchHistoryUpdateWithWhereUniqueWithoutEpisodeInput = {
    where: WatchHistoryWhereUniqueInput
    data: XOR<WatchHistoryUpdateWithoutEpisodeInput, WatchHistoryUncheckedUpdateWithoutEpisodeInput>
  }

  export type WatchHistoryUpdateManyWithWhereWithoutEpisodeInput = {
    where: WatchHistoryScalarWhereInput
    data: XOR<WatchHistoryUpdateManyMutationInput, WatchHistoryUncheckedUpdateManyWithoutEpisodeInput>
  }

  export type EpisodeCreateWithoutVideoAssetInput = {
    id?: string
    title: string
    episodeNumber: number
    description?: string | null
    thumbnailUrl?: string | null
    durationSeconds?: number
    isFree?: boolean
    viewCount?: number
    status?: $Enums.EpisodeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    series: SeriesCreateNestedOneWithoutEpisodesInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutVideoAssetInput = {
    id?: string
    seriesId: string
    title: string
    episodeNumber: number
    description?: string | null
    thumbnailUrl?: string | null
    durationSeconds?: number
    isFree?: boolean
    viewCount?: number
    status?: $Enums.EpisodeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeCreateOrConnectWithoutVideoAssetInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutVideoAssetInput, EpisodeUncheckedCreateWithoutVideoAssetInput>
  }

  export type EpisodeUpsertWithoutVideoAssetInput = {
    update: XOR<EpisodeUpdateWithoutVideoAssetInput, EpisodeUncheckedUpdateWithoutVideoAssetInput>
    create: XOR<EpisodeCreateWithoutVideoAssetInput, EpisodeUncheckedCreateWithoutVideoAssetInput>
    where?: EpisodeWhereInput
  }

  export type EpisodeUpdateToOneWithWhereWithoutVideoAssetInput = {
    where?: EpisodeWhereInput
    data: XOR<EpisodeUpdateWithoutVideoAssetInput, EpisodeUncheckedUpdateWithoutVideoAssetInput>
  }

  export type EpisodeUpdateWithoutVideoAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumEpisodeStatusFieldUpdateOperationsInput | $Enums.EpisodeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateOneRequiredWithoutEpisodesNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutVideoAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumEpisodeStatusFieldUpdateOperationsInput | $Enums.EpisodeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type SeriesCategoryCreateWithoutCategoryInput = {
    id?: string
    displayOrder?: number
    createdAt?: Date | string
    series: SeriesCreateNestedOneWithoutCategoriesInput
  }

  export type SeriesCategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    seriesId: string
    displayOrder?: number
    createdAt?: Date | string
  }

  export type SeriesCategoryCreateOrConnectWithoutCategoryInput = {
    where: SeriesCategoryWhereUniqueInput
    create: XOR<SeriesCategoryCreateWithoutCategoryInput, SeriesCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SeriesCategoryCreateManyCategoryInputEnvelope = {
    data: SeriesCategoryCreateManyCategoryInput | SeriesCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SeriesCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SeriesCategoryWhereUniqueInput
    update: XOR<SeriesCategoryUpdateWithoutCategoryInput, SeriesCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SeriesCategoryCreateWithoutCategoryInput, SeriesCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SeriesCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SeriesCategoryWhereUniqueInput
    data: XOR<SeriesCategoryUpdateWithoutCategoryInput, SeriesCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SeriesCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SeriesCategoryScalarWhereInput
    data: XOR<SeriesCategoryUpdateManyMutationInput, SeriesCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutSeriesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    displayOrder?: number
    isAutomatic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutSeriesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    displayOrder?: number
    isAutomatic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutSeriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSeriesInput, CategoryUncheckedCreateWithoutSeriesInput>
  }

  export type SeriesCreateWithoutCategoriesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    genres?: SeriesCreategenresInput | string[]
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.SeriesStatus
    releaseDate?: Date | string | null
    totalEpisodes?: number
    viewCount?: number
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeCreateNestedManyWithoutSeriesInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutSeriesInput
    watchList?: WatchListCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUncheckedCreateWithoutCategoriesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    genres?: SeriesCreategenresInput | string[]
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.SeriesStatus
    releaseDate?: Date | string | null
    totalEpisodes?: number
    viewCount?: number
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: EpisodeUncheckedCreateNestedManyWithoutSeriesInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutSeriesInput
    watchList?: WatchListUncheckedCreateNestedManyWithoutSeriesInput
  }

  export type SeriesCreateOrConnectWithoutCategoriesInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutCategoriesInput, SeriesUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryUpsertWithoutSeriesInput = {
    update: XOR<CategoryUpdateWithoutSeriesInput, CategoryUncheckedUpdateWithoutSeriesInput>
    create: XOR<CategoryCreateWithoutSeriesInput, CategoryUncheckedCreateWithoutSeriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSeriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSeriesInput, CategoryUncheckedUpdateWithoutSeriesInput>
  }

  export type CategoryUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesUpsertWithoutCategoriesInput = {
    update: XOR<SeriesUpdateWithoutCategoriesInput, SeriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<SeriesCreateWithoutCategoriesInput, SeriesUncheckedCreateWithoutCategoriesInput>
    where?: SeriesWhereInput
  }

  export type SeriesUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: SeriesWhereInput
    data: XOR<SeriesUpdateWithoutCategoriesInput, SeriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type SeriesUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: SeriesUpdategenresInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalEpisodes?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUpdateManyWithoutSeriesNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutSeriesNestedInput
    watchList?: WatchListUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: SeriesUpdategenresInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalEpisodes?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: EpisodeUncheckedUpdateManyWithoutSeriesNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutSeriesNestedInput
    watchList?: WatchListUncheckedUpdateManyWithoutSeriesNestedInput
  }

  export type EpisodeCreateWithoutWatchHistoryInput = {
    id?: string
    title: string
    episodeNumber: number
    description?: string | null
    thumbnailUrl?: string | null
    durationSeconds?: number
    isFree?: boolean
    viewCount?: number
    status?: $Enums.EpisodeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    series: SeriesCreateNestedOneWithoutEpisodesInput
    videoAsset?: VideoAssetCreateNestedOneWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutWatchHistoryInput = {
    id?: string
    seriesId: string
    title: string
    episodeNumber: number
    description?: string | null
    thumbnailUrl?: string | null
    durationSeconds?: number
    isFree?: boolean
    viewCount?: number
    status?: $Enums.EpisodeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    videoAsset?: VideoAssetUncheckedCreateNestedOneWithoutEpisodeInput
  }

  export type EpisodeCreateOrConnectWithoutWatchHistoryInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutWatchHistoryInput, EpisodeUncheckedCreateWithoutWatchHistoryInput>
  }

  export type SeriesCreateWithoutWatchHistoryInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    genres?: SeriesCreategenresInput | string[]
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.SeriesStatus
    releaseDate?: Date | string | null
    totalEpisodes?: number
    viewCount?: number
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: SeriesCategoryCreateNestedManyWithoutSeriesInput
    episodes?: EpisodeCreateNestedManyWithoutSeriesInput
    watchList?: WatchListCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUncheckedCreateWithoutWatchHistoryInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    genres?: SeriesCreategenresInput | string[]
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.SeriesStatus
    releaseDate?: Date | string | null
    totalEpisodes?: number
    viewCount?: number
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: SeriesCategoryUncheckedCreateNestedManyWithoutSeriesInput
    episodes?: EpisodeUncheckedCreateNestedManyWithoutSeriesInput
    watchList?: WatchListUncheckedCreateNestedManyWithoutSeriesInput
  }

  export type SeriesCreateOrConnectWithoutWatchHistoryInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutWatchHistoryInput, SeriesUncheckedCreateWithoutWatchHistoryInput>
  }

  export type UserCreateWithoutWatchHistoryInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    subscription?: UserSubscriptionCreateNestedOneWithoutUserInput
    watchList?: WatchListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchHistoryInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    subscription?: UserSubscriptionUncheckedCreateNestedOneWithoutUserInput
    watchList?: WatchListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchHistoryInput, UserUncheckedCreateWithoutWatchHistoryInput>
  }

  export type EpisodeUpsertWithoutWatchHistoryInput = {
    update: XOR<EpisodeUpdateWithoutWatchHistoryInput, EpisodeUncheckedUpdateWithoutWatchHistoryInput>
    create: XOR<EpisodeCreateWithoutWatchHistoryInput, EpisodeUncheckedCreateWithoutWatchHistoryInput>
    where?: EpisodeWhereInput
  }

  export type EpisodeUpdateToOneWithWhereWithoutWatchHistoryInput = {
    where?: EpisodeWhereInput
    data: XOR<EpisodeUpdateWithoutWatchHistoryInput, EpisodeUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type EpisodeUpdateWithoutWatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumEpisodeStatusFieldUpdateOperationsInput | $Enums.EpisodeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateOneRequiredWithoutEpisodesNestedInput
    videoAsset?: VideoAssetUpdateOneWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutWatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumEpisodeStatusFieldUpdateOperationsInput | $Enums.EpisodeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoAsset?: VideoAssetUncheckedUpdateOneWithoutEpisodeNestedInput
  }

  export type SeriesUpsertWithoutWatchHistoryInput = {
    update: XOR<SeriesUpdateWithoutWatchHistoryInput, SeriesUncheckedUpdateWithoutWatchHistoryInput>
    create: XOR<SeriesCreateWithoutWatchHistoryInput, SeriesUncheckedCreateWithoutWatchHistoryInput>
    where?: SeriesWhereInput
  }

  export type SeriesUpdateToOneWithWhereWithoutWatchHistoryInput = {
    where?: SeriesWhereInput
    data: XOR<SeriesUpdateWithoutWatchHistoryInput, SeriesUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type SeriesUpdateWithoutWatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: SeriesUpdategenresInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalEpisodes?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: SeriesCategoryUpdateManyWithoutSeriesNestedInput
    episodes?: EpisodeUpdateManyWithoutSeriesNestedInput
    watchList?: WatchListUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateWithoutWatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: SeriesUpdategenresInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalEpisodes?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: SeriesCategoryUncheckedUpdateManyWithoutSeriesNestedInput
    episodes?: EpisodeUncheckedUpdateManyWithoutSeriesNestedInput
    watchList?: WatchListUncheckedUpdateManyWithoutSeriesNestedInput
  }

  export type UserUpsertWithoutWatchHistoryInput = {
    update: XOR<UserUpdateWithoutWatchHistoryInput, UserUncheckedUpdateWithoutWatchHistoryInput>
    create: XOR<UserCreateWithoutWatchHistoryInput, UserUncheckedCreateWithoutWatchHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchHistoryInput, UserUncheckedUpdateWithoutWatchHistoryInput>
  }

  export type UserUpdateWithoutWatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    subscription?: UserSubscriptionUpdateOneWithoutUserNestedInput
    watchList?: WatchListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    subscription?: UserSubscriptionUncheckedUpdateOneWithoutUserNestedInput
    watchList?: WatchListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SeriesCreateWithoutWatchListInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    genres?: SeriesCreategenresInput | string[]
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.SeriesStatus
    releaseDate?: Date | string | null
    totalEpisodes?: number
    viewCount?: number
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: SeriesCategoryCreateNestedManyWithoutSeriesInput
    episodes?: EpisodeCreateNestedManyWithoutSeriesInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutSeriesInput
  }

  export type SeriesUncheckedCreateWithoutWatchListInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    genres?: SeriesCreategenresInput | string[]
    thumbnailUrl?: string | null
    bannerUrl?: string | null
    status?: $Enums.SeriesStatus
    releaseDate?: Date | string | null
    totalEpisodes?: number
    viewCount?: number
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: SeriesCategoryUncheckedCreateNestedManyWithoutSeriesInput
    episodes?: EpisodeUncheckedCreateNestedManyWithoutSeriesInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutSeriesInput
  }

  export type SeriesCreateOrConnectWithoutWatchListInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutWatchListInput, SeriesUncheckedCreateWithoutWatchListInput>
  }

  export type UserCreateWithoutWatchListInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    subscription?: UserSubscriptionCreateNestedOneWithoutUserInput
    watchHistory?: WatchHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchListInput = {
    id?: string
    email: string
    passwordHash?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    subscription?: UserSubscriptionUncheckedCreateNestedOneWithoutUserInput
    watchHistory?: WatchHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchListInput, UserUncheckedCreateWithoutWatchListInput>
  }

  export type SeriesUpsertWithoutWatchListInput = {
    update: XOR<SeriesUpdateWithoutWatchListInput, SeriesUncheckedUpdateWithoutWatchListInput>
    create: XOR<SeriesCreateWithoutWatchListInput, SeriesUncheckedCreateWithoutWatchListInput>
    where?: SeriesWhereInput
  }

  export type SeriesUpdateToOneWithWhereWithoutWatchListInput = {
    where?: SeriesWhereInput
    data: XOR<SeriesUpdateWithoutWatchListInput, SeriesUncheckedUpdateWithoutWatchListInput>
  }

  export type SeriesUpdateWithoutWatchListInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: SeriesUpdategenresInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalEpisodes?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: SeriesCategoryUpdateManyWithoutSeriesNestedInput
    episodes?: EpisodeUpdateManyWithoutSeriesNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateWithoutWatchListInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: SeriesUpdategenresInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalEpisodes?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: SeriesCategoryUncheckedUpdateManyWithoutSeriesNestedInput
    episodes?: EpisodeUncheckedUpdateManyWithoutSeriesNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutSeriesNestedInput
  }

  export type UserUpsertWithoutWatchListInput = {
    update: XOR<UserUpdateWithoutWatchListInput, UserUncheckedUpdateWithoutWatchListInput>
    create: XOR<UserCreateWithoutWatchListInput, UserUncheckedCreateWithoutWatchListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchListInput, UserUncheckedUpdateWithoutWatchListInput>
  }

  export type UserUpdateWithoutWatchListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    subscription?: UserSubscriptionUpdateOneWithoutUserNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    subscription?: UserSubscriptionUncheckedUpdateOneWithoutUserNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    planId: string
    amountInPaise: number
    currency?: string
    status?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchHistoryCreateManyUserInput = {
    id?: string
    episodeId: string
    seriesId: string
    progressSeconds?: number
    durationSeconds?: number
    isCompleted?: boolean
    watchedAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchListCreateManyUserInput = {
    id?: string
    seriesId: string
    addedAt?: Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    amountInPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    amountInPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressSeconds?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episode?: EpisodeUpdateOneRequiredWithoutWatchHistoryNestedInput
    series?: SeriesUpdateOneRequiredWithoutWatchHistoryNestedInput
  }

  export type WatchHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeId?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    progressSeconds?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeId?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    progressSeconds?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateOneRequiredWithoutWatchListNestedInput
  }

  export type WatchListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyPlanInput = {
    id?: string
    userId: string
    amountInPaise: number
    currency?: string
    status?: $Enums.PaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionCreateManyPlanInput = {
    id?: string
    userId: string
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountInPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountInPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCategoryCreateManySeriesInput = {
    id?: string
    categoryId: string
    displayOrder?: number
    createdAt?: Date | string
  }

  export type EpisodeCreateManySeriesInput = {
    id?: string
    title: string
    episodeNumber: number
    description?: string | null
    thumbnailUrl?: string | null
    durationSeconds?: number
    isFree?: boolean
    viewCount?: number
    status?: $Enums.EpisodeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchHistoryCreateManySeriesInput = {
    id?: string
    userId: string
    episodeId: string
    progressSeconds?: number
    durationSeconds?: number
    isCompleted?: boolean
    watchedAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchListCreateManySeriesInput = {
    id?: string
    userId: string
    addedAt?: Date | string
  }

  export type SeriesCategoryUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSeriesNestedInput
  }

  export type SeriesCategoryUncheckedUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCategoryUncheckedUpdateManyWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumEpisodeStatusFieldUpdateOperationsInput | $Enums.EpisodeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoAsset?: VideoAssetUpdateOneWithoutEpisodeNestedInput
    watchHistory?: WatchHistoryUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumEpisodeStatusFieldUpdateOperationsInput | $Enums.EpisodeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videoAsset?: VideoAssetUncheckedUpdateOneWithoutEpisodeNestedInput
    watchHistory?: WatchHistoryUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateManyWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    status?: EnumEpisodeStatusFieldUpdateOperationsInput | $Enums.EpisodeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressSeconds?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episode?: EpisodeUpdateOneRequiredWithoutWatchHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutWatchHistoryNestedInput
  }

  export type WatchHistoryUncheckedUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    episodeId?: StringFieldUpdateOperationsInput | string
    progressSeconds?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryUncheckedUpdateManyWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    episodeId?: StringFieldUpdateOperationsInput | string
    progressSeconds?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchListNestedInput
  }

  export type WatchListUncheckedUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListUncheckedUpdateManyWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryCreateManyEpisodeInput = {
    id?: string
    userId: string
    seriesId: string
    progressSeconds?: number
    durationSeconds?: number
    isCompleted?: boolean
    watchedAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchHistoryUpdateWithoutEpisodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressSeconds?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateOneRequiredWithoutWatchHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutWatchHistoryNestedInput
  }

  export type WatchHistoryUncheckedUpdateWithoutEpisodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    progressSeconds?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchHistoryUncheckedUpdateManyWithoutEpisodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    progressSeconds?: IntFieldUpdateOperationsInput | number
    durationSeconds?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCategoryCreateManyCategoryInput = {
    id?: string
    seriesId: string
    displayOrder?: number
    createdAt?: Date | string
  }

  export type SeriesCategoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    series?: SeriesUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type SeriesCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    seriesId?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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