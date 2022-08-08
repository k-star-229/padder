import { useAddLogin, useGetLogin } from "iris/lib/gql/mutation/use-add-login"
import { useForm } from "react-hook-form"

import { useModalStore } from "../../../state-machine/use-modal-store"
import { MarginT } from "../../../styles/global"
import { CancelButton, CompleteButton } from "../../atoms/buttons/style"
import { InputField } from "../../atoms/inputs/input-field"

interface InviteTenantForm {
	email: string
}

export const AddTenant: React.FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<InviteTenantForm>()
	const { hideModal } = useModalStore()
	const [getLogin] = useGetLogin()
	const [inviteLogin, { loading }] = useAddLogin()

	const handleInviteTenant = async (d: InviteTenantForm): Promise<void> => {
		const login = await getLogin({
			variables: {
				email: d.email,
			},
		})

		if (login.data?.Logins.length > 0) {
			
		} else {
			await inviteLogin({
				variables: {
					inputs: [
						{
							email: d.email,
							androidDeviceToken: "dummy-token",
							iosDeviceToken: "dummy-token",
						},
					],
				},
			})
		}
		hideModal()
	}

	return (
		<div>
			<form onSubmit={handleSubmit(handleInviteTenant)}>
				<InputField
					type={"text"}
					label={"Tenant Email"}
					placeholder={"Enter Tenant Email"}
					error={errors?.email}
					{...register("email")}
				/>
				<CompleteButton type='submit'>
					{loading ? "Loading ..." : "Invite Tenant"}
				</CompleteButton>
				<MarginT />
				<CancelButton onClick={hideModal} type='button'>
					Cancel
				</CancelButton>
			</form>
		</div>
	)
}
