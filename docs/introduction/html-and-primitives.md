---
title: 'HTML & 原语'
type: introduction
# layout: docs
order: 4
examples: []
---

# HTML & 原语

[component]: ../core/component.md
[entity]: ../core/entity.md
[dom]: https://developer.mozilla.org/docs/Web/API/Document_Object_Model
[html]: https://developer.mozilla.org/docs/Learn/HTML/Introduction_to_HTML/Getting_started

This section will go over the concepts of A-Frame's primitive elements and
their relation to the entity-component framework. If you're looking for a guide
on using HTML and primitives, [check out the _Building a Basic Scene_
guide](../guides/building-a-basic-scene.md).

本节将覆盖 A-Frame 原语元素的基本概念以及它们与实体-组件框架的关系。如果你需要了解具体如何使用 HTML 和原语，[请参阅指南：_构建一个基础场景_](../guides/building-a-basic-scene.md).

<!--toc-->

## HTML

A-Frame is based on top of [HTML][html] and [the DOM][dom] using a polyfill for
Custom Elements. HTML is the building block of the Web, providing one of the
most accessible computing languages around. There are no installations or build
steps required, creating with HTML involves just text in an HTML file and
opening the HTML file in a browser. Since most of the Web was built on top of
HTML, most existing tools and libraries work with A-Frame including React,
Vue.js, Angular, d3.js, and jQuery.

A-Frame 基于 [HTML][html] 和 [DOM][dom]，对于自定义元素使用一个 polyfill。HTML 是 Web 的基石，提供了最容易访问的计算机语言。无需安装或编译构建，创建 HTML 只需要在 HTML 中输入文本， 然后在浏览器中打开该 HTML 文件。由于 A-Frame 基于 HTML，因此大多数现有的库和框架，包括 React，Vue.js，Angular，d3.js，jQuery 都能够和 A-Frame 一起工作。

![HTML Scene](https://user-images.githubusercontent.com/674727/52090525-79b04d80-2566-11e9-993f-7a8b19ca25b1.png)

If you don't have too much experience with HTML, no problem! It's fairly easy
to pick up and perhaps even easier to grasp than 2D HTML. Once you pick up the
general structure or syntax of HTML (opening tag, attributes, closing tag),
then you're good to go! [Read an introduction to HTML on MDN][html].

![HTML](https://user-images.githubusercontent.com/6694476/27047689-94689672-4fc6-11e7-9cf5-828a508c6522.jpg)

## 原语（Primitives）

While the HTML layer looks basic, HTML and the DOM are only the outermost
abstraction layer of A-Frame. Underneath, A-Frame is an entity-component
framework for three.js that is exposed declaratively.

尽管 HTML 层看起来很基础，HTML 和 DOM 只是 A-Frame 的表面抽象层。在底层，A-Frame 实际上是一个实体-组件（entity-component）框架，基于 three.js 并以声明的方式来暴露编程接口。

A-Frame provides a handful of elements such as `<a-box>` or `<a-sky>` called
_primitives_ that wrap the entity-component pattern to make it appealing for
beginners. At the bottom of the documentation navigation sidebar, we can see
every primitive that A-Frame provides out of the box. Developers can create
their own primitives as well.

A-Frame 提供一些简单易用的标签元素如 `<a-box>` 和 `<a-sky>`，这些被称之为 _原语（primitives）_，实际上是实体-组件模式的封装，使其对于初学者容易使用。在文档左侧导航栏的底部，我们可以看到所有现成可用的原语的列表。当然开发人员也可以创建他们自己的原语。

## 实例

Below is the _Hello, WebVR_ example that uses a few basic primitives. A-Frame
provides primitives to create meshes, render 360&deg; content, customize the
environment, place the camera, etc.

下面是一个使用了若干基本原语的例子 _Hello, WebVR_，使用 A-Frame 提供的原语来创建物体，渲染 360&deg;内容，定制环境，放置相机等。

```html
<html>
  <head>
    <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </body>
</html>
```

### 底层机制

Primitives act as a convenience layer (i.e., syntactic sugar) primarily for
newcomers. Keep in mind for now that primitives are `<a-entity>`s under the
hood that:

原语主要是为新手充当易用层（即语法糖）。我们现在只要记住原语是一个具备如下特征的`<a-entity>`：

- Have a semantic name (e.g., `<a-box>`)
- Have a preset bundle of components with default values
- Map or proxy HTML attributes to [component][component] data

- 具有语义化的名称（比如 `<a-box>`）
- 带有默认值的预设绑定组件
- 映射或代理 HTML 属性到[组件][component]数据

[assemblage]: http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript
[prefab]: http://docs.unity3d.com/Manual/Prefabs.html

Primitives are similar to [prefabs in Unity][prefab]. Some literature on the
entity-component-system pattern refer to them as [assemblages][assemblage].
They abstract the core entity-component API to:

原语（Primitives）和[Unity 中的 prefabs][prefab]类似。实体-组件-系统模式中的一些用词被引用为[组合（assemblages）][assemblage]。 它们把核心的实体-组件 API 抽象为：

- Pre-compose useful components together with prescribed defaults
- Act as a shorthand for complex-but-common types of entities (e.g., `<a-sky>`)
- Provide a familiar interface for beginners since A-Frame takes HTML in a new direction

- 连同规定的默认值预先组成有用的组件
- 复杂但常用的实体类型提供简写方式（比如：`<a-sky>`）
- 为初学者提供一个类似 HTML 标签的编程接口

Under the hood, this `<a-box>` primitive:

在底层实现中，`<a-box>` 原语为

```html
<a-box color="red" width="3"></a-box>
```

represents this entity-component form:

表现为如下实体组件形式：

```html
<a-entity geometry="primitive: box; width: 3" material="color: red"></a-entity>
```

`<a-box>` defaults the `geometry.primitive` property to `box`. And the
primitive maps the HTML `width` attribute to the underlying `geometry.width`
property as well as the HTML `color` attribute to the underlying
`material.color` property.

`<a-box>` 的 `geometry.primitive` 属性被默认设置为 `box`。原语将 HTML 的 `width` 属性映射到底层的 `geometry.width` 属性，同样的 HTML `color` 属性被映射为底层的 `material.color` 属性。

## 将组件附加到原语

[animations]: ../core/animations.md
[mixins]: ../core/mixins.md

Primitives are just `<a-entity>`s under the hood. This means primitives have
the same API as entities such as positioning, rotating, scaling, and attaching
components.

原语（Primitive）本质上就是一个 `<a-entity>`。这意味这原语拥有和实体一样的应用程序接口，比如定位（positioning）, 旋转（rotating）, 缩放（scaling）, 和附加组件（attaching components）。

### 实例

Let's attach community physics components to primitives. We include the source
for [Don McCurdy's
`aframe-physics-system`](https://github.com/n5ro/aframe-physics-system) and attach
the physics components via HTML attributes:

本例中我们将 A-Frame 社区贡献的物理（physics）组件附加到原语。来自 [Don McCurdy 所写的 aframe-physics-system](https://github.com/n5ro/aframe-physics-system) 并通过 HTML 属性附加到原语上：

::: warning
:warning: **If you are using A-Frame 1.3.0 or later**: [`aframe-physics-system`](https://github.com/donmccurdy/aframe-physics-system) and you're having issues make sure you're no longer using the now deprecated THREE.Geometry. More info on [this GitHub issue](https://github.com/n5ro/aframe-physics-system/issues/187).
:::

::: warning
**如果你使用 A-Frame 1.3.0 或更高版本的**: [`aframe-physics-system`](https://github.com/donmccurdy/aframe-physics-system) ，并且你遇到了问题，请确保你不再使用以弃用的 THREE.Geometry。更多信息请参阅 [这个 GitHub issue](https://github.com/n5ro/aframe-physics-system/issues/187)。
:::

```html
<html>
  <head>
    <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-physics-system@1.4.0/dist/aframe-physics-system.min.js"></script>
  </head>
  <body>
    <a-scene physics>
      <a-box position="-1 4 -3" rotation="0 45 0" color="#4CC3D9" dynamic-body></a-box>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" static-body></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </body>
</html>
```

## 注册一个原语

We can register our own primitives (i.e., register an element) using
`AFRAME.registerPrimitive(name, definition)`. `name` is a string and must contain a dash (i.e. `'a-foo'`). `definition` is a JavaScript
object defining these properties:

我们可以使用 `AFRAME.registerPrimitive(name, definition)` 注册自己的原语（也就是注册一个元素）。`name` 是一个 string，并且必须包含一个中划线（比如 `'a-foo'`）。`definition` 是一个 JavaScript 对象，定义了如下属性：

| 属性              | 描述                                                                                                                                                                                      | 实例                                                                            |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| defaultComponents | 指定原语默认组件的对象。键是组件的名称，值是组件的默认数据。                                                                                                                              | `{geometry: {primitive: 'box'}}`                                                |
| mappings          | 指定 HTML 属性名和组件属性名称之间映射的对象。每当更新 HTML 属性（attribute）时，原语将更新相应的组件属性（property）。组件属性通过一个点语法来定义： `${componentName}.${propertyName}`. | `{depth: 'geometry.depth', height: 'geometry.height', width: 'geometry.width'}` |

### 实例

For example, below is A-Frame's registration for the `<a-box>` primitive:

比如，下面是 A-Frame 中 `<a-box>` 原语的注册代码：

```js
var extendDeep = AFRAME.utils.extendDeep;

// The mesh mixin provides common material properties for creating mesh-based primitives.
// This makes the material component a default component and maps all the base material properties.
var meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive(
  'a-box',
  extendDeep({}, meshMixin, {
    // 预设默认组件。这些组件和组件属性将被附加到现成的实体上。
    defaultComponents: {
      geometry: { primitive: 'box' },
    },

    // 定义从HTML属性到组件属性的映射(使用点作为分隔符)。
    // 如果我们在 HTML 中设置 `depth="5"`，原语会自动设置`geometry="depth: 5"`.
    mappings: {
      depth: 'geometry.depth',
      height: 'geometry.height',
      width: 'geometry.width',
    },
  })
);
```

[aframe-extras]: https://github.com/donmccurdy/aframe-extras

For example, Don McCurdy's [`aframe-extras`][aframe-extras] package includes an
`<a-ocean>` primitive that wraps his `ocean` component. Here is the definition
for `<a-ocean>`.

再比如，Don McCurdy 的 [`aframe-extras`][aframe-extras] 中包含了一个 `<a-ocean>` 原语，它封装了其中的 `ocean` 组件，下面是 `<a-ocean>` 的定义。

```js
AFRAME.registerPrimitive('a-ocean', {
  // 默认情况下附加 `ocean` 组件。
  // 默认情况下，海洋与地面平行。
  defaultComponents: {
    ocean: {},
    rotation: { x: -90, y: 0, z: 0 },
  },

  // Maps HTML attributes to the `ocean` component's properties.
  mappings: {
    width: 'ocean.width',
    depth: 'ocean.depth',
    density: 'ocean.density',
    color: 'ocean.color',
    opacity: 'ocean.opacity',
  },
});
```

With the `<a-ocean>` primitive registered, we'd be able to create oceans using
a line of traditional HTML:

通过注册 `<a-ocean>` 原语，我们将可以像普通 HTML 标签一样来创建一个 ocean 对象：

```html
<a-ocean color="aqua" depth="100" width="100"></a-ocean>
```
