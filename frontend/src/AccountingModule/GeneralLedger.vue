<template>
    <header-panel :current-route-name="currentRouteName"></header-panel>
    <action-panel></action-panel>
</template>

<script>
    import HeaderPanel from "@/components/HeaderPanel";
    import ActionPanel from "@/components/ActionPanel";

    export default {
        name: "GeneralLedger",
        props: {},
        components: {
            HeaderPanel,
            ActionPanel
        },
        data() {
            return {
                currentRouteName: "",
            }
        },
        mounted() {
            this.currentRouteName = this.$route.name;
        }
    }
</script>

<style scoped>

</style>