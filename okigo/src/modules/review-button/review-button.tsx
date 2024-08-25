import cn from 'classnames'

interface props {
  className?: string
  content: number
  checked?: boolean
}
export const ReviewButton = (props: props) => {
  const { className, content, checked } = props

  return (
    <label class={cn('review-button', className)}>
      <input type='radio' name='review-button' hidden checked={checked} />
      <div class='review-button__box'>{content}</div>
    </label>
  )
}
