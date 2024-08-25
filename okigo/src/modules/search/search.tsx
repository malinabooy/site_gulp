import cn from 'classnames'
import { Icon } from '@/modules/icon/icon'
import { searchValuesData } from '@/modules/search/search-data'

interface props {
  className?: string
  isWhite?: boolean
}

export const Search = (props: props) => {
  const { className, isWhite } = props

  const mod = {
    'search--transparent-white': isWhite
  }

  return (
    <div class={cn('search', mod, className)}>
      <label class='search__label'>
        <Icon name='search' />
        <input type='search' class='search__input' placeholder='Поиск' />
      </label>

      <div class='search__body'>
        <div class='search__wrap'>
          {searchValuesData.map((value) => (
            <a href='javascript:void(0)' data-id='drop-item'>
              {value}
            </a>
          ))}
          <p data-id='not-found'>Ничего не найдено:(</p>
        </div>
      </div>
    </div>
  )
}
