<script setup lang="ts">
import HmTableHeader from '@/components/HmTable/src/HmTableHeader.vue';
import HmTableBody from '@/components/HmTable/src/HmTableBody.vue';
import type { ColumnInfoType } from '@/components/HmTable/type.hm-table';
import type { ObjectType } from '@/shared/type.hm-component';
import { computed, ref, watch } from 'vue';
import { getSize } from '@/shared/util.hm-component';
const props = withDefaults(
	defineProps<{
		width?: number | string;
		height?: number | string;
		rowHeight?: number | string;
		columnInfoList: ColumnInfoType[];
		data: ObjectType[];
		useSelect: boolean;
	}>(),
	{ useSelect: false },
);

const emits = defineEmits<{
	(e: 'clickRow', row: any): void;
	(e: 'dblClickRow', row: any): void;
	(e: 'changeSelectedRow', prevRow: any, nextRow: any): void;
}>();

const selectedRowIdx = ref<number>(-1);

const tableHeight = computed<string>(() => {
	if (!props.height) return 'auto';
	else {
		return `calc(${getSize(props.height)} - 2px - 2rem)`;
	}
});

const getSelectedRow = () => {
	return props.data[selectedRowIdx.value];
};

const setSelectedRow = (rowIdx: number) => {
	selectedRowIdx.value = rowIdx;
};

const onClickRow = (row: ObjectType) => {
	emits('clickRow', row);
};
const onDblClickRow = (row: ObjectType) => {
	emits('dblClickRow', row);
};
const onChangeSelectedRow = (pervRow: ObjectType, nextRow: ObjectType) => {
	emits('changeSelectedRow', pervRow, nextRow);
};

watch(
	() => selectedRowIdx.value,
	(value, oldValue) => {
		onChangeSelectedRow(props.data[oldValue], props.data[value]);
	},
);

defineExpose({ getSelectedRow, setSelectedRow });
</script>

<template>
	<div class="hm-table" :style="{ width: getSize(width), height: tableHeight }">
		<HmTableHeader :columnInfoList="columnInfoList" :row-height="rowHeight" />
		<hm-table-body
			v-model="selectedRowIdx"
			:columnInfoList="columnInfoList"
			:data="data"
			:height="height"
			:rowHeight="rowHeight"
			:useSelect="useSelect"
			@click-row="onClickRow"
			@dbl-click-row="onDblClickRow"
		>
			<slot />
		</hm-table-body>
	</div>
</template>
