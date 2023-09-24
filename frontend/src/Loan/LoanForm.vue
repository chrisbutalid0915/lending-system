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
              New Loan
          </button>
        </div>
    </div>

    <list-table :data="data"></list-table>

</template>

<script>
    import HeaderPanel from "@/components/HeaderPanel";
    import ActionPanel from "@/components/ActionPanel";
    import ListTable from "@/Loan/ListTable";
    export default {
        name: "LoanForm",
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
                        name: 'Lindsay Walton',
                        title: 'Front-end Developer',
                        email: 'lindsay.walton@example.com',
                        role: 'Member'
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