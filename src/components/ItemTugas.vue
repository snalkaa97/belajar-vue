<template>
	<div class="form-check text-start p-2">
		<input
			class="form-check-input"
			type="checkbox"
			value=""
			:id="`cek${task.id}`"
			@click="checkTask(task)"
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
	methods: {
		checkTask(task) {
			if (task.isDone) {
				task.isDone = false;
			} else {
				task.isDone = true;
			}
		},
	},
};
</script>
<style scoped>
.item-complete {
	color: #1abc9c;
}
</style>
