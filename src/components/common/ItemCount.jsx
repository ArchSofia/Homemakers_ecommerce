import React from "react";
import { useState } from "react";
import {
	Text,
	ButtonGroup,
	IconButton,
	Tooltip,
	Center,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({ stock }) => {
	const [count, setcount] = useState(0);

	const onAdd = () => {
		setCount(count + 1);
	};

	const onSubstract = () => {
		setCount(count - 1);
	};
	return (
		<>
			<ButtonGroup size="sm" isAttached variant="outline">
				{count < 1 ? (
					<Tooltip label="mínimo permitido" placement="bottom">
						<IconButton icon={<MinusIcon />} isDisabled />
					</Tooltip>
				) : (
					<IconButton icon={<MinusIcon />} onClick={onSubstract} />
				)}
				<Center w="50px" h="30px">
					<Text as="b">{count}</Text>
				</Center>
				{count < stock ? (
					<IconButton icon={<AddIcon />} onClick={onAdd} />
				) : (
					<Tooltip label="no hay más stock que el actual" placement="bottom">
						<IconButton icon={<AddIcon />} isDisabled />
					</Tooltip>
				)}
			</ButtonGroup>
		</>
	);
};

export default ItemCount;