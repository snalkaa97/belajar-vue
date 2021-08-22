<template>
	<div class="galleries-wrapper">
		<h2 class="title-header">
			Gallery
		</h2>
		<div class="item-galleries">
			<img class="logo" src="" alt="" />
		</div>
		<div class="item-galleries">
			<img class="logo" src="" alt="" />
		</div>
		<div class="item-galleries">
			<img class="logo" src="" alt="" />
		</div>
		<div class="item-galleries">
			<img class="logo" src="" alt="" />
		</div>
		<div class="item-galleries">
			<img class="logo" src="" alt="" />
		</div>
		<div class="item-galleries">
			<img class="logo" src="" alt="" />
		</div>
		<div class="item-galleries">
			<img class="logo" src="" alt="" />
		</div>
	</div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
	name: "Gallery",
};
</script>

<style scoped>
.galleries-wrapper {
	width: 65%;
	overflow: hidden;
	margin: auto;
}
.item-galleries {
	float: left;
	margin-right: 70px;
	margin-top: 70px;
	width: 150px;
	height: 150px;
}
.item-galleries .logo {
	width: 150px;
	height: 150px;
	background: red;
}
.title-header {
	margin-bottom: 30px;
	text-align: left;
}
</style>
