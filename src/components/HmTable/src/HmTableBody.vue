<script setup lang="ts">
import type { ObjectType } from '@/type.hm-component';
import { computed } from 'vue';
import { getSize } from '@/util.hm-component';
import type { ColumnInfoType } from '@/components/HmTable/type.hm-table';

const props = defineProps<{
	height?: number | string;
	rowHeight?: number | string;
	data: ObjectType[];
	columnInfoList: ColumnInfoType[];
	useSelect: boolean;
}>();

const emits = defineEmits<{
	(e: 'clickRow', row: any): void;
	(e: 'dblClickRow', row: any): void;
}>();

const selectedRowIdx = defineModel<number>();

const rowHeightSize = computed(() => getSize(props.rowHeight));

const tableBodyHeight = computed<string>(() => {
	if (!props.height) return 'auto';
	else {
		return `calc(${getSize(props.height)} - ${rowHeightSize.value})`;
	}
});

const onClickRow = (row: ObjectType, idx: number) => {
	selectedRowIdx.value = idx;
	emits('clickRow', row);
};

const onDblClickRow = (row: ObjectType) => {
	emits('dblClickRow', row);
};
</script>

<template>
	<div class="hm-table-section" :style="{ height: tableBodyHeight }">
		<table class="hm-table-body">
			<colgroup v-for="{ id, width } in columnInfoList" :key="id">
				<col :style="{ width: getSize(width) }" />
			</colgroup>
			<tr
				v-for="(row, idx) in data"
				:key="idx"
				ref="rows"
				class="hm-table-row"
				:class="{ 'is-hover': useSelect, 'is-selected': useSelect && selectedRowIdx === idx }"
				:style="{ height: rowHeightSize }"
				@click="onClickRow(row, idx)"
				@dblclick="onDblClickRow(row)"
			>
				<slot />
			</tr>
		</table>
	</div>
</template>
