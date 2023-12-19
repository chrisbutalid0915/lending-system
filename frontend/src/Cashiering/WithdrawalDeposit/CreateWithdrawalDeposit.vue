<template>
    <header-panel :current-route-name="currentRouteName"></header-panel>

    <div class="space-y-10 divide-y divide-gray-900/10">
        <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
            <div class="px-4 sm:px-0">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            </div>

            <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">

            <data-fields :data-entry="data" :key="childKey"></data-fields>

            <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
              <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
              <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
          </form>
        </div>
    </div>
</template>

<script>
    import HeaderPanel from "@/components/HeaderPanel";
    import DataFields from "@/DataEntry/DataFields";
    export default {
        name: "CreateWithdrawalDeposit",
        components: {
            HeaderPanel,
            DataFields
        },
        data() {
            return {
                currentRouteName: "",
                data: {
                    image: null,
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    email: "",
                    dateOfBirth: "",
                    gender: "",
                    address: "",
                    city: "",
                    province: "",
                    zip_code: "",
                    contact_number: "",
                    occupation: ""
                },
            childKey: 0,
            }
        },
        mounted() {
            this.reloadChild()
            this.currentRouteName = this.$route.name;
        },
        methods: {
            reloadChild() {
                this.childKey++; // Change the key to "reload" the child component
            }
        }
    }
</script>

<style scoped>

</style>