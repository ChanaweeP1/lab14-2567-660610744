"use client";
import Comment from "@components/Comment";
import Footer from "@components/Footer";
import Rating from "@components/Rating";
import Review from "@components/Review";
import { Container, Group, Pagination, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Rating/>
      <Review/>
      <Comment name="Elon Musk" rating={5} review="Best pizza in this world. I give you X score."/>
      <Comment name="Mark Zuck" rating={4} review="My favourite part is pepperoni"/>
      <Group justify="center">
        <Pagination total={20} color="orange"/>
      </Group>
      <Footer year= "2024" name="Chanawee Pintaya" studentId="660610744"/>
    </Container>
  );
}
