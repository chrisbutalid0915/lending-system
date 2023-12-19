<template>
    <header-panel :current-route-name="currentRouteName"></header-panel>
    <action-panel></action-panel>

    <div class="mt-2 border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <br>

        <div class="mt-3 sm:ml-4 sm:mt-0">

          <button type="button"
                  class="inline-flex
                         items-center
                         rounded-md
                         bg-indigo-600
                         px-3
                         py-2
                         text-sm
                         font-semibold
                         text-white
                         shadow-sm
                         hover:bg-indigo-500
                         focus-visible:outline
                         focus-visible:outline-2
                         focus-visible:outline-offset-2
                         focus-visible:outline-indigo-600">
              <router-link :to="urlJournalVoucher">Add Entry</router-link>

          </button>
        </div>
    </div>

    <list-table :data="data"></list-table>
</template>

<script>
    import HeaderPanel from "@/components/HeaderPanel";
    import ActionPanel from "@/components/ActionPanel";
    import ListTable from "@/AccountingModule/JournalVoucher/ListTable";
    export default {
        name: "JournalVoucherEntry",
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
                urlJournalVoucher: "/create-journal-voucher-entry"
            }
        },
        mounted() {
            this.currentRouteName = this.$route.name;
        }
    }
</script>

<style scoped>

</style>