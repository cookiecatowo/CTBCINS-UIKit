import Dialog from './Dialog.vue';

export default {
  title: 'Example/Dialog',
  component: Dialog,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    size: { control: {type: 'radio'}, options: ['sm', 'md', 'lg']},
    width: { control: 'text' },
    height: { control: 'text' },
    force: { control: 'boolean'},
  },
};

export const Default = {
  args: {
    title: '是否放棄修改的資料返回?',
    size: 'sm',
    modelValue: true,
  },
  parameters: {
    slots: {
      footer: {
        template: '<button>確定</button>'
      }
    }
  }
};
export const Description = {
  args: {
    modelValue: true,
    title: '修改成功',
    description: '將自動跳轉回保單管理頁面...',
    size: 'sm',
  }
};
export const Pictrue = {
  args: {
    modelValue: true,
    title: '修改成功',
    description: '將自動跳轉回保單管理頁面...',
    size: 'sm',
    img: '/testImg/dialog-check.png'
  },
};
export const Force = {
  args: {
    modelValue: true,
    title: '是否放棄修改的資料返回?',
    size: 'sm',
    force: true,
  },
  parameters: {
    slots: {
      footer: {
        template: '<button>確定</button>'
      }
    }
  }
};
export const Medium = {
  args: {
    modelValue: true,
    title: '自行前往刷卡授權',
    size: 'md',
  },
  parameters: {
    slots: {
      description: {
        template: '<p class="font-normal break-all">請客戶至以下網址 (https://ecp.ctbcins.com/pymt/customer/search)<br>並於網頁中輸入身分證號碼與驗證碼進行繳費</p>'
      },
      footer: {
        template: '<button class="rounded-full border w-fit px-4">複製網址</button>'
      }
    }
  }
};
export const Large = {
  args: {
    modelValue: true,
    title: '自行前往刷卡授權',
    size: 'lg',
  },
  parameters: {
    slots: {
      default: {
        template: '<div class="font-normal break-all bg-border h-[1000px]">請客戶至以下網址 (https://ecp.ctbcins.com/pymt/customer/search)<br>並於網頁中輸入身分證號碼與驗證碼進行繳費</div>'
      },
      footer: {
        template: '<button class="rounded-full border w-fit px-4">複製網址</button>'
      }
    }
  }
};
export const CustomSize = {
  args: {
    modelValue: true,
    title: '修改成功',
    description: '將自動跳轉回保單管理頁面...',
    width: '500px',
    height: '500px',
  },
  parameters: {
    slots: {
      footer: {
        template: '<button class="rounded-full border w-fit px-4">確認</button>'
      }
    }
  }
};
export const Slot = {
  args: {
    modelValue: true,
    size: 'sm',
  },
  parameters: {
    slots: {
      title: {
        template: '<H1 class="text-alert">自訂的標題</H1>'
      },
      description: {
        template: '<p class="text-sm">自訂的描述</p>'
      },
      default: {
        template: '<p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p><p class="text-sm">自訂的內容</p>'
      },
      footer: {
        template: '<button class="rounded-full border w-fit px-4">自訂的footer</button>'
      }
    }
  }
};