import { useAddMaintenaceRequest } from "iris/lib/gql/mutation/use-add-maintenance-request"
import { generateOptionsFromArray, typesafeParseInt } from "iris/lib/gql/utils"
import { Spinner } from "kl-core"
import { useRouter } from "next/router"
import { Controller, useForm } from "react-hook-form"

import { PlainRoutes, createRoute } from "../../../constants/routes.constant"
import { UploadImage } from "../../../lib/plugins/plugin-manager"
import { useLogin } from "../../../shared-hooks/use-login"
import { useFileStore } from "../../../state-machine/use-file-store"
import { BottomButton } from "../../atoms/buttons/bottom-button"
import { SelectInput } from "../../atoms/inputs/select"
import { TextAreaField } from "../../atoms/inputs/text-area-field"
import { ImageInput } from "../../molecules/image-input"

interface MaintenaceRequestFormType {
	description: string
	location: {
		label: string
		value: string
	}
}

const locationOptions = [
	"kitchen",
	"bedroom",
	"dining",
	"basement",
	"lawn",
	"bathroom",
]

export const MaintenanceRequestForm: React.FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		control,
	} = useForm<MaintenaceRequestFormType>()
	const {
		images: { maintenancePhotos },
	} = useFileStore()
	const [addMaintenanceRequest, { loading }] = useAddMaintenaceRequest()
	const { data, loading: loginLoading } = useLogin()
	const { push } = useRouter()

	console.log("data", data)

	const onSubmit = async (d: MaintenaceRequestFormType): Promise<void> => {
		const tenant = data?.Logins[0]?.tenant
		const householdId = tenant?.household?.id
		const photos = []
		if (maintenancePhotos.length > 0) {
			for (const photo of maintenancePhotos) {
				const url = await UploadImage(photo, "maintenance")
				photos.push(url)
			}
		}
		await addMaintenanceRequest({
			variables: {
				inputs: [
					{
						date: new Date(),
						description: d.description,
						householdId: typesafeParseInt(householdId),
						photos,
						location: d.location.value,
						maintenanceRequestStateId: 1,
						tenantId: typesafeParseInt(tenant?.id),
					},
				],
			},
		})
		push(createRoute(PlainRoutes.tenant))
	}

	if (loginLoading) {
		return <Spinner />
	}

	return (
		<form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
			<Controller
				control={control}
				name='location'
				render={({ field }): JSX.Element => {
					return (
						<SelectInput
							label='Location'
							options={generateOptionsFromArray(locationOptions)}
							{...field}
						/>
					)
				}}
			/>
			<TextAreaField
				label='Description'
				bgColor='white'
				borderRadius='0'
				error={errors?.description}
				{...register("description")}
			/>
			<ImageInput isMulti name='maintenancePhotos' label='Photos' />
			<BottomButton
				title={`${loading ? "loading" : "Add Request"}`}
				disabled={loading}
			/>
		</form>
	)
}
