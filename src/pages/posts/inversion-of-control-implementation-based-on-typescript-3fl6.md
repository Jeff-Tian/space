---
stackbit_url_path: posts/inversion-of-control-implementation-based-on-typescript-3fl6
title: The Implementation of Inversion of Control based on TypeScript
date: '2020-11-30T11:02:34.480Z'
excerpt: >-
  IoC   According to wikipedia, the Inversion of Control, also as known as IoC,
  is a design pr...
thumb_img_path: null
comments_count: 0
positive_reactions_count: 8
tags:
  - typescript
  - ioc
  - di
canonical_url: >-
  https://dev.to/jefftian/inversion-of-control-implementation-based-on-typescript-3fl6
template: post
---
## IoC

According to wikipedia, the Inversion of Control, also as known as IoC, is a design principal in Object Oriented Programming, which is used to decouple the code.

In the traditional Object Oriented Programming, when a class depends on another class, then usually the other class's instance gets created inside that class. By doing so it leads to classes couple with each other, and the more complex the dependencies are, the more tight of the couplings, and consequently harder for modifications and unit testings for the tightly coupled code. The IoC are dedicatedly used for creating and searching the dependent objects by providing a container, and hand over the controlling of the dependent objects from inside the class to the container, by doing so the classes are being decoupled, and ensure that all classes are easy to be modified.

### Coupling

What the hell is coupling? We can show it by a simple example. Say we have two classes, 
`A`
 and 
`B`
, their dependency relationship is 
`A`
 depends on 
`B`
: 
`A ⊥ B`
. This is a common scenario in daily development, which can be implemented in a traditional way as the following:


```typescript
// b.ts

class B {
  constructor () {
  }
}

// a.ts

class A {
  b: B;
  constructor () {
    this.b = new B();
  }
}

// main.ts

const a = new A();
```
 

The above code looks good for now, but if we got a new requirement which requires the innermost 
`B`
 pass a parameter 
`p`
 in during the initialization:


```typescript
// b.ts

class B {
  p: number;
  constructor (p: number) {
    this.p = p;
  }
}
```


After the modification, we got a new problem: since 
`B`
 is instantiated inside class 
`A`
's constructor, so we have to pass the 
`p`
 inside 
`A`
's constructor. Where is the 
`p`
 come from inside 
`A`
? Obviously we can not hard code it, otherwise there is no need to add it as a parameter at the first place. So we have to add a parameter 
`p`
 for class 
`A`
's constructor, too, as following:


```typescript
// a.ts

class A {
  b: B;
  constructor (p: number) {
    this.b = new B(p);
  }
}

// main.ts
const a = new A(10);
console.log(a); // => A {b: B {p: 10}}
```


What's more tedious, after we've changed 
`A`
, we found that 
`B`
's new parameter 
`p`
 can't be a 
`number`
 actually, it needs to be a 
`string`
. So we have to change the type decoration to parameter 
`p`
 inside 
`A`
 again. Let's imagine what if there were more upper classes that depend on 
`A`
? With the same approach we need to change all the upper classes in the same way! This is the very problem caused by coupling, we have to change all the files in the dependent links only for a simple parameter change in the innermost class. When the application's dependencies become more complex to an extend, it's easy to encounter a phenomenon that affects the whole body, which causes huge troubles for application's maintenance.

### Decoupling

In fact, we can find, in the above example, that only 
`B`
 needs the parameter 
`p`
, and 
`A`
 is using 
`p`
 merely for instantiate the dependent object and cares nothing about 
`p`
. So we can consider moving the instantiation for dependent objects out of the class itself, for example, we can rewrite the above example as:


```typescript
// b.ts
class B {
  p: number;
  constructor (p: number) {
    this.p = p;
  }
}

// a.ts
class A {
  private b: B;
  constructor(b: B) {
    this.b = b;
  }
}

// main.ts
const b = new B(10);
const a = new A(b);
console.log(a); // A => {b: B {p: 10}}
```


In the above example, 
`A`
 is not accepting parameter 
`p`
, instead, it accepts the dependent object, and doesn't care about where does the object get instantiated. This approach solved our previously problem in a effective way, now we only need to change 
`B`
 when we need to change the parameter 
`p`
, without the need to modify 
`A`
, so we decoupled the classes.

## Containers


Even though we've implemented the decoupling, we need to instantiate all the classes by ourselves, and pass them by means of parameters in constructor. If exists a global container, and it **pre-registered** all the class definitions and initial parameters that we need, and every object has an unique key, then we can only tell the container its key when we need an object to **get** the instantiated object from the container directly. By doing so the developer won't need to care about how the objects get instantiated, neither pass them as constructor's parameters in the dependency links.

In other words, our container must have two functions, **registering the instances** and **get them**. It's naturally to come up with 
`Map`
, which can be used to implement a simple container:


```typescript
// container.ts

export class Container {
  bindMap = new Map();

  // Registering the instances
  bind(identifier: string, clazz: any, constructorArgs: Array<any>) {
    this.bindMap.set(identifier, {clazz, constructorArgs});
  }

  // get the instances
  get<T>(identifier: string) : T {
    const target = this.bindMap.get(identifier);
    const { clazz, constructorArgs } = target;
    const inst = Reflect.construct(clazz, constructorArgs);
  }
}
```

Here we used 
`Reflect.construct`
, whose behavior is kind of similar to operator 
`new`
, which helps us instantiate the object. By means of container, we can eventually abandon passing the parameters and implement the decoupling, for example:


```typescript
// b.ts

class B {
  constructor(p: number) {
    this.p = p;
  }
}

// a.ts
class A {
  b: B;
  constructor() {
    this.b = container.get('b');
  }
}

// main.ts
const container = new Container();
container.bind('a', A);
container.bind('b', B, [10]);

// get a from container
const a = container.get('a');
console.log(a); // A => {b: B { p: 10}}
```

Actually till now we have basically implemented IoC, and decoupled classes based on container. But from the lines of code perspective, code looks no clearer than before, and in the contrary, the container initialization and classes registration make us feel tedious. If that part of code can be encapsulated into framework, and all the classes registration can be automatically wired up, in the same time all classes can get the dependent instances of the classes during the construction time without manually specify them inside constructor, then the developer's hands can be freed totally, and then only focus on the inner logic of the class. This is what DI(Dependency Injection) comes in handy.

## DI

Many of us can't tell the difference between DI and IoC, so was I. IoC is only a principle, DI is a concrete implementation for IoC. Simply put, we can inject the dependencies to the caller, without the need for the caller to fetch explicitly. To implement DI, two issues need to be solved:

- The classes that need to be registered in the IoC container, they need to be able to register themselves automatically during program starts
- When instantiate the classes inside the IoC container, the dependent objects can be fetched directly without manually specifying them inside constructor

Regarding the two problems there are different solutions, for example, the famous Java Spring needs developers define an XML file describing the dependency relationships, and then the framework do the instances' registration and dependency injections based on the XML file. But the XML based dependency management approach is too trivial, so Midway utilizes the decoration features provided by TypeScript, by decorating the meta data to identify the registration requirements and dependencies need to be injected, to implement the dependency injection.

### Reflect Metadata

To use decoration to solve the above two problems, we need to know some basics about Reflect Metadata. Reflect Metadata is a proposal to ES7, mainly used to add and read the meta data during declaration phase, which was supported from TypeScript 1.5+.

Meta data can be treated as descriptive information regarding to the classes or certain properties of classes, they don't affect class's behavior by nature, but you can get the predefined metadata to a class, and apply certain operations to the class based on the metadata.

The usage of Reflect Metadata is rather simple, first of all you need to install the 
`reflect-metadata`
 library:


```shell
npm i reflect-metadata --save
```


And then in your 
`tsconfig.json`
, the 
`emitDecoratorMetadata`
 needs to be configured to 
`true`
.

And then we can define and get the meta data using 
`Reflect.defineMetadata`
 and 
`Reflect.getMetadata`
, for example:


```typescript
import 'reflect-metadata';

const CLASS_KEY = 'ioc:key';

function ClassDecorator() {
  return function (target: any) {
    Reflect.defineMetadata(CLASS_KEY, {
      metaData: 'metaData',
    }, target);

    return target;
  }
}

@ClassDecorator()
class D {
  constructor(){}
}

console.log(Reflect.getMetadata(ClASS_KEY, D)); // => {metaData: 'metaData'}
```

With 
`Reflect`
, we can tokenize any class, and apply special operations to the tokenized class. 

### Provider

Back to our initial problem, we need all classes get defined and parameters registration automatically during application starts, but not all classes need to be registered into the container, and we don't know what classes need to be registered, nor the initial parameters of them are like.

We can introduce metadata to solve this issue, by appending some new special tokens to the class's metadata in the definition, we can identify them by scanning. With this bear in mind we implement a decorator to tokenize the classes need to be registered firstly, and name the decorator 
`Provider`
, meaning it will be consumed by other classes as a provider.


```typescript
// provider.ts

import 'reflect-metadata';

export const CLASS_KEY = 'ioc:tagged_class';

export function Provider(identifier: string, args?: Array<any>) {
  return function (target: any) {
    Reflect.defineMetadata(CLASS_KEY, {
      id: identifier,
      args: args || []
    }, target);
    return target;
  };
}
```

We can see there are 
`id`
 and 
`args`
 in the tokens, where 
`id`
 is the 
`key`
 used to register IoC container, and 
`args`
 are the needed parameters of instantiation. 
`Provider`
 can be used directly in a decoration fashion, as follow:


```typescript
// b.ts
import {Provider} from 'provider';

@Provider('b', [10])
export class B {
  constructor(p: number) {
    this.p = p;
  }
}
```

With tokenization done, another issue surfaces: How do we get these definitions during application starts?

An easy way is scan all the files when starts, get all the classes exported by those files and bind them according to the metadata. For the simplicity we assume there were no nested directories, then the implementation is as follows:


```typescript
// load.ts

import * as fs from 'fs';
import { CLASS_KEY } from './provider';

export function load(container) { // The container is the global IoC container
  const list = fs.readdirSync('./');
  for (const file of list) {
    if (/\.ts$/.test(file)) {
      const exports = require(`
./${file}
`);
      for (const m in exports) {
        const module = exports[m];
        if (typeof module === 'function') {
          const metadata = Reflect.getMetadata(CLASS_KEY, module);
          // register
          if (metadata) {
            container.bind(metadata.id, module, metadata.args);
          }
        }
      }
    }
  }
}
```


So now, we can finish all the work of binding the decorated class by just running the 
`load`
 inside 
`main`
. What worth noting is that the logic of 
`load`
 and 
`Container`
 are totally generic, they can be encapsulated in to a package and then a simplified IoC framework is in its baby shape.


```typescript
import {Container} from './container';
import {load} from './load';

const container = new Container();
load(container);

console.log(container.get('a')); // A => {b: B {p: 10}}
```


### Inject

With registration work done, we now check the 2nd issue mentioned above: How do we get all the dependent instances directly without explicitly pass them in the constructor. Actually the initiative is simple, since we have already put all required classes into the IoC container, so when we need some class we can iterate the properties of the class during fetching the class instance, by get the corresponding object and assign the value, then the dependency injection work is done.

But another issue comes out, how do we tell which properties need to be injected? Similarly we can use metadata to solve it. By defining a decorator to tokenize which properties need to be injected and name this decorator as 
`Inject`
 to indicate this property needs to be injected, then we are good.


```typescript
// inject.ts

import 'reflect-metadata';

export const PROPS_KEY = 'ioc:inject_props';

export function Inject() {
  return function (target: any, targetKey: string) {
    const annotationTarget = target.constructor;

    let props = {};
    if (Reflect.hasOwnMetadata(PROPS_KEY, annotationTarget)) {
      props = Reflect.getMetadata(PROPS_KEY, annotationTarget);
    }

    props[targetKey] = {
      value: targetKey
    };

    Reflect.defineMetadata(PROPS_KEY, props, annotationTarget);
  };
}
```


Need to attention that although we are decorating the properties, the actual metadata should be defined on class to maintain the property list need to be injected of the class. So we have to use 
`target.constructor`
 as the 
`target`
 to be operated. And here uses property name (
`targetKey`
) as the 
`key`
 to the instance in IoC container to be simple.

Then we need to change the 
`get`
 method of IoC container, and inject all the properties recursively:


```typescript
// container.ts

import {PROPS_KEY} from './inject';

export class Container {
  bindMap = new Map();

  bind(identifier: string, clazz: any, constructorArgs?: Array<any>) {
    this.bindMap.set(identifier, {
      clazz,
      constructorArgs: constructorArgs || []
    });
  }

  get<T>(identifier: string) : T {
    const target = this.bindMap.get(identifier);
    const { clazz, constructorArgs } = target;
    const props = Reflect.getMetadata(PROPS_KEY, clazz);
    const inst = Reflect.construct(clazz, constructorArgs);
    for (let prop in props) {
      const identifier = props[prop].value;
      // get injected object recursively
      inst[prop] = this.get(identier);
    }
    return inst;
    }
  }
}
```


To use it you can just utilize 
`Inject`
 to decorate the needed properties.


```typescript
// a.ts

import {Provider} from 'provider';

@Provider('a')
export class A {
  @Inject()
  b: B;
}
```


### Final code

After the above adjustment, our final business code looks like this:


```typescript
// b.ts

@Provider('b', [10])
class B {
  constructor(p: number) {
    this.p = p;
  }
}

// a.ts

@Provider('a')
class A {
  @Inject()
  private b: B;
}

// main.ts
const container = new Container();
load(container);

console.log(container.get('a'));   // A => {b: B {p: 10}}
```

We can see there is no more manually instantiation, and the framework layer can automatically handle whatever how many classes to be registered, and inject required properties when instantiation. All instances can be provided are maintained by the class itself, and if it needed to be changed it doesn't need to change other files.

## Summary

This post starts from classes decoupling to describe why IoC is needed, and implemented a simplified IoC framework based TypeScript. In fact, besides decoupling, we can benefit much from IoC, for example, fast unit test based on container, analyzing the dependency relations between classes.

Although the concept of IoC was initiated from server side, but nowadays there are also all kinds of applications in the front end, for example AngularJS has implemented their own IoC framework to improve development efficiency and the levels of modularization. 

*[This post is also available on DEV.](https://dev.to/jefftian/inversion-of-control-implementation-based-on-typescript-3fl6)*


<script>
const parent = document.getElementsByTagName('head')[0];
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.1.1/iframeResizer.min.js';
script.charset = 'utf-8';
script.onload = function() {
    window.iFrameResize({}, '.liquidTag');
};
parent.appendChild(script);
</script>    
