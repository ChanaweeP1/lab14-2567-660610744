import { Text, Rating } from "@mantine/core";

export default function YourRating(){
    return(
        <div>
            <Text size="lg" fw={"bold"}>
                Your rating
            </Text>
            <Rating defaultValue={0} size={"lg"} mb="sm"/>
        </div>
    )
}