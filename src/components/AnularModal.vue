<script setup lang="ts">
// Modal de anulación del sistema (réplica de #modalAnular del original).
// Componente global: confirmación para anular / desactivar un registro.
defineProps<{ open: boolean; num?: string }>()
const emit = defineEmits<{ 'update:open': [boolean]; confirm: [] }>()

function confirm() {
  emit('confirm')
  emit('update:open', false)
}
</script>

<template>
  <Teleport to="body">
    <div class="modal-bg" :class="{ on: open }" @click.self="emit('update:open', false)">
      <div class="modal modal-confirm" role="alertdialog" aria-modal="true">
        <div class="confirm-banner">{{ $t('componentes.anular_registro') }}</div>
        <div class="confirm-body">
          <div class="confirm-question">{{ $t('componentes.esta_seguro_que_quiere') }} <b>{{ $t('componentes.anular') }}</b> {{ num || $t('componentes.este_registro') }}?</div>
          <div class="confirm-note">{{ $t('componentes.quedara_inactivo_en_el_sistema') }}</div>
          <div class="confirm-actions">
            <button type="button" class="btn btn-outline-secondary" @click="emit('update:open', false)">{{ $t('componentes.cancelar') }}</button>
            <button type="button" class="btn btn-danger" @click="confirm">{{ $t('componentes.confirmar') }}</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
