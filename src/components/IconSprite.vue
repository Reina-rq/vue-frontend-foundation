<script setup lang="ts">
// Sprite SVG con todos los símbolos de iconos del proyecto original.
// Se monta una sola vez (en App.vue). Los iconos se usan con <Icon name="grid" />.
</script>

<template>
  <svg width="0" height="0" class="position-absolute" aria-hidden="true">
    <symbol id="i-grid" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="11" width="7" height="10" rx="1" /><rect x="3" y="15" width="7" height="6" rx="1" /></symbol>
    <symbol id="i-truck" viewBox="0 0 24 24"><path d="M3 6h11v10H3z" /><path d="M14 9h4l3 3v4h-7z" /><circle cx="7" cy="18" r="1.7" /><circle cx="17.5" cy="18" r="1.7" /></symbol>
    <symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" /><path d="M16 6.2a3 3 0 0 1 0 5.6" /><path d="M20.5 19c0-2.2-1.2-3.9-3-4.6" /></symbol>
    <symbol id="i-tire" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3" /></symbol>
    <symbol id="i-doc" viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><line x1="8.5" y1="13" x2="15.5" y2="13" /><line x1="8.5" y1="17" x2="13" y2="17" /></symbol>
    <symbol id="i-map" viewBox="0 0 24 24"><path d="M12 21s-7-6.4-7-11a7 7 0 0 1 14 0c0 4.6-7 11-7 11z" /><circle cx="12" cy="10" r="2.4" /></symbol>
    <symbol id="i-cal" viewBox="0 0 24 24"><rect x="3" y="4.5" width="18" height="16.5" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2.5" x2="8" y2="6" /><line x1="16" y1="2.5" x2="16" y2="6" /></symbol>
    <symbol id="i-wrench" viewBox="0 0 24 24"><path d="M14.6 6.3a3.6 3.6 0 0 0-4.8 4.8l-6 6 2 2 6-6a3.6 3.6 0 0 0 4.8-4.8l-2.2 2.2-2-2 2.2-2.2z" /></symbol>
    <symbol id="i-clip" viewBox="0 0 24 24"><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" /><polyline points="9 13 11 15 15 11" /></symbol>
    <symbol id="i-chart" viewBox="0 0 24 24"><line x1="5" y1="21" x2="5" y2="11" /><line x1="12" y1="21" x2="12" y2="5" /><line x1="19" y1="21" x2="19" y2="9" /></symbol>
    <symbol id="i-logout" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></symbol>
    <symbol id="i-bell" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></symbol>
    <symbol id="i-bldg" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="1" /><line x1="9" y1="7" x2="9.01" y2="7" /><line x1="14" y1="7" x2="14.01" y2="7" /><line x1="9" y1="11" x2="9.01" y2="11" /><line x1="14" y1="11" x2="14.01" y2="11" /><line x1="9" y1="15" x2="14" y2="15" /></symbol>
    <symbol id="i-chev" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></symbol>
    <symbol id="i-block" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></symbol>
    <symbol id="i-box" viewBox="0 0 24 24"><path d="M21 8 12 3 3 8v8l9 5 9-5z" /><path d="M3 8l9 5 9-5" /><line x1="12" y1="13" x2="12" y2="21" /></symbol>
    <symbol id="i-flag" viewBox="0 0 24 24"><path d="M5 21V4" /><path d="M5 4h11l-1.5 3.5L16 11H5" /></symbol>
    <symbol id="i-route" viewBox="0 0 24 24"><circle cx="6" cy="19" r="2.2" /><circle cx="18" cy="5" r="2.2" /><path d="M8.2 19H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.8" /></symbol>
    <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></symbol>
    <symbol id="i-plane" viewBox="0 0 24 24"><path d="M17.8 19.2 16 11l3.5-3.5a2.12 2.12 0 0 0-3-3L13 8 4.8 6.2a1 1 0 0 0-.9 1.7l5.1 3.6-2 2-2.5-.4-1 1 3 1.5 1.5 3 1-1-.4-2.5 2-2 3.6 5.1a1 1 0 0 0 1.7-.9z" /></symbol>
    <symbol id="i-ship" viewBox="0 0 24 24"><path d="M2 20a3 3 0 0 0 2.5 1.3c1.6 0 1.6-1.3 3.2-1.3s1.6 1.3 3.2 1.3 1.6-1.3 3.2-1.3 1.6 1.3 3.2 1.3A3 3 0 0 0 22 20" /><path d="M4 18l-1.6-5.6a1 1 0 0 1 .6-1.2L12 8l9 3.2a1 1 0 0 1 .6 1.2L20 18" /><path d="M12 8V4H8" /></symbol>
    <symbol id="i-cog" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0-1.2-2.9H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1z" /></symbol>
    <symbol id="i-tag" viewBox="0 0 24 24"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 2.8 12V5a2 2 0 0 1 2-2h7a2 2 0 0 1 1.4.6l7.4 7.4a2 2 0 0 1 0 2.8z" /><circle cx="7.5" cy="7.5" r="1.3" /></symbol>
    <symbol id="i-plus" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></symbol>
    <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6z" /><polyline points="9 12 11 14 15 10" /></symbol>
    <symbol id="i-card" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /></symbol>
    <symbol id="i-edit" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></symbol>
    <symbol id="i-ban" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><line x1="5.6" y1="5.6" x2="18.4" y2="18.4" /></symbol>
    <symbol id="i-print" viewBox="0 0 24 24"><path d="M6 9V3h12v6" /><rect x="4.5" y="9" width="15" height="8" rx="2" /><rect x="8" y="15" width="8" height="6" /></symbol>
    <symbol id="i-eye" viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></symbol>
    <symbol id="i-eye-off" viewBox="0 0 24 24"><path d="M9.88 9.88a3 3 0 0 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c6.5 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3.5 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" y1="2" x2="22" y2="22" /></symbol>
    <symbol id="i-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><line x1="12" y1="11" x2="12" y2="16" /><circle cx="12" cy="7.6" r="0.7" fill="currentColor" stroke="none" /></symbol>
    <symbol id="i-trash" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /></symbol>
    <symbol id="i-moon" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></symbol>
    <symbol id="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></symbol>
    <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6.5 12 12l8.5-5.5" /></symbol>
    <symbol id="i-lock" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></symbol>
    <symbol id="i-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></symbol>
    <symbol id="i-arrow-right" viewBox="0 0 24 24"><line x1="4" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></symbol>
    <symbol id="i-arrow-left" viewBox="0 0 24 24"><line x1="20" y1="12" x2="5" y2="12" /><polyline points="11 6 5 12 11 18" /></symbol>

    <!-- Iconos adicionales (mismo estilo stroke). -->
    <symbol id="i-arrow-up" viewBox="0 0 24 24"><line x1="12" y1="20" x2="12" y2="5" /><polyline points="6 11 12 5 18 11" /></symbol>
    <symbol id="i-arrow-down" viewBox="0 0 24 24"><line x1="12" y1="4" x2="12" y2="19" /><polyline points="6 13 12 19 18 13" /></symbol>
    <symbol id="i-chevron-left" viewBox="0 0 24 24"><polyline points="15 6 9 12 15 18" /></symbol>
    <symbol id="i-chevron-right" viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" /></symbol>
    <symbol id="i-chevron-up" viewBox="0 0 24 24"><polyline points="6 15 12 9 18 15" /></symbol>
    <symbol id="i-x" viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></symbol>
    <symbol id="i-minus" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /></symbol>
    <symbol id="i-menu" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></symbol>
    <symbol id="i-more-v" viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none" /></symbol>
    <symbol id="i-more-h" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="19" cy="12" r="1.4" fill="currentColor" stroke="none" /></symbol>
    <symbol id="i-sort" viewBox="0 0 24 24"><path d="M7 4v16" /><polyline points="3 8 7 4 11 8" /><path d="M17 20V4" /><polyline points="13 16 17 20 21 16" /></symbol>
    <symbol id="i-filter" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3" /></symbol>
    <symbol id="i-download" viewBox="0 0 24 24"><path d="M12 3v12" /><polyline points="7 10 12 15 17 10" /><path d="M5 21h14" /></symbol>
    <symbol id="i-upload" viewBox="0 0 24 24"><path d="M12 16V4" /><polyline points="7 9 12 4 17 9" /><path d="M5 21h14" /></symbol>
    <symbol id="i-save" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></symbol>
    <symbol id="i-copy" viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></symbol>
    <symbol id="i-refresh" viewBox="0 0 24 24"><polyline points="22 5 22 11 16 11" /><polyline points="2 19 2 13 8 13" /><path d="M4.5 9a8 8 0 0 1 13-3l4.5 5" /><path d="M2 13l4.5 5a8 8 0 0 0 13-3" /></symbol>
    <symbol id="i-link" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5" /><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5" /></symbol>
    <symbol id="i-external" viewBox="0 0 24 24"><path d="M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6" /><polyline points="14 4 20 4 20 10" /><line x1="20" y1="4" x2="10" y2="14" /></symbol>
    <symbol id="i-folder" viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></symbol>
    <symbol id="i-list" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><circle cx="4" cy="6" r="1" fill="currentColor" stroke="none" /><circle cx="4" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="4" cy="18" r="1" fill="currentColor" stroke="none" /></symbol>
    <symbol id="i-home" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></symbol>
    <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 16 14" /></symbol>
    <symbol id="i-calendar-check" viewBox="0 0 24 24"><rect x="3" y="4.5" width="18" height="16.5" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="2.5" x2="8" y2="6" /><line x1="16" y1="2.5" x2="16" y2="6" /><polyline points="9 14 11 16 15 12" /></symbol>
    <symbol id="i-phone" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" /></symbol>
    <symbol id="i-message" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 9 9 0 0 1-4-1L3 21l1-4a9 9 0 0 1-1-4 8.5 8.5 0 0 1 8.5-8.5 8.38 8.38 0 0 1 9 8.5z" /></symbol>
    <symbol id="i-send" viewBox="0 0 24 24"><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></symbol>
    <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" /></symbol>
    <symbol id="i-user-plus" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5" /><path d="M3 20c0-3.5 2.7-6 6-6 1.2 0 2.3.2 3.2.7" /><line x1="18" y1="9" x2="18" y2="15" /><line x1="15" y1="12" x2="21" y2="12" /></symbol>
    <symbol id="i-star" viewBox="0 0 24 24"><polygon points="12 2.5 15 9 22 9.5 16.5 14 18.3 21 12 17.3 5.7 21 7.5 14 2 9.5 9 9 12 2.5" /></symbol>
    <symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 3c0 .9-.2 1.8-.6 2.6C18.7 16 12 21 12 21z" /></symbol>
    <symbol id="i-alert" viewBox="0 0 24 24"><path d="M12 3 2.5 20h19z" /><line x1="12" y1="10" x2="12" y2="14" /><circle cx="12" cy="17" r="0.7" fill="currentColor" stroke="none" /></symbol>
    <symbol id="i-help" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M9.2 9a2.8 2.8 0 0 1 5.4 1c0 2-2.6 2.5-2.6 2.5" /><circle cx="12" cy="17" r="0.7" fill="currentColor" stroke="none" /></symbol>
    <symbol id="i-check-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><polyline points="8 12 11 15 16 9" /></symbol>
    <symbol id="i-x-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><line x1="9" y1="9" x2="15" y2="15" /><line x1="15" y1="9" x2="9" y2="15" /></symbol>
    <symbol id="i-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /></symbol>
    <symbol id="i-dot" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none" /></symbol>
    <symbol id="i-image" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9.5" r="1.5" /><path d="M21 16l-5-5L5 20" /></symbol>
    <symbol id="i-camera" viewBox="0 0 24 24"><path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" /><circle cx="12" cy="13" r="3.2" /></symbol>
    <symbol id="i-paperclip" viewBox="0 0 24 24"><path d="M21 12.5 12.5 21a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7L10 18.7a1.7 1.7 0 0 1-2.4-2.4l7.8-7.8" /></symbol>
    <symbol id="i-key" viewBox="0 0 24 24"><circle cx="8" cy="15" r="4" /><path d="M10.8 12.2 20 3" /><line x1="16.5" y1="6.5" x2="19" y2="9" /><line x1="14" y1="9" x2="16" y2="11" /></symbol>
    <symbol id="i-dollar" viewBox="0 0 24 24"><line x1="12" y1="2" x2="12" y2="22" /><path d="M17 5.5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></symbol>
    <symbol id="i-percent" viewBox="0 0 24 24"><line x1="19" y1="5" x2="5" y2="19" /><circle cx="7.5" cy="7.5" r="2.5" /><circle cx="16.5" cy="16.5" r="2.5" /></symbol>
    <symbol id="i-calculator" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2" /><rect x="8" y="6" width="8" height="3" /><line x1="8" y1="13" x2="8.01" y2="13" /><line x1="12" y1="13" x2="12.01" y2="13" /><line x1="16" y1="13" x2="16.01" y2="13" /><line x1="8" y1="17" x2="8.01" y2="17" /><line x1="12" y1="17" x2="12.01" y2="17" /><line x1="16" y1="17" x2="16.01" y2="17" /></symbol>
    <symbol id="i-wallet" viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h12v3" /><path d="M3 7v10a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H5" /><circle cx="16.5" cy="12.5" r="1.2" fill="currentColor" stroke="none" /></symbol>
    <symbol id="i-receipt" viewBox="0 0 24 24"><path d="M6 2h12v20l-3-2-3 2-3-2-3 2z" /><line x1="9" y1="7" x2="15" y2="7" /><line x1="9" y1="11" x2="15" y2="11" /></symbol>
    <symbol id="i-bank" viewBox="0 0 24 24"><line x1="3" y1="21" x2="21" y2="21" /><path d="M3 10h18" /><path d="M12 3 21 8H3z" /><line x1="6" y1="10" x2="6" y2="18" /><line x1="10" y1="10" x2="10" y2="18" /><line x1="14" y1="10" x2="14" y2="18" /><line x1="18" y1="10" x2="18" y2="18" /></symbol>
    <symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><line x1="3" y1="12" x2="21" y2="12" /><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" /></symbol>
    <symbol id="i-fuel" viewBox="0 0 24 24"><line x1="3" y1="21" x2="13" y2="21" /><path d="M4 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16" /><path d="M12 9h3l3 3v5a1.5 1.5 0 0 1-3 0v-3h-3" /><line x1="6" y1="8" x2="10" y2="8" /></symbol>
    <symbol id="i-gauge" viewBox="0 0 24 24"><path d="M3.5 17a9 9 0 1 1 17 0" /><path d="M12 14 16 9" /><circle cx="12" cy="14" r="1.3" fill="currentColor" stroke="none" /></symbol>
    <symbol id="i-weight" viewBox="0 0 24 24"><circle cx="12" cy="6" r="2" /><path d="M8 8h8l2.4 11.7a1 1 0 0 1-1 1.3H6.6a1 1 0 0 1-1-1.3z" /></symbol>
    <symbol id="i-file-plus" viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><line x1="12" y1="12" x2="12" y2="18" /><line x1="9" y1="15" x2="15" y2="15" /></symbol>
    <symbol id="i-translate" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M18.5 10L22.9 21H20.745L19.544 18H15.454L14.255 21H12.101L16.5 10H18.5ZM10 2V4H16V6L14.0322 6.0006C13.2425 8.36616 11.9988 10.5057 10.4115 12.301C11.1344 12.9457 11.917 13.5176 12.7475 14.0079L11.9969 15.8855C10.9237 15.2781 9.91944 14.5524 8.99961 13.7249C7.21403 15.332 5.10914 16.5553 2.79891 17.2734L2.26257 15.3442C4.2385 14.7203 6.04543 13.6737 7.59042 12.3021C6.46277 11.0281 5.50873 9.57985 4.76742 8.00028L7.00684 8.00037C7.57018 9.03885 8.23979 10.0033 8.99967 10.877C10.2283 9.46508 11.2205 7.81616 11.9095 6.00101L2 6V4H8V2H10ZM17.5 12.8852L16.253 16H18.745L17.5 12.8852Z" /></symbol>

  </svg>
</template>
