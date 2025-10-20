import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/shared/components/ui/input-group";
import { User } from "lucide-react";
import type { FC } from "react";

export const Callback: FC = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className='font-semibold text-2xl'>Или оставьте заявку, чтобы я мог с вами связаться</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-5'>
				<InputGroup>
					<InputGroupInput
						style={{ fontSize: "17px" }}
						placeholder='Укажите ваше имя'
					/>
					<InputGroupAddon>
						<User />
					</InputGroupAddon>
				</InputGroup>
				<InputGroup>
					<InputGroupInput
						style={{ fontSize: "17px" }}
						placeholder='@username'
					/>
					<InputGroupAddon>
						<InputGroupText>t.me/</InputGroupText>
					</InputGroupAddon>
				</InputGroup>
				<InputGroup>
					<InputGroupTextarea
						style={{ maxWidth: "700px", maxHeight: "200px", padding: "5px 10px", fontSize: "17px" }}
						placeholder='Детально опишите вашу идею сайта'
					/>
				</InputGroup>
				<Button className='bg-foreground text-background hover:bg-muted-foreground'>Отправить заявку</Button>
			</CardContent>
		</Card>
	);
};
