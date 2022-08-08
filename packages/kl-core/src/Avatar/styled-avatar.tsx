 

import {
	StyledAvatarImg,
	StyledAvatarWrapper,
	StyledIconWrapper,
} from "./style"

export interface StyledAvatarProps
	extends React.HTMLAttributes<HTMLDivElement> {
	img?: string
	Icon?: any
	caption?: string
	alt?: string
	isActive?: boolean
}

export const StyledAvatar: React.FC<StyledAvatarProps> = ({
	img,
	Icon,
	caption,
	alt,
	isActive,
	...rest
}) => {
	return (
		<StyledAvatarWrapper img={img}  active={isActive} {...rest}>
			{img ? (
				<StyledAvatarImg>
					<img src={img} alt={alt} />
				</StyledAvatarImg>
			) : (
				<StyledIconWrapper>{Icon}</StyledIconWrapper>
			)}
		</StyledAvatarWrapper>
	)
}
