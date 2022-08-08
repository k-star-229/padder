import { Padding } from "../../../styles/global"
import { PageHeadings } from "../../atoms/page-heading"
import { MaintenanceRequestForm } from "../../organisms/forms/maintenance-request"

export const MaintenanceRequestTemplate: React.FC = () => {
	return (
		<div className="px-4 py-4 space-y-4">
			<PageHeadings title={"Add Maintenance Request"} />
			<MaintenanceRequestForm />
		</div>
	)
}
