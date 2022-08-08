import { gql, useLazyQuery } from "@apollo/client"

import { Households, HouseholdsVariables } from "./__generated__/Households"

const GET_HOUSEHOLD = gql`
	query Households($householdsId: ID, $phoneNumber: String) {
		Households(id: $householdsId, phoneNumber: $phoneNumber) {
			id
			phoneNumber
			maintenanceRequests {
				id
				description
				date
				location
				photos
			}
			repayments {
				id
				repaymentNumber
				amount
				date
				daysEarlyLate
				karmaPoints
				repaymentSplits {
					id
					amount
					split
				}
			}
			payments {
				id
				date
			}
		}
	}
`

export const useGetHousehold = () => {
	return useLazyQuery<Households, HouseholdsVariables>(GET_HOUSEHOLD)
}
