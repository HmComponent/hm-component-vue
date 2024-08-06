import type { App } from 'vue';
import HmTable from './src/components/HmTable/HmTable.vue';
import HmTableColumn from './src/components/HmTable/HmTableColumn.vue';

export default {
	install: (app: App) => {
		app.component('HmTable', HmTable);
		app.component('HmTableColumn', HmTableColumn);
	},
};

// export { HmTable, HmTableColumn };
