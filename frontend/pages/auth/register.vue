<template>
  <div>
    <b-container>
      <h1>Register</h1>
      <UserAuthForm
        buttontext="Register"
        :submitForm="registerUser"
        hasName="true"
      />
    </b-container>
  </div>
</template>

<script>
import UserAuthForm from "../../components/UserAuthForm";
export default {
  components: { UserAuthForm },

  methods: {
    async registerUser(registerInfo) {
      try {
        await this.$axios.post("/api/register", registerInfo);
         this.$auth.loginWith("local", { data: registerInfo });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>