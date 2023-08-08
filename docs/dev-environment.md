# 软件环境安装

## nodejs的安装
> **版本：**`18.16.1`
### nodejs的下载
- **[下载地址](https://nodejs.org/en)**

- **下载左侧的稳定版即可**

![nodejs1](../source/dev-environment/nodejs1.PNG)

### nodejs的安装
- **1.一直next，直到安装完毕！**

- **2.安装完成后，cmd执行下面的命令，查看版本号,像下面这样就代表安装成功**
```shell
node -v
```
![nodejs2](../source/dev-environment/nodejs2.PNG)

- **安装好之后，可以配置一下淘宝镜像，提升下载速度,cmd执行下面的命令**
```shell
npm config set registry https://registry.npm.taobao.org
```

![nodejs3](../source/dev-environment/nodejs3.PNG)

- **也可再安装一下ts，为了后台前端二次开发，这个安不安装都是无所谓的，cmd执行下面的命令**
```shell
npm install -g typescript
```

![nodejs4](../source/dev-environment/nodejs4.PNG)

## vscode的安装
### vscode的下载
- **[下载地址（因为官网很慢，我就先为你们下好了，这样你们下载的时候就快了）](https://xiaomaomi-xj.github.io/shopping-mall-help/source/dev-environment/vscode/VSCodeUserSetup-x64-1.79.2.exe)**

### vscode的安装

- **1.vscode安装过程比较简单，除了下面这个页面，勾选一下，其他的一直下一步即可**

![vsode1](../source/dev-environment/vscode/vscode1.PNG)

- **2.接下来我们安两个插件，一个是把软件变成英文的，搜`chinese`,然后install安装**

![vsode2](../source/dev-environment/vscode/vscode2.PNG)

- **3.安装好后，会有个弹窗，需要重启软件，点击即可**

![vsode3](../source/dev-environment/vscode/vscode3.PNG)

- **4.还需要安装一个启动服务的插件，搜`live server`,点击安装**

![vsode4](../source/dev-environment/vscode/vscode4.PNG)


## mysql的安装
> **版本：**`5.7.21`
### mysql的下载
- **[下载地址](https://downloads.mysql.com/archives/installer/)**

- **选择5.7.21版本，别的版本可能会有明文密码安全问题，`如果你用的是别的版本`，也不需要重新安装，后面我会解决这个问题。**

![选择版本](../source/dev-environment/mysql1.png)

- **选择第二个进行下载**

![下载安装程序](../source/dev-environment/mysql2.png)

### mysql安装教程：

- **1.下载好软件我们就直接打开,勾选我同意...，然后点击next**

![mysql1](../source/dev-environment/mysql3.PNG)

- **2.选择第二个，点击next**

![mysql2](../source/dev-environment/mysql4.PNG)

- **3.因为我用的一个全新的系统什么都没有，所以需要安装一下`vc++ 2013`，如果你们没有这个页面不用管，如果有的话，选中点击execute**

![mysql3](../source/dev-environment/mysql5.PNG)

- **4.点击之后就会弹出这个页面，还是一样勾选我同意...，然后点击install,安装完之后点击next**

![mysql4](../source/dev-environment/mysql6.PNG)

- **5.点击execute**

![mysql5](../source/dev-environment/mysql7.PNG)

- **6.打对号后，点击next**

![mysql6](../source/dev-environment/mysql8.PNG)

- **7.next**

![mysql7](../source/dev-environment/mysql9.PNG)

- **8.选中第一个，next**

![mysql8](../source/dev-environment/mysql10.PNG)

- **9.和我勾选的一样就行（默认就是如此），next**

![mysql9](../source/dev-environment/mysql11.PNG)

- **10.设置一个你的root账号的密码，防止遗忘建议设置`123456`,后面还可以修改**

- **![mysql10](../source/dev-environment/mysql12.PNG)**

- **11.和我勾选的一样就行，next**

![mysql11](../source/dev-environment/mysql13.PNG)

- **12.和我勾选的一样就行，点next**

![mysql12](../source/dev-environment/mysql14.PNG)

- **13.点击execute，等待所有的都打绿勾**

![mysql13](../source/dev-environment/mysql15.PNG)

- **14.然后点击finish**

![mysql14](../source/dev-environment/mysql16.PNG)

- **15.点击next**

![mysql15](../source/dev-environment/mysql17.PNG)

- **16.finish**

![mysql16](../source/dev-environment/mysql18.PNG)

- **16.1.额外的一步（cmd执行下面的命令）**
```shell
mysql -uroot -p
```
- **如果你的是这样的，那么后面的几个mysql的步骤就不用看了**

![mysql160](../source/dev-environment/mysql160.PNG)

- **如果你的是这样的，那么请继续往下看**

![mysql161](../source/dev-environment/mysql161.PNG)

- **17.`win+q`输入`服务`，回车**

![mysql17](../source/dev-environment/mysql19.PNG)

- **18.找到MYSQL57,`双击`**

![mysql18](../source/dev-environment/mysql20.PNG)

- **19.先看启动按钮是否可以点击，如果可以点击，就手动点击，如果不可以点击，就代表他正在运行中，就不用点击了**

![mysql19](../source/dev-environment/mysql21.PNG)

- **20.复制一下这个路径**

![mysql20](../source/dev-environment/mysql22.PNG)

- **21.`win+e`右击此电脑，点击属性**

![mysql21](../source/dev-environment/mysql23.PNG)

- **22.点击高级系统管理**

![mysql22](../source/dev-environment/mysql24.PNG)

- **23.点击环境变量**

![mysql23](../source/dev-environment/mysql25.PNG)

- **24.选中Path，点击编辑**

![mysql25](../source/dev-environment/mysql27.PNG)

- **25.点击新建**

![mysql26](../source/dev-environment/mysql28.PNG)

- **26.把刚刚复制的路径粘贴上去,然后-确定-确定-确定**

![mysql27](../source/dev-environment/mysql29.PNG)

- **27.然后`重新打开`一个cmd执行下面的命令，回车输入你的密码，出现和我一样的效果就成功了安装了mysql**
```shell
mysql -uroot -p
```
![mysql28](../source/dev-environment/mysql30.PNG)

- **28.如果你的还是这种情况，请从17步从新开始，主要看第20步，最左边不要复制`"`,最右边不要复制`\`**

![mysql161](../source/dev-environment/mysql161.PNG)

![mysql28.1](../source/dev-environment/mysql281.png)


## redis的安装
> **版本：**`3.0.504`
### redis的下载
- **[下载地址（因为github很慢，我就先为你们下好了，这样你们下载的时候就快了）](https://xiaomaomi-xj.github.io/shopping-mall-help/source/dev-environment/redis/Redis-x64-3.0.504.msi)**

### redis安装教程
- **1.redis安装非常简单，除了以下这个页面需要勾选一下，其他的都选择下一步即可**

![redis1](../source/dev-environment/redis/redis1.PNG)

- **2.安装完成后，还是`win+q`，输入服务，找到Redis，双击，查看启动按钮，是否可以点击，如果可以点击就手动点击，不可以点击就不需要管,然后复制一下他的路径**

![redis2](../source/dev-environment/redis/redis2.PNG)

![redis3](../source/dev-environment/redis/redis3.png)

- **3.`win+e`打开资源管理器，把刚刚复制的路径打开**

![redis4](../source/dev-environment/redis/redis4.PNG)

- **4.找到`redis.windows-service.conf`这个文件**

![redis5](../source/dev-environment/redis/redis5.PNG)

- **5.打开这个文件，这里选择记事本打开**

![redis6](../source/dev-environment/redis/redis6.PNG)

- **6.`ctrl+f`搜索`requirepass`,找到这一行,这一行代表的是redis的密码**

![redis7](../source/dev-environment/redis/redis7.PNG)

- **7.把这一行前面的`#`去掉，把后面的改成你想要的密码,我这里改的是`123456`，然后对文件进行保存**

![redis8](../source/dev-environment/redis/redis8.PNG)

- **8.如果你也和我一样，把文件放在了`C盘`，那么保存可能没有权限**

![redis11](../source/dev-environment/redis/redis11.PNG)

- **9.解决办法是,右击这个文件，选择`属性`，选择`安全`，点击`编辑`，选择`Users...`，然后把`修改`勾选上，然后点击`应用`，`确定`->`确定`,这时候就有权限，再从第5步开始就好了**

![redis10](../source/dev-environment/redis/redis10.PNG)

![redis9](../source/dev-environment/redis/redis9.PNG)


## IntelliJ IDEA的安装
> **版本：**`2022.2`
### IntelliJ IDEA的下载
- **[下载链接](https://download.jetbrains.com/idea/ideaIU-2020.2.2.exe)**
- **[其他版本下载地址](https://www.jetbrains.com/zh-cn/idea/download/other.html)**

### IntelliJ IDEA安装以及破解
- **1.IntelliJ IDEA的安装也很简单，基本上都是默认的就好，只有在下面的这些页面进行勾选一下**

![idea1](../source/dev-environment/idea/idea1.PNG)

- **2.这个勾选第二个，意思就是先别重启电脑**

![idea2](../source/dev-environment/idea/idea2.PNG)

- **3.安装好后去桌面打开此软件，勾选我同意...，点击continue**

![idea3](../source/dev-environment/idea/idea3.PNG)

- **4.点击dont send**

![idea4](../source/dev-environment/idea/idea4.PNG)

- **5.点击skip ....**

![idea5](../source/dev-environment/idea/idea5.PNG)

- **6.先点击`evaluate for free`,再点击`evaluate`**

![idea6](../source/dev-environment/idea/idea6.PNG)

#### 破解方法1

- **7.开始破解，点击`configure`下拉框，点击`plugins`**

![idea7](../source/dev-environment/idea/idea7.PNG)

- **8.点击那个小设置图标，选择第一个`maven ....`**

![idea8](../source/dev-environment/idea/idea8.PNG)

- **9.点击`+`，把下面的内容复制进去**
```
https://plugins.zhile.io
```
![idea9](../source/dev-environment/idea/idea9.PNG)

- **10.在输入框搜索`IDE Eval Reset`回车，然后点击`install`进行安装**
```
IDE Eval Reset
```
![idea10](../source/dev-environment/idea/idea10.PNG)

- **11.点击accept**

![idea11](../source/dev-environment/idea/idea11.PNG)

- **12.安装插件完成后会显示`installed`，点击ok**

![idea12](../source/dev-environment/idea/idea12.PNG)

- **13.点击`get help`下拉框，选择`eval reset`**

![idea13](../source/dev-environment/idea/idea13.PNG)

- **14.勾选`auto reset before per restart`,点击`reset`，等待IntelliJ IDEA重启就破解成功了**

![idea14](../source/dev-environment/idea/idea14.PNG)

- **然后就先可以把软件关掉**

#### 破解方法2
- **如果你无法通过上面的方法进行下载插件，可以使用参考[无限重置事件破解](https://zhile.io/2020/11/18/jetbrains-eval-reset-deprecated.html)**

#### 破解方法3
- **由于上面的破解方式仅支持老版本IntelliJ IDEA，如果你想用新版本的，请参考[下载激活工具破解](https://tech.souyunku.com/?p=30970)**