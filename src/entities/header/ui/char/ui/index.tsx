import type { FC } from "react";
import styles from "./styles.module.scss";

import char from "../../../assets/char.png";

export const HeaderCharacter: FC = () => (
	<img
		className={styles.img}
		width={"80%"}
		src={char}
		alt='char'
	/>
);
