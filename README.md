# CTBCINS-UIKit
![Static Badge](https://img.shields.io/badge/version-1.0.0-green)

## 介紹
此元件庫為基於新企業平台UI改版設計稿所建立的元件庫，使用Vue.Shadcn.Tailwind.Stroybook等工具開發，可直接於任何基於Vue3建立之專案中匯入。

## Dependencies
![Static Badge](https://img.shields.io/badge/Vue-^3.4.21-%233fb984)
![Static Badge](https://img.shields.io/badge/Tailwindcss-^3.4.1-%2338bdf8?link=https://tailwindcss.com/)
![Static Badge](https://img.shields.io/badge/shadcn_vue-^0.10.3-%23303030?link=https://www.shadcn-vue.com/)
![Static Badge](https://img.shields.io/badge/Storybook-^8.0.0-%23ff4785?link=https://storybook.js.org/)

## 開發日誌
| 版本 | 日期 | 開發人員 | 開發項目 |
| --- | --- | --- | --- |
| v1.0.0 | 2024/04/24 | cd082 | 專案建立，新增所有項目

## 預覽元件
```
git clone http://192.168.112.166/ctbcins/ctbcins-uikit.git
npm install --force
npm run storybook
```

## 引用元件庫
### **package.json**
```
  "dependencies": {
    "ctbcins-uikit": "file:lib/ctbcins-uikit",
  },
```
### **main.js**
```
import { createApp } from 'vue';
import App from './App.vue';
import UIKit from 'ctbcins-uikit';

createApp(App)
.use(UIKit)
.mount('#app')
```