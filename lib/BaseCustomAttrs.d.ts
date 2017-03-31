export declare abstract class BaseCustomAttrs<T> {
    attrs: T;
    constructor(attrs?: T);
    abstract augmentWith(childAttrs: BaseCustomAttrs<T>): BaseCustomAttrs<T>;
}
