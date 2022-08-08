import styled from "styled-components"

interface LabelProps {
	title: string | any
	fontSize?: string
	weight?: string
	lineHeight?: string
	paddings?: string
	color?: string
	textAlign?: string
	textShadow?: string
}

export const Label: React.FC<LabelProps> = ({
	title,
	fontSize,
	weight,
	lineHeight,
	paddings,
	color,
	textAlign,
	textShadow,
}) => {
	const Title = styled.div<{
		fontSize: string
		weight: string
		lineHeight: string
		paddings: string
		color: string
		textAlign?: string
		textShadow?: string
	}>`
		font-size: ${({ fontSize }): string => fontSize && fontSize};
		font-weight: ${({ weight }): string => weight && weight};
		line-height: ${({ lineHeight }): string => lineHeight && lineHeight};
		padding: ${({ paddings }): string => paddings && paddings};
		color: ${({ color }): string => color && color};
		text-align: ${({ textAlign }): string => (textAlign ? textAlign : "start")};
		text-shadow: ${({ textShadow }): string => textShadow && textShadow};
	`

	return (
		<>
			<Title
				color={color}
				fontSize={fontSize}
				weight={weight}
				lineHeight={lineHeight}
				paddings={paddings}
				textAlign={textAlign}
				textShadow={textShadow}
			>
				{title}
			</Title>
		</>
	)
}

export default Label
