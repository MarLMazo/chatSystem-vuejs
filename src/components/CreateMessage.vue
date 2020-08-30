<template>
    <div class="container" style="margin-bottom: 30px">
        <form @submit.prevent="createMessage">
            <div class="form-group">
                <input type="text" name="message" class="form-control" placeholder="Enter message ..." v-model="newMessage">
                <p class="text-danger" v-if="errorText">{{ errorText }}</p>
            </div>
            <button class="btn btn-primary" type="submit" name="action">Submit</button>
        </form>
    </div>
</template>

<script>
import fb from '../firebase/init';
import { mapGetters } from "vuex";

const db = fb.firestore();
export default {
    name: 'CreateMessage',
    props: ['name'],
    data() {
        return {
            newMessage: null,
            errorText: null
        }
    },
    computed: {
    // map `this.user` to `this.$store.getters.user`
        ...mapGetters({
        user: "user"
        })
    },
    methods: {
        createMessage () {
            console.log(this.user);
            console.log(this.name);
            console.log(name);
            if (this.newMessage) {
                db.collection('messages').add({
                    message: this.newMessage,
                    name: this.user.data.displayName,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err);
                });
                this.newMessage = null;
                this.errorText = null;
            } else {
                this.errorText = "A message must be entered first!";
            }
        }
    }    
}
</script>