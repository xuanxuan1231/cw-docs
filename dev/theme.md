---
outline: [2]
---
# 开发主题
Class Widgets 使用 PyQt5。您可以使用 Qt Designer 在默认主题的基础上进行更改。  
本指南以“默认”主题为例。

## 文件架构 {#file-arch}
```
D:\CLASS-WIDGETS\UI\DEFAULT
|   theme.json
|   toast-open_dialog.ui
|   widget-base.ui
|   widget-countdown-custom.ui
|   widget-countdown.ui
|   widget-current-activity.ui
|   widget-floating.ui
|   widget-next-activity.ui
|   widget-time.ui
|   widget-weather.ui
|
+---dark
|   |   toast-open_dialog.ui
|   |   widget-base.ui
|   |   widget-countdown-custom.ui
|   |   widget-countdown.ui
|   |   widget-current-activity.ui
|   |   widget-floating.ui
|   |   widget-next-activity.ui
|   |   widget-time.ui
|   |   widget-weather.ui
|   |
|   \---preview
|           widget-countdown-custom.png
|           widget-countdown.png
|           widget-current-activity.png
|           widget-next-activity.png
|           widget-time.png
|           widget-weather.png
|
\---preview
        widget-countdown-custom.png
        widget-countdown.png
        widget-current-activity.png
        widget-next-activity.png
        widget-time.png
        widget-weather.png
```


## theme.json
`theme.json` 是主题的清单文件。  
示例：
```json
{
  "name": "默认",
  "support_dark_mode": true,
  "radius": "8px",
  "spacing": -5,
  "shadow": true,
  "height": 125,
  "widget_width": {
    "widget-time.ui": 210,
    "widget-countdown.ui": 200,
    "widget-current-activity.ui": 360,
    "widget-next-activity.ui": 290,
    "widget-countdown-custom.ui": 200,
    "widget-weather.ui": 200
  }
}
```
### `name`
类型：`string`  
主题名称。

### `support_dark_mode`
类型：`boolean`  
对深色模式的支持。

### `radius`
类型：`string`  
单位：`px`

### `spacing`
类型：`number`

### `shadow`
类型：`boolean`

### `height`
类型：`number`

### `widget_width`
类型：`object`

## widget-weather.ui
`widget-weather.ui` 定义了“天气”小组件。
### `backgnd`
小组件的背景。

### `current_city`
小组件提示文字 - 城市、天气情况。

### `temprature`
天气温度显示。

### `weather_icon`
天气图标。

## widget-time.ui
`widget-time.ui` 定义了“日期”小组件。
### `backgnd`
小组件的背景。

### `date_text`
当前的年、月。

### `day_text`
当前的日、星期。

## widget-next-activity.ui
`widget-next-activity.ui` 定义了“更多活动”小组件。
### `backgnd`
小组件的背景。

### `next_lesson_text`
接下来的活动。

### `next_subtitle`
小组件提示文字。

## widget-floating.ui
`widget-floating.ui` 定义了浮窗。
### `backgnd`
浮窗的背景。

### `progressBar`
活动剩余时间。

### `activity_countdown`
活动倒计时

### `subject`
当前活动。

### `label`
浮窗的拖动条。