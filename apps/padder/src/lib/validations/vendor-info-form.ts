import * as yup from "yup"

export const VendorDescriptionSchema = yup.object({
	userImage: yup.mixed().required("File is required"),
	marketTitle: yup.string().required().label("Market Title"),
	desc: yup.string().required().label("Description"),
	radius: yup.string().required().label("Radius"),
})

export const VendorVerificationSchema = yup.object({
	dlBack: yup.mixed().required(),
	dlFront: yup.mixed().required(),
})

export const VendorBankSchema = yup.object({
	transitNumber: yup.string().required().label("Transit Number"),
	bankInstitutionNumber: yup.string().required().label("Bank Transit Number"),
	accountNumber: yup.string().required().label("Account Number"),
})
