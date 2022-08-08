/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MaintenanceRequestAddInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddMaintenanceRequests
// ====================================================

export interface AddMaintenanceRequests_AddMaintenanceRequests {
  __typename: "MaintenanceRequest";
  /**
   * Primary key for database
   */
  id: string;
  date: any | null;
  location: string | null;
  description: string | null;
  photos: (string | null)[] | null;
}

export interface AddMaintenanceRequests {
  /**
   * Adds a collection of MaintenanceRequests.
   */
  AddMaintenanceRequests: (AddMaintenanceRequests_AddMaintenanceRequests | null)[] | null;
}

export interface AddMaintenanceRequestsVariables {
  inputs?: (MaintenanceRequestAddInput | null)[] | null;
}
