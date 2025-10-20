import { HeaderCharacter, HeaderInfo } from "@/entities/header";
import type { FC } from "react";
import { ChoiceList, HeaderButtonList } from "@/features/header";
import { Title } from "@/shared/components/ui/title";
import styles from "./styles.module.scss";

export const Header: FC = () => {
	return (
		<header className={styles.section}>
			<section className={styles.section__inner}>
				<section className={styles.section__inner__title}>
					<Title title='БУДУЩЕЕ РЯДОМ' />
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
