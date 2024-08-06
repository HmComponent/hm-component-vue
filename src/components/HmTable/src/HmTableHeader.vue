<script setup lang="ts">
import type { ColumnInfoType } from '@/components/HmTable/type.hm-table';
import { getSize } from '@/util.hm-component';

defineProps<{
	rowHeight?: number | string;
	columnInfoList: ColumnInfoType[];
}>();
</script>

<template>
	<table class="hm-table-column-header">
		<colgroup v-for="{ id, width } in columnInfoList" :key="id">
			<col :style="{ width: getSize(width) }" />
		</colgroup>
		<thead>
			<tr :style="{ height: getSize(rowHeight) }">
				<th
					v-for="{ id, headerAlign, label } in columnInfoList"
					:key="id"
					:style="{ textAlign: headerAlign }"
				>
					<span>{{ label }}</span>
				</th>
			</tr>
		</thead>
	</table>
</template>
