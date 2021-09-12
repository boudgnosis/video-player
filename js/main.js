const VIDEO = document.querySelector('#video')
const PLAY = document.querySelector('#play')
const PAUSE = document.querySelector('#pause')
const BACKWARD = document.querySelector('#backward')
const FORWARD = document.querySelector('#forward')

PLAY.addEventListener('click', handlePlay)
PAUSE.addEventListener('click', handlePause)

function handlePlay() {
	VIDEO.play()
	PLAY.hidden = true
	PAUSE.hidden = false
}

function handlePause() {
	VIDEO.pause()
	PAUSE.hidden = true
	PLAY.hidden = false
}

BACKWARD.addEventListener('click', handleBackward)

function handleBackward() {
	VIDEO.currentTime -= 10 
}

FORWARD.addEventListener('click', handleForward)

function handleForward() {
	VIDEO.currentTime += 10 
}

const PROGRESS = document.querySelector('#progress')
VIDEO.addEventListener('loadedmetadata', handleLoaded)
VIDEO.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
	PROGRESS.max = VIDEO.duration
}

function handleTimeUpdate() {
	PROGRESS.value = VIDEO.currentTime
}

PROGRESS.addEventListener('input', handleInput)

function handleInput() {
	VIDEO.currentTime = PROGRESS.value
	console.log()
}