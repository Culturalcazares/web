<script setup lang="ts">
</script>

<template>
  <div class="container py-4 my-4">
    <h1 class="mb-4 text-center title-font">Patrocina el Festival Culturalcázares</h1>
    <p class="lead text-center mb-5 abeezee-font">
      Con el barrio, por el barrio, para el barrio. ¡Tu negocio puede ser parte del corazón de Los Alcázares!
    </p>

    <div class="row justify-content-center mb-5 abeezee-font">
      <div class="col-md-8 text-center">
        <p>
          El <strong>Festival Culturalcázares</strong> es una iniciativa vecinal que celebra el arte, la cultura y la convivencia en nuestras calles. Queremos invitar a los comercios y empresas locales a unirse a este proyecto que pone en valor nuestra identidad y dinamiza la economía del barrio.
        </p>
        <p>
          Apoyar el festival no solo es una muestra de compromiso social, sino también una excelente oportunidad para ganar visibilidad ante cientos de asistentes y vecinos.
        </p>
      </div>
    </div>

    <h2 class="mb-4 text-center title-font">Niveles de Patrocinio</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 mb-5 justify-content-center abeezee-font">
      <!-- Bronce -->
      <div class="col">
        <div class="card h-100 border-0 shadow text-center sponsorship-card">
          <div class="card-header bg-white border-0 pt-4">
            <span class="fs-1">🥉</span>
            <h3 class="card-title mt-2 fw-bold">Bronce</h3>
          </div>
          <div class="card-body d-flex flex-column">
            <div class="display-6 fw-bold mb-4 price-tag">50€</div>
            <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px;">
              <li class="mb-3 d-flex align-items-start">
                <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                <span>Nombre en sección de “Patrocinadores” de la web</span>
              </li>
              <li class="mb-3 d-flex align-items-start">
                <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                <span>Mención en redes sociales</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Plata -->
      <div class="col">
        <div class="card h-100 border-primary border-2 shadow-lg text-center sponsorship-card featured">
          <div class="card-header bg-white border-0 pt-4">
            <span class="fs-1">🥈</span>
            <h3 class="card-title mt-2 fw-bold">Plata</h3>
          </div>
          <div class="card-body d-flex flex-column">
            <div class="display-6 fw-bold mb-4 price-tag">150€</div>
            <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px;">
              <li class="mb-3 d-flex align-items-start">
                <i class="bi bi-plus-circle-fill text-primary me-2 mt-1"></i>
                <span>Todo lo de <strong>Bronce</strong></span>
              </li>
              <li class="mb-3 d-flex align-items-start">
                <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                <span>Logo en cartelería de papel</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Oro -->
      <div class="col">
        <div class="card h-100 border-0 shadow text-center sponsorship-card">
          <div class="card-header bg-white border-0 pt-4">
            <span class="fs-1">🥇</span>
            <h3 class="card-title mt-2 fw-bold">Oro</h3>
          </div>
          <div class="card-body d-flex flex-column">
            <div class="display-6 fw-bold mb-4 price-tag">300€</div>
            <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px;">
              <li class="mb-3 d-flex align-items-start">
                <i class="bi bi-plus-circle-fill text-primary me-2 mt-1"></i>
                <span>Todo lo de <strong>Plata</strong></span>
              </li>
              <li class="mb-3 d-flex align-items-start">
                <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                <span>Mención durante el festival</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Platino -->
      <div class="col">
        <div class="card h-100 border-0 shadow text-center sponsorship-card">
          <div class="card-header bg-white border-0 pt-4">
            <span class="fs-1">💎</span>
            <h3 class="card-title mt-2 fw-bold">Platino</h3>
          </div>
          <div class="card-body d-flex flex-column">
            <div class="display-6 fw-bold mb-4 price-tag">500€ <small class="text-muted fs-6">o más</small></div>
            <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px;">
              <li class="mb-3 d-flex align-items-start">
                <i class="bi bi-plus-circle-fill text-primary me-2 mt-1"></i>
                <span>Todo lo de <strong>Oro</strong></span>
              </li>
              <li class="mb-3 d-flex align-items-start">
                <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                <span>Stand / espacio promocional</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>

    <div class="text-center mt-5">
      <p class="mb-4">
        ¿Quieres formar parte de algo grande? ¡Hablemos!
      </p>
      <div class="mb-4">
        <a href="mailto:culturalcazares.fest@gmail.com" class="btn btn-primary btn-lg px-5 py-3 shadow-sm title-font">
          Mándanos un email a culturalcazares.fest@gmail.com
        </a>
      </div>
      <p class="abeezee-font">
        También puedes descargar el <a href="#" target="_blank" class="fw-bold text-decoration-none">contrato de patrocinio</a> para más detalles.
      </p>
    </div>
  </div>
</template>

<style scoped>
.title-font {
  font-family: var(--jellee);
}

.abeezee-font {
  font-family: var(--abeezee);
}

.sponsorship-card {
  transition: transform 0.3s ease, shadow 0.3s ease;
  border-radius: 15px;
}

.sponsorship-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

.featured {
  position: relative;
  overflow: hidden;
}

.featured::after {
  content: 'RECOMENDADO';
  position: absolute;
  top: 15px;
  right: -30px;
  background: #0d6efd;
  color: white;
  padding: 5px 35px;
  transform: rotate(45deg);
  font-size: 0.7rem;
  font-weight: bold;
}

.price-tag {
  color: #333;
  letter-spacing: -1px;
}
</style>
