import type { App } from 'vue';
import '@/shared/css.hm-component.scss';
import { HmTable, HmTableColumn } from '@/components';
import { type ColumnInfoType } from '@/components/HmTable/type.hm-table';
import HmPagination from '@/components/HmPagination/HmPagination.vue';

export default {
	install: (app: App) => {
		app.component('HmTable', HmTable);
		app.component('HmTableColumn', HmTableColumn);
		app.component('HmPagination', HmPagination);
	},
};

export { HmTable, HmTableColumn, HmPagination };
export type { ColumnInfoType };
