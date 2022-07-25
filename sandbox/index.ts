import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
  await client.hSet('car', {
    color: 'red',
    year: 1950
  });

  const car = await client.hGetAll('car#123');

  if (!Object.keys(car).length) {
    console.log('Car not found, respond with 404');
    return;
  }

  console.log(car);
};

run();
