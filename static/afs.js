// 实例化nc  新版
// 获取场景值
var nc_scene = $('#nc').data('scene');
// if (nc_scene) {
    AWSC.use("nc", function (state, module) {
        // 初始化
        window.nc = module.init({
            // 应用类型标识。它和使用场景标识（scene字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
            appkey: "FFFF0N3N00000000A78E",
            //使用场景标识。它和应用类型标识（appkey字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的scene值，请务必正确填写。
            scene: nc_scene,
            // 声明滑动验证需要渲染的目标ID。
            renderTo: "nc",
            //前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。
            success: function (data) {
                $('input[name=csessionid]').val(data.sessionId);
                $('input[name=sig]').val(data.sig);
                $('input[name=nc_token]').val(data.token);
            },
            // 滑动验证失败时触发该回调参数。
            fail: function (failCode) {
                window.console && console.log(failCode)
            },
            // 验证码加载出现异常时触发该回调参数。
            error: function (errorCode) {
                window.console && console.log(errorCode)
            },
            upLang: {
                'cn': {
                    //加载状态提示。
                    'LOADING': "加载中...",
                    //等待滑动状态提示。
                    'SLIDE': "请向右滑动验证",
                    //验证通过状态提示。
                    'SUCCESS': "验证通过",
                    //验证失败触发拦截状态提示。
                    'ERROR': "非常抱歉，网络出错了...",
                    //验证失败触发拦截状态提示。
                    'FAIL': "验证失败，请重试"
                }
            }
        });
    })
// }


