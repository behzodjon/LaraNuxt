<template>
  <div>
    <b-container>
      <b-form>
         <b-form-group id="input-group-2"  label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="userInfo.name"
            required
            placeholder="Enter name"
            v-if="hasName"
          ></b-form-input>
        </b-form-group>
       
        <b-form-group
          id="input-group-1"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="userInfo.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4"  label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="userInfo.password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>
        <b-button @click="submitForm(userInfo)"  variant="primary">{{buttontext}}</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        email: "",
        password: "",
      },
    //   show: true,
    };
  },
  props:["submitForm","buttontext","hasName"]
};
</script>