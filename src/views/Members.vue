<template>
	<div :class="$style.index">    
		<div :class="$style.container">
			<span :class="$style.type">Admin</span>
			<span :class="$style.title">회원 관리</span>

			<table>
				<thead>
					<th>ID</th>
					<th>User ID</th>
					<th>Email</th>
					<th>Name</th>
					<th>Status</th>
					<th>RegisteredDate</th>
				</thead>
				<tbody>
					<tr v-for="(item, index) in members" :key="index">
						<td>{{ item.id }}</td>
						<td>{{ item.user_id }}</td>
						<td>{{ item.email }}</td>
						<td>{{ item.name }}</td>
						<td>{{ getStatus(item.status) }}</td>
						<td>{{ getDate(item.registered_date) }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.index {
	> .container {
		width: 100%;

		padding-top: 56px;

		@include mobile {
			min-height: 100vh;

			overflow: scroll;
		}

		span {
			width: 100%;

			display: inline-block;

			margin-left: 37px;
					
			font-family: sans-serif;
		}

		> .type {
			margin-top: 35px;

			font-size: 15px;
			
			color: #333333;
		}

		> .title {
			font-size: 24px;
			font-weight: bold;

			color: #111111;
		}

		table {
			width: 911px;
			height: 280px;

			text-align: left;

			margin-top: 40px;
			margin-left: 37px;
			
			font-size: 14px;
			font-family: sans-serif;

			border: 2px solid #828282;
			border-collapse: collapse;

			color: #000000;

			@include mobile {
				margin-right: 37px;
			}
		
			th {
				width: 227.75px;
				height: 40px;

				padding-left: 10px;

				font-weight: bold;

				border: 2px solid #828282;

				background-color: #e5e5e5;
			}
			
			td {
				width: 152.67px;
				height: 40px;

				padding-left: 10px;

				font-size: 14px;

				border: 2px solid #828282;
							
				background-color: #ffffff;
				color: #000000;
			}
		}
	}
}
</style>

<script lang="ts">
import { Content, Member } from '@/structure/type';
import { getRegisteredDate } from '@/utils/format';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Members extends Vue {
	members: Member[] = this.$store.getters.getMembers
	contents: Content[] = this.$store.getters.getContents

	beforeDestroy() {
		this.$store.commit('setPreviousPage', "member")
	}

	getStatus(status: string) {
		switch(status) {
			case "NORMAL": return "정상";
			case "PAUSED": return "정지";
			case "DELETED": return "탈퇴";
		}
	}

	getDate(date: number): string {
		return getRegisteredDate(date)
	}
}
</script>
