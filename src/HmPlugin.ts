import type { App } from 'vue';
import '@/shared/css.hm-component.scss';
import { HmTable, HmTableColumn } from '@/components';

export default {
	install: (app: App) => {
		app.component('HmTable', HmTable);
		app.component('HmTableColumn', HmTableColumn);
	},
};

// export { HmTable, HmTableColumn };
