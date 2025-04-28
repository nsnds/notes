# Promise

|静态方法|核心作用|
|-|-|
|Promise.all|并行执行，全成功时返回结果数组，任一失败返回reject|
|Promise.allSettled|并行执行，返回所有结果|
|Promise.race|竞速执行，返回首个完成结果|
|Promise.any|竞速执行，返回首个成功结果，全部失败返回聚合错误|
|Promise.resolve|创建已解决的Promise|
|Promise.reject|创建已拒绝的Promise|

|实例方法|核心作用|
|-|-|
|then(onFulfilled, onRejected)|链式调用，处理成功/失败结果|
|catch|错误处理，是tnen(null, onRejected)的快捷方式|
|finally|无论结果如果都执行的操作|

## 三种状态

|状态|说明|
|-|-|
|pending|进行中|
|fulfilled|已完成|
|rejected|已失败|

状态不可逆
