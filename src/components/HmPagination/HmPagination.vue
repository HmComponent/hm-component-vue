<script setup lang="ts">
import { ref } from 'vue';
import HmDataCountSelect from '@/components/HmPagination/src/HmDataCountSelect.vue';
import HmPager from '@/components/HmPagination/src/HmPager.vue';

const props = withDefaults(
	defineProps<{
		dataCountList: number[];
		totalCount: number;
		pagerCount?: number;
	}>(),
	{
		pagerCount: 5,
	},
);

const emits = defineEmits<{
	(e: 'changeStatus', currPage: number, currStepCount: number): void;
}>();

const dataCount = ref<number>(props.dataCountList[0]);
const currPage = ref<number>(1);

const onChangeStatus = () => {
	emits('changeStatus', currPage.value, dataCount.value);
};
</script>

<template>
	<div class="hm-pagination">
		<HmPager
			v-model="currPage"
			:total-count="totalCount"
			:pager-count="pagerCount"
			@clickPage="onChangeStatus"
		/>
		<HmDataCountSelect
			v-model="dataCount"
			:data-count-list="dataCountList"
			@changeCount="onChangeStatus"
		/>
	</div>
</template>

<style scoped></style>
