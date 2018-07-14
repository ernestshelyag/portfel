<template lang="pug">
    include ../assets/bemto/bemto.pug

    +b.FOOTER.footer
        +e.SPAN.text.wrp.font
            | footer

</template>

<script>
    export default {
        name: "footerBlock"
    }
</script>

<style lang="scss">

    .footer {
        display: block;
        padding: 5px 0;
        width: 100%;
        text-align: right;
    }

</style>