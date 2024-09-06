import { Textarea, Button } from "@mantine/core";

export default function YourReview(){
    return(
        <div>
            <Textarea label="Your review" 
            placeholder="Do you enjoy eating?" 
            minRows={3} 
            autosize 
            mb={"sm"}/>
            <Button variant="filled" color="orange" mb={"sm"}>Submit Review</Button>
        </div>
    )
}