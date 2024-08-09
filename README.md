<br><br/>
<div align="center">
   <a href="https://github.com/HmComponent/hm-component-vue" style="color: limegreen; font-size: 40px; font-weight: bold">Hm Component vue3</a><br>
</div>

<p align="center">UI Components For Vue3</p>

<div align="center">
    <img src="https://img.shields.io/badge/npm-10.5.2-red" alt="npm-10.5.2" />
    <img src="https://img.shields.io/badge/node-20.13.1-darkgreen" alt="node-20.13.1" />
    <img src="https://img.shields.io/badge/vue-3.4.35-lightgreen" alt="vue-3.4.35" />
</div>

### Table of Contents
 - [Features](#features)
 - [Browser Support](#browser-support)
 - [Quick Start](#quick-start)
   - [Installing](#installing)
   - [Usage](#usage)
     - [Import](#import)
     - [Components](#components)

# features
 - Provide UI components available in [Vue3](https://vuejs.org/)<br>
   [Vue3](https://vuejs.org/)에서 사용 가능한 UI 컴포넌트를 제공합니다.
# Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) |
|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| Latest ✔                                                                                          | Latest ✔                                                                                    |


# Quick Start
This Section describes how to use Hm Component in your Vue3 project. <br>
이 부분은 당신의 Vue3 프로젝트에 Hm Component 를 적용하는 방법에 대해 알려줄겁니다.

## Installing
Using Package Manager:

```shell
# NPM
$ npm install hm-component-vue3
```

## Usage
### Import

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

// Hm Component Vue3
import HmPlugin from 'hm-component-vue3'
import 'hm-component-vue3/style.css';

const app = createApp(App);
app.use(HmPlugin);

app.mount('#app');
```

### Components
 - [HmTable](/src/components/HmTable)
 - [HmPagination](/src/components/HmPagination)