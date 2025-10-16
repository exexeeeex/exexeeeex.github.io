import type { FC } from "react";
import { Lines } from "../../config";
import styles from "./styles.module.scss";

export const LoadingCode: FC = () => (
	<main className={styles.place}>
		{Lines.map((line) => (
			<p
				className={`text-primary ${styles.place__line}`}
				key={line.id}
			>
				{line.line}
			</p>
		))}
	</main>
);
