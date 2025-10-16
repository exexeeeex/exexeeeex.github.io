import type { FC } from "react";
import styles from "./styles.module.scss";

import wheel from "../../assets/wheel.png";

export const LoadingWheel: FC = () => (
	<img
		className={styles.wheel}
		id='logo'
		width={"40%"}
		src={wheel}
		alt='wheel'
	/>
);
