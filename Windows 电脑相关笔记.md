# Windows 电脑相关笔记

## 自动更新暂停

> 以管理员身份打开 Windows PowerShell，并输入以下命令
```sh
reg add HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings /v FlightSettingsMaxPauseDays /t REG_DWORD /d 6000 /f
```
