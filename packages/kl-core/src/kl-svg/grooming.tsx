import * as React from "react"

export const Grooming: React.FC = () => {
	return (
		<svg
			width="39"
			height="33"
			viewBox="0 0 39 33"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<rect width="39" height="33" fill="url(#pattern0)" />
			<defs>
				<pattern
					id="pattern0"
					patternContentUnits="objectBoundingBox"
					width="1"
					height="1"
				>
					<use
						xlinkHref="#image0_67_303"
						transform="translate(0.0769231) scale(0.0132212 0.015625)"
					/>
				</pattern>
				<image
					id="image0_67_303"
					width="64"
					height="64"
					xlinkHref="data:image/png;base64,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"
				/>
			</defs>
		</svg>
	)
}
