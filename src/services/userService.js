import { storageService } from './storageService.js'

const USER_KEY = 'loggedInUser'

function getUser() {
  let user = storageService.load(USER_KEY)
  if (user) return user
  else user = {
    name: "Dea Folt",
    coins: 200,
    moves: [],
  }
  storageService.store(USER_KEY, user)
  return user
}

function signup(name) {
  const user = {
    name,
    coins: 200,
    moves: [],
  }
  storageService.store(USER_KEY, user)
  return user
}

function logout(){
  storageService.remove(USER_KEY)
}

function addMove(contact, amount) {
  const user = storageService.load(USER_KEY)
  const newMove = {
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount,
  }
  user.coins -= amount
  user.moves.unshift(newMove)
  storageService.store(USER_KEY, user)
  return user
}

export const userService = {
  getUser,
  signup,
  addMove,
  logout,
}