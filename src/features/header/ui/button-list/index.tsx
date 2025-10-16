import { HeaderButton } from "@/entities/header";
import type { FC } from "react";
import styles from "./styles.module.scss";

export const HeaderButtonList: FC = () => {
	return (
		<section className={styles.list}>
			<HeaderButton
				placeholder={"Хочу сайт"}
				onClick={function (): unknown {
					throw new Error("Function not implemented.");
				}}
				primary={true}
			/>
			<HeaderButton
				placeholder={"Посмотреть работы"}
				onClick={function (): unknown {
					throw new Error("Function not implemented.");
				}}
				primary={false}
			/>
		</section>
	);
};
