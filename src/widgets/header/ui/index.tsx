import { HeaderCharacter, HeaderInfo, HeaderTitle } from "@/entities/header";
import type { FC } from "react";
import { ChoiceList, HeaderButtonList } from "@/features/header";
import styles from "./styles.module.scss";

export const Header: FC = () => {
	return (
		<header className={styles.section}>
			<section className={styles.section__inner}>
				<section className={styles.section__inner__title}>
					<HeaderTitle />
				</section>
				<HeaderInfo />
				<ChoiceList />
				<HeaderButtonList />
			</section>
			<div className={styles.section__image}>
				<HeaderCharacter />
			</div>
		</header>
	);
};
