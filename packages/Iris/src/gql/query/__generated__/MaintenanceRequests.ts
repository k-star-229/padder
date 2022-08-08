/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MaintenanceRequests
// ====================================================

export interface MaintenanceRequests_MaintenanceRequests_household {
  __typename: "Household";
  /**
   * Primary key for database
   */
  id: string;
}

export interface MaintenanceRequests_MaintenanceRequests_maintenanceRequestState {
  __typename: "MaintenanceRequestState";
  /**
   * Primary key for database
   */
  id: string;
  name: string | null;
}

export interface MaintenanceRequests_MaintenanceRequests_tenant {
  __typename: "Tenant";
  /**
   * Primary key for database
   */
  id: string;
}

export interface MaintenanceRequests_MaintenanceRequests {
  __typename: "MaintenanceRequest";
  /**
   * Primary key for database
   */
  id: string;
  description: string | null;
  date: any | null;
  location: string | null;
  photos: (string | null)[] | null;
  household: MaintenanceRequests_MaintenanceRequests_household | null;
  maintenanceRequestState: MaintenanceRequests_MaintenanceRequests_maintenanceRequestState | null;
  /**
   * Description: Requests made by the tenant.
   */
  tenant: MaintenanceRequests_MaintenanceRequests_tenant | null;
}

export interface MaintenanceRequests {
  /**
   * All MaintenanceRequests in the application matching the criteria in the args.
   */
  MaintenanceRequests: (MaintenanceRequests_MaintenanceRequests | null)[] | null;
}

export interface MaintenanceRequestsVariables {
  maintenanceRequestsId?: string | null;
  householdId?: number | null;
  tenantId?: number | null;
  maintenanceRequestStateId?: number | null;
}
