import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './controllers/home/home.component';
import { DashboardComponent } from './controllers/dashboard/dashboard.component';
import { AboutComponent } from './controllers/about/about.component';
import { TablesPurchasesComponent } from './controllers/tables-purchases/tables-purchases.component';
import { TablesSalesComponent } from './controllers/tables-sales/tables-sales.component';
import { TablesSalesInvoicesComponent } from './controllers/tables-sales-invoices/tables-sales-invoices.component';
import { TablesAccountsComponent } from './controllers/tables-accounts/tables-accounts.component';
import { TablesCustomersComponent } from './controllers/tables-customers/tables-customers.component';
import { TablesSuppliersComponent } from './controllers/tables-suppliers/tables-suppliers.component';
import { TablesProductsComponent } from './controllers/tables-products/tables-products.component';
import { TablesTaxesComponent } from './controllers/tables-taxes/tables-taxes.component';
import { DashboardOneYearBeforeComponent } from './controllers/dashboard-one-year-before/dashboard-one-year-before.component';
import { DashboardTwoYearsBeforeComponent } from './controllers/dashboard-two-years-before/dashboard-two-years-before.component';
import { DashboardThreeYearsBeforeComponent } from './controllers/dashboard-three-years-before/dashboard-three-years-before.component';
import { DashboardFourYearsBeforeComponent } from './controllers/dashboard-four-years-before/dashboard-four-years-before.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "dashboard",
    children: [
      {
        path: "current-year",
        component: DashboardComponent
      },
      {
        path: "one-year-before",
        component: DashboardOneYearBeforeComponent
      },
      {
        path: "two-year-before",
        component: DashboardTwoYearsBeforeComponent
      },
      {
        path: "three-year-before",
        component: DashboardThreeYearsBeforeComponent
      },
      {
        path: "four-year-before",
        component: DashboardFourYearsBeforeComponent
      }
    ]
  },
  {
    path: "tables",
    children: [
      {
        path: "purchases",
        component: TablesPurchasesComponent
      },
      {
        path: "sales",
        component: TablesSalesComponent
      },
      {
        path: "sales-invoices",
        component: TablesSalesInvoicesComponent
      },
      {
        path: "accounts",
        component: TablesAccountsComponent
      },
      {
        path: "customers",
        component: TablesCustomersComponent
      },
      {
        path: "suppliers",
        component: TablesSuppliersComponent
      },
      {
        path: "products",
        component: TablesProductsComponent
      },
      {
        path: "taxes",
        component: TablesTaxesComponent
      }
    ]
  },
  {
    path: "about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
