import { ChoicesCard, HeaderChoiceCard } from "@/entities/header";
import type { FC } from "react";
import styles from "./styles.module.scss";

export const ChoiceList: FC = () => {
	return (
		<section className={styles.list}>
			{ChoicesCard.map((card) => (
				<HeaderChoiceCard
					key={card.id}
					name={card.name}
					icon={card.icon}
				/>
			))}
		</section>
	);
};
