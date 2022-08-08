import { gql, useMutation } from "@apollo/client"

import {
	AddMaintenanceRequests,
	AddMaintenanceRequestsVariables,
} from "./__generated__/AddMaintenanceRequests"

const ADD_MAINTENANCE_REQUEST = gql`
	mutation AddMaintenanceRequests($inputs: [MaintenanceRequestAddInput]) {
		AddMaintenanceRequests(inputs: $inputs) {
			id
			date
			location
			description
			photos
		}
	}
`

export const useAddMaintenaceRequest = () => {
	return useMutation<AddMaintenanceRequests, AddMaintenanceRequestsVariables>(
		ADD_MAINTENANCE_REQUEST
	)
}
