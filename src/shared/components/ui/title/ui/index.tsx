import type { FC } from "react";
import "./styles.module.scss";

type Props = {
	title?: string;
};

export const Title: FC<Props> = ({ title }) => (
	<div className='container'>
		<h1>{title}</h1>
	</div>
);
