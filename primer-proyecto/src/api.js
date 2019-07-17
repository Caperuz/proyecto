const cardsAPI = {
allCards : [
    {
      id:1,
      price:26.119,
      imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/7_dias.png",
      link: "http://www.hugoromero.com.ar/avantrip/",
      scale: '',
      stayId: '',
      description: "7 días de playa",
    },
    {
      id:2,
      price:26.119,
      imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/10_dias.png",
      link: "http://www.hugoromero.com.ar/avantrip/",
      scale: '',
      stayId: '',
      description: "10 días de shopping",
    },
    {
      id:3,
      price:26.119,
      imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/15_dias.png",
      link: "http://www.hugoromero.com.ar/avantrip/",
      scale: '',
      stayId: '',
      description: "15 días tour",
    },
    {
      id:4,
      price:26.119,
      imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/19_dias.png",
      link: "http://www.hugoromero.com.ar/avantrip/",
      scale: '',
      stayId: '',
      description: "19 días full",
    },
    {
      id:5,
      price:26.119,
      imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/7_dias.png",
      link: "http://www.hugoromero.com.ar/avantrip/",
      scale: '',
      stayId: '',
      description: "7 días de playa",
    },
    {
      id:6,
      price:26.119,
      imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/10_dias.png",
      link: "http://www.hugoromero.com.ar/avantrip/",
      scale: '',
      stayId: '',
      description: "10 días de shopping",
    },
    {
      id:7,
      price:26.119,
      imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/15_dias.png",
      link: "http://www.hugoromero.com.ar/avantrip/",
      scale: '',
      stayId: '',
      description: "15 días tour",
    },
    {
      id:8,
      price:26.119,
      imgUrl:"http://www.hugoromero.com.ar/avantrip/imagenes/19_dias.png",
      link: "http://www.hugoromero.com.ar/avantrip/",
      scale: '',
      stayId: '',
      description: "19 días full",
    }
  ],
  all: function() {
      return this.allCards;
  },
  get: function(id) {
      return this.allCards.find(u => u.id === id);
  }
};

export default cardsAPI;