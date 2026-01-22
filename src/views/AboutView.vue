<script setup lang="ts"></script>

<template>
  <div class="container py-5 my-5">
    <!-- Hero Section: La Esencia -->
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <h1 class="display-4 fw-bold text-primary mb-4">Somos Culturalcázares</h1>
        <p class="lead text-dark shadow-sm p-4 bg-light rounded-3 border-start border-4 border-primary">
          El festival Culturalcázares nace como una renovación del emblemático festival que dejó huella en nuestro barrio. Es una oportunidad para resucitar su espíritu, añadiendo nuevos aires y aprovechando el crecimiento cultural, artístico y gastronómico de nuestra comunidad.
        </p>
      </div>
      <div class="col-lg-6 text-center">
        <img class="img-fluid rounded" src="@/assets/images/logo.png" alt="Culturalcázares Logo" style="max-height: 300px;" />
      </div>
    </div>

    <!-- Sección: Nuestra Filosofía -->
    <div class="row mb-5 py-4 bg-primary text-white rounded-4 shadow">
      <div class="col-md-8 mx-auto text-center">
        <h2 class="h1 fw-bold mb-4">Cultura de barrio, cultura al natural</h2>
        <p class="fs-5">
          Nuestro enfoque mantiene la esencia de siempre: <strong>música en directo para todos</strong>. Queremos llenar la jornada con cuatro actuaciones vibrantes, asegurando que al menos el <strong>40% de los grupos incluyan mujeres</strong>, promoviendo la igualdad en los escenarios.
        </p>
      </div>
    </div>

    <!-- Sección: Objetivos -->
    <h2 class="text-center fw-bold mb-5">Nuestros Objetivos</h2>
    <div class="row g-4 mb-5">
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm text-center p-3">
          <div class="card-body">
            <div class="display-5 text-warning mb-3"><i class="bi bi-shop"></i></div>
            <h5 class="card-title fw-bold">Economía Local</h5>
            <p class="card-text small text-muted">Promocionamos la cultura y la economía de proximidad del barrio.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm text-center p-3">
          <div class="card-body">
            <div class="display-5 text-warning mb-3"><i class="bi bi-people"></i></div>
            <h5 class="card-title fw-bold">Talento Local</h5>
            <p class="card-text small text-muted">Damos visibilidad a los artistas y agrupaciones de nuestra zona.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm text-center p-3">
          <div class="card-body">
            <div class="display-5 text-warning mb-3"><i class="bi bi-controller"></i></div>
            <h5 class="card-title fw-bold">Ocio Sano</h5>
            <p class="card-text small text-muted">Generamos alternativas de ocio para todas las edades, especialmente jóvenes.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm text-center p-3">
          <div class="card-body">
            <div class="display-5 text-warning mb-3"><i class="bi bi-heart"></i></div>
            <h5 class="card-title fw-bold">Identidad</h5>
            <p class="card-text small text-muted">Diseñamos un festival en consonancia con la idiosincrasia del barrio.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección: Comunidad y Comunicación -->
    <div class="row align-items-stretch">
      <div class="col-md-6 mb-4 mb-md-0">
        <div class="h-100 p-5 bg-light border rounded-3 shadow-sm">
          <h3 class="fw-bold mb-3"><i class="bi bi-megaphone me-2"></i>Unión con el barrio</h3>
          <p>
            No solo somos música. Queremos que los propios vecinos y comerciantes sean los protagonistas, desgranando la información de artistas y actividades a través de nuestras redes sociales.
          </p>
          <ul class="list-unstyled">
            <li><i class="bi bi-check2-circle text-primary me-2"></i> Cartelería tradicional y vídeos promocionales.</li>
            <li><i class="bi bi-check2-circle text-primary me-2"></i> Colaboración con medios de turismo local.</li>
            <li><i class="bi bi-check2-circle text-primary me-2"></i> Talleres y actividades para todas las edades.</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3 shadow-sm">
          <h3 class="fw-bold mb-3"><i class="bi bi-instagram me-2"></i>¡Síguenos!</h3>
          <p>
            Mantente al día de todas las inscripciones, actividades y sorpresas que estamos preparando. El barrio es el corazón del festival, y queremos que formes parte de él.
          </p>
          <div class="mt-4">
            <a href="https://www.instagram.com/culturalcazares" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light btn-lg rounded-pill mb-3">
              <i class="bi bi-instagram me-2"></i>@culturalcazares
            </a>
            <div class="mt-2">
              <span class="badge rounded-pill bg-primary px-3 py-2 me-2">#CulturaBarrio</span>
              <span class="badge rounded-pill bg-warning text-dark px-3 py-2">#MusicaEnDirecto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
