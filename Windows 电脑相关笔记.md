# Windows 电脑相关笔记

## 自动更新暂停

> 以管理员身份打开 Windows PowerShell，并输入以下命令
```sh
reg add HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings /v FlightSettingsMaxPauseDays /t REG_DWORD /d 6000 /f
```

## SourceTree 每次启动都下载 Mercurial

解决方案：修改配置文件禁用 Mercurial

1. C:\Users\你的用户名\AppData\Local\Atlassian\SourceTree.exe_Url_随机字符串\当前版本号\user.config

2. 修改 EnableHgSupport 为 False
```config
<setting name="EnableHgSupport" serializeAs="String">
    <value>False</value>
</setting>
```
