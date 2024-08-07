<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, ref, type VNode } from 'vue';
import type { ObjectType } from '@/shared/type.hm-component';
import type { ColumnInfoType } from '@/components/HmTable/type.hm-table';

defineProps<{ prop?: string }>();

const instance = getCurrentInstance();

const rowIdx = ref<number>(-1);
const data = ref<ObjectType[]>([]);
const columnInfoList = ref<ColumnInfoType[]>([]);

const columnInfo = computed<ColumnInfoType | undefined>(() => {
	if (instance === null) return;
	return columnInfoList.value.find((header) => header['id'] === instance.vnode.key);
});

const row = computed<{ [key: string]: any }>(() => {
	if (rowIdx.value === -1) return {};
	return data.value[rowIdx.value];
});

onMounted(() => {
	if (instance === null) return;

	const parent = instance.parent;
	if (parent === null) return;

	const trList = parent.refs.rows as VNode[];

	trList.some((item, idx) => {
		const colIdx = Array.prototype.indexOf.call(item.children, instance.vnode.el);
		if (colIdx !== -1) rowIdx.value = idx;
		return rowIdx.value > -1;
	});

	data.value = (parent.props.data as ObjectType[]) || [];
	columnInfoList.value = (parent.props.columnInfoList as ColumnInfoType[]) || [];
});
</script>

<template>
	<td :style="{ textAlign: columnInfo !== undefined ? columnInfo['dataAlign'] : 'center' }">
		<slot :row="row">
			<span v-if="row && prop">
				{{ row[prop] }}
			</span>
		</slot>
	</td>
</template>
