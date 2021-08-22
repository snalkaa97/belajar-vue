<template>
	<div class="about">
		<Me nama="Alkatiri" />
	</div>
</template>
<script>
// @ is an alias to /src
import Me from "@/components/Me.vue";

export default {
	name: "About",
	components: {
		Me,
	},
};
</script>
