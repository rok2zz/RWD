<template>
    <div :class="$style.index">    
        <div :class="$style.container">
            <span :class="$style.type">Admin</span>
            <span :class="$style.title">운영 설정</span>
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
            display: block;        
            
            padding-left: 37px;

            font-family: sans-serif;
        }

        > .type {
            padding-top: 35px;

            font-size: 15px;
            
            color: #333333;
        }

        > .title {
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
export default class Settings extends Vue {
    
    beforeDestroy() {
        this.$store.commit('setPreviousPage',  "settings")
    }
}
</script>