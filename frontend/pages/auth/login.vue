<template>
  <div>
    <b-container>
      <h1>Login</h1>
      <UserAuthForm buttontext="Login" :submitForm="loginUser" />
    </b-container>
  </div>
</template>

<script>
import UserAuthForm from "../../components/UserAuthForm";
export default {
  components: { UserAuthForm },

  methods: {
    loginUser(loginInfo) {
      this.$auth.loginWith("local", { data: loginInfo })
    },
  },
};
</script>