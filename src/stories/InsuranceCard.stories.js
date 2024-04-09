import InsuranceCard from './InsuranceCard.vue'
import { fn } from '@storybook/test';

export default {
  title: 'Example/InsuranceCard',
  component: InsuranceCard,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    eng: { control: 'text' },
    color: { control: 'text' },
    shadow: { control: 'text' },
    img: { control: 'text' },
  },
  args: { onClick: fn() },
}

export const Travel = {
  args: {
    label: '旅遊平安險',
    eng: 'Travel Insurance',
    img: '/testImg/insurance1.png',
    color: 'linear-gradient(99.32deg, #40AF72 1.35%, #41AFA8 98.74%)',
    shadow: '#41B09870'
  }
}
export const Car = {
  args: {
    label: '車險',
    eng: 'Car Insurance',
    img: '/testImg/insurance2.png',
    color: 'linear-gradient(97.46deg, #D49595 5.39%, #D07154 86.93%)',
    shadow: '#4560A869',
  }
}
export const TravelAgency = {
  args: {
    label: '旅行業責任險',
    eng: 'Travel Agency Liability Insurance',
    img: '/testImg/insurance3.png',
    color: 'linear-gradient(274.64deg, #EA924F 32.67%, #F2B566 96.56%)',
    shadow: '#E9A7576E',
  }
}
export const Fire = {
  args: {
    label: '住宅火災保險',
    eng: 'Fire Insurance',
    img: '/testImg/insurance4.png',
    color: 'linear-gradient(274.16deg, #636BDE 18.96%, #5CA2F3 98.08%)',
    shadow: '#6992D061',
  }
}