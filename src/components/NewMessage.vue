<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add):</label>
      <input type="text" name="new-message" v-model="newMessage" />
      <p class="text-red" v-if="feedback">{{feedback}}</p>
    </form>
  </div>
</template>
<script>
import db from '@/firebase/init'
export default {
  name: 'NewMessage',
  props: ['userName'],
  data() {
    return {
      newMessage: null,
      feedback: null
    }
  },
  methods: {
    addMessage() {
      if(this.newMessage) {
        db.collection('user_messages').add({
          content: this.newMessage,
          name: this.userName,
          timestamp: Date.now()
        }).catch(error => {
          console.log(error)
        })
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "Please enter a message"
      }
    }
  }
}
</script>
