import '@/shared/css.hm-component.scss';
import type { App } from 'vue';

import { HmTable, HmTableColumn, HmPagination } from '@/components';
import type { ColumnInfoType } from '@/components';

export default {
	install: (app: App) => {
		app.component('HmTable', HmTable);
		app.component('HmTableColumn', HmTableColumn);
		app.component('HmPagination', HmPagination);
	},
};

export { HmTable, HmTableColumn, HmPagination };
export type { ColumnInfoType };
