import { type FC } from "react";
import { Title } from "@/shared/components/ui/title";
import { AboutInfo } from "@/entities/about";
import { AboutContacts } from "@/features/about";
import styles from "./styles.module.scss";
import { Callback } from "@/features/callback";

export const About: FC = () => {
	return (
		<section className={styles.section}>
			<section className={styles.section__title}>
				<Title title='БУДЕМ ЗНАКОМЫ' />
			</section>
			<section className={styles.section__about}>
				<section>
					<h2>Обо мне</h2>
					<AboutInfo />
				</section>
				<section>
					<h2>Связь со мной</h2>
					<AboutContacts />
				</section>
				<section>
					<Callback />
				</section>
			</section>
		</section>
	);
};
