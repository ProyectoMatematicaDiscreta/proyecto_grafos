//VARIANTES PARA ANIMACION DEL LOGIN
export const variantsPhone = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: {
    scale: 0, opacity: 0, transition: {
      duration: 1
    }
  }
};
export const variantsPhonePanel = {
  before: { y: 0, x: 65 },
  after: { y: 156, x: 65 },

};
export const variantsPhoneMinPanel = {
  before: { y: -100, x: 25 },
  after: { y: 53, x: 25 },

};


export const variantsLoginform = {
  before: { y: 600, opacity: 0 },
  after: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.8,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  },


};
export const variantsLoginformChilds = {
  before: { x: 200, opacity: 0 },
  after: { x: 0, opacity: 1 }
}
export const variantsLoginError = {
  before: { opacity: 0 },
  after: { opacity: 1 },

};

export const variantsLoginButton = {
  before: { x: 40 },
  after: { x: 0 }
}
export const variantsMessage = {
  before: { x: 270 },
  after: { x: 0 }
}
export const variantsMessage2 = {
  before: { x: 570, y: 95 },
  after: { x: 97, y: 95 },


}
export const variantsMessage3 = {
  before: { x: 570, y: 95 },
  after: { x: 267, y: 95 },


}
export const variantsMessage4 = {
  before: { d: 'M397.5 130.5h175 ' },
  after: { d: 'M97.5 130.5h175 ' },


}
export const variantsMessageText = {
  before: { opacity: 0 },
  after: { opacity: 1 },


}
export const variantsMessageEllipse = {
  before: { cx: 285 },
  after: { cx: 11.75 }
}
