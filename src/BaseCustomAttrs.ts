export abstract class BaseCustomAttrs<T> {
  constructor(public attrs?: T) {}
  abstract augmentWith(childAttrs: BaseCustomAttrs<T>): BaseCustomAttrs<T>;
}