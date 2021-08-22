<template>
	<div class="form-check text-start p-2">
		<input
			class="form-check-input"
			type="checkbox"
			value=""
			:id="`cek${task.id}`"
		/>
		<label
			class="form-check-label item"
			v-bind:class="{ 'item-complete': task.isDone }"
			:for="`cek${task.id}`"
		>
			{{ task.nama }}
		</label>
	</div>
</template>
<script>
export default {
	name: "ItemTugas",
	props: ["task"],
};
</script>
<style scoped></style>
