export default {
    data: {
        isUserAuth: false        
    },

    methods: {
        checkAuth: function () {
            axios
                .post('/api/auth/check')
                .then(user => {
                    if (user.data === '') {
                        console.log('Not authorized');
                        this.isUserAuth = false;
                    } else {
                        this.isUserAuth = true;
                    }
                });

            return this.isUserAuth;
        }
    }
}
