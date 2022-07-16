<template>
    <aside id="leftsidebar" class="sidebar">
        <div class="navbar-brand">
            <button class="btn-menu ls-toggle-btn" type="button"><i class="zmdi zmdi-menu"></i></button>
            <a href="index.php"><!--span class="m-l-10">Smart <span style="color:#">X</span> Invest</span--><img width="150px" src="/assets/img/black_flogo.svg" alt="MeeMoney"><!--span class="m-l-10">Aero</span--></a>
        </div>
        <div class="menu">
            <ul class="list">
                <li>
                    <div class="user-info">
                        <a class="image" href="profile"><img src="/assets/images/profile_av.jpg" alt="User"></a>
                        <div class="detail">
                            <h4>User</h4>
                            <small></small>
                        </div>
                    </div>
                </li>

                <li v-for="link in links">
                    <router-link :to="link.href"><i :class="link.icon"></i><span> {{ link.title }}</span></router-link>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
export default {
    data () {
        return {
            links: [
                {
                    title: 'Главная',
                    href: '/',
                    icon: 'zmdi zmdi-home'
                },
                {
                    title: 'Мой профиль',
                    href: '/profile',
                    icon: 'zmdi zmdi-account'
                },
                {
                    title: 'Продукты',
                    href: '/products',
                    icon: 'zmdi zmdi-shopping-cart'
                },
                {
                    title: 'Мои инвестиции',
                    href: '/investments',
                    icon: 'zmdi zmdi-balance'
                },
                {
                    title: 'Рефералы',
                    href: '/authorization',
                    icon: 'zmdi zmdi-accounts'
                },
                {
                    title: 'Финансы',
                    href: '/authorization',
                    icon: 'zmdi zmdi-balance-wallet'
                },
                {
                    title: 'Выход',
                    href: '/authorization',
                    icon: 'zmdi zmdi-minus-circle'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
