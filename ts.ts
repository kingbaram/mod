type Pro<T> = {
  readonly [P in keyof T]: T[P]
}


