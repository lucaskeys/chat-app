<template>
  <div class="chat container">
    <h2 class="center teal-text">Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">
              {{message.name}}
            </span>
             <span class="grey-text text-darken-3">
              {{message.content}}
            </span>
            <span class="grey-text time">
              {{message.timestamp}}
            </span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <app-new-message :userName="name"></app-new-message>
      </div>
    </div>
  </div>
</template>
<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
export default {
  name: "Chat",
  props: ['name'],
    components: {
    appNewMessage: NewMessage
  },
  data() {
    return {
      messages: []
    }
  },
  created() {
    let ref = db.collection('user_messages')

    ref.onSnapshot(snapshot => {
      console.log(snapshot)
      snapshot.docChanges().forEach(change => {
        console.log(change)
        if (change.type == "added") {
          let doc = change.doc
          console.log(doc.data())
          this.messages.push({
            id: doc.id,
            content: doc.data().content,
            name: doc.data().name,
            timestamp: doc.data().timestamp
          })
        }
      })
    })
  }
}
</script>
<style>
  .chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }
  .chat span {
    font-size: 1.4em
  }
  .chat .time {
    display: block;
    font-size: 1.2em;
  }
</style>
