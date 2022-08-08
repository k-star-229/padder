/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PadderLoginAddInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddLogins
// ====================================================

export interface AddLogins_AddPadderLogins {
  __typename: "PadderLogin";
  /**
   * Primary key for database
   */
  id: string;
}

export interface AddLogins {
  /**
   * Adds a collection of PadderLogins.
   */
  AddPadderLogins: (AddLogins_AddPadderLogins | null)[] | null;
}

export interface AddLoginsVariables {
  inputs?: (PadderLoginAddInput | null)[] | null;
}
