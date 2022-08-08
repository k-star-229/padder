import styled from "styled-components"

interface PrimaryHeadingProps {
	title?: string
	color?: string
}

export const PrimaryHeading: React.FC<PrimaryHeadingProps> = ({
	color = "dark",
	title,
}) => {
	const TextStyleconf = {
		color: "",
	}
	switch (color) {
		case "light":
			TextStyleconf.color = "#fff"
			break
		case "dark":
			TextStyleconf.color = "#000"
			break
		case "seconadry":
			TextStyleconf.color = "var(--secondary-100)"
			break
		case "warning":
			TextStyleconf.color = "var(--orange-400)"
			break
		case "info":
			TextStyleconf.color = "var(--purple-100)"
			break
		case "gray":
			TextStyleconf.color = "var(--gray-300)"
			break
	}
	return <HeadingTitle color={TextStyleconf.color}>{title}</HeadingTitle>
}

export const HeadingTitle = styled.h2<{ color: string }>`
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 600;
	padding: 1rem 0 0.5rem 0;
	color: ${({ color }): string => (color ? color : "#090a0a")};
	margin: 0;
`
