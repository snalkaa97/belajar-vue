<template>
	<div class="profile">
		<div class="container mt-3">
			<div class="row">
				<div class="col-lg-6">
					<div class="d-flex text-start align-items-center">
						<div class="flex-shrink-0">
							<img class="user-pic mr-3" src="../assets/alka1.jpg" alt="" />
						</div>
						<div class="flex-grow-1 ms-3">
							<h5>{{ firstName }} {{ lastName }}</h5>
							{{ bio }}
						</div>
					</div>
				</div>
			</div>
			<div class="text-center mt-5">
				<h5>Pokemon</h5>
			</div>
			<div class="row">
				<div
					class="col-lg-2 col-md-3 col-sm-3"
					v-for="item in this.items"
					v-bind:key="item.id"
				>
					<!-- <p>{{ item.name }}</p> -->
					<div class="card-body">
						<h6 class="card-title">{{ item.name }}</h6>
						<img class="card-image" :src="`${item.image}`" />
					</div>
				</div>
			</div>

			<div class="text-center">
				<h5 class="p-3 header">Tugas</h5>
			</div>
			<div v-for="task in this.$store.state.tasks" v-bind:key="task.id">
				<ItemTugas v-bind:task="task" />
			</div>
			<Gallery />
		</div>
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
	</div>
</template>

<script>
// @ is an alias to /src
import Gallery from "@/components/Gallery.vue";
import ItemTugas from "@/components/ItemTugas.vue";
import "bootstrap/dist/css/bootstrap.css";

export default {
	name: "Profile",
	data: function() {
		return {
			firstName: "Syaifudin",
			lastName: "Alkatiri",
			bio:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non architecto eveniet officiis autem.",
			items: {},
		};
	},
	components: {
		Gallery,
		ItemTugas,
	},
	mounted() {
		this.pokemonItem();
	},
	methods: {
		async pokemonItem() {
			// const self = this;
			const getPokemonItem = `${"https://pokeapi.co/api/v2/pokemon/"}`;
			await fetch(getPokemonItem, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((json) => {
					this.items = json.results.map((result, index) => ({
						...result,
						id: index + 1,
						image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
							1}.png`,
					}));
				});
		},
	},
};
</script>
<style scoped>
.user-pic {
	height: 80px;
	widows: 80px;
	border-radius: 200%;
}
</style>
