let isLight = true

const ThemeSwitch = {
  turnLight() {
    document.querySelector('div.selector').classList.remove('sw-dark-animation')
    document.querySelector('div.selector').classList.add('sw-light-animation')
    document.querySelector('body').classList.remove('body-dark-animation')
    document.querySelector('body').classList.add('body-light-animation')
  },
  turnDark() {
    document
      .querySelector('div.selector')
      .classList.remove('sw-light-animation')
    document.querySelector('div.selector').classList.add('sw-dark-animation')
    document.querySelector('body').classList.remove('body-light-animation')
    document.querySelector('body').classList.add('body-dark-animation')
  }
}

const Switch = {
  toggle() {
    if (isLight) {
      isLight = !isLight
      ThemeSwitch.turnDark()
    } else {
      isLight = !isLight

      ThemeSwitch.turnLight()
    }
  }
}
