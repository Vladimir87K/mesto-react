class Api {
  constructor(options) {
      this._urlBase = options.urlBase;
      this._headers = options.headers;

  }

  _checkError(res) {
      if (res.ok) {
          return res.json();
      } else {
          Promise.reject(`Произошла ошибка: ${res.status}`);
      }
  }


  getInitialCards() {
      return fetch(`${this._urlBase}/cards`, {
              method: 'GET',
              headers: this._headers
          })
          .then(this._checkError)
  }

  getInitialProfil() {
      return fetch(`${this._urlBase}/users/me`, {
              method: 'GET',
              headers: this._headers
          })
          .then(this._checkError)
  }

  addNewCards(data) {
      return fetch(`${this._urlBase}/cards`, {
              method: 'POST',
              headers: this._headers,
              body: JSON.stringify({
                  name: data.name,
                  link: data.link
              })
          })
          .then(this._checkError)
  }

  deleteCard(cardId) {
      return fetch(`${ this._urlBase}/cards/${cardId}`, {
              method: 'DELETE',
              headers: this._headers,
          })
          .then(this._checkError)
  }

  correctUserInfo(data) {
      return fetch(`${this._urlBase}/users/me`, {
              method: 'PATCH',
              headers: this._headers,
              body: JSON.stringify({
                  name: data.userName,
                  about: data.userJob
              })
          })
          .then(this._checkError)
  }

  correctUserAvatar(data) {
      return fetch(`${this._urlBase}/users/me/avatar`, {
              method: 'PATCH',
              headers: this._headers,
              body: JSON.stringify({
                  avatar: data.urlAvatar
              })
          })
          .then(this._checkError)
  }

  addLikeCard(idCard) {
      return fetch(`${this._urlBase}/cards/${idCard}/likes`, {
              method: 'PUT',
              headers: this._headers,
          })
          .then(this._checkError)
  }

  deleteLikeCard(idCard) {
      return fetch(`${this._urlBase}/cards/${idCard}/likes`, {
              method: 'DELETE',
              headers: this._headers,
          })
          .then(this._checkError)
  }
}

const api = new Api({
    urlBase: 'https://mesto.nomoreparties.co/v1/cohort-41',
    headers: {
        authorization: 'd2b53e42-b171-4a97-abd9-e550272a84f9',
        'Content-Type': 'application/json'
    }
  });

  export default api;