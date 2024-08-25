import cn from 'classnames'

interface props {
  className?: string
  placeholder: string
  name: string
  cols?: string
  rows?: string
}

export const Textarea = (props: props) => {
  const { className, placeholder, name, rows, cols } = props

  return (
    <label data-id-static={name} class='textarea'>
      <textarea
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        name={name}
        data-id-static={name}
      ></textarea>
      <p data-error={name} class='textarea__error'></p>
    </label>
  )
}
