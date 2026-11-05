// Registro del catálogo: única fuente del índice lateral y del orden de las secciones.
// Para añadir una sección: crea el componente en sections/ (y sus demos en demos/) y regístralo aquí.
import type { Component } from 'vue'
import IconSection from '../sections/componentes-vue/IconSection.vue'
import ButtonSection from '../sections/componentes-vue/ButtonSection.vue'
import CardSection from '../sections/componentes-vue/CardSection.vue'
import BadgeSection from '../sections/componentes-vue/BadgeSection.vue'
import ModalSection from '../sections/componentes-vue/ModalSection.vue'
import AnularModalSection from '../sections/componentes-vue/AnularModalSection.vue'
import NotifySection from '../sections/componentes-vue/NotifySection.vue'
import PrintDocSection from '../sections/componentes-vue/PrintDocSection.vue'
import SearchSelectSection from '../sections/componentes-vue/SearchSelectSection.vue'
import DateInputSection from '../sections/componentes-vue/DateInputSection.vue'
import PhoneInputSection from '../sections/componentes-vue/PhoneInputSection.vue'
import ThousandsInputSection from '../sections/componentes-vue/ThousandsInputSection.vue'
import TokensSection from '../sections/TokensSection.vue'
import ColoresSection from '../sections/ColoresSection.vue'
import TipografiaSection from '../sections/TipografiaSection.vue'
import IconosSection from '../sections/IconosSection.vue'
import BreakpointsSection from '../sections/BreakpointsSection.vue'
import ContainersSection from '../sections/ContainersSection.vue'
import GridSection from '../sections/GridSection.vue'
import UtilidadesSection from '../sections/UtilidadesSection.vue'
import ImagenesSection from '../sections/ImagenesSection.vue'
import TablasSection from '../sections/TablasSection.vue'
import FormulariosSection from '../sections/FormulariosSection.vue'
import ControlesSection from '../sections/ControlesSection.vue'
import ValidacionSection from '../sections/ValidacionSection.vue'
import RangeSection from '../sections/RangeSection.vue'
import InputGroupSection from '../sections/InputGroupSection.vue'
import FloatingSection from '../sections/FloatingSection.vue'
import MultiselectSection from '../sections/MultiselectSection.vue'
import AccordionSection from '../sections/AccordionSection.vue'
import AlertasSection from '../sections/AlertasSection.vue'
import BadgesSection from '../sections/BadgesSection.vue'
import BreadcrumbSection from '../sections/BreadcrumbSection.vue'
import BotonesSection from '../sections/BotonesSection.vue'
import CardsSection from '../sections/CardsSection.vue'
import CarouselSection from '../sections/CarouselSection.vue'
import CloseSection from '../sections/CloseSection.vue'
import CollapseSection from '../sections/CollapseSection.vue'
import DropdownsSection from '../sections/DropdownsSection.vue'
import ListGroupSection from '../sections/ListGroupSection.vue'
import ModalesSection from '../sections/ModalesSection.vue'
import NavsSection from '../sections/NavsSection.vue'
import OffcanvasSection from '../sections/OffcanvasSection.vue'
import PaginationSection from '../sections/PaginationSection.vue'
import PlaceholdersSection from '../sections/PlaceholdersSection.vue'
import PopoversSection from '../sections/PopoversSection.vue'
import ProgressSection from '../sections/ProgressSection.vue'
import ScrollspySection from '../sections/ScrollspySection.vue'
import SpinnersSection from '../sections/SpinnersSection.vue'
import ToastsSection from '../sections/ToastsSection.vue'
import TooltipsSection from '../sections/TooltipsSection.vue'
import KpisSection from '../sections/KpisSection.vue'
import HelpersSection from '../sections/HelpersSection.vue'
import TimelineSection from '../sections/TimelineSection.vue'
import LedgerSection from '../sections/LedgerSection.vue'
import TotalsSection from '../sections/TotalsSection.vue'
import CalendarSection from '../sections/CalendarSection.vue'
import RteSection from '../sections/RteSection.vue'
import CheckListSection from '../sections/CheckListSection.vue'
import ConfirmSection from '../sections/ConfirmSection.vue'
import ToolbarSection from '../sections/ToolbarSection.vue'

export interface CatalogSection {
  /** Ancla de la sección (id del <section>). */
  id: string
  /** Texto del índice lateral. */
  label: string
  /** Usa clases legacy: solo tiene estilo con main.scss (no con core.scss). */
  legacy?: boolean
  component: Component
}

export interface CatalogGroup {
  title: string
  sections: CatalogSection[]
}

export const catalog: CatalogGroup[] = [
  {
    title: 'Componentes Vue',
    sections: [
      { id: 'vue-icon', label: 'Icon', component: IconSection },
      { id: 'vue-button', label: 'Button', component: ButtonSection },
      { id: 'vue-card', label: 'Card', component: CardSection },
      { id: 'vue-badge', label: 'Badge', component: BadgeSection },
      { id: 'vue-modal', label: 'Modal', component: ModalSection },
      { id: 'vue-anular-modal', label: 'AnularModal', component: AnularModalSection },
      { id: 'vue-notify', label: 'Notificaciones', component: NotifySection },
      { id: 'vue-print-doc', label: 'Impresión', component: PrintDocSection },
      { id: 'vue-search-select', label: 'SearchSelect', component: SearchSelectSection },
      { id: 'vue-date-input', label: 'DateInput', component: DateInputSection },
      { id: 'vue-phone-input', label: 'PhoneInput', component: PhoneInputSection },
      { id: 'vue-thousands-input', label: 'ThousandsInput', component: ThousandsInputSection },
    ],
  },
  {
    title: 'Fundamentos',
    sections: [
      { id: 'tokens', label: 'Tokens', component: TokensSection },
      { id: 'colores', label: 'Colores', component: ColoresSection },
      { id: 'tipografia', label: 'Tipografía', component: TipografiaSection },
      { id: 'iconos', label: 'Iconos', component: IconosSection },
    ],
  },
  {
    title: 'Layout',
    sections: [
      { id: 'breakpoints', label: 'Breakpoints', component: BreakpointsSection },
      { id: 'containers', label: 'Containers', component: ContainersSection },
      { id: 'grid', label: 'Grid', component: GridSection },
      { id: 'utilidades', label: 'Utilidades', component: UtilidadesSection },
    ],
  },
  {
    title: 'Contenido',
    sections: [
      { id: 'imagenes', label: 'Imágenes / Figuras', component: ImagenesSection },
      { id: 'tablas', label: 'Tablas', component: TablasSection },
    ],
  },
  {
    title: 'Formularios',
    sections: [
      { id: 'formularios', label: 'Form control / Select', component: FormulariosSection },
      { id: 'controles', label: 'Controles propios', legacy: true, component: ControlesSection },
      { id: 'validacion', label: 'Validación', component: ValidacionSection },
      { id: 'range', label: 'Range', component: RangeSection },
      { id: 'input-group', label: 'Input group', component: InputGroupSection },
      { id: 'floating', label: 'Floating labels', component: FloatingSection },
      { id: 'multiselect', label: 'Multiselect', component: MultiselectSection },
    ],
  },
  {
    title: 'Componentes',
    sections: [
      { id: 'accordion', label: 'Accordion', component: AccordionSection },
      { id: 'alertas', label: 'Alertas', component: AlertasSection },
      { id: 'badges', label: 'Badges', component: BadgesSection },
      { id: 'breadcrumb', label: 'Breadcrumb', component: BreadcrumbSection },
      { id: 'botones', label: 'Botones', component: BotonesSection },
      { id: 'cards', label: 'Cards', component: CardsSection },
      { id: 'carousel', label: 'Carousel', component: CarouselSection },
      { id: 'close', label: 'Close button', component: CloseSection },
      { id: 'collapse', label: 'Collapse', component: CollapseSection },
      { id: 'dropdowns', label: 'Dropdowns', component: DropdownsSection },
      { id: 'list-group', label: 'List group', component: ListGroupSection },
      { id: 'modales', label: 'Modal', component: ModalesSection },
      { id: 'navs', label: 'Navs & tabs', component: NavsSection },
      { id: 'offcanvas', label: 'Offcanvas', component: OffcanvasSection },
      { id: 'pagination', label: 'Pagination', component: PaginationSection },
      { id: 'placeholders', label: 'Placeholders', component: PlaceholdersSection },
      { id: 'popovers', label: 'Popovers', component: PopoversSection },
      { id: 'progress', label: 'Progress', component: ProgressSection },
      { id: 'scrollspy', label: 'Scrollspy', component: ScrollspySection },
      { id: 'spinners', label: 'Spinners', component: SpinnersSection },
      { id: 'toasts', label: 'Toasts', component: ToastsSection },
      { id: 'tooltips', label: 'Tooltips', component: TooltipsSection },
      { id: 'kpis', label: 'KPIs', legacy: true, component: KpisSection },
    ],
  },
  {
    title: 'Helpers',
    sections: [
      { id: 'helpers', label: 'Ratio · Stacks · VR · más', component: HelpersSection },
    ],
  },
  {
    title: 'Patrones',
    sections: [
      { id: 'timeline', label: 'Timeline', component: TimelineSection },
      { id: 'ledger', label: 'Ledger / Resumen', legacy: true, component: LedgerSection },
      { id: 'totals', label: 'Totales', legacy: true, component: TotalsSection },
      { id: 'calendar', label: 'Calendar', component: CalendarSection },
    ],
  },
  {
    title: 'App / Editores',
    sections: [
      { id: 'rte', label: 'Editor RTE', component: RteSection },
      { id: 'check-list', label: 'Check list', component: CheckListSection },
      { id: 'confirm', label: 'Confirmación', legacy: true, component: ConfirmSection },
      { id: 'toolbar', label: 'Toolbar', legacy: true, component: ToolbarSection },
    ],
  },
]
