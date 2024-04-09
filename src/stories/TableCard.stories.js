import TableCard from "./TableCard.vue";

export default {
  title: 'Example/TableCard',
  component: TableCard,
  tags: ['autodocs'],
  argTypes: {
    padding: { control: 'text' },
    margin: { control: 'text' },
    color: { control: 'text' },
    headerPadding: { control: 'text' },
    footerPadding: { control: 'text' },
  }
};

export const Default = {
  parameters: {
    slots: {
      header: {
        template: 'Slot Header.'
      },
      default: {
        template: 'Slot Content.'
      },
      footer: {
        template: 'Slot Footer.'
      },
    }
  }
};
export const Hide = {
  parameters: {
    slots: {
      default: {
        template: 'Slot Content.'
      },
    }
  }
};
export const CustomPadding = {
  args: {
    padding: '200px 100px 50px 25px',
    headerPadding: '50px 25px 10px 5px',
    footerPadding: '50px 25px 10px 5px',
  },
  parameters: {
    slots: {
      header: {
        template: 'Slot Header.'
      },
      default: {
        template: 'Slot Content.'
      },
      footer: {
        template: 'Slot Footer.'
      },
    }
  }
};
export const CustomMargin = {
  args: {
    margin: '200px 100px 50px 25px',
  },
  parameters: {
    slots: {
      header: {
        template: 'Slot Header.'
      },
      default: {
        template: 'Slot Content.'
      },
      footer: {
        template: 'Slot Footer.'
      },
    }
  }
};
export const CustomColor = {
  args: {
    color: '#E9F8F8',
  },
  parameters: {
    slots: {
      header: {
        template: 'Slot Header.'
      },
      default: {
        template: 'Slot Content.'
      },
      footer: {
        template: 'Slot Footer.'
      },
    }
  }
};