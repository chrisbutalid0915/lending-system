<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div class="flex h-16 shrink-0 items-center">
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="(item, index) in navigation" :key="index" @click="handleItemClick(index)" :class="{ selected: item.selected }">
                          <a v-if="!item.children" :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                            <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                            <router-link :to="item.href">{{ item.name }}</router-link>
<!--                            {{ item.name }}-->
                          </a>
                          <Disclosure as="div" v-else v-slot="{ open }">
                            <DisclosureButton :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'flex items-center w-full text-left group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                              <component :is="item.icon" class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                              {{ item.name }}
                              <ChevronRightIcon :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']" aria-hidden="true" />
                            </DisclosureButton>
                            <DisclosurePanel as="ul" class="mt-1 px-2">
                              <li v-for="subItem in item.children" :key="subItem.name">
                                <!-- 44px -->
                                <DisclosureButton as="a" :class="[subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-400']">
                                  <router-link :to="subItem.href">{{ subItem.name }}</router-link>
                                </DisclosureButton>
                              </li>
                            </DisclosurePanel>
                          </Disclosure>
                        </li>
                      </ul>
                    </li>

                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1 text-left">
                <li v-for="(item, index) in navigation" :key="index" @click="handleItemClick(index)" :class="{ selected: item.selected }">
                  <a v-if="!item.children" :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                    <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                    <router-link :to="item.href" >{{ item.name }}</router-link>
                  </a>
                  <Disclosure as="div" v-else v-slot="{ open }">
                    <DisclosureButton :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'flex items-center w-full text-left group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                      <component :is="item.icon" class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                      {{ item.name }}
                      <ChevronRightIcon :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']" aria-hidden="true" />
                    </DisclosureButton>
                    <DisclosurePanel as="ul" class="mt-1 px-2">
                      <li v-for="subItem in item.children" :key="subItem.name">
                        <router-link :to="subItem.href">
                          <DisclosureLabel :class="[subItem.current ? 'bg-blue-50' : 'hover:bg-gray-50', 'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-400']">
                            {{ subItem.name }}
                          </DisclosureLabel>
                        </router-link>
                      </li>
                    </DisclosurePanel>
                  </Disclosure>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button type="button" class="-m-2.5 p-2.5 text-gray-400 lg:hidden" @click="sidebarOpen = true">
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="flex-1 text-sm font-semibold leading-6 text-white text-left">{{currentRouteName}}</div>
      <a href="#">
        <span class="sr-only">Your profile</span>
        <img class="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      </a>
    </div>

    <main class="py-4 lg:pl-72">
      <div class="px-4 sm:px-6 lg:px-8">
        <router-view/>
      </div>
    </main>

  </div>
</template>

<script>
    import { ref } from 'vue'
    import {
      Dialog,
      DialogPanel,
      TransitionChild,
      TransitionRoot,
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
    } from '@headlessui/vue'
    import { ChevronRightIcon } from '@heroicons/vue/20/solid'
    import {
      Bars3Icon,
      ChartPieIcon,
      HomeIcon,
      UsersIcon,
      XMarkIcon,
      CalculatorIcon,
      DocumentChartBarIcon,
      BanknotesIcon,
      PencilSquareIcon,
      AdjustmentsVerticalIcon,
      CurrencyDollarIcon
    } from '@heroicons/vue/24/outline'
    export default {
        name: "SideBar",
        components: {
            Dialog,
            DialogPanel,
            TransitionChild,
            TransitionRoot,
            Bars3Icon,
            XMarkIcon,
            ChevronRightIcon,
            Disclosure,
            DisclosureButton,
            DisclosurePanel,
            // HeaderPanel,
        },
        data() {
          return {
            navigation: [
                { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: false,
              },
              { name: 'Loan', href: '#', icon: CurrencyDollarIcon, current: false,
                children: [
                  { name: 'Loan Application', href: '/loan' },
                  { name: 'Loan Restructuring', href: '/loan-restructuring' },
                  // { name: 'Loan Accounts', href: '/loan-account' },
                  { name: 'Loan Accounts - Amortization', href: '/loan-amortization' },
                  { name: 'Loan Accounts - Summary of Loan Releases', href: '/summary-loan-releases' },
                  { name: 'Loan Accounts - Loan Ledger', href: '/loan-ledger' },
                ],
              },
              { name: 'CIF (Client Information)', href: '/client-information', icon: UsersIcon, current: false },
              { name: 'Data Entry', href: '/data-entry', icon: PencilSquareIcon, current: false },
              { name: 'Setup Module', href: '#', icon: AdjustmentsVerticalIcon, current: false,
                children: [
                  { name: 'Assign Collector', href: '/collector' },
                  { name: 'Assign Approver', href: '/approver' },
                  { name: 'Waive Interest and Penalty', href: '/interest-penalty' },
                ],
              },
              { name: 'Reports', href: '#', icon: ChartPieIcon, current: false,
                children: [
                  { name: 'Schedule of Loan Releases', href: '/schedule-loan-releases' },
                  { name: 'Collection Reports', href: '/collection-reports' },
                  { name: 'Summary of waived Interest and Penalties', href: '/summary-waive-interest-penalties' },
                  { name: 'Summary of Loan Dues', href: '/summary-of-loan-dues' },
                  { name: 'Restructured of Loan Dues', href: '/restructured-loan-dues' },
                  { name: 'Past Due Monitoring Report', href: '/past-due-monitoring-report' },
                  { name: 'Statement of Account(SOA)', href: '/statement-account' },
                ],
              },
              { name: 'Cashiering', href: '#', icon: BanknotesIcon, current: false,
                children: [
                  { name: 'Loan Payment', href: '/loan-payment' },
                  { name: 'Savings Deposit', href: '/savings-deposit' },
                  { name: 'Withdrawal Deposit', href: '/withdrawal-deposit' },
                  { name: 'Cash Check', href: '/cash-check' },
                  { name: 'Cash Payout', href: '/cash-payout' },
                  { name: 'Cash Beginning', href: '/cash-beginning' },
                  { name: 'Cash in Bank', href: '/cash-in-bank' },
                  { name: 'Cash in Vault', href: '/cash-in-vault' },
                  { name: 'End of Day Report', href: '/end-of-day-report' },
                  { name: 'Correcting Entry', href: '/correcting-entry' },
                  { name: 'Teller\'s Blotter', href: '/tellers-blotter' },
                  { name: 'Proof Sheet', href: '/proof-sheet' },
                ],
              },
              { name: 'Accounting', href: '#', icon: CalculatorIcon, current: false,
                children: [
                  { name: 'General Ledger', href: '/general-ledger' },
                  { name: 'Subsidiary Ledger', href: '/subsidiary-ledger' },
                  { name: 'Journal Voucher Entry', href: '/journal-voucher-entry' },
                  { name: 'Cash Voucher Entry', href: '/cash-voucher-entry' },
                  { name: 'Profit Report', href: '/profit-report' },
                  { name: 'Loss Report', href: '/loss-report' },
                ],
              },
              { name: 'Key Result Area', href: '#', icon: DocumentChartBarIcon, current: false,
                children: [
                  // { name: 'Profit And Loss', href: '#' },
                  { name: 'Actual Loan Releases vs Loan Target', href: '/loan-release' },
                  { name: 'Collections vs Uncollected and Past Due Account', href: '/collection-and-uncollected' },
                ],
              },
            ],
            teams: [
              { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
              { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
              { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
            ],
            sidebarOpen: ref(false),
            currentRouteName: "",
            user: {
              username: "Chris Butalid"
            },

          };
        },
        mounted() {
          // Add a window resize event listener when the component is mounted
          window.addEventListener('resize', this.handleResize);
          this.currentRouteName = this.$route.name;
        },
        methods: {
          handleResize() {
            // Update the sidebarOpen data property to false when the window is resized
            this.sidebarOpen = false;
          },
          handleItemClick(index) {
            this.navigation.forEach((item, i) => {
              item.current = i === index;
            });
          }
        }
    }
</script>

<style scoped>
</style>