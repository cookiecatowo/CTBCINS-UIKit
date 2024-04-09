import Card from "./Card.vue";

export default {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    padding: { control: 'text' },
    margin: { control: 'text' },
    color: { control: 'text' },
  }
}
export const Default = {
  parameters: {
    slots: {
      default: {
        template: 'Slot Content.'
      }
    }
  }
}
export const CustomPadding = {
  args: {
    padding: '200px 100px 50px 25px',
  },
  parameters: {
    slots: {
      default: {
        template: 'Slot Content.'
      }
    }
  }
}
export const CustomMargin = {
  args: {
    margin: '200px 100px 50px 25px',
  },
  parameters: {
    slots: {
      default: {
        template: 'Slot Content.'
      }
    }
  }
}
export const CustomColor = {
  args: {
    color: '#E9F8F8',
  },
  parameters: {
    slots: {
      default: {
        template: 'Slot Content.'
      }
    }
  }
}