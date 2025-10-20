import { Card, CardContent } from "@/shared/components/ui/card";
import type { FC } from "react";
import type { Card as CardType } from "@/entities/models";
import styles from "./styles.module.scss";

export const HeaderChoiceCard: FC<CardType> = ({ name, icon, onClick }) => (
	<Card
		onClick={onClick}
		className={styles.card}
	>
		<CardContent className={styles.card__content}>
			{icon}
			<p>{name}</p>
		</CardContent>
	</Card>
);
