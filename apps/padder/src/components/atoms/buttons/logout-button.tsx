import styled from "styled-components"

const Button = styled.div`
	background-color: #7d7d7d;
	color: white;
	padding: 0.625rem 0;
	text-align: center;
	border-radius: 10px;
	border: 2px solid #7d7d7d;
	cursor: pointer;
	font-weight: 700;
`

interface LogoutButtonProps {
	onClick?: () => void
	title: string
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({
	onClick,
	title,
}) => {
	return <Button onClick={onClick}>{title}</Button>
}
