<template>
</template>

<script>
import firebase from "firebase";

export default {
    methods:{
        signOut(){
            firebase
                .auth()
                .signOut()
                .then(()=>{
                    this.$router.replace({
                        name: "Login"
                    })
                })
        }
    }
}
</script>