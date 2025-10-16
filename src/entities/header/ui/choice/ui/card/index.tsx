import { Card, CardContent } from "@/shared/components/ui/card";
import type { FC } from "react";
import type React from "react";
import styles from "./styles.module.scss";

type Props = {
	name: string;
	icon: React.ReactNode;
};

export const HeaderChoiceCard: FC<Props> = ({ name, icon }) => (
	<Card className={styles.card}>
		<CardContent className={styles.card__content}>
			{icon}
			<p>{name}</p>
		</CardContent>
	</Card>
);
