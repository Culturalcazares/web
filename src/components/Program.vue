<script setup lang="ts"></script>

<template>
  <div id="program">
    <div class="container py-5">
      <a
        class="btn btn-outline-secondary mb-4 float-end"
        data-bs-toggle="collapse"
        href="#filters"
        role="button"
        aria-expanded="false"
        aria-controls="filters"
      >
        <i class="bi bi-filter" /> Filtrar
      </a>
      <h2 class="fs-1 mb-4">Programa</h2>
      <div>
        <div class="collapse card p-3 mb-4" id="filters">
          <div class="row justify-content-center">
            <div class="col-md-4">
              <div class="form-floating">
                <select class="form-select" id="type-select" aria-label="Type select">
                  <option selected>Sin filtro</option>
                  <option value="1">Talleres</option>
                  <option value="2">Conciertos</option>
                  <option value="3">Actividades</option>
                  <option value="4">Mercadillos</option>
                </select>
                <label for="floatingSelect">Tipo de actividad</label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-floating">
                <select class="form-select" id="time-select" aria-label="Type select">
                  <option selected>Sin filtro</option>
                </select>
                <label for="floatingSelect">Horario</label>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <img src="/images/beatles.png" class="card-img-top bg-light" alt="Actividad" />
              <div class="card-body">
                <p>
                  <span class="badge text-bg-warning">Concierto</span>
                </p>
                <h5 class="card-title">The Beatles</h5>
                <h6 class="card-subtitle mb-2 text-muted">Culturalcázares</h6>
                <p class="card-text mt-4">
                  <i class="bi bi-clock"></i> 22:00 - 23:00
                  <br />
                  <i class="bi bi-geo-alt"></i> Escenario
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
