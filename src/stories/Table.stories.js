import Table from "./Table.vue";

export default {
  title: 'Example/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {

  },
};

export const Default = {
  args: {
  },
  parameters: {
    slots: {
      header: {
        template: '<th>序號</th><th>被保險人</th><th>保費</th>'
      },
      default: {
        template: '<tr><td>01</td><td>AAA</td><td>$1,000</td></tr><tr><td>02</td><td>BBB</td><td>$1,999</td></tr>'
      },
      footer: {
        template: '總保費 $2,999 元'
      },
    }
  }
};
export const Empty = {
  args: {
  },
  parameters: {
    slots: {
      header: {
        template: '<th>序號</th><th>被保險人</th><th>保費</th>'
      },
    }
  }
};
export const Collapse = {
  args: {
    collapse: true
  },
  parameters: {
    slots: {
      header: {
        template: '<th>序號</th><th>被保險人</th><th>保費</th>'
      },
      default: {
        template: '<tr><td>01</td><td>AAA</td><td>$1,000</td></tr><tr><td>02</td><td>BBB</td><td>$1,999</td></tr>'
      },
    }
  }
};
