<template>
  <div class="container py-5">
    <form>
      <div class="row">
        <div class="col-md-8 mx-auto">
          <h1 class="text-center">File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Email</label>
            <input 
                  type="text"
                  id="email"
                  class="form-control"
                  v-model="userDetails.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input 
                  type="password"
                  id="password"
                  class="form-control"
                  v-model.lazy="userDetails.password">
                  <!--.lazy is modifyer .trim or .number / read more in docs-->
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input 
                  type="number"
                  id="age"
                  class="form-control"
                  v-model="userDetails.age">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 mx-auto form-group">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work -->
          <textarea
                   id="message"
                   class="form-control"
                   v-model="message"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="form-group">
            <label for="sendmail">
              <input
                    type="checkbox"
                    id="sendmail"
                    value="SendMail"
                    v-model="sendMail"><span class="ml-2">Send Mail</span>
            </label>
            <label for="sendInfomail">
              <input
                    type="checkbox"
                    id="sendInfomail"
                    value="sendInfoMail"
                    v-model="sendMail"><span class="ml-2">Send Info Mail</span>
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 mx-auto form-group">
          <label for="male">
              <input
                    type="radio"
                    id="male"
                    value="Male"
                    v-model="gender"><span class="ml-2">Male</span>
            </label>
            <label for="female">
              <input
                    type="radio"
                    id="female"
                    value="Female"
                    v-model="gender"><span class="ml-2">Female</span>
            </label>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 mx-auto form-group">
          <label for="priority">Priority</label>
          <select
                class="form-control"
                id="priority"
                v-model="selectedPriority">
                 <option v-for="priority in priorities" :key="priority">{{ priority }}</option>
                 <!-- :selected="priority == 'Medium'"  preselected if we do not use v-model on select tag-->
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 mx-auto text-right">
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-8 mx-auto">
          <button class="btn btn-outline-primary float-right" 
          @click.prevent="submitted">Submit</button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-md-8 mx-auto">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Data</h5>
            <hr>
            <p>Mail: {{ userDetails.email }}</p>
            <p>Password: {{ userDetails.password }}</p>
            <p>Age: {{ userDetails.age }}</p>
            <p style="white-space:pre;">Message: {{ message }}</p>
            <p><b>Send Mail?</b></p>
            <ul>
              <li v-for="item in sendMail" :key="item">{{ item }}</li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switched: {{ dataSwitch }}</p>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './components/Switch';

export default {
  data () {
    return {
      userDetails: {
        email: '',
        password: '',
        age: 35
      },
      message: 'Subject of your message',
      sendMail: [],
      gender: 'Male',
      selectedPriority: 'High',
      priorities: ['High', 'Medium', 'Low'],
      dataSwitch: false,
      isSubmitted: false
    }
  },
  methods: {
    submitted () {
      this.isSubmitted = true;
    }
  },
  components: {
    appSwitch: Switch
  }
}
</script>

