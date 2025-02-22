import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function CardComponent2(props) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{props.name}</Text>
                <Badge color="pink">On Sale</Badge>
            </Group>

            <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md" onClick={props.onAdd}>
                Add
            </Button>
        </Card>
    )

}

export default CardComponent2