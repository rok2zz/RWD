<template>
    <div :class="$style.index">
        <div :class="$style.container">
			<span :class="$style.spanDate">2022.11.16</span>
			<span :class="$style.spanDashboard">Analysis Data</span>
			<img :src="require('@/assets/image/graph_1.png')">
			<img :src="require('@/assets/image/graph_2.png')">
        </div>
    </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.index {

	> .container {
		width: 100%;

		@include mobile {
			padding-top: 56px;

			overflow: scroll;
		}

		span {
			width: 100%;

			display: inline-block;

			padding-left: 37px;

			font-family: sans-serif;
		}

		img {
			display: block;

			padding-left: 37px;
			padding-top: 10px;
			padding-bottom: 60px;
		}

		> .spanDate {
			padding-top: 35px;

			font-size: 15px;

			color: #333333;
		}

		> .spanDashboard {
			font-size: 24px;
			font-weight: bold;

			color: #111111;
		} 
	}
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomeView extends Vue {
	beforeDestroy() {
		this.$store.commit('setPreviousPage', "dashboard")
	}
}
</script>
