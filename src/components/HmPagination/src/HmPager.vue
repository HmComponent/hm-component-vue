<script setup lang="ts">
import { computed, ref } from 'vue';

const currPage = defineModel<number>({ required: true });

const props = defineProps<{
	totalCount: number;
	showingPageCount: number;
}>();

const emits = defineEmits<{
	(e: 'clickPage', currPage: number): void;
}>();

const pageList = ref<number[]>(Array.from(Array(props.totalCount).keys()).map((i) => i + 1));
const maxShowingPageIdx = ref<number>(props.totalCount / props.showingPageCount);
const showingPageIdx = ref<number>(0);

const showingPageList = computed<number[]>(() => {
	const result = pageList.value.slice(1, pageList.value.length - 1);

	const sIdx = showingPageIdx.value * props.showingPageCount;

	return result.slice(sIdx, sIdx + props.showingPageCount);
});

const decreaseShowingPageIdx = () => {
	if (showingPageIdx.value > 0) showingPageIdx.value--;
};
const increaseShowingPageIdx = () => {
	if (showingPageIdx.value < maxShowingPageIdx.value - 1) showingPageIdx.value++;
};

const onClickPage = (page: number) => {
	if (page === currPage.value) return;

	currPage.value = page;
	emits('clickPage', currPage.value);
};
</script>

<template>
	<ul class="hm-pager">
		<li :class="{ isActive: currPage === 1 }" @click="onClickPage(1)">
			{{ pageList[0] }}
		</li>

		<li :class="{ disabled: showingPageIdx === 0 }" @click="decreaseShowingPageIdx">
			{{ '<<' }}
		</li>

		<li
			v-for="i in showingPageList"
			:key="i"
			:class="{ isActive: currPage === i }"
			@click="onClickPage(i)"
		>
			{{ i }}
		</li>

		<li
			:class="{ disabled: showingPageIdx === maxShowingPageIdx - 1 }"
			@click="increaseShowingPageIdx"
		>
			{{ '>>' }}
		</li>

		<li
			:class="{ isActive: currPage === pageList[pageList.length - 1] }"
			@click="onClickPage(pageList[pageList.length - 1])"
		>
			{{ pageList[pageList.length - 1] }}
		</li>
	</ul>
</template>

<style scoped></style>
