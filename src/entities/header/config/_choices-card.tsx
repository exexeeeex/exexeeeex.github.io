import type { Card } from "@/entities/models";
import { ChartNoAxesColumn, ContactRound, Store, Table2 } from "lucide-react";

export const ChoicesCard: Card[] = [
	{
		id: 1,
		name: "Лендинги",
		icon: <Table2 />,
	},
	{
		id: 2,
		name: "Интернет магазины",
		icon: <Store />,
	},
	{
		id: 3,
		name: "Системы управления",
		icon: <ChartNoAxesColumn />,
	},
	{
		id: 4,
		name: "Блоги",
		icon: <ContactRound />,
	},
];
