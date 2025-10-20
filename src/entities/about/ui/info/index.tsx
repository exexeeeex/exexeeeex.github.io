import { Card, CardContent } from "@/shared/components/ui/card";
import type { FC } from "react";
import { aboutInfo } from "../../config";

export const AboutInfo: FC = () => (
	<Card style={{ maxWidth: "780px", width: "100%" }}>
		<CardContent>
			<p style={{ fontSize: "1.2rem" }}>{aboutInfo}</p>
		</CardContent>
	</Card>
);
