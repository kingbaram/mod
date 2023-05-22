type Pro<T> = {
  readonly [P in keyof T]: T[P]
}
interface Product {
name:string;
pass:string;
}
type ReadOnly = Pro<Procuct>



