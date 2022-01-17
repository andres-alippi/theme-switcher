let isLight = true

const DOM = {
  selector: document.querySelector('div.selector'),
  body: document.querySelector('body')
}

const Storage = {
  get() {
    return JSON.parse(localStorage.getItem('theme.switcher:themeConfig')) || []
  },
  set(value) {
    localStorage.setItem('theme.switcher:themeConfig', JSON.stringify(value))
  }
}

const ThemeInit = {
  setLight() {
    DOM.body.style.backgroundColor = '#f1f1f1'
    DOM.selector.style.left = '3px'
  },
  setDark() {
    DOM.body.style.backgroundColor = '#292c35'
    DOM.selector.style.left = '41px'
  }
}

const ThemeSwitch = {
  turnLight() {
    DOM.selector.classList.remove('sw-dark-animation')
    DOM.selector.classList.add('sw-light-animation')
    DOM.body.classList.remove('body-dark-animation')
    DOM.body.classList.add('body-light-animation')
  },
  turnDark() {
    DOM.selector.classList.remove('sw-light-animation')
    DOM.selector.classList.add('sw-dark-animation')
    DOM.body.classList.remove('body-light-animation')
    DOM.body.classList.add('body-dark-animation')
  }
}

const Switch = {
  toggle() {
    App.update()
    isLight = !isLight
  }
}

const App = {
  loadThemeValue() {
    let storageValue = Storage.get().toString()

    if (storageValue === 'light' || storageValue === '') {
      isLight = true
    } else {
      isLight = false
    }
  },
  init() {
    App.loadThemeValue()
    if (isLight) ThemeInit.setLight()
    else ThemeInit.setDark()
  },
  update() {
    if (isLight) {
      Storage.set('dark')
      ThemeSwitch.turnDark()
    } else {
      Storage.set('light')
      ThemeSwitch.turnLight()
    }
  }
}

App.init()
