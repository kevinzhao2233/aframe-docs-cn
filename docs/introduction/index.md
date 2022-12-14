---
title: 简介
section_title: Introduction
type: introduction
# layout: docs
order: 1
parent_section: docs
section_order: 1
installation: true
examples:
  - title: Hello, World!
    src: https://glitch.com/edit/#!/aframe?path=index.html
---

[three.js]: https://threejs.org

# 简介

**本页示例**

[Hello, World!](https://glitch.com/edit/#!/aframe?path=index.html)

## 入门

[glitch]: http://glitch.com/~aframe

A-Frame can be developed from a plain HTML file without having to install
anything. A great way to try out A-Frame is to **[remix the starter example on
Glitch][glitch]**, an online code editor that instantly hosts and deploys for
free. Alternatively, create an `.html` file and include A-Frame in the
`<head>`:

A-Frame 可以从一个普通的 HTML 文件开发而无需安装任何依赖。尝试 A-Frame 的一个很好的方法是 **[remix the starter example on Glitch][glitch]**，一个免费的在线代码编辑器，可以即时托管和部署。或者，创建一个 `.html` 文件并引入 A-Frame 到 `<head>`:

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

[installation]: ./installation.md
[school]: https://aframe.io/school/

The [Installation] page provides more options for getting started with A-Frame.
To get started learning A-Frame, check out [A-Frame School][school] for visual
step-by-step lessons to complement the documentation.

[安装][installation] 页面提供更多方式来入门 A-Frame。要开始学习 A-Frame，请查看 [A-Frame 学校][school]补充文档的分步教程。

## 什么是 A-Frame?

[github]: https://github.com/aframevr/
[community]: https://aframe.io/community/

![A-Frame](https://cloud.githubusercontent.com/assets/674727/25392020/6f011d10-298c-11e7-845e-c3c5baebd14d.jpg)

:a:-Frame is a web framework for building virtual reality (VR) experiences.
A-Frame is based on top of HTML, making it simple to get started. But A-Frame
is not just a 3D scene graph or a markup language; the core is a powerful
entity-component framework that provides a declarative, extensible, and
composable structure to [three.js].

:a:-Frame 是一个构建虚拟现实（VR）体验的 web 框架。A-Frame 基于 HTML，让入门变得很简单。但是 A-Frame 不仅仅是 3D 场景画布或标记预研；其核心思想是基于 [three.js] 来提供一个声明式、可扩展、组件化的实体-组件框架。

Originally conceived within Mozilla and now maintained by the co-creators of
A-Frame within [Supermedium](https://supermedium.com), A-Frame was developed to
be an easy yet powerful way to develop VR content. As an [independent open
source project][github], A-Frame has grown to be one of the [largest VR
communities][community].

A-Frame supports most VR headsets such as Vive, Rift, Windows Mixed Reality,
Daydream, GearVR, Cardboard, Oculus Go, and can even be used for augmented
reality. Although A-Frame supports the whole spectrum, A-Frame aims to define
fully immersive interactive VR experiences that go beyond basic 360&deg;
content, making full use of positional tracking and controllers.

A-Frame 支持主流 VR 头显如 Vive, Rift, Windows 混合现实, Daydream, GearVR, Cardboard, Oculus Go, 甚至可被用于增强现实（AR）。虽然 A-Frame 支持全谱，A-Frame 的目标是定义具有位置跟踪和操控的完全身临其境和交互式 VR 体验，超出基本的 360° 内容呈现。

<div class="docs-introduction-examples">
  <a href="https://supermedium.com/supercraft">
    <img alt="Supercraft" target="_blank" src="https://user-images.githubusercontent.com/674727/41085457-f5429566-69eb-11e8-92e5-3210e4c6c4a0.gif" height="190" width="32%">
  </a>
  <a href="https://aframe.io/a-painter/?url=https://ucarecdn.com/962b242b-87a9-422c-b730-febdc470f203/">
    <img alt="A-Painter" target="_blank" src="https://cloud.githubusercontent.com/assets/674727/24531388/acfc3dda-156d-11e7-8563-5bd75252f70f.gif" height="190" width="32%">
  </a>
  <a href="https://supermedium.com">
    <img alt="Supermedium" target="_blank" src="https://user-images.githubusercontent.com/674727/37294616-7212cd20-25d3-11e8-9e7f-c0c61074f1e0.png" height="190" width="32%">
  </a>
  <a href="https://aframe.io/a-blast/">
    <img alt="A-Blast" target="_blank" src="https://cloud.githubusercontent.com/assets/674727/24531440/0336e66e-156e-11e7-95c2-f2e6ebc0393d.gif" height="190" width="32%">
  </a>
  <a href="https://aframe.io/a-saturday-night/">
    <img alt="A-Saturday-Night" target="_blank" src="https://cloud.githubusercontent.com/assets/674727/24531477/44272daa-156e-11e7-8ef9-d750ed430f3a.gif" height="190" width="32%">
  </a>
  <a href="https://github.com/googlecreativelab/webvr-musicalforest">
    <img alt="Musical Forest by @googlecreativelab" target="_blank" src="https://cloud.githubusercontent.com/assets/674727/25109861/b8e9ec48-2394-11e7-8f2d-ea1cd9df69c8.gif" height="190" width="32%">
  </a>
</div>

## 特性

:eyeglasses: **VR Made Simple**: Just drop in a `<script>` tag and `<a-scene>`.
A-Frame will handle 3D boilerplate, VR setup, and default controls. Nothing to
install, no build steps.

:heart: **Declarative HTML**: HTML is easy to read, understand, and
copy-and-paste. Being based on top of HTML, A-Frame is accessible to everyone:
web developers, VR enthusiasts, artists, designers, educators, makers, kids.

:electric_plug: **Entity-Component Architecture**: A-Frame is a powerful
[three.js] framework, providing a declarative, composable, reusable
[entity-component structure][ecs]. HTML is just the tip of the iceberg;
developers have unlimited access to JavaScript, DOM APIs, three.js, WebVR, and
WebGL.

:globe_with_meridians: **Cross-Platform VR**: Build VR applications for Vive,
Rift, Windows Mixed Reality, Daydream, GearVR, and Cardboard with support for
all respective controllers. Don't have a headset or controllers? No problem!
A-Frame still works on standard desktop and smartphones.

[ecs]: ./entity-component-system.md
[a-painter]: https://github.com/aframevr/a-painter
[tilt brush]: https://www.tiltbrush.com/

:zap: **Performance**: A-Frame is optimized from the ground up for WebVR. While
A-Frame uses the DOM, its elements don't touch the browser layout engine. 3D
object updates are all done in memory with little garbage and overhead. The most
interactive and large scale WebVR applications have been done in A-Frame
running smoothly at 90fps.

[inspector]: ./visual-inspector-and-dev-tools.md

:mag: **Visual Inspector**: A-Frame provides a handy built-in [visual 3D
inspector][inspector]. Open up _any_ A-Frame scene, hit `ctrl + alt + i`,
and fly around to peek under the hood!

![Inspector](https://cloud.githubusercontent.com/assets/674727/25377018/27be9cce-295b-11e7-9098-3e85ac1fe172.gif)

[augmented reality]: https://github.com/jeromeetienne/AR.js#augmented-reality-for-the-web-in-less-than-10-lines-of-html
[environment]: https://github.com/supermedium/aframe-environment-component
[multiuser]: https://github.com/haydenjameslee/networked-aframe
[oceans]: https://github.com/donmccurdy/aframe-extras/tree/master/src/primitives
[particle systems]: https://github.com/IdeaSpaceVR/aframe-particle-system-component
[physics]: https://github.com/donmccurdy/aframe-physics-system
[state]: https://npmjs.com/package/aframe-state-component
[super hands]: https://github.com/wmurphyrd/aframe-super-hands-component
[teleportation]: https://github.com/fernandojsg/aframe-teleport-controls

:runner: **Components**: Hit the ground running with A-Frame's core components
such as geometries, materials, lights, animations, models, raycasters, shadows,
positional audio, text, and controls for most major headsets. Get even further
from the hundreds of community components including [environment], [state], [particle
systems], [physics], [multiuser], [oceans], [teleportation], [super hands], and
[augmented reality].

:earth_americas: **Proven and Scalable**: A-Frame has been used by companies
such as Google, Disney, Samsung, Toyota, Ford, Chevrolet, Amnesty
International, CERN, NPR, Al Jazeera, The Washington Post, NASA. Companies such
as Google, Microsoft, Oculus, and Samsung have made contributions to A-Frame.

## Off You Go!

[discord]: https://supermedium.com/discord
[slack]: https://aframevr.slack.com/join/shared_invite/zt-f6rne3ly-ekVaBU~Xu~fsZHXr56jacQ

If it's your first time here, here's a plan for success for getting into
A-Frame:

1. [Subscribe to the Newsletter](https://aframe.io/subscribe/) for updates and
   tips on A-Frame and to see featured community projects.

2. Read through the documentation to get a grasp.
   [Glitch](https://glitch.com/~aframe) is used as a recommended coding playground
   and for examples.

3. [Join us on Discord][discord] and [Slack][slack] and if you have any
   questions, [search and ask on StackOverflow](http://stackoverflow.com/questions/ask/?tags=aframe),
   and someone will try to get to you!

4. When you build something, share your project online and we'll try to feature
   it on the [newsletter](https://aframe.io/subscribe/) and the
   [blog](https://aframe.io/blog/)!

And it really helps to have a dig into the fundamentals on JavaScript and
[three.js](https://threejs.org/). Have fun!
