import { Boldtext, Layout, Padding } from "../../../styles/global"
import { PageHeadings } from "../../atoms/page-heading"
import NavigationTabs from "../../molecules/bottom-navs"
import { TopHeaderBar } from "../../molecules/header-top-bar"
import PadderHistoryCard from "../../molecules/padder-history-box"

const PadderHistoryTemplate: React.FC = () => {
	return (
		<Layout>
			<TopHeaderBar />
			<Padding padding='4rem 2rem'>
				<Padding padding='1.75rem 0 1rem'>
					<PageHeadings title={"History"} />
				</Padding>
				<PadderHistoryCard
					title={
						<>
							<Boldtext>Amount borrowed</Boldtext> $1800
						</>
					}
					des='ON-TIME PAY BONUS!
					+10 Karma'
					srcpath={"/svg/trophy.svg"}
					bgColor='var(--btn-info)'
				/>
				<PadderHistoryCard
					title={
						<>
							<Boldtext>Rent Paid</Boldtext> $1800
						</>
					}
					des='ON-TIME PAY BONUS!
					+10 Karma'
					srcpath={"/svg/sunrise.svg"}
					bgColor='var(--btn-success)'
				/>
				<PadderHistoryCard
					title={
						<>
							<Boldtext>Amount borrowed</Boldtext> $1800
						</>
					}
					des='ON-TIME PAY BONUS!
					+20 Karma'
					srcpath={"/svg/sunshine.svg"}
					bgColor='var(--btn-warning)'
				/>
			</Padding>
			<NavigationTabs />
		</Layout>
	)
}

export default PadderHistoryTemplate
