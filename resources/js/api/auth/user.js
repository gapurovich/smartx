export default {
    data: function() {
        return {
            isUserAuth: false
        }
    },

    methods: {
        getInfo: function () {
            axios
                .get('/api/auth/user-profile')
                .then(user => {
                    console.log(user);
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        }
    }
}
