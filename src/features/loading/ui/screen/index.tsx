import type { FC } from "react";
import { LoadingWheel } from "../wheel";
import { LoadingCode } from "../code";
import styles from "./styles.module.scss";

export const LoadingScreen: FC = () => {
	return (
		<main className={styles.screen}>
			<div className={styles.screen__code}>
				<LoadingCode />
			</div>
			<div className={styles.screen__wheel}>
				<LoadingWheel />
			</div>
		</main>
	);
};
