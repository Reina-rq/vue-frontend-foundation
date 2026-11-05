// Utilidades puras para mostrar el código de una demo a partir de su archivo fuente
// (importado con `?raw`). Así la vista previa y el código mostrado salen del mismo archivo.

/** Quita la sangría común a todas las líneas y los saltos de línea de los extremos. */
export function dedent(text: string): string {
  const lines = text.replace(/^\n+|\s+$/g, '').split('\n')
  const indents = lines.filter((l) => l.trim()).map((l) => l.match(/^ */)?.[0].length ?? 0)
  const common = indents.length ? Math.min(...indents) : 0
  return lines.map((l) => l.slice(common)).join('\n')
}

/** Contenido del bloque `<template>` principal de un SFC (sin la etiqueta). */
export function sfcTemplate(source: string): string {
  const start = source.indexOf('<template>')
  const end = source.lastIndexOf('</template>')
  if (start < 0 || end < 0) return source.trim()
  return dedent(source.slice(start + '<template>'.length, end))
}

/** SFC completo (script + template), para demos cuyo script es parte del ejemplo. */
export function sfcFull(source: string): string {
  return source.trim()
}
