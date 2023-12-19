<template>
    <header-panel :current-route-name="currentRouteName"></header-panel>
    <action-panel></action-panel>

    <list-table :data="data"></list-table>
</template>

<script>
    import HeaderPanel from "@/components/HeaderPanel";
    import ActionPanel from "@/components/ActionPanel";
    import ListTable from "@/AccountingModule/ProfitReport/ListTable";
    export default {
        name: "ProfitReport",
        props: {},
        components: {
            HeaderPanel,
            ActionPanel,
            ListTable
        },
        data() {
            return {
                currentRouteName: "",
                data: [
                    {
                        id: 1,
                        image: null,
                        firstName: "Christopher",
                        middleName: "Aringo",
                        lastName: "Butalid",
                        email: "chris321d@gmail.com",
                        dateOfBirth: "",
                        gender: "Male",
                        address: "123 Bulacan",
                        city: "Plaridel",
                        province: "Bulacan",
                        zip_code: "3000",
                        contact_number: "09485641245",
                        occupation: "IT Programmer"
                    }
                ],
            }
        },
        mounted() {
            this.currentRouteName = this.$route.name;
        }
    }
</script>

<style scoped>

</style>