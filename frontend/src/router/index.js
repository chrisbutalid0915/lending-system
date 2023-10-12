import { createRouter, createWebHistory } from "vue-router";
import store from '@/store';
import LoginForm from "@/components/LoginForm";
import DashboardForm from "@/Dashboard/DashboardForm";
import LoanForm from "@/Loan/LoanApplication/LoanForm";
import LoanRestructuring from "@/Loan/LoanRestructuring/LoanRestructuring";
import LoanAccount from "@/Loan/LoanAccounts/LoanAccount";
import ClientInformation from "@/Client/ClientInformation";
import DataEntry from "@/DataEntry/DataEntry";
import AssignCollector from "@/SetupModule/AssignCollector";
import AssignApprover from "@/SetupModule/AssignApprover";
import WaiveInterestAndPenalty from "@/SetupModule/WaiveInterestAndPenalty";
import CollectionReports from "@/Reports/CollectionReports";
import PastDueMonitoringReport from "@/Reports/PastDueMonitoringReport";
import RestructuedofLoanDues from "@/Reports/RestructuedofLoanDues";
import ScheduleLoanReleases from "@/Reports/ScheduleLoanReleases";
import StatementAccount from "@/Reports/StatementAccount";
import SummaryLoanDues from "@/Reports/SummaryLoanDues";
import SummaryWaivedInterestPenalties from "@/Reports/SummaryWaivedInterestPenalties";
import LoanPayment from "@/Cashiering/LoanPayment";
import SavingsDeposit from "@/Cashiering/SavingsWithdrawalDeposit/SavingsDeposit";
import WithdrawalDeposit from "@/Cashiering/SavingsWithdrawalDeposit/WithdrawalDeposit";
import CashCheck from "@/Cashiering/CashCheckPayout/CashCheck";
import CashPayout from "@/Cashiering/CashCheckPayout/CashPayout";
import CashBeginning from "@/Cashiering/CashReceipt/CashBeginning";
import CashInBank from "@/Cashiering/CashReceipt/CashInBank";
import CashInVault from "@/Cashiering/CashReceipt/CashInVault";
import EndDayReport from "@/Cashiering/EndDayReport";
import CorrectingEntry from "@/Cashiering/CorrectingEntry";
import TellerBlotter from "@/Cashiering/TellerBlotterProofSheet/TellerBlotter";
import ProofSheet from "@/Cashiering/TellerBlotterProofSheet/ProofSheet";
import GeneralLedger from "@/AccountingModule/GeneralLedger";
import SubsidiaryLedger from "@/AccountingModule/SubsidiaryLedger";
import JournalVoucherEntry from "@/AccountingModule/JournalVoucherEntry";
import CashVoucherEntry from "@/AccountingModule/CashVoucherEntry";
import ProfitReport from "@/AccountingModule/ProfitAndLossReport/ProfitReport";
import LossReport from "@/AccountingModule/ProfitAndLossReport/LossReport";
import CreateClient from "@/Client/CreateClient";
import UpdateClient from "@/Client/UpdateClient";


const routes = [

    {
        path: "/",
        name: "Dashboard",
        component: DashboardForm,
    },
    // {
    //     path: "/login",
    //     redirect: "/",
    // },
    // {
    //     path: "/login",
    //     name: "Login",
    //     component: LoginForm,
    // },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardForm,
    },
    {
        path: "/loan",
        name: "Loan",
        component: LoanForm,
    },
    {
        path: "/loan-restructuring",
        name: "Loan Restructuring",
        component: LoanRestructuring,
    },
    {
        path: "/loan-account",
        name: "Loan Account",
        component: LoanAccount,
    },
    {
        path: "/client-information",
        name: "Client Information",
        component: ClientInformation,
    },
    {
        path: "/create-client",
        name: "Create Client",
        component: CreateClient,
    },
    {
        path: "/update-client",
        name: "Update Client",
        component: UpdateClient,
    },
    {
        path: "/data-entry",
        name: "Data Entry",
        component:DataEntry,
    },
    {
        path: "/assign-collector",
        name: "Assign Collector",
        component:AssignCollector,
    },
    {
        path: "/assign-approver",
        name: "Assign Approver",
        component:AssignApprover,
    },
    {
        path: "/waive-interest-penalty",
        name: "Waive Interest and Penalty",
        component:WaiveInterestAndPenalty,
    },
    {
        path: "/collection-reports",
        name: "Collection Reports",
        component:CollectionReports,
    },
    {
        path: "/past-due-monitoring-report",
        name: "Past Due Monitoring Report",
        component:PastDueMonitoringReport,
    },
    {
        path: "/restructured-loan-dues",
        name: "Restructured of Loan Dues",
        component:RestructuedofLoanDues,
    },
    {
        path: "/schedule-loan-releases",
        name: "Schedule Loan Releases",
        component:ScheduleLoanReleases,
    },
    {
        path: "/statement-account",
        name: "Statement of Account(SOA)",
        component:StatementAccount,
    },
    {
        path: "/summary-of-loan-dues",
        name: "Summary of Loan Dues",
        component:SummaryLoanDues,
    },
    {
        path: "/summary-waive-interest-penalties",
        name: "Summary of waived Interest and Penalties",
        component:SummaryWaivedInterestPenalties,
    },
    {
        path: "/loan-payment",
        name: "Loan Payment",
        component:LoanPayment,
    },
    {
        path: "/savings-deposit",
        name: "Savings Deposit",
        component:SavingsDeposit,
    },
    {
        path: "/withdrawal-deposit",
        name: "Withdrawal Deposit",
        component:WithdrawalDeposit,
    },
    {
        path: "/cash-check",
        name: "Cash Check",
        component:CashCheck,
    },
    {
        path: "/cash-payout",
        name: "Cash Payout",
        component:CashPayout,
    },
    {
        path: "/cash-beginning",
        name: "Cash Beginning",
        component:CashBeginning,
    },
    {
        path: "/cash-in-bank",
        name: "Cash in Bank",
        component:CashInBank,
    },
    {
        path: "/cash-in-vault",
        name: "Cash in Vault",
        component:CashInVault,
    },
    {
        path: "/end-of-day-report",
        name: "End of Day Report",
        component:EndDayReport,
    },
    {
        path: "/correcting-entry",
        name: "Correcting Entry",
        component:CorrectingEntry,
    },
    {
        path: "/tellers-blotter",
        name: "Teller's Blotter",
        component:TellerBlotter,
    },
    {
        path: "/proof-sheet",
        name: "Proof Sheet",
        component:ProofSheet,
    },
    {
        path: "/general-ledger",
        name: "General Ledger",
        component:GeneralLedger,
    },
    {
        path: "/subsidiary-ledger",
        name: "Subsidiary Ledger",
        component:SubsidiaryLedger,
    },
    {
        path: "/journal-voucher-entry",
        name: "Journal Voucher Entry",
        component:JournalVoucherEntry,
    },
    {
        path: "/cash-voucher-entry",
        name: "Cash Voucher Entry",
        component:CashVoucherEntry,
    },
    {
        path: "/profit-report",
        name: "Profit Report",
        component:ProfitReport,
    },
    {
        path: "/loss-report",
        name: "Loss Report",
        component:LossReport,
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!store.getters.isAuthenticated) {
      // Redirect to the login page if not authenticated
          next({ name: 'Dashboard' });
        } else {
          console.log('test 2')
          next();
        }
  } else{
      console.log('test 3')
      console.log(store.getters.currentRouteName)
      next();
  }
});

export default router;
