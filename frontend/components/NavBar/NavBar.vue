<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div v-if="$auth.loggedIn">
            <b-navbar-brand href="#">{{$auth.user.name}}</b-navbar-brand>
            <b-navbar-brand href="#" @click="$auth.logout()">Logout</b-navbar-brand>
          </div>
          <div v-else >
            <b-navbar-brand href="/auth/login">Login</b-navbar-brand>
            <b-navbar-brand href="/auth/register">Register</b-navbar-brand>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {};
</script>