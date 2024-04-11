import Stepper from './Stepper.vue';

export default {
  title: 'Example/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    list: { control: 'array' },
    step: { control: 'number' },
    stepImg: { control: 'text' },
    selectImg: { control: 'text' },
  }
}
export const Default = {
  args: {
    list: ['要保人資料', '旅遊資訊', '被保險人資料', '投保完成'],
    step: 1,
  }
}

export const CustomImg = {
  args: {
    list: ['要保人資料', '旅遊資訊', '被保險人資料', '投保完成'],
    step: 1,
    stepImg:'/testImg/stepImg.png',
    selectImg: '/testImg/stepImg2.png',
  }
}
export const ThreeStep = {
  args: {
    list: ['資料上傳', '被保險人資料', '投保完成'],
    step: 1,
    stepImg:'/testImg/stepImg.png',
    selectImg: '/testImg/stepImg2.png',
  }
}