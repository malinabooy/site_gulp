import IMask from 'imask'

export const presetMask = {
  phone: {
    mask: '+{7} (000) 000-00-00',
    lazy: true,
    prepare: (appended, masked) => {
      if (appended === '8' && masked.value === '') {
        return '  '
      }
      return appended
    }
  },
  number: {
    mask: Number
  }
}

export const useMask = (input, option) => {
  const mask = new IMask(input, option)

  const reset = () => {
    input.value = ''
    mask.updateValue()
  }

  return {
    reset
  }
}