import { Button } from "@/shared/components/ui/button";
import type { FC } from "react";

type Props = {
	placeholder: string;
	primary?: boolean;
	disabled?: boolean;
	onClick: () => unknown;
};

export const HeaderButton: FC<Props> = ({ placeholder, primary, disabled, onClick }) => (
	<Button
		style={{
			cursor: disabled ? "not-allowed" : "pointer",
			flex: 1,
			fontSize: "25px",
			height: "50px",
			border: "2px solid var(--muted)",
			fontWeight: "bold",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			borderRadius: "10px",
		}}
		className={primary ? `bg-primary text-foreground` : `bg-muted text-foreground`}
		onClick={onClick}
	>
		{placeholder}
	</Button>
);
