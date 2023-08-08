# 带后端的公共部分必看

> 前端加后端和前台加后台这两个项目的共同之处，如果你只是用纯前端，这里就不需要看了

## 配置文件所在目录
- **配置文件所在路径：`shopping-mall\src\main\resources\config`**

![pe1](../source/public-end/pe1.PNG)

- **图片文件所在路径：`shopping-mall\src\main\resources\static`**

![pe2](../source/public-end/pe2.PNG)

- **`img`下面还是之前的图片**

![pe3](../source/public-end/pe3.PNG)

##### 除此之外还有一些特殊的图片
- **1.`check_error.png`:当`验证码过期`的时候，就会显示此图片**

![pe4](../source/public-end/pe4.PNG)

- **2.`error.png`:当别的网站想要直接挂载咱网站的图片时，并不会显示真正的图片，而是会显示这一张图片，`也就是：防盗链`**

![pe5](../source/public-end/pe5.PNG)

- **3.`qr_error.png`：这个是启用二维码登录的时候，二维码过期就会显示此图片**

![pe6](../source/public-end/pe6.PNG)

## 邮箱配置
- **官方网址：[163邮箱](https://mail.163.com/)**

- **1.登录进去，打开`设置->pop3/smtp/imap`**

![pe7](../source/public-end/pe7.PNG)

- **2.点击`新增授权密码`**

![pe8](../source/public-end/pe8.PNG)

- **3.登录账号手机扫码，发送后，点击`我已发送`**

![pe9](../source/public-end/pe9.PNG)

- **4.然后就可以看到授权码，一定要复制下来，先保存起来，只会显示一次**

![pe10](../source/public-end/pe10.PNG)

## 微信测试公众号配置

> 因为我们是个人开发者，所以微信扫码登录，我们需要借助微信测试公众号

- **官方网址：[微信测试公众号](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)**

- **1.登录后，首先我们可以看到`appid`和`appsecret`**

![pe11](../source/public-end/pe11.PNG)

- **2.往下翻可以看到，公众号二维码，你希望用那个微信进行扫码登录，就用那个微信关注一下这个测试公众号**

![pe12](../source/public-end/pe12.PNG)

- **3.往下翻找到`网页账号`，点击修改**

![pe13](../source/public-end/pe13.PNG)

- **4.之后就是，你用登录微信的手机开一个热点，电脑连接一下，然后cmd执行下面的命令**
```shell
ipconfig
```
![pe14](../source/public-end/pe15.PNG)

- **然后复制一下这个ip地址，后面加上`:8088`，粘贴上去**

![pe15](../source/public-end/pe14.png)

## 支付宝沙箱支付配置

> 因为我们是个人开发者，所以需要沙箱环境，沙箱环境本来就是给做开发测试用的

- **官方网址：[支付宝开放平台](https://auth.alipay.com/login/ant_sso_index.htm?goto=https%3A%2F%2Fopen.alipay.com%2Fdevelop%2Fsandbox%2Fapp%3Fis_switch_sandbox%3Dtrue)**

- **1.登录后，可以看到一些基本信息，支付回调地址内容如下，点击修改`填上`：**
```
http://localhost:8088/shopping-mall/alipay/callback
```

![pe16](../source/public-end/pe17.PNG)

- **2.接口加密方式选择`系统默认密匙`,点击`查看`**

![pe17](../source/public-end/pe16.PNG)

- **3.我们只需要`应用公钥`和`支付宝公钥`**

![pe18](../source/public-end/pe18.PNG)

- **4.加密方式，点击`查看`**

![pe19](../source/public-end/pe19.PNG)

- **5.加密密码**

![pe20](../source/public-end/pe20.PNG)

- **6.因为是沙箱环境，肯定不能支付真的钱，所以阿里提供了一个专门的测试软件，和支付宝软件类似，请使用手机下载安装**

![pe22](../source/public-end/pe22.PNG)

- **7.登录账号也是要用阿里提供的测试账号，`em...,可能一辈子也见不到那么多钱`**

![pe21](../source/public-end/pe21.PNG)

## 初始化配置

> 前端加后端和前台加后台都拥有初始化配置

- **初始化配置文件路径：`shopping-mall\src\test\java\com\shoppingMall\初始化配置.java`**

![pe23](../source/public-end/pe23.PNG)

- **把需要填的东西填上，所有内容上面都有（`邮箱配置`，`微信测试公众号`，`支付宝沙箱支付`）,这个地方的商城名字用于发送邮箱证码、启动等等时候用，所以建议和`页面上的特殊配置.json`里面的商城名字保持一致**

![pe24](../source/public-end/pe24.PNG)

##### 开始执行

> 所有注意点，都在注释上写的很清楚，这个初始化配置文件只需要执行一次就好，之后再启动项目，就不需要再执行这个初始化配置文件了

- **1.首先执行第一步**

![pe25](../source/public-end/pe26.PNG)

- **2.执行完后的样子**

![pe26](../source/public-end/pe27.PNG)

- **3.可以查看是否执行成功了,cmd执行下面命令**
```shell
mysql -u root -p
```
- **3.1输入密码，然后回车，执行下面的命令，看看是否含有`shopping-mall`**
```shell
show databases;
```

![pe27](../source/public-end/pe28.PNG)

- **4.（如果你有`shopping-mall`不需要看这一步）如果你使用的`别的版本的mysql`可能没有`shopping-mall`，需要按下面这种方式执行，回车输入密码回车,(这样就解决了)**

![pe28](../source/public-end/pe29.PNG)

- **5.开始第二步之前，先把沙箱支付宝需要的参数填一下**

![pe29](../source/public-end/pe25.png)

- **6.开始执行第二步**

![pe30](../source/public-end/pe30.PNG)

- **7.执行完，会看到`Process finished with exit code 0`**

![pe31](../source/public-end/pe31.PNG)

- **8.执行第三步前介绍一下各个参数**

![pe32](../source/public-end/pe32.PNG)

- **9.开始执行第三步**

![pe33](../source/public-end/pe33.PNG)

- **10.执行完，会看到`Process finished with exit code 0`**

![pe34](../source/public-end/pe34.PNG)

- **11.开始执行最后一步**

![pe35](../source/public-end/pe35.PNG)

- **12.执行完，会看到`Process finished with exit code 0`**

![pe36](../source/public-end/pe36.PNG)

## 特殊说明（重要）
- **初始化配置`执行一次就够了`，以后再启动项目，只需要启动文件就好了**

![fee7](../source/front-back-end/fee7.PNG)

##### 但是因为扫码登录需要热点，可能导致今天的ip是这个，明天的ip就换了，对于这种情况，解决方法
- **1.你用登录微信的手机开一个热点，电脑连接一下，然后cmd执行下面的命令**
```shell
ipconfig
```
![pe38](../source/public-end/pe38.png)

- **2.再打开[微信测试公众号](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)，找到`网页账号`，点击修改**

![pe13](../source/public-end/pe13.PNG)

- **3.再把新的ip写上加上`:8088`**

![pe39](../source/public-end/pe39.png)

- **4.找到配置文件，路径：`shopping-mall\src\main\resources\application.yml`，找到`redirect_url`**

![pe37](../source/public-end/pe37.PNG)

- **4.还要把新的ip写到配置文件**

![pe40](../source/public-end/pe40.PNG)

- **5.然后启动项目即可，如果你之前先启动了，后来发现ip变了，改了之后，只需要重新启动就好了**

![pe41](../source/public-end/pe41.PNG)

##### 图片缓存的问题
- **在某些情况下，例如修改了`shopping-mall\src\main\resources\static\img`下面的图片，名字没变，就是图片换了，但是浏览器还是显示之前的图片，刷新也没用，重启项目也没用，这就是浏览器的缓存，需要清除一下浏览器缓存**

- **以`Microsoft Edge`览器为例（其他浏览器怎么清理缓存，自行百度，都大同小异）,先进到设置里面，搜索`缓存`**

![pe42](../source/public-end/pe42.PNG)

- **选择`所有时间`，点击`立即清除`**

![pe43](../source/public-end/pe43.PNG)

##### 商品价格问题
- **前端对于浮点数的问题，我没有处理，所以在为商品制定价格的时候，价格要是整数，别弄个`1.1、1.11`之类的，最好都是不带小数点的，例如`1、11、111`**