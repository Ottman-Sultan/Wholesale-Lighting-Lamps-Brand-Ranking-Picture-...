// 实例化nc  新版
// 获取场景值
var login_nc_1_scene = $('#login_nc_1').data('scene');
if (login_nc_1_scene) {
    AWSC.use("nc", function (state, module) {
        // 初始化
        window.nc1 = module.init({
            // 应用类型标识。它和使用场景标识（scene字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
            appkey: "FFFF0N3N00000000A78E",
            //使用场景标识。它和应用类型标识（appkey字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的scene值，请务必正确填写。
            scene: login_nc_1_scene,
            // 声明滑动验证需要渲染的目标ID。
            renderTo: "login_nc_1",
            //前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。
            success: function (data) {
                $('#login_nc_1Tip').attr('class', 'onHide')
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
                    'LOADING': "loading",
                    //等待滑动状态提示。
                    'SLIDE': "Please slide to verify",
                    //验证通过状态提示。
                    'SUCCESS': "Verified",
                    //验证失败触发拦截状态提示。
                    'ERROR': "I'm very sorry, there was a network error",
                    //验证失败触发拦截状态提示。
                    'FAIL': "Verification failed, please try again"
                }
            }
        });
    })
}


// 实例化nc  新版
// 获取场景值
var register_nc_scene = $('#register_nc').data('scene');
if (register_nc_scene) {
    AWSC.use("nc", function (state, module) {
        // 初始化
        window.nc = module.init({
            // 应用类型标识。它和使用场景标识（scene字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
            appkey: "FFFF0N3N00000000A78E",
            //使用场景标识。它和应用类型标识（appkey字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的scene值，请务必正确填写。
            scene: register_nc_scene,
            // 声明滑动验证需要渲染的目标ID。
            renderTo: "register_nc",
            //前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。
            success: function (data) {
                $('#register_ncTip').attr('class', 'onShow')
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
                    'LOADING': "loading",
                    //等待滑动状态提示。
                    'SLIDE': "Please slide to verify",
                    //验证通过状态提示。
                    'SUCCESS': "Verified",
                    //验证失败触发拦截状态提示。
                    'ERROR': "I'm very sorry, there was a network error",
                    //验证失败触发拦截状态提示。
                    'FAIL': "Verification failed, please try again"
                }
            }
        });
    })
}

// 获取场景值
var login_nc_2_scene = $('#login_nc_2').data('scene');
if (login_nc_2_scene) {
    AWSC.use("nc", function (state, module) {
        // 初始化
        window.nc2 = module.init({
            // 应用类型标识。它和使用场景标识（scene字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
            appkey: "FFFF0N3N00000000A78E",
            //使用场景标识。它和应用类型标识（appkey字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的scene值，请务必正确填写。
            scene: login_nc_2_scene,
            // 声明滑动验证需要渲染的目标ID。
            renderTo: "login_nc_2",
            //前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。
            success: function (data) {
                $('#login_nc_2Tip').attr('class', 'onHide')
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
                    'LOADING': "loading",
                    //等待滑动状态提示。
                    'SLIDE': "Please slide to verify",
                    //验证通过状态提示。
                    'SUCCESS': "Verified",
                    //验证失败触发拦截状态提示。
                    'ERROR': "I'm very sorry, there was a network error",
                    //验证失败触发拦截状态提示。
                    'FAIL': "Verification failed, please try again"
                }
            }
        });
    })
}
var reset_nc_scene = $('#reset_nc').data('scene');
if (reset_nc_scene) {
    AWSC.use("nc", function (state, module) {
        // 初始化
        window.nc3 = module.init({
            // 应用类型标识。它和使用场景标识（scene字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
            appkey: "FFFF0N3N00000000A78E",
            //使用场景标识。它和应用类型标识（appkey字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的scene值，请务必正确填写。
            scene: reset_nc_scene,
            // 声明滑动验证需要渲染的目标ID。
            renderTo: "reset_nc",
            //前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。
            success: function (data) {
                $('#reset_ncTip').attr('class', 'onHide')
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
                    'LOADING': "loading",
                    //等待滑动状态提示。
                    'SLIDE': "Please slide to verify",
                    //验证通过状态提示。
                    'SUCCESS': "Verified",
                    //验证失败触发拦截状态提示。
                    'ERROR': "I'm very sorry, there was a network error",
                    //验证失败触发拦截状态提示。
                    'FAIL': "Verification failed, please try again"
                }
            }
        });
    })
}



var login_nc_3_scene = $('#login_nc_3').data('scene');
if (login_nc_3_scene) {
    AWSC.use("nc", function (state, module) {
        // 初始化
        window.nc_phoneCodeLogin = module.init({
            // 应用类型标识。它和使用场景标识（scene字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
            appkey: "FFFF0N3N00000000A78E",
            //使用场景标识。它和应用类型标识（appkey字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在阿里云验证码控制台的配置管理页签找到对应的scene值，请务必正确填写。
            scene: login_nc_3_scene,
            // 声明滑动验证需要渲染的目标ID。
            renderTo: "login_nc_3",
            //前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。
            success: function (data) {
                $('#login_nc_3Tip').attr('class', 'onHide')
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
                    'LOADING': "loading",
                    //等待滑动状态提示。
                    'SLIDE': "Please slide to verify",
                    //验证通过状态提示。
                    'SUCCESS': "Verified",
                    //验证失败触发拦截状态提示。
                    'ERROR': "I'm very sorry, there was a network error",
                    //验证失败触发拦截状态提示。
                    'FAIL': "Verification failed, please try again"
                }
            }
        });
    })
}
