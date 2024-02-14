type SuppressNew<T> = {
    [ K in keyof T ] : T[ K ]
}

declare type Newable<Instance extends object = object, Static extends object = object, I extends unknown[] = []> = (new (...input: [...I]) => Instance) & SuppressNew<Static>;
