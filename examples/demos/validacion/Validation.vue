<template>
  <div class="row g-3">
    <div class="col-12 col-md-6">
      <label class="form-label">Inválido</label>
      <input class="form-control is-invalid" value="dato erróneo">
      <span class="invalid-feedback">Campo requerido.</span>
    </div>
    <div class="col-12 col-md-6">
      <label class="form-label">Válido</label>
      <input class="form-control is-valid" value="dato correcto">
      <span class="valid-feedback">Se ve bien.</span>
    </div>
  </div>
  <input class="form-control input-locked mt-12" value="Bloqueado / solo lectura" readonly>
</template>
