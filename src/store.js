import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		tasks: [
			{
				id: 1,
				nama: "Belajar Javascript",
				isDone: false,
			},
			{
				id: 2,
				nama: "Belajar PHP",
				isDone: false,
			},
			{
				id: 3,
				nama: "Belajar HTML",
				isDone: false,
			},
			{
				id: 4,
				nama: "Belajar CSS",
				isDone: false,
			},
		],
	},
	mutations: {
		change(state, payload) {
			let index = state.tasks.indexOf(payload);
			state.tasks[index].isDone = !state.tasks[index].isDone;
		},
	},
	getters: {},
});
