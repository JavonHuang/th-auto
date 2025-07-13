import type { Component, App } from "vue"
import './index.scss'
import ThAffix from './affix/affix.ts'
import ThAlert from './alert/alert.ts'
import ThAnchor from './anchor/anchor.ts'
import ThAutocomplete from './autocomplete/autocomplete.ts'
import ThAvatar from './avatar/avatar.ts'
import ThBacktop from './backtop/backtop.ts'
import ThBadge from './badge/badge.ts'
import ThBreadcrumb from './breadcrumb/breadcrumb.ts'
import ThButton from './button/button.ts'
import ThCalendar from './calendar/calendar.ts'
import ThCard from './card/card.ts'
import ThCarousel from './carousel/carousel.ts'
import ThCascader from './cascader/cascader.ts'
import ThCheckbox from './checkbox/checkbox.ts'
import ThCheckboxGroup from './checkbox/checkboxGroup.ts'
import ThCol from './col/col.ts'
import ThCollapse from './collapse/collapse.ts'
import ThColorPicker from './colorPicker/colorPicker.ts'
import ThConfigProvider from './configProvider/configProvider.ts'
import ThDatePicker from './datePicker/datePicker.ts'
import ThDescriptions from './descriptions/descriptions.ts'
import ThDialog from './dialog/dialog.ts'
import ThDrawer from './drawer/drawer.ts'
import ThDropdown from './dropdown/dropdown.ts'
import ThDropdownItem from './dropdown/dropdownItem.ts'
import ThDropdownMenu from './dropdown/dropdownMenu.ts'
import ThEmpty from './empty/empty.ts'
import ThFlex from './flex/flex.ts'
import ThForm from './form/form.ts'
import ThFormAuto from './formAuto/formAuto.ts'
import ThFormItem from './form/formItem.ts'
import ThIcon from './icon/icon.ts'
import ThImage from './image/image.ts'
import ThInput from './input/input.ts'
import ThLink from './link/link.ts'
import ThMention from './mention/mention.ts'
import ThMenu from './menu/menu.ts'
import ThSubMenu from './menu/subMenu.ts'
import ThMenuItem from './menu/menuItem.ts'
import ThInputNumber  from './number/number.ts'
import ThPageHeader from './pageHeader/pageHeader.ts'
import ThPageLayout from './pageLayout/pageLayout.ts'
import ThPagination from './pagination/pagination.ts'
import ThPopconfirm from './popconfirm/popconfirm.ts'
import ThPopover from './popover/popover.ts'
import ThProgress from './progress/progress.ts'
import ThQuery from './query/query.ts'
import ThQueryTable from './queryTable/queryTable.ts'
import ThRadio from './radio/radio.ts'
import ThRadioGroup from './radio/radioGroup.ts'
import ThRate from './rate/rate.ts'
import ThResult from './result/result.ts'
import ThRow from './row/row.ts'
import ThSegmented from './segmented/segmented.ts'
import ThSelect from './select/select.ts'
import ThSelectV2 from './select/selectv2.ts'
import ThSkeleton from './skeleton/skeleton.ts'
import ThSlider from './slider/slider.ts'
import ThStatistic from './statistic/statistic.ts'
import ThSteps from './steps/steps.ts'
import ThSwitch from './switch/switch.ts'
import ThTable from './table/table.ts'
import ThTableColumn from './table/tableColumn.ts'
import ThTabs from './tabs/tabs.ts'
import ThTabPane from './tabs/tabPane.ts'
import ThTag from './tag/tag.ts'
import ThTimeline from './timeline/timeline.ts'
import ThTimePicker from './timePicker/timePicker.ts'
import ThTimeSelect from './timeSelect/timeSelect.ts'
import ThTooltip from './tooltip/tooltip.ts'
import ThTour from './tour/tour.ts'
import ThTransfer from './transfer/transfer.ts'
import ThTree from './tree/tree.ts'
import ThTreeSelect from './treeSelect/treeSelect.ts'
import ThTreeV2 from './treeV2/treeV2.ts'
import ThUpload from './upload/upload.ts'
import ThTableV2 from './virtualizedTable/tableV2.ts'
import ThWatermark from './watermark/watermark.ts'

const components: {
  [propName: string]: Component
} = {
  ThAffix,
  ThAlert,
  ThAnchor,
  ThAutocomplete,
  ThAvatar,
  ThBacktop,
  ThBadge,
  ThBreadcrumb,
  ThButton,
  ThCalendar,
  ThCard,
  ThCarousel,
  ThCascader,
  ThCheckbox,
  ThCheckboxGroup,
  ThCol,
  ThCollapse,
  ThColorPicker,
  ThConfigProvider,
  ThDatePicker,
  ThDescriptions,
  ThDialog,
  ThDrawer,
  ThDropdown,
  ThDropdownItem,
  ThDropdownMenu,
  ThEmpty,
  ThFlex,
  ThForm,
  ThFormAuto,
  ThFormItem,
  ThIcon,
  ThImage,
  ThInput,
  ThLink,
  ThMention,
  ThMenu,
  ThSubMenu,
  ThMenuItem,
  ThInputNumber,
  ThPageHeader,
  ThPageLayout,
  ThPagination,
  ThPopconfirm,
  ThPopover,
  ThProgress,
  ThQuery,
  ThQueryTable,
  ThRadio,
  ThRadioGroup,
  ThRate,
  ThResult,
  ThRow,
  ThSegmented,
  ThSelect,
  ThSelectV2,
  ThSkeleton,
  ThSlider,
  ThStatistic,
  ThSteps,
  ThSwitch,
  ThTable,
  ThTableColumn,
  ThTabs,
  ThTabPane,
  ThTag,
  ThTimeline,
  ThTimePicker,
  ThTimeSelect,
  ThTooltip,
  ThTour,
  ThTransfer,
  ThTree,
  ThTreeSelect,
  ThTreeV2,
  ThUpload,
  ThTableV2,
  ThWatermark,
}

export default components