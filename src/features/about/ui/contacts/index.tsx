import type { FC } from "react";
import { Contacts } from "../../";
import { HeaderChoiceCard } from "@/entities/header";
import styles from "./styles.module.scss";

export const AboutContacts: FC = () => (
	<section className={styles.place}>
		{Contacts.map((contact) => (
			<HeaderChoiceCard
				key={contact.id}
				id={contact.id}
				name={contact.name}
				icon={contact.icon}
			/>
		))}
	</section>
);
