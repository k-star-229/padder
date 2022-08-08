import { yupResolver } from "@hookform/resolvers/yup"
import { useAddAddress } from "iris/lib/gql/mutation/use-add-address"
import { useAddHousehold } from "iris/lib/gql/mutation/use-add-household"
import { useAddOwnership } from "iris/lib/gql/mutation/use-add-ownership"
import { useAddRealEstateProperty } from "iris/lib/gql/mutation/use-add-realstateproperty"
import { useGetHousehold } from "iris/lib/gql/query/get-household"
import { useRouter } from "next/router"
import React from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"

import { PlainRoutes, createRoute } from "../../../constants/routes.constant"
import { typesafeParseInt } from "../../../lib/utils"
import { useLogin } from "../../../shared-hooks/use-login"
import { useToastStore } from "../../../state-machine/use-toast-store"
import { Padding } from "../../../styles/global"
import { BottomButton } from "../../atoms/buttons/bottom-button"
import { InputField } from "../../atoms/inputs/input-field"

export interface AddressForm {
	streetAddress: string
	city: string
	provinceState: string
	country: string
	postalCode: string
}

export const AddAddress: React.FC = () => {
	const [addAddress, { loading }] = useAddAddress()
	const { showToast } = useToastStore()
	const [addRealEstateProperty] = useAddRealEstateProperty()
	const { data: logins } = useLogin()
	const [getHousehold] = useGetHousehold()
	const [addOwnership] = useAddOwnership()
	const { push } = useRouter()
	const [addHousehold] = useAddHousehold()

	const AddressSchema = yup.object({
		streetAddress: yup.string().required().label("Street Address"),
		city: yup.string().required().label("City"),
		provinceState: yup.string().required().label("Province State"),
		country: yup.string().required().label("Country"),
		postalCode: yup.string().required().label("Postal Code"),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AddressForm>({
		resolver: yupResolver(AddressSchema),
	})

	const onSubmit = async (data: AddressForm): Promise<void> => {
		const login = logins?.Logins[0]
		const { country, postalCode, provinceState, city, streetAddress } = data
		// Add Address -> Add Real Estate ->  Add Ownership
		try {
			const address = await addAddress({
				variables: {
					inputs: [
						{
							country,
							postalCode,
							provinceState,
							city,
							streetAddress,
						},
					],
				},
			})
			let householdId = ""
			const { data: household } = await getHousehold({
				variables: {
					phoneNumber: login?.landlord?.phoneNumber,
				},
			})

			if (household?.Households.length === 0) {
				const { data: newHousehold } = await addHousehold({
					variables: {
						inputs: [
							{
								phoneNumber: login?.landlord?.phoneNumber,
							},
						],
					},
				})
				householdId = newHousehold?.AddHouseholds[0].id
			} else {
				householdId = household?.Households[0].id
			}

			const { data: realEstateProperty } = await addRealEstateProperty({
				variables: {
					inputs: [
						{
							addressId: typesafeParseInt(address?.data?.AddAddresses[0].id),
							householdsIds: [typesafeParseInt(householdId)],
							name: "Property",
						},
					],
				},
			})
			await addOwnership({
				variables: {
					inputs: [
						{
							startDate: new Date(),
							landlordId: typesafeParseInt(login?.landlord?.id),
							realEstatePropertyId: typesafeParseInt(
								realEstateProperty?.AddRealEstateProperties[0].id
							),
						},
					],
				},
			})
			push(createRoute(PlainRoutes.landlord))
		} catch (error) {
			showToast({
				show: true,
				type: "error",
				title: error?.message || "Something went wrong",
			})
		}
	}

	return (
		<form className='flex py-2 flex-col' onSubmit={handleSubmit(onSubmit)}>
			<Padding className='flex-1' padding='1rem 1rem 2rem 1rem'>
				<div className='font-bold'>Add Property</div>
				<InputField
					type='text'
					label='Street Address'
					bgColor='white'
					borderRadius='0'
					error={errors?.streetAddress}
					{...register("streetAddress")}
				/>
				<InputField
					type='text'
					label='City'
					bgColor='white'
					borderRadius='0'
					error={errors?.city}
					{...register("city")}
				/>
				<InputField
					type='text'
					label='Province State'
					bgColor='white'
					borderRadius='0'
					error={errors?.provinceState}
					{...register("provinceState")}
				/>
				<InputField
					type='text'
					label='Country'
					bgColor='white'
					borderRadius='0'
					error={errors?.country}
					{...register("country")}
				/>
				<InputField
					type='text'
					label='Postal Code'
					bgColor='white'
					borderRadius='0'
					error={errors?.postalCode}
					{...register("postalCode")}
				/>
			</Padding>
			<BottomButton
				title={`${loading ? "loading" : "Add Property"}`}
				disabled={loading}
			/>
		</form>
	)
}
