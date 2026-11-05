<template>
  <div class="card card-flush overflow-hidden">
    <table>
      <thead><tr class="table-head-primary"><th>Nº</th><th>Nombre</th><th class="text-end">Acciones</th></tr></thead>
      <tbody>
        <tr><td><b>001</b></td><td>Elemento A</td>
          <td class="text-end"><span class="acts">
            <span class="act"><svg class="ic"><use href="#i-edit" /></svg></span>
            <span class="act danger"><svg class="ic"><use href="#i-ban" /></svg></span>
          </span></td></tr>
        <tr><td colspan="3" class="table-empty p-3 text-muted">Sin registros…</td></tr>
      </tbody>
    </table>
  </div>
</template>
