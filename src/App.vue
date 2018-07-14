<template lang="pug">

    #app
        header-block
        router-view
        footer-block

</template>

<script>

    import headerBlock from "./components/headerBlock"
    import footerBlock from "./components/footerBlock";

    export default {
        name: 'App',
        components: {footerBlock, headerBlock}
    }
</script>

<style lang="sass">

    @import "scss/reset"
    @import "scss/fonts"
    @import "scss/mixins"
    @import "scss/base"
    @import "scss/common"

    #app
        color:
        background: $bg-blue
        display: flex
        flex-direction: column
        min-height: 100vh
        & > div
            flex-grow: 1
            width: 100%

</style>
