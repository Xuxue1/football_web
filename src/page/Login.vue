<template>
    <div style="height:100%">
        <div class="login_wrapper">
            <img class="login_logo" src="" />
            <!-- 用户登录-->
            <div id="pwdLogin" class="login_panel" :class="{ displayNone: active1}">
                <div class="login_content">
                    <h1 class="login_title">用户登录</h1>
                    <div class="login_error">用户名不存在</div>
                    <!-- 验证提示 -->
                    <div>
                        <input class="login_input input_block" type="text" placeholder="请输入手机号" />
                    </div>
                    <div class="marginTop20">
                        <input class="login_input input_block" type="password" placeholder="请输入密码" />
                    </div>
                    <p class="marginTop30 color-999 lineheight20 clear">
                        <a class="floatLeft codeLogin" @click="codeLogin">验证码登录</a>
                        <a class="floatRight forgotPwd" @click="forgotPwd">忘记密码?</a>
                    </p>
                    <div class="marginTop20">
                        <button class="login_btn btn_blue">登录</button>
                    </div>
                    <div class="marginTop20">
                        <button class="userRegister login_btn btn_nobg" @click="goRegister">注册</button>
                    </div>
                </div>
            </div>

            <!-- 验证码登录-->
            <div id="codeLogin" class="login_panel"  :class="{ displayNone: active2}">
                <div class="login_content">
                    <h1 class="login_title">验证码登录</h1>
                    <div class="login_error">用户名不存在</div>
                    <!-- 验证提示 -->
                    <div>
                        <input class="login_input input_block" type="text" placeholder="请输入手机号" />
                    </div>
                    <div class="marginTop20 clear">
                        <input class="login_input input_sm floatLeft" type="text" placeholder="请输入验证码" />
                        <button class="login_btn btn_code">获取验证码</button>
                    </div>
                    <p class="marginTop30 color-999 lineheight20 clear">
                        <a class="floatLeft pwdLogin" @click="pwdLogin">密码登录</a>
                        <a class="floatRight forgotPwd" @click="forgotPwd">忘记密码?</a>
                    </p>
                    <div class="marginTop20">
                        <button class="login_btn btn_blue">登录</button>
                    </div>
                    <div class="marginTop20">
                        <button class="userRegister login_btn btn_nobg" @click="goRegister">注册</button>
                    </div>
                </div>
            </div>

            <!-- 用户注册 -->
            <div id="userRegister" class="login_panel" :class="{ displayNone: active3}">
                <div class="login_content">
                    <h1 class="login_title">注册账号</h1>
                    <div class="login_error">用户名不存在</div>
                    <!-- 验证提示 -->
                    <div>
                        <input class="login_input input_block" type="text" placeholder="请输入手机号" />
                    </div>
                    <div class="marginTop20 clear">
                        <input class="login_input input_sm floatLeft" type="text" placeholder="请输入验证码" />
                        <button class="login_btn btn_code">获取验证码</button>
                    </div>
                    <div class="marginTop20">
                        <input class="login_input input_block" type="password" placeholder="请输入设置密码" />
                    </div>
                    <div class="marginTop50">
                        <button class="login_btn btn_blue">提交并完成注册</button>
                    </div>
                    <p class="marginTop20 textAlignRight lineheight20">
                        <a class="pwdLogin esp_color" @click="returnLogin">已有账号,立即登录</a>
                    </p>
                </div>
            </div>

            <!-- 忘记密码 -->
            <div id="forgotPwd" class="login_panel" :class="{ displayNone: active4}">
                <div class="login_content">
                    <h1 class="login_title">忘记密码</h1>
                    <div class="login_error">用户名不存在</div>
                    <!-- 验证提示 -->
                    <div>
                        <input class="login_input input_block" type="text" placeholder="请输入手机号" />
                    </div>
                    <div class="marginTop20 clear">
                        <input class="login_input input_sm floatLeft" type="text" placeholder="请输入验证码" />
                        <button class="login_btn btn_code">获取验证码</button>
                    </div>
                    <div class="marginTop20">
                        <input class="login_input input_block" type="password" placeholder="请输入新密码" />
                    </div>
                    <div class="marginTop50">
                        <button class="login_btn btn_blue">提交并完成注册</button>
                    </div>
                    <p class="marginTop20 textAlignRight lineheight20">
                        <a class="esp_color pwdLogin" @click="returnLogin">返回登录&gt;&gt;</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
         data() {
            return {
                active1: false,  //用户名登录
                active2: true,   //验证码登录
                active3: true,   //用户注册
                active4: true,   //忘记密码
            }
        },
        methods:{
            returnLogin(){
                this.active1= false;
                this.active2= true;
                this.active3= true;
                this.active4= true;
            },
            codeLogin(){
                this.active1= true;
                this.active2= false;
                this.active3= true;
                this.active4= true;
            },
            pwdLogin(){
                this.active1= false;
                this.active2= true;
                this.active3= true;
                this.active4= true;
            },
            goRegister(){
                this.active1= true;
                this.active2= true;
                this.active3= false;
                this.active4= true;
            },
            forgotPwd(){
                this.active1= true;
                this.active2= true;
                this.active3= true;
                this.active4= false;
            }
        }
    }
</script>
