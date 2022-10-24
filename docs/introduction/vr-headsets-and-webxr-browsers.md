---
title: 'VR 头戴设备 & WebXR 浏览器'
type: introduction
# layout: docs
parent_section: introduction
order: 3
---

# VR 头戴设备 & WebXR 浏览器

[w3c]: https://immersive-web.github.io/webxr/

<!--toc-->

## 什么是 VR?

Virtual reality (VR) is a technology that uses head-mounted headsets with
displays to generate the realistic images, sounds, and other sensations to put
users into an immersive virtual environment. VR allows us to create unbounded
worlds that people can walk around and interact with using their hands, to feel
as if they were transported to another place.

### 头戴设备之间的区别?

There are several consumer VR headsets with different features on the market.
Important distinguishing features include whether they:

- Have positional tracking (six degrees of freedom (6DoF)) or
  Only have rotational tracking (three degrees of freedom (3DoF)).
- Have controllers or not, and whether those controllers have 6DoF
  or 3DoF. Generally, the number of degrees of freedom of the controllers
  matches that of the headset.
- Are powered by a PC or by a mobile device or standalone.

Rotational tracking allows people to look around or rotate objects. All
headsets provide rotational tracking.

Positional tracking allows people to move around, get closer to objects, reach
forward. As the VR industry evolves, the minimum viable experience will trend
towards having positionally-tracked headsets with positionally-tracked
controllers. Positional tracking is important to give people presence, to make
them feel they are in a real environment. With rotational-only tracking, people
are constrained to looking around and wiggling the controller.

### 目前市场上有哪些头戴设备?

[htc vive]: https://www.vive.com/
[oculus headsets]: https://www.oculus.com/
[google daydream]: https://vr.google.com/daydream/
[samsung gearvr]: http://www.samsung.com/global/galaxy/gear-vr/
[windows mixed reality]: https://developer.microsoft.com/en-us/windows/mixed-reality/
[vive focus]: https://enterprise.vive.com/us/vivefocus/

| 头戴设备                | 平台       | 位置跟踪           | 控制器             | 位置跟踪控制器     |
| ----------------------- | ---------- | ------------------ | ------------------ | ------------------ |
| [HTC Vive]              | PC         | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [Oculus Rift]           | PC         | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [Google Daydream]       | Android    | :x:                | :white_check_mark: | :x:                |
| [Samsung GearVR]        | Android    | :x:                | :white_check_mark: | :x:                |
| [Windows Mixed Reality] | PC         | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [Oculus Go]             | Standalone | :x:                | :white_check_mark: | :x:                |
| [Vive Focus]            | Standalone | :x:                | :white_check_mark: | :x:                |
| [Oculus Quest]          | Standalone | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| [Oculus Quest 2]        | Standalone | :white_check_mark: | :white_check_mark: | :white_check_mark: |

## 什么是 WebXR?

WebXR is a JavaScript API for creating immersive 3D, virtual reality (and augmented reality)
experiences in your browser. Or simply put, allows VR in the browser over the
Web.

A-Frame uses the WebXR API to gain access to VR headset sensor data (position,
orientation) to transform the camera and to render content directly to VR
headsets. Note that WebXR, which provides data, should not be confused nor
conflated with WebGL, which provides graphics and rendering.

## 哪些浏览器支持 VR?

包括 [Supermedium](https://supermedium.com) 和
[Exokit](https://github.com/exokitxr/exokit):

<iframe src="https://caniuse.com/#search=webxr" height="480px" width="100%"></iframe>

## A-Frame 想把 WebXR 带向何方?

A-Frame aims for highly immersive and interactive VR content with native-like
performance. For this, A-Frame believes the minimum viable bar will trend
towards positionally-tracking headsets with positionally-tracked controllers.
This is the paradigm in which A-Frame wants to innovate as well as discover new
grounds that are specific to the VR Web (e.g., link traversal,
decentralization, identity). Contrast this type of content against flat and
static 360&deg; content and menus.

At the same time, A-Frame wants everyone to be able to get involved with VR
content creation. A-Frame supports all major headsets with their controllers.
Fortunately with the large community and contributors, A-Frame is able to both
look far towards the future as well as satisfy the needs of today's VR
landscape.

## 哪些平台支持 A-Frame?

A-Frame supports almost all platforms through browsers. General platforms that
A-Frame supports include:

通过浏览器，A-Frame 支持几乎所有平台，对于一般平台，A-Frame 的支持情况如下：

- VR on desktop with a headset
- VR on mobile with a headset
- VR on standalone headset
- Flat on desktop (i.e., mouse and keyboard)
- Flat mobile (i.e., magic window)

Some other platforms that have been shown to work with A-Frame include:

- Augmented reality (AR) on AR headsets (e.g., Magic Leap, HoloLens)
- Augmented reality (AR) on mobile (i.e., magic window, ARKit, ARCore)

## A-Frame 支持哪些头戴设备?

A-Frame supports most headsets through browsers. Some VR headsets that A-Frame
supports include:

- HTC Vive
- Oculus Rift
- Oculus Quest
- Oculus Go
- Google Daydream
- Samsung GearVR
- Vive Focus

For general hardware recommendations (not requirements):

- [Oculus Rift Hardware Recommendations](https://www.oculus.com/en-us/oculus-ready-pcs/)
- [HTC Vive Hardware Recommendations](https://www.vive.com/us/ready/)
- For smartphones, an iPhone 6 for iOS and at least a Galaxy S6 for Android

## A-Frame 支持哪些浏览器?

A-Frame supports VR for any browser that implements the [WebXR
specification][w3c], and flat 3D for most browsers. Large browser vendors are
slowly moving to the WebXR specification, though it does not have much
front-facing changes to A-Frame developers, involving mostly renaming of APIs.

- [Supermedium](https://www.supermedium.com) (available on Oculus and Steam)
- Firefox
- Oculus Browser
- Samsung Internet
- Microsoft Edge
- Chrome (WebXR under origin trials)
- Exokit (experimental early support)

[webvrpolyfill]: https://github.com/googlevr/webvr-polyfill

A-Frame supports most modern mobile browsers that don't have WebXR support
through the [WebVR polyfill][webvrpolyfill]. Note that these browsers do not
have official WebXR support, and we are using a polyfill; it is important to
lower the expectations that these browsers will provide a quality experience
and not have quirks:

- Safari for iOS
- Chrome for Android
- Firefox for iOS
- Samsung Internet
- UC Browser

For flat or plain 3D support, A-Frame supports all modern browsers,
specifically those that support WebGL including:

- Firefox
- Chrome
- Safari
- Edge
- Internet Explorer 11
