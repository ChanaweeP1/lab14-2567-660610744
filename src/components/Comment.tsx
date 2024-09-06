import { Text,Divider,Rating,Group } from "@mantine/core";
import { CommentProps } from "@lib/types";

export default function Comment({name, rating, review}:CommentProps){
    return(
        <div>
            <Divider mb={"sm"}/>
            <Group justify="center">
                <Text size="lg" fw={"bold"}>
                    {name}
                </Text>
            <Rating value={rating} readOnly/>
            </Group>
            <Text size="sm" ta={"center"} mb={"sm"} c={"gray"}>
                {review}
            </Text>
        </div>
    )
}