<template class="theme-red ls-closed op0">
    <div class="section authorization-wrapper">
        <div class="mask"></div>
        <form action="login">
            <h2>Вход в панель</h2>

            <div class="form__group" style="margin-top: 15px;">
                <label for="login">Логин</label>
                <input type="text" id="login" name="login" v-model="$data.email" onchange="document.getElementById('login').classList.remove('error')">
            </div>

            <div class="form__group">
                <label for="password">Пароль</label>
                <input type="password" id="password" name="password" v-model="$data.password" onchange="document.getElementById('password').classList.remove('error')">
            </div>

            <div class="form__group">
                <input type="button" value="Авторизация" name="auth" v-on:click="auth($data.email, $data.password)">
            </div>

            <div class="form__group mt-1">
                {{ message }}
            </div>

            <div class="links">
                <div class="link"><a href="">Забыли пароль?</a></div>
                <div class="link"><a href="signup">Регистрация</a></div>
            </div>
        </form>

        <div class="content">
            <h3>Добро пожаловать в Smart <span style="color:#73bdab;margin: 0px 2px;text-shadow: 0px 0px 7px #73bdab;">X</span>-Investment</h3>
            <p>Для начала необходимо авторизоваться. <br> Пройдите авторизацию используя данные, которые вводили при регистрации.</p>
            <a href="">Связататься с нами</a><a href="">О нас</a>
        </div>

        <div class="footer">
            <img src="/assets/img/bottomcover.png" alt="">
            <p>Разработка сайта <a href="">MirFox</a></p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function () {
        return {
            email: '',
            password: '',
            message: ''
        }
    },

    mounted() {
        if (localStorage.getItem('authorized') === 'true') {
            console.log('Already authorized');
            this.$router.push('/');
        }
    },

    methods: {
        auth: function (email, password) {
            console.log(email + ':' + password);

            axios
                .post('/api/auth/login', null, {
                    params: {
                        email: email,
                        password: password
                    }
                })
                .then(data => {
                    localStorage.setItem('authorized', true);
                    localStorage.setItem('token', data.data.access_token);
                    this.$router.push('/');
                })
                .catch(error => {
                    let errorData = error.response.data;
                    console.log(errorData);

                    if (errorData.email !== undefined) {
                        console.log('Email error');
                        document.getElementById('login').classList.add('error');
                    }

                    if (errorData.password !== undefined) {
                        console.log('Password error');
                        document.getElementById('password').classList.add('error');
                    }

                    if (errorData.error !== undefined) {
                        console.log('Not found');
                        document.getElementById('login').classList.add('error');
                        document.getElementById('password').classList.add('error');
                        alert('Неверно введены логин и/или пароль.');
                    }
                });

        }
    }
}
</script>

<style scoped>
    .sidebar {
        display: none !important;
    }

    .authorization-wrapper {
        height: 100%; width: 100%;
        background: #fff;
        z-index: 100000;
        position: fixed;
        top: 0; left: 0;
    }

@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

@media (max-width: 700px){
    h1{
        margin-top:-25px !important;
    }
    form{
        position: fixed !important;
        margin-top: -200px !important;
        width:100% !important;
    }
}

html,
body{
    font-family: PT Sans;
    margin: 0;
    padding: 0;
    background: #fff;
}

* {
    box-sizing: border-box;
}

input.error {
    border-color: red;
}

.form__group p{
    position: absolute;
    width: 340px;
    text-align: right;
    color: red;
    font-size: 13px;
}

.content h3{
    font-size: 25px;
}
.content p{
    font-size: 16px;
}
.content a{
    color: #73bdab;
    font-size: 17px;
    margin-right: 15px;
}

.content{
    text-align: center;
    width: 90%; margin: 40px auto;
}

.footer{
    position: absolute;
    bottom: 0; left: 0;
    width: 100%; height: 150px;
    background: url('');
    background-repeat: no-repeat;
    background-position: 820px -20px;
    text-align: right;
}
.footer img{
    position: absolute;
    bottom: 0; right: 0;
    z-index: -1;
}
.footer p{
    margin-right: 90px;
    margin-top: 115px;
}
.footer a{
    color: #73bdab;
    transition: .2s ease;
}
.footer a:hover{
    color: #5ba996;
}

h1{
    text-align: center;
    position: absolute;
    top: 50; left: 0;
    color: #fff;
    width: 100%;
    text-align: center;
}
h1 span{
    color: #92E4D0;
    font-size: 45px;
    margin: 0px 5px 0px 5px;
    text-shadow: 0px 0px 14px #92E4D0;
}
.mask{
    height: 55%; width: 100%;
    background: url('/assets/img/regbg.jpg') center -100px;
    position: absolute;
    top: 0;
    left: 0;
}
.mask:after{
    content: " ";
    background: rgba(0,0,0,.8);
    position: absolute;
    height: 100%; width: 100%;
    top: 0; left: 0;
}
form{
    width: 400px; height: 405px;
    background: #fff;
    position: relative;
    z-index: 1;
    margin: 0 auto;
    margin-top: 180px;
    padding: 15px 30px;
    border-radius: 30px;
}
form h2{
    font-size: 25px;
}
form input[type="button"] {
    background: rgba(117,240,211,.4);
    border: 1px solid rgba(57,241,197,.4);
    height: 40px;
    font-size: 16px;
    margin-top: 15px;
}
a {
    text-decoration: none;
}
form label{
    color: #000;
    font-size: 17px;
    font-weight: 100;
    display: block;
    margin-top: 17px;
    margin-bottom: 5px;
}
form input{
    width: 100%;
    height: 37px;
    background: rgba(196,196,196,.2);
    padding-left: 10px;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 4px;
    transition: .2s ease;
}
form input:focus{
    border: 1px solid rgba(146,228,208, .7);
}

form input[type="submit"]{
    background: rgba(117,240,211,.4);
    border: 1px solid rgba(57,241,197,.4);
    height: 40px;
    font-size: 16px;
    margin-top: 25px;
}
form input[type="submit"]:hover{
    background: rgba(110,231,202,.4);
}
form input[type="submit"]:active{
    background: rgba(117,240,211,.8);
    border: 1px solid rgba(117,240,211,0);
}
form a{

}

.links{
    margin-top: 13px;
}
.links a{
    color: #000;
    display: block;
    margin-left: 10px;
    position: relative;
    z-index: 10;
    margin-bottom: 5px;
    width: fit-content;
}
.links a:hover{
    text-decoration: none;
}
.links a:before{
    content: "";
    background: #B0F9E8;
    height: 18px; width: 4px;
    position: absolute;
    border-radius: 14px;
    left: -10px; margin-top: 2px;
    transition: .4s ease;
    z-index: -1;
}
.links a:hover:before{
    width: 120px;
}
</style>
