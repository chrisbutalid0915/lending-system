<template>
    <div class="px-4 py-6 sm:p-8">
      <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-left">

        <div class="col-span-full">
          <label class="font-semibold block text-sm font-medium leading-6 text-gray-900">Borrower</label>
          <Combobox as="div" class="items-center gap-x-3" v-model="selectedBorrower">
            <div class="relative mt-2">
              <ComboboxInput class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" @change="query = $event.target.value" :display-value="(borrower) => borrower?.name" />
              <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </ComboboxButton>

              <ComboboxOptions v-if="filteredBorrowers.length > 0" class="absolute z-10 mt-1 max-h-100 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ComboboxOption v-for="person in filteredBorrowers" :key="person.id" :value="person" as="template" v-slot="{ active, selected }">
                  <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
                    <div class="flex">

                      <span :class="['ml-2 truncate text-gray-500', active ? 'text-indigo-200' : 'text-gray-500']">
                        ID: {{ person.id }} |
                      </span>
                      <span :class="['truncate', selected && 'font-semibold']">
                         &nbsp; {{ person.name }}
                      </span>
                    </div>

                    <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ComboboxOption>
              </ComboboxOptions>
            </div>
          </Combobox>
        </div>

        <div class="col-span-full">
          <label class="font-semibold block text-sm font-medium leading-6 text-gray-900">Loan Type</label>
          <Combobox as="div" class="items-center gap-x-3" v-model="selectedLoanType">
            <div class="relative mt-2">
              <ComboboxInput class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" @change="query = $event.target.value" :display-value="(loanType) => loanType?.name" />
              <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </ComboboxButton>

              <ComboboxOptions v-if="filteredLoanTypes.length > 0" class="absolute z-10 mt-1 max-h-100 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ComboboxOption v-for="loan in filteredLoanTypes" :key="loan.name" :value="loan" as="template" v-slot="{ active, selected }">
                  <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
                    <div class="flex">
                      <span :class="['truncate', selected && 'font-semibold']">
                        {{ loan.name }}
                      </span>
<!--                      <span :class="['ml-2 truncate text-gray-500', active ? 'text-indigo-200' : 'text-gray-500']">-->
<!--                        - interest {{ loan.interest }}%-->
<!--                      </span>-->
                    </div>

                    <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ComboboxOption>
              </ComboboxOptions>

            </div>
            <div class="relative mt-2">
              <span v-if="selectedLoanType.value !== ''">Interest rate p.a: {{ selectedLoanType.interest }}% </span>
            </div>
          </Combobox>
        </div>

        <div class="col-span-full">
          <label class="font-semibold block text-sm font-medium leading-6 text-gray-900">Mode of Payment</label>
          <select class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  v-model="selectedModeOfPayment" required>
              <!-- eslint-disable-next-line-->
              <option v-for="payment in modeOfPayment"
                      v-bind:value="payment.value">
                  {{ payment.name }}
              </option>
          </select>
        </div>

        <div class="sm:col-span-4">
          <label for="loan-amount"
                 class="font-semibold block text-sm font-medium leading-6 text-gray-900"
          >Loan Amount</label>
          <div class="mt-2">
            <input type="number"
                   name="loan-amount"
                   id="loan-amount"
                   autocomplete="loan-amount"
                   v-model="loanApplication.loanAmount"
                   :min="1"
                   class="block w-50-l rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="first-name"
                 class="font-semibold block text-sm font-medium leading-6 text-gray-900"
          >Terms</label>
          <div class="mt-2">
            <input type="number"
                   name="first-name"
                   id="first-name"
                   autocomplete="given-name"
                   v-model="loanApplication.terms"
                   :max="24"
                   :min="1"
                   class="block w-50-l rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div class="col-span-full">
          <label class="font-semibold block text-sm font-medium leading-6 text-gray-900">Collector</label>
          <Combobox as="div" class="items-center gap-x-3" v-model="selectedCollector">
            <div class="relative mt-2">
              <ComboboxInput class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" @change="query = $event.target.value" :display-value="(collector) => collector?.name" />
              <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </ComboboxButton>

              <ComboboxOptions v-if="filteredCollectors.length > 0" class="absolute z-10 mt-1 max-h-100 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ComboboxOption v-for="collector in filteredCollectors" :key="collector.id" :value="collector" as="template" v-slot="{ active, selected }">
                  <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
                    <div class="flex">

                      <span :class="['ml-2 truncate text-gray-500', active ? 'text-indigo-200' : 'text-gray-500']">
                        ID: {{ collector.id }} |
                      </span>
                      <span :class="['truncate', selected && 'font-semibold']">
                         &nbsp; {{ collector.name }}
                      </span>
                    </div>

                    <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ComboboxOption>
              </ComboboxOptions>
            </div>
          </Combobox>
        </div>

        <div class="col-span-full">
          <label class="font-semibold block text-sm font-medium leading-6 text-gray-900">Approver</label>
          <Combobox as="div" class="items-center gap-x-3" v-model="selectedApprover">
            <div class="relative mt-2">
              <ComboboxInput class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" @change="query = $event.target.value" :display-value="(approver) => approver?.name" />
              <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </ComboboxButton>

              <ComboboxOptions v-if="filteredApprovers.length > 0" class="absolute z-10 mt-1 max-h-100 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ComboboxOption v-for="approver in filteredApprovers" :key="approver.id" :value="approver" as="template" v-slot="{ active, selected }">
                  <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
                    <div class="flex">

                      <span :class="['ml-2 truncate text-gray-500', active ? 'text-indigo-200' : 'text-gray-500']">
                        ID: {{ approver.id }} |
                      </span>
                      <span :class="['truncate', selected && 'font-semibold']">
                         &nbsp; {{ approver.name }}
                      </span>
                    </div>

                    <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ComboboxOption>
              </ComboboxOptions>
            </div>
          </Combobox>
        </div>

      </div>
    </div>
</template>

<script>
    import { computed, ref } from 'vue'
    // import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
    import {
      Combobox,
      ComboboxButton,
      ComboboxInput,
      ComboboxOption,
      ComboboxOptions,
    } from '@headlessui/vue'
    export default {
        name: "LoanApplicationDataField",
        props: {
          loanData: Object
        },
        components: {
          CheckIcon,
          ChevronUpDownIcon,
          Combobox,
          ComboboxButton,
          ComboboxInput,
          ComboboxOption,
          ComboboxOptions,
            // VueDatePicker
        },
        data() {
            return {
                loanApplication: this.loanData,
                query: ref(''),
                selectedBorrower: { name: 'Please Select', id: "" },
                selectedLoanType:  { name:"Please select", value: "" , interest: 0},
                selectedModeOfPayment: '',
                selectedCollector:{ name: 'Please Select', id: "" },
                selectedApprover:{ name: 'Please Select', id: "" },
                borrowers: [
                    { name: 'Chris Butalid', id: 1 },
                    { name: 'kamile Butalid', id: 2 },
                    { name: 'Kenzo Makulet', id: 3 },
                    { name: 'Kassie Pasaway', id: 4 }
                ],
                loanTypes: [
                  { name:"Business Loan", value: "business_loan" , interest: 11},
                  { name:"Operators Loan", value: "operators_loan", interest: 12 },
                  { name:"Pensioners Loan", value: "pensioners_loan", interest: 13},
                  { name:"Salary Loan", value: "salary_loan", interest: 14}
                ],
                modeOfPayment: [
                  { name:"Please Select", value: ""},
                  { name:"Daily", value: "daily"},
                  { name:"Weekly", value: "weekly"},
                  { name:"Monthly", value: "monthly"}
                ],
                collectors: [
                    { name: 'Tala Maganda', id: 1 },
                    { name: 'Kisses Mabait', id: 2 },
                    { name: 'Kobe Iyaken', id: 3 },
                    { name: 'Kendal Palaaway', id: 4 }
                ],
                approvers: [
                    { name: 'klay Pogi', id: 1 },
                    { name: 'Loki Masungit', id: 2 },
                ],

            }
        },
        mounted() {
        },
        computed: {
          filteredBorrowers:function () {
            return this.query.value === ''
            ? this.borrowers
            : this.borrowers.filter(borrower => {
              return borrower.name.toLowerCase().includes(this.query.toLowerCase())
            }).sort(res => {
              return -1;
            });
          },
          filteredLoanTypes:function () {
           return this.query.value === ''
          ? this.loanTypes
          : this.loanTypes.filter(loanType => {
              return loanType.name.toLowerCase().includes(this.query.toLowerCase())
            }).sort(res => {
              return -1;
            });
          },
          filteredCollectors:function () {
           return this.query.value === ''
          ? this.collectors
          : this.collectors.filter(collector => {
              return collector.name.toLowerCase().includes(this.query.toLowerCase())
            }).sort(res => {
              return -1;
            });
          },
          filteredApprovers:function () {
           return this.query.value === ''
          ? this.approvers
          : this.approvers.filter(collector => {
              return collector.name.toLowerCase().includes(this.query.toLowerCase())
            }).sort(res => {
              return -1;
            });
          },
        }
    }
</script>

<style scoped>

</style>