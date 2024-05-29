# Three.js大作业

该项目展示了如何使用 Three.js 库创建一个带有动画和模型的 3D 场景。场景包括灯光、3D 模型和控制模型动画的控件。
小组成员分工：
210812012华聪瑞 代码汇总 动画实现
210812023刘若彤 配置环境 文档书写
210812002杨旭欣 环境贴图 总结整理

## 使用方法

-用户可在右上控制面板点击选择人物动画状态
-  `from walk to idle` 从走路切换为站立
-  `from idle to walk`从站立切换为走路
-  `from walk to run`从走路切换为奔跑
-  `from run to walk`从奔跑切换为走路

## 逻辑步骤

1. **初始化场景**：设置场景、相机和渲染器等基本组件。
2. **加载模型**：使用 GLTFLoader 加载 3D 模型并添加到场景中。
3. **设置灯光**：配置场景中的环境光和聚光灯。
4. **添加动画**：处理动画混合以及不同状态（静止、行走、奔跑）之间的过渡。
5. **GUI 控件**：提供图形用户界面来控制动画过渡。

## 函数说明

- `init`：初始化整个场景，包括相机、灯光、地面、模型、渲染器和 stats
- `createPanel`：创建一个 GUI 面板来控制动画过渡
- `activateAllActions`：激活动作、设置权重、播放
- `prepareCrossFade`：准备动画过渡函数
- `synchronizeCrossFade`：同步动画过渡渐进渐出效果。
- `executeCrossFade`：权重切换设置
- `setWeight`：设置指定动画动作的权重。
- `updateCrossFadeControls`：转换形态判断
- `onWindowResize()`：窗口大小调整时更新相机和渲染器。
- `animate()`：更新混合器并渲染场景的主动画循环。

