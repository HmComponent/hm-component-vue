<script setup lang="ts">
const count = defineModel<number>({ required: true });
defineProps<{
	dataCountList: number[];
}>();

defineEmits<{
	(e: 'changeCount'): void;
}>();
</script>

<template>
	<div class="hm-data-count-select-box">
		<select v-model="count" @change="$emit('changeCount')">
			<option v-for="cnt in dataCountList" :key="cnt" :value="cnt">{{ cnt }}</option>
		</select>
	</div>
</template>

<style scoped></style>
