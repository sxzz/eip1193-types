export type RecordToUnion<T extends Record<string, any>> = T[keyof T]

export type UnionToIntersection<U> = (
  U extends unknown ? (arg: U) => 0 : never
) extends (arg: infer I) => 0
  ? I
  : never

export type Method = [any, any]
export type MakeRequestMethod<Name extends string, T extends Method> = (
  args: {
    method: Name
  } & (T[0] extends undefined ? { params?: T[0] } : { params: T[0] })
) => Promise<T[1]>

export type MakeRequestMethods<T extends Record<string, Method>> =
  UnionToIntersection<
    RecordToUnion<{
      [K in keyof T]: K extends string ? MakeRequestMethod<K, T[K]> : never
    }>
  >

export type Address = `0x${string}`
