import cn from 'classnames'
import { Title } from '../title/title'
import { Container } from '../container/container'

interface props {
  className?: string
}
export const AddPreview = (props: props) => {
  const { className } = props

  return (
    <Container>
      <div class={cn('add-preview', className)}>
        <div class='middle'>
          <Title>Рекламодателям</Title>
          <p class='add-preview__desc'>
            VKLIST - это площадка, где посетители могут не только посмотреть
            статистику и рейтинги пользователей Вконтакте, но и узнать много
            интересного, а главное эксклюзивного контента про знаменитостей.
            Каждый посетитель вовлечен и с интересом изучает информацию,
            предоставленную на сайте. Это помогает нам добиваться эффективных
            показателей для рекламодателей и предлагать решения, которые
            работают.
          </p>

          <div class='add-preview__numbers-body'>
            <div class='add-preview__numbers-item'>
              <h3 class='add-preview__number'>4,78 млн</h3>
              <p>
                Общее количество <br /> просмотров за месяц
              </p>
            </div>

            <div class='add-preview__numbers-item'>
              <h3 class='add-preview__number'>863 тыс.</h3>
              <p>
                Уникальных <br /> посетителей в месяц
              </p>
            </div>

            <div class='add-preview__numbers-item'>
              <h3 class='add-preview__number'>28 тыс.</h3>
              <p>
                Среднесуточное количество <br /> уникальных посетителей
              </p>
            </div>

            <div class='add-preview__numbers-item'>
              <h3 class='add-preview__number'>3:48</h3>
              <p>
                Среднее время <br /> пребывания на сайте
              </p>
            </div>
          </div>

          <div class='add-preview__info-body'>
            <div class='add-preview__info-item'>
              <h4>Отсутствие ботов</h4>
              <p>
                Реклама не показывается ботам. Система распознает ботов и
                фильтрует их для показа рекламы.
              </p>
            </div>

            <div class='add-preview__info-item'>
              <h4>Гаранированный охват</h4>
              <p>
                Даже с минимальным бюджетом мы гарантируем вам хорошие охваты, в
                том числе отличные показатели уникальных посетителей.
              </p>
            </div>

            <div class='add-preview__info-item'>
              <h4>Показы без остановки</h4>
              <p>
                Мы очень гибкие в редактировании рекламной кампании. Внести
                изменения можно без остановки показа.
              </p>
            </div>

            <div class='add-preview__info-item'>
              <h4>Решаем проблемы</h4>
              <p>
                Мы полностью вовлечены в ваши интересы, поэтому со своей стороны
                полностью содействуем для получения отличного результата.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
