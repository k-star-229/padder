import { gql, useLazyQuery } from "@apollo/client"
import {
	MaintenanceRequests,
	MaintenanceRequestsVariables,
} from "./__generated__/MaintenanceRequests"

const MAINTENACE_REQUEST = gql`
	query MaintenanceRequests(
		$maintenanceRequestsId: ID
		$householdId: Int
		$tenantId: Int
		$maintenanceRequestStateId: Int
	) {
		MaintenanceRequests(
			id: $maintenanceRequestsId
			householdId: $householdId
			tenantId: $tenantId
			maintenanceRequestStateId: $maintenanceRequestStateId
		) {
			id
			description
			date
			location
			photos
			household {
				id
			}
			maintenanceRequestState {
				id
				name
			}
			tenant {
				id
			}
		}
	}
`

export const useGetMaintenanceRequest = () => {
	return useLazyQuery<MaintenanceRequests, MaintenanceRequestsVariables>(
		MAINTENACE_REQUEST
	)
}
