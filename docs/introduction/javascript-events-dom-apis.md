---
title: JavaScript, 事件（Events）, DOM API
type: introduction
# layout: docs
parent_section: introduction
order: 6
examples:
  - title: A-Frame School &mdash; Getting Entities
    src: https://glitch.com/edit/#!/aframe-school-js?path=solution.html
  - title: A-Frame School &mdash; Modifying Entities
    src: https://glitch.com/edit/#!/aframe-school-js?path=solution2.html
  - title: A-Frame School &mdash; Creating Entities
    src: https://glitch.com/edit/#!/aframe-school-js?path=solution3.html
  - title: A-Frame School &mdash; Handling Events
    src: https://glitch.com/edit/#!/aframe-school-js?path=solution4.html
  - title: Animated Lights
    src: https://glitch.com/edit/#!/aframe-animated-lights?path=index.html
---

# JavaScript, 事件（Events）, DOM API

**本页示例**

- [A-Frame School &mdash; Getting Entities](https://glitch.com/edit/#!/aframe-school-js?path=solution.html)
- [A-Frame School &mdash; Modifying Entities](https://glitch.com/edit/#!/aframe-school-js?path=solution2.html)
- [A-Frame School &mdash; Creating Entities](https://glitch.com/edit/#!/aframe-school-js?path=solution3.html)
- [A-Frame School &mdash; Handling Events](https://glitch.com/edit/#!/aframe-school-js?path=solution4.html)
- [Animated Lights](https://glitch.com/edit/#!/aframe-animated-lights?path=index.html)

[geometry]: ../components/geometry.md
[dom]: https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction
[object3d]: https://threejs.org/docs/#api/core/Object3D

Since A-Frame is just HTML, we can control the scene and its entities using
JavaScript and [DOM] APIs as we mostly would in ordinary web development.

因为 A-Frame 本质上就是 HTML，我们当然可以像普通 Web 开发一样使用 JavaScript 和 [DOM] API 来控制其中的场景和实体。

[vrjump]: http://vrjump.de
[jsimage]: https://cloud.githubusercontent.com/assets/674727/20290105/e1573210-aa92-11e6-8f1a-8a31fb6dad52.jpg

![With JavaScript][jsimage]
<small class="image-caption"><i>Image by Ruben Mueller from [The VR Jump][vrjump].</i></small>

[entity]: ../core/entity.md

Every element in the scene, even elements such as `<a-box>` or `<a-sky>`, are entities (represented as `<a-entity>`). A-Frame modifies the HTML element prototype to add some extra behavior for certain DOM APIs to tailor them to
A-Frame. See the [Entity API documentation][entity] for reference on most of
the APIs discussed below.

场景中的每个元素，甚至 `<a-box>` 或者 `<a-sky>` 这样的元素，都是实体（通过 `<a-entity>` 来表示）。A-Frame 修改了 HTML 元素原型来为特定的 DOM API 添加一些额外的行为。请查阅 [Entity API 文档][entity] 来参考下面讨论到的大多数 API 详细用法。

<!--toc-->

## A-Frame 中如何使用 JS

[a-frame components]: ../core/component.md

**Important:** Before we go over the different ways to use JavaScript and DOM
APIs, we prescribe encapsulating your JavaScript code within [A-Frame
components]. Components modularize code, make logic and behavior visible from
HTML, and ensure that code is executed at the correct time (e.g., after the
scene and entities have attached and initialized). As the most basic example,
to register a `console.log` component _before_ `<a-scene>`:

**Important:** 在讨论使用 JavaScript 和 DOM API 的不同方法之前，我们推荐你把 JS 代码封装在 A-Frame 组件中。组件可以使代码更好的模块化，使逻辑和行为在 HTML 页面层面可见，同时能确保代码在正确的时候被执行（例如，在场景和实体附加和初始化之后）。作为最简单的一个例子，在 `<a-scene>` _之前_ 注册一个 `console.log` 组件：

```js
AFRAME.registerComponent('log', {
  schema: { type: 'string' },

  init: function () {
    var stringToLog = this.data;
    console.log(stringToLog);
  },
});
```

And _after_ the registration, use the component from HTML:

注册完成后，在 HTML 中使用组件：

```html
<a-scene log="Hello, Scene!">
  <a-box log="Hello, Box!"></a-box>
</a-scene>
```

Components encapsulate all of our code to be reusable, declarative, and
shareable. Though if we're just poking around at runtime, we can use our
browser's Developer Tools Console to run JavaScript on our scene.

组件封装了我们所有的代码，实现可重用、声明性和共享。但是，如果我们只是在运行时探索，我们可以使用浏览器控制台在我们的 scene 中运行 JavaScript。

[contentscripts]: ../core/scene.md#running-content-scripts-on-the-scene

Do **not** try to put A-Frame-related JavaScript in a raw `<script>` tag after
`<a-scene>` as we would with traditional 2D scripting. If we do, we'd have to
take special measures to make sure code runs at the right time (see [Running
Content Scripts on the Scene][contentscripts]).

不要试图在原生的 `<Script>` 标记后放入与 A-Frame 相关的 JavaScript，`<a-scene>` 就像我们使用传统的 2D 脚本一样。如果我们这样做，就不得不采取特殊措施确保代码在正确的时间运行(参见[运行场景中的内容脚本][contentscripts]，实际就是需要在场景完成加载后运行)。

## 通过查询和遍历获取实体

[queryselector]: https://developer.mozilla.org/docs/Web/API/Document/querySelector
[jqueryselector]: https://api.jquery.com/category/selectors/

The wonderful thing about the DOM as a scene graph is that the standard DOM
provides utilities for traversal, querying, finding, and selecting through
`.querySelector()` and `.querySelectorAll()`. Originally inspired by [jQuery
selectors][jqueryselector], we can [learn about query selectors on
MDN][queryselector].

用 DOM 作为场景画布的强大之处在于，标准 DOM 提供了遍历、查询、查找和选择的工具：`.querySelector()` 和 `.querySelectorAll()`。最早是借鉴自[jQuery 选择器 `$`][jqueryselector]，我们可以[在 MDN 上学习查询选择器][queryselector]

Let's run a few example query selectors. Take the scene below for example.

让我们运行几个查询选择器的示例。以下面的场景为例。

```html
<html>
  <a-scene>
    <a-box id="redBox" class="clickable" color="red"></a-box>
    <a-sphere class="clickable" color="blue"></a-sphere>
    <a-box color="green"></a-box>
    <a-entity light="type: ambient"></a-entity>
    <a-entity light="type: directional"></a-entity>
  </a-scene>
</html>
```

### 使用 `.querySelector()`

If we want to grab just one element, we use `.querySelector()` which returns
one element. Let's grab the scene element:

如果我们只想获取一个元素，我们可以使用 `.querySelector()`，下面让我们获取 acene 元素：

```js
var sceneEl = document.querySelector('a-scene');
```

Note if we were working within a component, we'd already have a reference to the scene element without needing to query. All entities have reference to their scene element:

注意，如果在一个组件中获取，我们已经有一个对场景元素的引用，而不需要手动查询。所有实体都引用了它们的场景元素:

```js
AFRAME.registerComponent('foo', {
  init: function () {
    console.log(this.el.sceneEl); // Reference to the scene element.
  },
});
```

If an element has an ID, we can use an ID selector (i.e., `#<ID>`). Let's grab the red box which has an ID. Before we did a query selector on the entire document. Here, we'll do a query selector just within the scope of the scene. With query selectors, we're able to limit the scope of the query to within any
element:

如果元素有一个 ID，我们可以使用 ID 选择器(例如 `#<ID> `)。让我们获取那个有 ID 的红色 box。前面是我们对整个文档执行查询选择器。这里，我们将在场景范围内创建一个查询选择器。使用查询选择器，我们能够将查询的范围限制在任何元素内:

```js
var sceneEl = document.querySelector('a-scene');
console.log(sceneEl.querySelector('#redBox'));
// <a-box id="redBox" class="clickable" color="red"></a-box>
```

、

### 使用 `.querySelectorAll()`

If we want to grab a group of elements, we use `.querySelectorAll()` which returns
an array of elements. We can query across element names:

```js
console.log(sceneEl.querySelectorAll('a-box'));
// [
//  <a-box id="redBox" class="clickable" color="red"></a-box>,
//  <a-box color="green"></a-box>
// ]
```

We can query for elements that have a class with a class selector (i.e.,
`.<CLASS_NAME>`). Let's grab every entity that has the `clickable` class:

```js
console.log(sceneEl.querySelectorAll('.clickable'));
// [
//  <a-box id="redBox" class="clickable" color="red"></a-box>
//  <a-sphere class="clickable" color="blue"></a-sphere>
// ]
```

We can query for elements containing an attribute (or in this case, a
component) with an attribute selector (i.e., `[<ATTRIBUTE_NAME>]`). Let's grab
every entity that has a light:

```js
console.log(sceneEl.querySelectorAll('[light]'));
// [
//  <a-entity light="type: ambient"></a-entity>
// <a-entity light="type: directional"></a-entity>
// ]
```

### 遍历 `.querySelectorAll()` 返回的元素

If we grabbed a group of entities using `.querySelectorAll()`, we can loop over
them with a `for` loop. Let's loop over every element in the scene with `*`.

```js
var els = sceneEl.querySelectorAll('*');
for (var i = 0; i < els.length; i++) {
  console.log(els[i]);
}
```

#### 关于性能的注意点

Avoid using `.querySelector` and `.querySelectorAll` in `tick` and `tock` functions that get called every frame as it does take some time to loop over the DOM to retrieve entities. Instead, keep a cached list of entities, calling the query selectors beforehand, and then just loop over that.

避免在`tick`和`tock`函数中使用`.querySelector`和`.querySelectorAll`,因为在 DOM 中循环检索实体需要一些时间。相反，可以保存一个实体列表，预先调用查询选择器，然后仅仅遍历即可。

```js
AFRAME.registerComponent('query-selector-example', {
  init: function () {
    this.entities = document.querySelectorAll('.box');
  },

  tick: function () {
    // 不要在这里调用选择器，应该实现缓存下来
    for (let i = 0; i < this.entities.length; i++) {
      // Do something with entities.
    }
  },
});
```

## 使用 `.getAttribute()` 获取组件的数据

We can get the data of components of an entity via `.getAttribute`. A-Frame augments `.getAttribute` to return values rather than strings (e.g., returning objects in most cases since components usually consist of multiple properties, or returning an actual boolean for like `.getAttribute('visible')`. Often, `.getAttribute` will return the internal data object of the component so do not modify the object directly:

我们可以通过 `.getAttribute`. A-Frame 扩充了`.getAttribute` 来获取实体组件的数据，以返回值而不是字符串(例如，在大多数情况下返回对象，因为组件通常由多个属性组成，或者返回类似 `.getAttribute('visible')` 的布尔值)。通常，`.getAttribute` 将返回组件的内部数据对象的引用（不是深拷贝），因此**不要直接修改对象**:

```js
// <a-entity geometry="primitive: sphere; radius: 2"></a-entity>
el.getAttribute('geometry');
// >> {"primitive": "sphere", "radius": 2, ...}
```

### 获取 `position` 和 `scale`

[vector3]: https://threejs.org/docs/#api/math/Vector3
[updatepos]: #updating-position-rotation-scale-visible

Doing `el.getAttribute('position')` or `el.getAttribute('scale')` will return the three.js [Object3D][object3d] position and scale properties which are [Vector3][vector3]s. Keep in mind that modifying these objects will modify the actual entity data.

执行`el.getAttribute('position')` 或 `el.getAttribute('scale')` 将返回 three.js [Object3D 对象][object3d] position 和 scale 属性，它们是[三维向量 Vector3][vector3]，请记住，修改这些对象将会修改实际的实体数据。

This is because A-Frame allows us to [modify position, rotation, scale,
visible][updatepos] at the three.js level, and in order for `.getAttribute` to return the correct data, A-Frame returns the actual three.js Object3D objects.

这是因为 A-Frame 允许我们从 three.js 层面[修改 position, rotation, scale, visible][updatepos]，为了让 `.getAttribute` 返回正确的数据，A-Frame 返回了 three.js 中实际 Object3D 对象

This is not true for the `.getAttribute('rotation')` because A-Frame, for better or worse, uses degrees instead of radians. In such case, a normal JavaScript object with x/y/z properties is returned. The Object3D Euler can be retrieved via `el.object3D.rotation` if we need to work at a lower level with radians.

这对于 `.getAttribute('rotation')` 来说是不正确的，因为 A-Frame 无论好坏都使用角度而不是弧度。在这种情况下，会返回一个带有 x/y/z 属性的普通 JavaScript 对象。如果我们需要在较低层使用弧度，可以通过 `el.object3D.rotation` 检索 Object3D Euler。

## Modifying the A-Frame Scene Graph

With JavaScript and DOM APIs, we can dynamically add and remove entities as we
would with normal HTML elements.

### 使用 `.createElement()` 创建实体

To create an entity, we can use `document.createElement`. This will give us a
blank entity:

```js
var el = document.createElement('a-entity');
```

However, this entity will not be initialized or be a part of the scene until we
attach it to our scene.

### 使用 `.appendChild()` 向场景添加一个实体

To add an entity to the DOM, we can use `.appendChild(element)`. Specifically,
we want to add it to our scene. We grab the scene, create the entity, and
append the entity to our scene.

```js
var sceneEl = document.querySelector('a-scene');
var entityEl = document.createElement('a-entity');
// Do `.setAttribute()`s to initialize the entity.
sceneEl.appendChild(entityEl);
```

Note that `.appendChild()` is an _asynchronous_ operation in the browser. Until the entity has finished appending to the DOM, we can't do many operations on the entity (such as calling `.getAttribute()`). If we need to query an attribute on an entity that has just been appended, we can listen to the `loaded` event on the entity, or place logic in an A-Frame component so that it is executed once it is ready:

注意 `.appendChild()` 在浏览器中是一个 异步（_asynchronous_）操作。在 DOM 添加实体完成之前，我们不能对其进行实际的操作（比如调用 `.getAttribute()` 方法来获取属性)。如果我们需要查询一个刚刚添加的实体的属性，我们可以监听该实体的 **加载完成（`loaded`）** 事件，或者把代码逻辑放在 A-Frame 组件里面，这样一旦实体准备好了就可以被执行，就像下面这样：

```js
var sceneEl = document.querySelector('a-scene');

AFRAME.registerComponent('do-something-once-loaded', {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    console.log('I am ready!');
  },
});

var entityEl = document.createElement('a-entity');
entityEl.setAttribute('do-something-once-loaded', '');
sceneEl.appendChild(entityEl);
```

### 使用 `.removeChild()` 移除实体

To remove an entity from the DOM and thus from the scene, we call
`.removeChild(element)` from the parent element. If we have an entity, we have to
ask its parent (`parentNode`) to remove the entity.

```js
entityEl.parentNode.removeChild(entityEl);
```

## 修改实体

A blank entity doesn't do anything. We can modify the entity by adding
components, configuring component properties, and removing components.

空实体没有实际用处，我们可以通过添加组件、配置组件属性和删除组件来更新实体。

### 使用 `.setAttribute()` 添加组件

To add a component, we can use `.setAttribute(componentName, data)`. Let's add
a geometry component to the entity.

```js
entityEl.setAttribute('geometry', {
  primitive: 'box',
  height: 3,
  width: 1,
});
```

[physics]: https://github.com/donmccurdy/aframe-physics-system

Or adding [the community physics component][physics]:

```js
entityEl.setAttribute('dynamic-body', {
  shape: 'box',
  mass: 1.5,
  linearDamping: 0.005,
});
```

[setattr]: ../core/entity.md#setattribute-attr-value-componentattrvalue

Unlike a normal HTML `.setAttribute()`, an entity's `.setAttribute()` is
improved to take a variety of types of arguments such as objects, or to be able
to update a single property of a component. [Read more about
`Entity.setAttribute()`][setattr].

和普通 HTML 元素的 `.setAttribute()` 方法不同，一个实体的 `.setAttribute()` 方法被改进为接受多种类型的参数如 objects, 还可以用来更新组件的某个属性。详情请阅读： [Entity.setAttribute()][setattr]。

### 使用 `.setAttribute()` 更新组件

To update a component, we also use `.setAttribute()`. Updating a component
takes several forms.

我们可以使用 `.setAttribute()` 来更新一个组件。更新组件有若干种形式：

#### 更新单属性组件的属性

[position]: ../components/position.md

Let's update the property of the [position component][position], a
single-property component. We can pass either an object or a string. It is
slightly preferred to pass an object so A-Frame doesn't have to parse the
string.

```js
entityEl.setAttribute('position', { x: 1, y: 2, z: -3 });
// Read on to see why `entityEl.object3D.position.set(1, 2, -3)` is preferred though.
```

#### 更改多属性组件的单个属性

[material]: ../components/material.md

Let's update a single property of the [material component][material], a
multi-property component. We do this by providing the component name, property
name, and then property value to `.setAttribute()`:

```js
entityEl.setAttribute('material', 'color', 'red');
```

#### 更新多属性组件的多个属性

[light]: ../components/light.md

Let's update multiple properties at once of the [light component][material], a
multi-property component. We do this by providing the component name and an
object of properties to `.setAttribute()`. We'll change the light's color and
intensity but leave the type the same:

```js
// <a-entity light="type: directional; color: #CAC; intensity: 0.5"></a-entity>
entityEl.setAttribute('light', { color: '#ACC', intensity: 0.75 });
// <a-entity light="type: directional; color: #ACC; intensity: 0.75"></a-entity>
```

#### 更新 `position`, `rotation`, `scale`, 和 `visible`.

As a special case, for better performance, memory, and access to utilities, we
recommend modifying `position`, `rotation`, `scale`, and `visible` directly at
the three.js level via the entity's [Object3D][object3d] rather than via
`.setAttribute`:

```js
// Examples for position.
entityEl.object3D.position.set(1, 2, 3);
entityEl.object3D.position.x += 5;
entityEl.object3D.position.multiplyScalar(5);

// Examples for rotation.
entityEl.object3D.rotation.y = THREE.Math.degToRad(45);
entityEl.object3D.rotation.divideScalar(2);

// Examples for scale.
entityEl.object3D.scale.set(2, 2, 2);
entityEl.object3D.scale.z += 1.5;

// Examples for visible.
entityEl.object3D.visible = false;
entityEl.object3D.visible = true;
```

This lets us skip over the `.setAttribute` overhead and instead do simple setting of properties for components that are most commonly updated. Updates at the three.js level will still be reflected when doing for example `entityEl.getAttribute('position');`.

这使我们可以跳过 `.setAttribute`，而是对最常更新的组件进行简单的属性设置。例如，在执行`entityEl.getAttribute('position')` 时，three.js 级别的更新仍会有响应。

#### 替换多属性组件的全部属性

Let's replace all the properties of the [geometry component][geometry], a
multi-property component. We do this by providing the component name, an object
of properties to `.setAttribute()`, and a flag that specifies to clobber the
existing properties. We'll replace all of the geometry's existing properties with new properties:

```js
// <a-entity geometry="primitive: cylinder; height: 4; radius: 2"></a-entity>
entityEl.setAttribute('geometry', { primitive: 'torusKnot', p: 1, q: 3, radiusTubular: 4 }, true);
// <a-entity geometry="primitive: torusKnot; p: 1; q: 3; radiusTubular: 4"></a-entity>
```

### 使用 `.removeAttribute()` 删除一个组件

To remove or detach a component from an entity, we can use
`.removeAttribute(componentName)`. Let's remove the default `wasd-controls`
from the camera entity:

```js
var cameraEl = document.querySelector('[camera]');
cameraEl.removeAttribute('wasd-controls');
```

## 事件和事件监听器

[eventlistener]: http://javascript.info/tutorial/introduction-browser-events

With JavaScript and the DOM, there is an easy way for entities and components
to communicate with one another: events and event listeners. Events are a way
to send out a signal that other code can pick up and respond to. [Read more
about browser events][eventlistener].

对于 JavaScript 和 DOM，实体和组件有一个相互通信的简单方法：事件和事件监听器。事件是一种信号发射方式，其他代码可以侦听该信号并响应。阅读更多：[浏览器事件][eventlistener]。

### 使用 `.emit()` 发送一个事件

A-Frame elements provide an easy way to emit custom events with
`.emit(eventName, eventDetail, bubbles)`. For example, let's say we are
building a physics component and we want the entity to send out a signal when
it has collided with another entity:

A-Frame 元素提供如下方法来发射自定义事件：`.emit(eventName, eventDetail, bubbles)`。例如，假设我们在构建一组物理组件，并希望实体在发生碰撞时发出信号：

```js
entityEl.emit('physicscollided', { collidingEntity: anotherEntityEl }, false);
```

Then other parts of the code can wait and listen on this event and run code in
response. We can pass information and data through the event detail as the
second argument. And we can specify whether the event _bubbles_, meaning that
the parent entities will also emit the event. So other parts of the code can
register an event listener.

然后代码的其他部分可以等待并侦听这个事件并执行代码来响应。我们可以通过事件处理方法的第二个参数来传递事件细节信息和数据。我们还可以指定事件是否 _冒泡_，也就是说其父实体是否也将发出事件。所以代码的其他部分就是注册一个事件监听器。

### 使用 `.addEventListener()` 添加事件监听器

Like with normal HTML elements, we can register an event listener with
`.addEventListener(eventName, function)`. When the event the listener is
registered to is emitted, then the function will be called and handle the
event. For example, continuing from the previous example with the physics
collision event:

和普通 HTML 元素类似，我们可以使用 `.addEventListener(eventName, function)` 来注册一个事件监听器。当 eventName 所对应的事件发生时，function 函数将被调用并处理事件。例如，继续前一个物理系统的例子，当发生碰撞事件时：

```js
entityEl.addEventListener('physicscollided', function (event) {
  console.log('Entity collided with', event.detail.collidingEntity);
});
```

When the entity emits the `physicscollided` event, the function will be called
with the event object. Notably in the event object, we have the event detail
which contains data and information passed through the event.

当实体发出 `physicscollided` 事件时，碰撞处理函数将被调用。在事件对象中，我们有事件详细信息，其中包含传递的事件数据和信息。

### 使用 `.removeEventListener()` 删除一个事件监听器

Like with normal HTML elements, when we want to remove the event listener, we
can use `.removeEventListener(eventName, function)`. We have to pass the same
event name and function that the listener was registered with. For example,
continuing from the previous example with the physics collision event:

类似的，当我们想删除一个已有事件监听器时，我们调用 `.removeEventListener(eventName, function)` 方法。我们必须传递和监听器注册时相同的事件名称和函数。例如，继续前述物理碰撞事件：

```js
// We have to define this function with a name if we later remove it.
function collisionHandler(event) {
  console.log('Entity collided with', event.detail.collidingEntity);
}

entityEl.addEventListener('physicscollided', collisionHandler);
entityEl.removeEventListener('physicscollided', collisionHandler);
```

### 绑定事件监听器

By default, [Javascript execution context rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) binds `this` to the global context (`window`) for any independent function, meaning that these functions won't have access to the component's `this` by default.

默认情况下，根据[Javascript 执行上下文规则](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) 会将任意独立函数的 `this` 绑定到全局上下文（`window`），这意味着默认情况下这些函数不能访问组件的“this”。

In order for the component's `this` to be accessible inside an event listener, [it must be bound](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).

为了使组件的 `this` 在事件监听器中可访问，[它必须被绑定](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)。

There are several ways you can do this:

有几种方法可以做到这一点:

1. By using an arrow function to define the event listener. Arrow functions automatically bind `this`

1. 通过使用箭头函数来定义事件监听器。箭头函数会自动绑定 `this`

```
this.el.addEventListener('physicscollided', (event) => {
    console.log(this.el.id);
});
```

2. By defining your event listener within the events object of the component (this will also handling adding and removing the listener automatically)

   See the explanation [here](../core/component.html#events).

3. 通过在组件的 events 对象中定义事件监听器(这也将自动处理监听器的添加和删除)
   参阅[这里](../core/component.html#events).

4. By creating another function, which is the bound version of the function.

5. 使用 bind 绑定 this。

```
this.listeners = {
    clickListener: this.clickListener.bind(this);
}
entityEl.addEventListener('click', this.listeners.clickListener);
```

## 警告

[faq]: ./faq.md#why-is-the-html-not-updating-when-i-check-the-browser-inspector
[mutation-observer]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
[attr-selectors]: https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

A-Frame entities and primitives are implemented in a way that [favours performance][faq] such that some HTML APIs may not work as expected. For instance, [attribute selectors involving values][attr-selectors] won't work and a [mutation observer][mutation-observer] won't trigger changes when a entity's component is altered.

A-Frame 实体和原语是以一种[有利于性能][faq]的方式实现的，因此一些 HTML API 可能无法按预期工作。例如，当一个实体的组件被更改时，[涉及值的属性选择器][attr-selectors]将不起作用，[mutation observer][mutation-observer]也不会触发更改。
