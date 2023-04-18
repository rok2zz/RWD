<template>
	<div :class="$style.index">
		<div :class="$style.container">
			<div :class="$style.mobile">
				<img :src="require('@/assets/image/menu.png')" v-on:click="openMobileMenu">
				<router-link to="/">
					<span :class="$style.header">WEBMASTER</span>
				</router-link>
			</div>
			
			<div :class="[$style.contents, mobileClass]">
				<div :class="$style.background" v-on:click="closeMobileMenu"></div>

				<div :class="$style.menu"  v-on:click="closeMobileMenu">
					<div :class="$style.header">
						<router-link to="/">
							<span :class="$style.title">WEBMASTER</span>
						</router-link>
						<router-link to="/">
							<span :class="$style.subtitle">관리자 웹마스터 페이지</span>
						</router-link>
					</div>

					<div :class="$style.contents" v-if="isLoggedIn()">
						<div v-for="(item, index) in path" :key="index">
							<span v-if="index == 1" :class="$style.spanMenu">회원 및 컨텐츠</span>
							<span v-if="index == 3" :class="$style.spanMenu">설정</span>

							<div :class="menuClasses[index]" v-on:click="updateCurrentPath(item)">
								<router-link :to="'/' + item">
									<img :src="require('@/assets/image/' + getImageName(index) + '_2.png')" v-if="getCurrentPath() == item">
									<img :src="require('@/assets/image/' + getImageName(index) + '.png')" v-else>
									<span>{{ getTitles(index) }}</span>
									<img :src="require('@/assets/image/chevron_right_2.png')" v-if="getCurrentPath() == item">
									<img :src="require('@/assets/image/chevron_right.png')" v-else>
								</router-link>
							</div>
						</div>
					</div>

					<div :class="$style.footer">
						<span :class="$style.contents" v-if="isLoggedIn()">
							<span :class="$style.manager">관리자</span> 님, 환영합니다
							<button :class="$style.logout" v-on:click="logout()">로그아웃</button>
						</span>

						<span :class="$style.login" v-else>
							계속하려면 <br> 로그인하세요
						</span>
					</div>
				</div>
			</div>
			<div :class="$style.main">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
body {
	margin: 0;
	padding: 0;
}

* {
	box-sizing: border-box;
}
</style>

<style lang="scss" module>
@import '@/assets/scss/utils.scss';

.index {
	> .container {
		width: 100%;
		min-height: 100vh;

		display: flex;
		position: relative;

		@include mobile {
			min-height: initial;

			display: block;
							
			> .contents.showMenu {
				display: initial;
			}
		}

		> .mobile {
			width: 100%;
			height: 56px;

			display: none;
			position: absolute;
			top: 0;

			background-color: #eeeeee;

			@include mobile {
				display: flex;
				
				cursor: pointer;
			}

			> img {
				padding: 16px;
			}

			> a {
				text-decoration: none;

				padding: 10px;
				margin: 0 auto;

				> .header {	
					font-size: 24px;
					font-weight: bold;
					font-family: sans-serif;

					margin-right: 56px;

					color: black;
				}
			}
		}

		> .contents {
			width: 300px;
			height: 100%;

			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;

			@include mobile {
				width: 100%;

				display: none;
			}


			> .background {
				width: 100%;
				height: 100%;

				position: absolute;
				left: 0;
				top: 0;

				background-color: rgb(0, 0, 0, 0.5);
			}

			
			> .menu {
				width: 300px;
				height: 100%;

				text-align: right;
				position: absolute;
				top: 0;
				left: 0;

				background-color: #eeeeee;
				
				> .header {
					text-align: left;

					a {
							
						span { 
							margin-left: 28px;
							
							display: inline-block;

							font-family: sans-serif;

							color: #333333;
						}

						> .title {
							margin-top: 35px;

							font-size: 32px;
							font-weight: bold;
						}

						> .subTitle {
							margin-top: 17px;

							font-size: 15px;
						}
					}
				}

				> .contents {
					width: 100%;

					margin-top: 118px;

					> div {

						img {
							width: 20px;
							height: 20px;

							transform: translateY(4px);
						}

						a {
							width: 100%;
							height: 35px;

							display: inline-block;

							text-decoration: none;
							align-items: center;

							padding-top: 5px;
						}

						:global {
							.router-link-exact-active {
								font-weight: bold;

								background-color: rgb(0, 0, 0, 0.1);
								color: black;
							}
						}

						span {
							font-size: 16px;
							font-family: sans-serif;

							color: #666666;
						}

						> .spanMenu {
							width: 70%;

							display: inline-block;

							margin-top: 30px;
							margin-right: 13px;
							margin-bottom: 4px;
							
							font-size: 13px;
							font-weight: bold;
							font-family: sans-serifs;

							color: #333333;
						}

						> .post {
							margin-bottom: 23px;
						}
					}

					
				}
				> .footer {
					width: 300px;

					display: flex;
					flex-wrap: wrap;
					align-items: center;  

					padding: 10px 0px 10px;

					position: absolute;
					bottom: 0;
								
					background-color: #333333;

					span {
						display: inline-block;
						
						margin-right: 12px;

						font-size: 16px;

						color: #ffffff;
					}

					> .login {
						width: 100%;
					}

					> .contents {
						width: 100%;

						display: inline-block;

						margin-right: 12px;
						margin-left: -12px;


						> .manager {
							margin-right: 0px;

							font-weight: bold;
						}

						> .logout {
							width: 110px;
							height: 25px;
							
							font-size: 13px;
							font-weight: bold;

							margin-top: 10px;
							margin-left: 178px;
							
							border-radius: 7px;
							cursor: pointer;

							@include mobile {
								width: 277px;
								height: 32px;

								margin-left: 11px;
							}
						}
					}
				}
			}
		}

		> .main {
			padding-left: 300px;

			@include mobile {
				padding-left: 0px;
			}
		}
	}
}

</style>

<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';
import JsonContents from '@/assets/json/contents.json'
import JsonMembers from '@/assets/json/members.json'
import { Content, Member } from './structure/type';

@Component
export default class App extends Vue {
	isLogged: boolean = this.$store.getters.getIsLoggedIn
	members: Member[] = []
	contents: Content[] = []

	path: string[] = ["dashboard", "members", "post", "settings"]
	titles: string[] = ["대시보드", "회원 관리", "게시물 관리", "운영 설정"]
	imageNames: string[] = ["trello", "members", "list", "settings"]
	currentPath: string = ''

	// @ts-ignore
	menuClasses: string[] = [this.$style.dashboard, this.$style.member, this.$style.post, this.$style.settings]
	// @ts-ignore
	mobileClass: string = ''

	mounted() {
		this.members = JsonMembers.members
		this.contents = JsonContents.contents

		this.$store.commit("setMembers",this.members)
		this.$store.commit("setContents",this.contents)

		this.isNotLoggedIn()
	}

	isLoggedIn(): boolean {
		return this.isLogged
	}

	@Watch("$route.path")
	pathUpdatedHandler() {
		switch(this.$route.path) {
			case "/":
				if (this.$store.state.isLogged) {
					history.back()
				}
				break
			default:
				if (!this.$store.state.isLogged) {
					this.$router.push("/")
				}
		}
	}

	@Watch('$store.state.isLogged')
	updateIsLogged() {
		this.isLogged = this.$store.getters.getIsLoggedIn
	}

	logout() {
		if (!confirm("로그아웃 하시겠습니까?")) return

		this.$store.commit("setIsLoggedIn", false)

		alert("로그아웃 되었습니다.")
		
		this.$router.push('/')
	}

	updateCurrentPath(path: string) {
		this.currentPath = path
 	}

	getCurrentPath(): string {
		return this.currentPath
	}

	getTitles(index: number): string {
		return this.titles[index]
	}

	getImageName(index: number): string {
		return this.imageNames[index]
	}

	isNotLoggedIn() {
		if (!this.isLogged) {
			this.$router.push('/')
		}
	}

	openMobileMenu() {
		// @ts-ignore
		this.mobileClass = this.$style.showMenu 
	}

	closeMobileMenu() {
		// @ts-ignore
		if (this.mobileClass == this.$style.showMenu) {
			this.mobileClass = ''
		}
	}
}
</script>
