<template>
  <header-panel :current-route-name="currentRouteName"></header-panel>

  <action-panel></action-panel>

  <div>
<!--    <h3 class="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>-->
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
      <div v-for="item in stats" :key="item.name" class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{{ item.stat }}</dd>
        <dt class="truncate text-sm font-medium text-gray-500">{{ item.name }}</dt>

      </div>
    </dl>
  </div>
</template>

<script>
    import HeaderPanel from "@/components/HeaderPanel";
    import ActionPanel from "@/components/ActionPanel";
    export default {
        name: "DashboardForm",
        components: {
          HeaderPanel,
          ActionPanel,
        },
        data() {
          return {
            currentRouteName: "",
            stats: [
                    { name: 'Active Clients', stat: '150' },
                    { name: 'Total Disbursed', stat: '150000.00' },
                    { name: 'Total Payments Received', stat: '75000.00' },
                    { name: 'Total Debit', stat: '1500000.00' },
            ]
          }
        },
        mounted() {
          this.currentRouteName = this.$route.name;
        },
        methods: {
          handleResize() {
          },
        }
    }
</script>

<style scoped>

</style>