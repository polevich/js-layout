import { createElement, createHeader } from '../../script/layout'
const page = document.querySelector('.page')
const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', 'Комьюнити')
page.append(title)

const TAB_LIST = [
  {
    text: 'База знаний',
    active: true,
  },
  {
    text: 'Информация',
    active: false,
  },
]

const createTabList = () => {
  const tabList = createElement('div', 'tab__list')

  TAB_LIST.forEach((tab) => {
    const button = createElement('button', 'button')
    const tabButton = createElement('div', 'tab__button')

    if (tab.active) {
      tabButton.classList.add('tab__active')
    }
    tabButton.textContent = tab.text

    button.appendChild(tabButton)
    tabList.appendChild(button)
  })

  return tabList
}

const tabs = createTabList()
page.append(tabs)

const image = createElement('img')
image.src = '/img/community_image.png'
image.alt = 'Наше комьюнити'

page.append(image)

const mainElement = createElement('main', 'post')
const strongElement = createElement('strong', 'post__title', 'Что такое база знаний?')
const paragraphElement = createElement(
  'p',
  'post__text',
  'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
)
mainElement.appendChild(strongElement)
mainElement.appendChild(paragraphElement)

page.append(mainElement)

const buttonTelegram = createElement(
  'button',
  'button post__button',
  'Перейти в комьюнити в Телеграм',
)
page.append(buttonTelegram)
