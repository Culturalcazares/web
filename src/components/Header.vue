<script setup lang="ts">
// Header component
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand d-flex align-items-center" href="/">
          <img class="img-fluid navbar-logo" src="/images/logo.png" alt="Logo" />
        </a>

        <!-- Mobile toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation menu -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink :to="{ name: 'home', hash: '#program' }" class="nav-link"
                >Programación</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'home', hash: '#sponsors' }" class="nav-link"
                >Patrocinadores</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'location' }" class="nav-link">Cómo llegar</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'about' }" class="nav-link">Quiénes somos</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink :to="{ name: 'merchandising' }" class="nav-link"
                >Merchandising</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar-logo {
  height: 40px;
  width: auto;
  object-fit: contain;
}
</style>
