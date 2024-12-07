---
outline: [2,3]
---
# 开发插件
Class Widgets 支持使用 Python 编写的插件。环境配置见[开发文档](/dev/#env)。
## 插件开发 {#dev}
示例插件：[RinLit-233-shiroko/cw-example-plugin](https://github.com/RinLit-233-shiroko/cw-example-plugin)
### `plugin.json` 清单 {#manifest}
示例：
```json
{
    "name": "Class Widgets 插件示例",
    "description": "这是一个示例插件。",
    "version": "1.0.0",
    "plugin_ver": 1,
    "author": "Rin",

    "url": "https://github.com/RinLit-233-shiroko/cw-example-plugin",
    "branch": "main",

    "update_date": "2024/12/6"
}
```
#### `name` {ignore=true}
插件名称。

#### `description` {ignore=true}
插件描述。

#### `version` {ignore=true}
插件版本（给人看的）。

#### `plugin_ver` {ignore=true}
插件版本（给软件看的）。

#### `author` {ignore=true}
插件作者。

#### `url` {ignore=true}
插件仓库地址。

#### `branch` {ignore=true}
插件仓库分支。

#### `update_date` {ignore=true}
插件更新日期。

### `main.py` 主程序 {#main}
这是插件的主程序。

#### 初始化函数 {#func-init}
```python
def __init__(self, cw_contexts, method):  # 初始化
        # 保存上下文和方法
        self.cw_contexts = cw_contexts
        self.method = method

        self.CONFIG_PATH = f'{cw_contexts["PLUGIN_PATH"]}/config.json'  # 配置文件路径
        self.PATH = cw_contexts['PLUGIN_PATH']  # 插件路径

        self.method.register_widget(WIDGET_CODE, WIDGET_NAME, WIDGET_WIDTH)  # 注册小组件到CW
```
::: warning
请注意，若要使用 `cw_contexts` 和 `method`，一定要保存它们！
:::
#### `execute` 函数 {#func-execute}
插件加载时自动执行的部分。  

示例：
```python
def execute(self):  # 自启动执行部分
        # 小组件自定义（照PyQt的方法正常写）
        self.test_widget = self.method.get_widget(WIDGET_CODE)  # 获取小组件对象

        if self.test_widget:  # 判断小组件是否存在
            contentLayout = self.test_widget.findChild(QHBoxLayout, 'contentLayout')  # 标题布局
            contentLayout.setSpacing(1)  # 设置间距

            self.testimg = ImageLabel(f'{self.PATH}/img/favicon.png')  # 自定义图片
            self.testimg.setFixedSize(36, 36)

            contentLayout.addWidget(self.testimg)  # 添加图片到布局

        # Others
        if self.cw_contexts['State']:  # 判断当前状态
            self.method.change_widget_content(WIDGET_CODE, '测试', '上课状态')
        else:
            self.method.change_widget_content(WIDGET_CODE, '测试', '课间状态')

        logger.success('Plugin1 executed!')
        logger.info(f'Config path: {self.CONFIG_PATH}')

        w = Dialog('Class Widgets Example Plugin', 'Ciallo (∠·ω )⌒★, World!', None)  # Yuzusoft!
        w.exec()
```
#### `update` 函数 {#func-update}
每 `1` 秒执行的部分，类似于无限循环。  

示例：
```python
def update(self, cw_contexts):  # 自动更新部分
        self.cw_contexts = cw_contexts

        if hasattr(self, 'test_widget'):  # 判断小组件是否存在
            widget_title = f'天气:{self.cw_contexts["Weather"]}，当前秒:{datetime.now().second}'  # 标题内容

            if self.cw_contexts['State']:  # 判断当前状态
                self.method.change_widget_content(WIDGET_CODE, widget_title, '上课状态')
            else:
                self.method.change_widget_content(WIDGET_CODE, widget_title, '课间状态')

        if self.method.is_get_notification():
            logger.warning('warning', f'Plugin1 got notification! Title: {self.cw_contexts["Notification"]["title"]}')

            if self.cw_contexts['Notification']['state'] == 0:  # 如果下课
                self.method.subprocess_exec('打开记事本', 'notepad')  # 调用CW方法构建自动化(如果要特定科目的话
```
#### `cw_contexts` 上下文 {#cw-contexts}
```python
self.cw_contexts = {
            "Widgets_Width": list.widget_width,
            "Widgets_Name": list.widget_name,
            "Widgets_Code": list.widget_conf,  # 小组件列表

            "Current_Lesson": current_lesson_name,  # 当前课程名
            "State": current_state,  # 0：课间 1：上课（上下课状态）

            "Weather": weather_name,
            "Temp": temperature,  # 天气数据
            "Notification": notification.notification_contents,  # 通知内容

            "PLUGIN_PATH": f'{conf.PLUGINS_DIR}/{path}',  # 插件目录
        }
```
#### `method` 方法 {#method}

```python
class PluginMethod:  # 插件方法
    def __init__(self, app_context):
        self.app_contexts = app_context

    def register_widget(self, widget_code, widget_name, widget_width):  # 注册小组件
        self.app_contexts['Widgets_Width'][widget_code] = widget_width
        self.app_contexts['Widgets_Name'][widget_code] = widget_name
        self.app_contexts['Widgets_Code'][widget_name] = widget_code

    def get_widget(self, widget_code):  # 获取小组件实例
        for widget in mgr.widgets:
            if widget.path == widget_code:
                return widget

    def change_widget_content(self, widget_code, title, content):  # 修改小组件内容
        for widget in mgr.widgets:
            if widget.path == widget_code:
                widget.update_widget_for_plugin([title, content])

    def is_get_notification(self):  # 检查是否有通知
        if notification.pushed_notification:
            return True
        else:
            return False

    def send_notification(self, state=1, lesson_name='示例课程', title='通知示例', subtitle='副标题',
                          content='这是一条通知示例', icon=None):  # 发送通知
        notification.main(state, lesson_name, title, subtitle, content, icon)

    def subprocess_exec(self, title, action):  # 执行系统命令
        w = openProgressDialog(title, action)
        p_mgr.temp_window = [w]
        w.show()

    def read_config(self, path, section, option):  # 读取配置文件
        try:
            with open(path, 'r', encoding='utf-8') as r:
                config = json.load(r)
            return config.get(section, option)
        except Exception as e:
            logger.error(f"插件读取配置文件失败：{e}")
```
## 插件上架 {#publish}
插件广场：[Plugin Plaza](https://github.com/Class-Widgets/plugin-plaza)

照插件列表数据文件的格式，向 Plugin Plaza 提交拉取请求。