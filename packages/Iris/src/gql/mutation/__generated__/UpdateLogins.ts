/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PadderLoginUpdateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateLogins
// ====================================================

export interface UpdateLogins_UpdatePadderLogins {
  __typename: "PadderLogin";
  /**
   * Primary key for database
   */
  id: string;
  email: string | null;
}

export interface UpdateLogins {
  /**
   * Updates a collection of PadderLogins.
   */
  UpdatePadderLogins: (UpdateLogins_UpdatePadderLogins | null)[] | null;
}

export interface UpdateLoginsVariables {
  inputs?: (PadderLoginUpdateInput | null)[] | null;
}
