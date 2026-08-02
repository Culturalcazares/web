<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref<'crowdfunding' | 'empresas'>('crowdfunding')
</script>

<template>
  <div class="container py-4 my-4">
    <h1 class="mb-4 text-center">Apoya el Festival Culturalcázares</h1>
    <p class="lead text-center mb-5">
      Con el barrio, por el barrio, para el barrio. ¡Tú también puedes ser parte del corazón del
      festival!
    </p>

    <!-- Tabs -->
    <ul class="nav nav-tabs nav-fill mb-5 border-bottom-0" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link fs-5 fw-semibold px-4 py-3"
          :class="{ active: activeTab === 'crowdfunding' }"
          @click="activeTab = 'crowdfunding'"
          type="button"
        >
          🤝 Crowdfunding
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link fs-5 fw-semibold px-4 py-3"
          :class="{ active: activeTab === 'empresas' }"
          @click="activeTab = 'empresas'"
          type="button"
        >
          🏢 Empresas
        </button>
      </li>
    </ul>

    <!-- Tab: Crowdfunding -->
    <div v-if="activeTab === 'crowdfunding'">
      <div class="row justify-content-center mb-5">
        <div class="col-md-8">
          <div class="card border-0 bg-light rounded-4 p-4">
            <h5 class="fw-bold mb-3">📋 ¿Cómo funciona?</h5>
            <ol class="mb-0 ps-3">
              <li class="mb-3">
                <strong>Haz tu donación</strong> eligiendo el paquete que más te guste y pulsando el
                botón "Donar".
              </li>
              <li class="mb-3">
                <strong>Recibirás un email de confirmación</strong> con tu ticket de compra.
                ¡Guárdalo bien, lo vas a necesitar!
              </li>
              <li>
                <strong>Recoge tus regalos</strong> — entre el
                <strong>12 y el 23 de octubre</strong>, pásate por la
                <strong>Asociación de Vecinos El Tajo</strong> (C. Río Bullaque, 24, 45007 Toledo)
                con tu ticket y te entregaremos todo lo que te corresponde. El festival es el
                <strong>24 de octubre</strong>, ¡así que no te quedes sin tus regalos!
              </li>
            </ol>
          </div>
        </div>
      </div>

      <!-- Paquetes crowdfunding -->
      <h2 class="mb-4 text-center">Elige tu aportación</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mb-5 justify-content-center">
        <!-- 3€ -->
        <div class="col">
          <div class="card h-100 border-0 shadow text-center rounded-4">
            <div class="card-header bg-white border-0 pt-4">
              <span class="fs-1">📣</span>
              <h3 class="card-title mt-2 fw-bold">Apoyo Vecinal</h3>
            </div>
            <div class="card-body d-flex flex-column">
              <div class="display-6 fw-bold mb-4 text-dark">3€</div>
              <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px">
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">📣</span>
                  <span>Mención en redes sociales</span>
                </li>
              </ul>
            </div>
            <div class="card-footer bg-white border-0 pb-4 text-center">
              <a href="mailto:culturalcazares.fest@gmail.com" class="btn btn-primary px-4">Donar</a>
            </div>
          </div>
        </div>

        <!-- 5€ -->
        <div class="col">
          <div class="card h-100 border-0 shadow text-center rounded-4">
            <div class="card-header bg-white border-0 pt-4">
              <span class="fs-1">🎟️</span>
              <h3 class="card-title mt-2 fw-bold">Amigue del Festival</h3>
            </div>
            <div class="card-body d-flex flex-column">
              <div class="display-6 fw-bold mb-4 text-dark">5€</div>
              <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px">
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">📣</span>
                  <span>Mención en redes sociales</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">🏷️</span>
                  <span>3 pegatinas</span>
                </li>
              </ul>
            </div>
            <div class="card-footer bg-white border-0 pb-4 text-center">
              <a href="mailto:culturalcazares.fest@gmail.com" class="btn btn-primary px-4">Donar</a>
            </div>
          </div>
        </div>

        <!-- 20€ -->
        <div class="col">
          <div class="card h-100 border-0 shadow text-center rounded-4">
            <div class="card-header bg-white border-0 pt-4">
              <span class="fs-1">🛍️</span>
              <h3 class="card-title mt-2 fw-bold">Persona Colaboradora</h3>
            </div>
            <div class="card-body d-flex flex-column">
              <div class="display-6 fw-bold mb-4 text-dark">20€</div>
              <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px">
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">📣</span>
                  <span>Mención en redes sociales</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">🛍️</span>
                  <span>Tote bag del festival</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">🏷️</span>
                  <span>3 pegatinas</span>
                </li>
              </ul>
            </div>
            <div class="card-footer bg-white border-0 pb-4 text-center">
              <a href="mailto:culturalcazares.fest@gmail.com" class="btn btn-primary px-4">Donar</a>
            </div>
          </div>
        </div>

        <!-- 35€ RECOMENDADO -->
        <div class="col">
          <div
            class="card h-100 border-primary border-2 shadow text-center rounded-4 position-relative overflow-hidden"
          >
            <div
              class="position-absolute top-0 end-0 bg-primary text-white px-3 py-1 fw-bold small shadow-sm"
              style="z-index: 1; border-bottom-left-radius: 10px"
            >
              RECOMENDADO
            </div>
            <div class="card-header bg-white border-0 pt-4">
              <span class="fs-1">👕</span>
              <h3 class="card-title mt-2 fw-bold">Seguidor/a</h3>
            </div>
            <div class="card-body d-flex flex-column">
              <div class="display-6 fw-bold mb-4 text-dark">35€</div>
              <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px">
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">📣</span>
                  <span>Mención en redes sociales</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">👕</span>
                  <span>Camiseta del festival</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">🏷️</span>
                  <span>3 pegatinas</span>
                </li>
              </ul>
            </div>
            <div class="card-footer bg-white border-0 pb-4 text-center">
              <a href="mailto:culturalcazares.fest@gmail.com" class="btn btn-primary px-4">Donar</a>
            </div>
          </div>
        </div>

        <!-- 50€ -->
        <div class="col">
          <div class="card h-100 border-0 shadow text-center rounded-4">
            <div class="card-header bg-white border-0 pt-4">
              <span class="fs-1">🎽</span>
              <h3 class="card-title mt-2 fw-bold">Persona Impulsora</h3>
            </div>
            <div class="card-body d-flex flex-column">
              <div class="display-6 fw-bold mb-4 text-dark">50€</div>
              <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px">
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">📣</span>
                  <span>Mención en redes sociales</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">👕</span>
                  <span>Camiseta del festival</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">🛍️</span>
                  <span>Tote bag del festival</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">🏷️</span>
                  <span>3 pegatinas</span>
                </li>
              </ul>
            </div>
            <div class="card-footer bg-white border-0 pb-4 text-center">
              <a href="mailto:culturalcazares.fest@gmail.com" class="btn btn-primary px-4">Donar</a>
            </div>
          </div>
        </div>

        <!-- 100€ -->
        <div class="col">
          <div class="card h-100 border-0 shadow text-center rounded-4">
            <div class="card-header bg-white border-0 pt-4">
              <span class="fs-1">🧥</span>
              <h3 class="card-title mt-2 fw-bold">Mecenas</h3>
            </div>
            <div class="card-body d-flex flex-column">
              <div class="display-6 fw-bold mb-4 text-dark">100€</div>
              <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px">
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">📣</span>
                  <span>Mención en redes sociales</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">🧥</span>
                  <span>Sudadera del festival</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">👕</span>
                  <span>Camiseta del festival</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">🛍️</span>
                  <span>Tote bag del festival</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <span class="me-2">🏷️</span>
                  <span>3 pegatinas</span>
                </li>
              </ul>
            </div>
            <div class="card-footer bg-white border-0 pb-4 text-center">
              <a href="mailto:culturalcazares.fest@gmail.com" class="btn btn-primary px-4">Donar</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Paquete especial 500€ destacado -->
      <div class="row justify-content-center mb-4">
        <div class="col-md-10">
          <div
            class="card border-warning border-3 shadow-lg text-center rounded-4 position-relative overflow-hidden"
            style="background: linear-gradient(135deg, #fff9e6 0%, #ffffff 60%)"
          >
            <div
              class="position-absolute top-0 start-0 end-0 bg-warning text-dark px-3 py-2 fw-bold"
              style="z-index: 1; letter-spacing: 2px; font-size: 0.85rem"
            >
              🚨 NIVEL LEYENDA · SOLO PARA PERSONAS MUY VALIENTES 🚨
            </div>
            <div class="card-header bg-transparent border-0 pt-5 mt-2">
              <span style="font-size: 3.5rem">🫅</span>
              <p class="text-muted fst-italic mb-0">"Quien paga la fiesta... se lleva la gloria"</p>
            </div>
            <div class="card-body d-flex flex-column align-items-center">
              <div class="display-4 fw-bold mb-2 text-warning">500€</div>
              <p class="text-muted mb-4 small">Una inversión. Una leyenda. Un manteo.</p>
              <div class="row w-100 justify-content-center g-3">
                <div class="col-md-5">
                  <p class="fw-bold mb-2 text-warning">🎪 Experiencias exclusivas</p>
                  <ul class="list-unstyled text-start mb-0 small">
                    <li class="mb-2 d-flex align-items-start text-start">
                      <span class="me-2">🪂</span
                      ><span><strong>Manteo por la organización</strong> — sí, de verdad</span>
                    </li>
                    <li class="mb-2 d-flex align-items-start text-start">
                      <span class="me-2">🥫</span
                      ><span
                        ><strong>Lata con el logo a tamaño gigante</strong> — pa que no haya duda de
                        quién manda aquí</span
                      >
                    </li>
                  </ul>
                </div>
                <div class="col-md-5">
                  <p class="fw-bold mb-2 text-secondary">🎁 El pack completo</p>
                  <ul class="list-unstyled text-start mb-0 small">
                    <li class="mb-1 d-flex align-items-start">
                      <span class="me-2">📣</span><span>Mención en redes sociales</span>
                    </li>
                    <li class="mb-1 d-flex align-items-start">
                      <span class="me-2">🧥</span><span>Sudadera del festival</span>
                    </li>
                    <li class="mb-1 d-flex align-items-start">
                      <span class="me-2">👕</span><span>Camiseta del festival</span>
                    </li>
                    <li class="mb-1 d-flex align-items-start">
                      <span class="me-2">🛍️</span><span>Tote bag del festival</span>
                    </li>
                    <li class="mb-1 d-flex align-items-start">
                      <span class="me-2">🏷️</span><span>3 pegatinas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-footer bg-transparent border-0 pb-4 text-center">
              <a
                href="mailto:culturalcazares.fest@gmail.com"
                class="btn btn-warning btn-lg px-5 fw-bold"
                >Donar</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab: Empresas -->
    <div v-if="activeTab === 'empresas'">
      <div class="row justify-content-center mb-5">
        <div class="col-md-8 text-center">
          <p>
            El <strong>Festival Culturalcázares</strong> es una iniciativa vecinal que celebra el
            arte, la cultura y la convivencia en nuestras calles. Queremos invitar a los comercios y
            empresas locales a unirse a este proyecto que pone en valor nuestra identidad y dinamiza
            la economía del barrio.
          </p>
          <p>
            Apoyar el festival no solo es una muestra de compromiso social, sino también una
            excelente oportunidad para ganar visibilidad ante cientos de asistentes y vecinos.
          </p>
        </div>
      </div>

      <h2 class="mb-4 text-center">Niveles de Patrocinio</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 mb-5 justify-content-center">
        <!-- Bronce -->
        <div class="col">
          <div class="card h-100 border-0 shadow text-center rounded-4">
            <div class="card-header bg-white border-0 pt-4">
              <span class="fs-1">🥉</span>
              <h3 class="card-title mt-2 fw-bold">Bronce</h3>
            </div>
            <div class="card-body d-flex flex-column">
              <div class="display-6 fw-bold mb-4 text-dark">50€</div>
              <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px">
                <li class="mb-3 d-flex align-items-start">
                  <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                  <span>Nombre en sección de "Patrocinadores" de la web</span>
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
          <div
            class="card h-100 border-primary border-2 shadow text-center rounded-4 position-relative overflow-hidden"
          >
            <div
              class="position-absolute top-0 end-0 bg-primary text-white px-3 py-1 fw-bold small shadow-sm"
              style="transform: rotate(0deg); z-index: 1; border-bottom-left-radius: 10px"
            >
              RECOMENDADO
            </div>
            <div class="card-header bg-white border-0 pt-4">
              <span class="fs-1">🥈</span>
              <h3 class="card-title mt-2 fw-bold">Plata</h3>
            </div>
            <div class="card-body d-flex flex-column">
              <div class="display-6 fw-bold mb-4 text-dark">150€</div>
              <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px">
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
          <div class="card h-100 border-0 shadow text-center rounded-4">
            <div class="card-header bg-white border-0 pt-4">
              <span class="fs-1">🥇</span>
              <h3 class="card-title mt-2 fw-bold">Oro</h3>
            </div>
            <div class="card-body d-flex flex-column">
              <div class="display-6 fw-bold mb-4 text-dark">300€</div>
              <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px">
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
          <div class="card h-100 border-0 shadow text-center rounded-4">
            <div class="card-header bg-white border-0 pt-4">
              <span class="fs-1">💎</span>
              <h3 class="card-title mt-2 fw-bold">Platino</h3>
            </div>
            <div class="card-body d-flex flex-column">
              <div class="display-6 fw-bold mb-4 text-dark">
                500€ <small class="text-muted fs-6">o más</small>
              </div>
              <ul class="list-unstyled text-start mx-auto mb-4" style="max-width: 250px">
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
        <p class="mb-4">¿Quieres formar parte de algo grande? ¡Hablemos!</p>
        <div class="mb-4">
          <a
            href="mailto:culturalcazares.fest@gmail.com"
            class="btn btn-primary btn-lg px-5 py-3 shadow-sm"
          >
            Mándanos un email a culturalcazares.fest@gmail.com
          </a>
        </div>
        <p>
          También puedes descargar el
          <a href="#" target="_blank" class="fw-bold text-decoration-none"
            >contrato de patrocinio</a
          >
          para más detalles.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-tabs .nav-link {
  color: #6c757d;
  border-radius: 0.5rem 0.5rem 0 0;
}
.nav-tabs .nav-link.active {
  font-weight: 700;
  color: #0d6efd;
}
</style>
