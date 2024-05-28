// 入口文件
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import * as THREE from 'three';

			import { StereoEffect } from 'three/addons/effects/StereoEffect.js';

// 全局变量
let camera,
  scene,
  renderer,
  stats,
  gui,
  settings = {};

// 初始化场景
function initScene() {
  

  
}

function initCamera() {

}

function initLight(params) {}

function initRenderer(params) {

}

function onDocumentMouseMove( event ) {

}
// requestAnimationFrame  |  setAnimationLoop
function animate() {

}

function onWindowResize() {

}

// 坐标系辅助对象、创建轨道控制器、创建stats对象 等辅助工具
function initHelper() {

}

function initGUI() {
  gui = new GUI();
}

initScene();
initCamera();
initLight();
initRenderer();
init();
animate();
