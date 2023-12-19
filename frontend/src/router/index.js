import { createRouter, createWebHistory } from "vue-router";
import store from '@/store';
import LoginForm from "@/components/LoginForm";
import DashboardForm from "@/Dashboard/DashboardForm";
import LoanForm from "@/Loan/LoanApplication/LoanForm";
import LoanRestructuring from "@/Loan/LoanRestructuring/LoanRestructuring";
import LoanAccount from "@/Loan/LoanAccounts/LoanAccount";
import ClientInformation from "@/Client/ClientInformation";
import DataEntry from "@/DataEntry/DataEntry";
import AssignCollector from "@/SetupModule/Collector/AssignCollector";
import AssignApprover from "@/SetupModule/Approver/AssignApprover";
import WaiveInterestAndPenalty from "@/SetupModule/InterestPenalty/WaiveInterestAndPenalty";
import CollectionReports from "@/Reports/CollectionReports";
import PastDueMonitoringReport from "@/Reports/PastDueMonitoringReport";
import RestructuedofLoanDues from "@/Reports/RestructuedofLoanDues";
import ScheduleLoanReleases from "@/Reports/ScheduleLoanReleases";
import StatementAccount from "@/Reports/StatementAccount";
import SummaryLoanDues from "@/Reports/SummaryLoanDues";
import SummaryWaivedInterestPenalties from "@/Reports/SummaryWaivedInterestPenalties";
import LoanPayment from "@/Cashiering/LoanPayment/LoanPayment";
import SavingsDeposit from "@/Cashiering/SavingsDeposit/SavingsDeposit";
import WithdrawalDeposit from "@/Cashiering/WithdrawalDeposit/WithdrawalDeposit";
import CashCheck from "@/Cashiering/CashCheck/CashCheck";
import CashPayout from "@/Cashiering/CashPayout/CashPayout";
import CashBeginning from "@/Cashiering/CashBeginning/CashBeginning";
import CashInBank from "@/Cashiering/CashInBank/CashInBank";
import CashInVault from "@/Cashiering/CashInVault/CashInVault";
import EndDayReport from "@/Cashiering/EndDayReport/EndDayReport";
import CorrectingEntry from "@/Cashiering/CorrectingEntry/CorrectingEntry";
import TellerBlotter from "@/Cashiering/TellerBlotter/TellerBlotter";
import ProofSheet from "@/Cashiering/ProofSheet/ProofSheet";
import GeneralLedger from "@/AccountingModule/GeneralLedger/GeneralLedger";
import SubsidiaryLedger from "@/AccountingModule/SubsidiaryLedger/SubsidiaryLedger";
import JournalVoucherEntry from "@/AccountingModule/JournalVoucher/JournalVoucherEntry";
import CashVoucherEntry from "@/AccountingModule/CashVoucher/CashVoucherEntry";
import ProfitReport from "@/AccountingModule/ProfitReport/ProfitReport";
import LossReport from "@/AccountingModule/LossReport/LossReport";
import CreateClient from "@/Client/CreateClient";
import UpdateClient from "@/Client/UpdateClient";
import CreateLoanApplication from "@/Loan/LoanApplication/CreateLoanApplication";
import UpdateLoanApplication from "@/Loan/LoanApplication/UpdateLoanApplication";
import LoanAmortization from "@/Loan/LoanAccounts/LoanAmortization";
import SummaryLoanReleases from "@/Loan/LoanAccounts/SummaryLoanReleases/SummaryLoanReleases";
import AssignApproverForm from "@/SetupModule/Approver/AssignApproverForm";
import CreateDataEntry from "@/DataEntry/CreateDataEntry";
import AssignCollectorForm from "@/SetupModule/Collector/AssignCollectorForm";
import WaiveInterestPenaltyForm from "@/SetupModule/InterestPenalty/WaiveInterestPenaltyForm";
import CreateLoanPayment from "@/Cashiering/LoanPayment/CreateLoanPayment";
import CreateSavingsDeposit from "@/Cashiering/SavingsDeposit/CreateSavingsDeposit";
import CreateWithdrawalDeposit from "@/Cashiering/WithdrawalDeposit/CreateWithdrawalDeposit";
import CreateCashCheck from "@/Cashiering/CashCheck/CreateCashCheck";
import CreateCashPayout from "@/Cashiering/CashPayout/CreateCashPayout";
import CreateCashBeginning from "@/Cashiering/CashBeginning/CreateCashBeginning";
import CreateCashInBank from "@/Cashiering/CashInBank/CreateCashInBank";
import CreateCashInVault from "@/Cashiering/CashInVault/CreateCashInVault";
import CreateCorrectingEntry from "@/Cashiering/CorrectingEntry/CreateCorrectingEntry";
import CreateJournalVoucher from "@/AccountingModule/JournalVoucher/CreateJournalVoucher";
import CreateCashVoucher from "@/AccountingModule/CashVoucher/CreateCashVoucher";
import ActualLoanReleasesVSLoanTarget from "@/KeyResultArea/ActualLoanReleases/ActualLoanReleasesVSLoanTarget";
import CollectionVSUncollectedAndPastDue from "@/KeyResultArea/CollectionUncollected/CollectionVSUncollectedAndPastDue";


const routes = [

    {
        path: "/",
        redirect: '/dashboard'
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
        path: "/create-loan-application",
        name: "Loan Application",
        component: CreateLoanApplication,
    },
    {
        path: "/update-loan-application",
        name: "Update Loan Applicationn",
        component: UpdateLoanApplication,
    },
    {
        path: "/loan-restructuring",
        name: "Loan Restructuring",
        component: LoanRestructuring,
    },
    {
        path: "/loan-account",
        name: "Loan Accounts",
        component: LoanAccount,
    },
    {
        path: "/loan-amortization",
        name: "Loan Accounts - Amortization",
        component: LoanAmortization,
    },
    {
        path: "/summary-loan-releases",
        name: "Summary Loan Releases",
        component: SummaryLoanReleases
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
        path: "/create-data-entry",
        name: "Create Data Entry",
        component:CreateDataEntry,
    },
    {
        path: "/collector",
        name: "Collector",
        component:AssignCollector,
    },
    {
        path: "/assign-collector",
        name: "Assign Collector",
        component:AssignCollectorForm,
    },
    {
        path: "/approver",
        name: "Approver",
        component:AssignApprover,
    },
    {
        path: "/assign-approver",
        name: "Assign Approver",
        component:AssignApproverForm,
    },
    {
        path: "/interest-penalty",
        name: "Interest and Penalty",
        component:WaiveInterestAndPenalty,
    },
    {
        path: "/waive-interest-penalty",
        name: "Waive Interest and Penalty",
        component:WaiveInterestPenaltyForm,
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
        path: "/create-loan-payment",
        name: "Add Payment",
        component:CreateLoanPayment,
    },
    {
        path: "/savings-deposit",
        name: "Savings Deposit",
        component:SavingsDeposit,
    },
    {
        path: "/create-savings-deposit",
        name: "Add Savings Deposit",
        component:CreateSavingsDeposit,
    },
    {
        path: "/withdrawal-deposit",
        name: "Withdrawal Deposit",
        component:WithdrawalDeposit,
    },
    {
        path: "/create-withdrawal-deposit",
        name: "Add Withdrawal Deposit",
        component:CreateWithdrawalDeposit,
    },
    {
        path: "/cash-check",
        name: "Cash Check",
        component:CashCheck,
    },
    {
        path: "/create-cash-check",
        name: "Add Cash Check",
        component:CreateCashCheck,
    },
    {
        path: "/cash-payout",
        name: "Cash Payout",
        component:CashPayout,
    },
    {
        path: "/create-cash-payout",
        name: "Add Cash Payout",
        component:CreateCashPayout,
    },
    {
        path: "/cash-beginning",
        name: "Cash Beginning",
        component:CashBeginning,
    },
    {
        path: "/create-cash-beginning",
        name: "Add Cash Beginning",
        component:CreateCashBeginning,
    },
    {
        path: "/cash-in-bank",
        name: "Cash in Bank",
        component:CashInBank,
    },
    {
        path: "/create-cash-in-bank",
        name: "Add Cash In Bank",
        component:CreateCashInBank,
    },
    {
        path: "/cash-in-vault",
        name: "Cash in Vault",
        component:CashInVault,
    },
    {
        path: "/create-cash-in-vault",
        name: "Add Cash in Vault",
        component:CreateCashInVault,
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
        path: "/create-correcting-entry",
        name: "Add Correcting Entry",
        component:CreateCorrectingEntry,
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
        path: "/create-journal-voucher-entry",
        name: "Add Journal Voucher Entry",
        component:CreateJournalVoucher,
    },
    {
        path: "/cash-voucher-entry",
        name: "Cash Voucher Entry",
        component:CashVoucherEntry,
    },
    {
        path: "/create-cash-voucher-entry",
        name: "Add Cash Voucher Entry",
        component:CreateCashVoucher,
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
    {
        path: "/loan-release",
        name: "Actual Loan Release",
        component:ActualLoanReleasesVSLoanTarget,
    },
    {
        path: "/collection-and-uncollected",
        name: "Collection and Uncollected",
        component:CollectionVSUncollectedAndPastDue,
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
