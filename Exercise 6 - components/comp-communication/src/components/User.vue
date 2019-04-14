<template>
  <div class="component">
    <h1>The User component</h1>
    <p>I'm an awesome user</p>
    <button @click="changeName" class="btn btn-danger">Change Name</button>
    <p>Name is {{ name }}</p>
    <hr>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <app-user-detail :name="name"
                          @nameWasReset="name = $event"
                          :resetFn="resetFn"
                          :userAge="userAge">
                          </app-user-detail>
      </div>
      <div class="col-sm-12 col-md-6">
        <app-user-edit
                      :userAge="userAge"
                      @ageWasEdited="userAge = $event ">
                      </app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetails.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return {
      name: "Bogdan",
      userAge: 30
    };
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName() {
      this.name = "Monica";
    },
    //callback fn - acts as an emit event (we could use one or the other)
    resetFn() {
      this.name = "Bogdan";
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
