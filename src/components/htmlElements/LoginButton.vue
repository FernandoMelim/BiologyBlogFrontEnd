<template>
  <b-dropdown position="is-bottom-left" append-to-body aria-role="menu" trap-focus>
    <a
      slot="trigger"
      class="button is-primary navbar-item"
      role="button"
    >
      <span>Login</span>
      <b-icon icon="menu-down" />
    </a>

    <b-dropdown-item
      aria-role="menu-item"
      :focusable="false"
      custom
      paddingless
    >
      <form action="">
        <div class="modal-card" style="width:300px;">
          <section class="modal-card-body">
            <b-field label="Email">
              <b-input
                type="email"
                placeholder="Your email"
                required
              />
            </b-field>

            <b-field label="Password">
              <b-input
                type="password"
                password-reveal
                placeholder="Your password"
                required
              />
            </b-field>

            <b-checkbox>Remember me</b-checkbox>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-primary">
              Login
            </button>
          </footer>
        </div>
      </form>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
