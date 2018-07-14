<template lang="pug">
    include ../assets/bemto/bemto.pug

    +b.HEADER.header
        +e.wrp.wrp
            +e.cont
                +e.H1.title.font
                    | Lexx
                +e.NAV.nav
                    router-link(to="/")
                        +e.A.link Портфель
                    router-link(to="/something")
                        +e.A.link something

</template>

<script>
    export default {
        name: "header-block"
    }
</script>

<style lang="scss" scoped>

    @import "@/scss/mixins.scss";

    .header {
        display: block;
        margin-bottom: 20px;
        width: 100%;
        &__cont {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: $bg-gray;
            padding: 15px 25px;
            border: solid 2px $font-gray;
            border-top: 0;
        }
        &__title {
            font-size: 40px;
            color: $main-col;
        }
        &__link {
            color: #fff;
            text-transform: uppercase;
            font-weight: 400;
            margin-left: 30px;
            &:hover {
                color: #fff
            }
        }
    }


</style>