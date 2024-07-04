import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { List, ThemeIcon, rem, Container, SimpleGrid, Input } from '@mantine/core';
import CardComponent2 from './CardComponent2';
import { useState } from 'react';
import React from 'react';
import "./App.css";

const storeItems = [
  {
    name: "Ütü",
    price: 20
  },
  {
    name: "Araba",
    price: 10
  },
  {
    name: "Bisiklet",
    price: 30
  }
]

function App() {

  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = basketItems.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);


  return (
    <Container>
      <SimpleGrid cols={3} className='Store'>
        {storeItems.map((storeItem) => {
          return <CardComponent2 key={storeItem.name} name={storeItem.name} onAdd={() => { setBasketItems([...basketItems, { name: storeItem.name, price: storeItem.price }]) }} />
        })}
      </SimpleGrid>
      {searchValue}
      <Input.Wrapper label="Search">
        <Input onChange={(e) => setSearchValue(e.target.value)} />
      </Input.Wrapper>
      <List
        className='List'
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        {filteredItems.map((basketItem, index) => (<List.Item key={index}>{basketItem.name}</List.Item>))}

      </List>
    </Container>
  )
}

export default App
