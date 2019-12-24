const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const grid = [17, 17];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime.timeline({
  targets: '.stagger-visualizer div',
  easing: 'easeInOutSine',
  delay: anime.stagger(50),
  loop: 2,
  autoplay: false
})
.add({
  // translateX: [
  //   {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
  //   {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
  // ],
  // translateY: [
  //   {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
  //   {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
  // ],
  duration: 1000,
  scale: .5,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
// .add({
//   translateX: () => anime.random(-10, 10),
//   translateY: () => anime.random(-10, 10),
//   delay: anime.stagger(2, {from: 'last'})
// })
.add({
  translateX: anime.stagger('0rem', {grid: grid, from: 'center', axis: 'x'}),
  translateY: anime.stagger('0rem', {grid: grid, from: 'center', axis: 'y'}),
  rotate: 0,
  scaleX: 0.25,
  scaleY: 1.8,
  delay: anime.stagger(4, {from: 'center'})
})
// .add({
//   translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
//   translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
//   rotate: 0,
//   scaleX: 1,
//   scaleY: .25,
//   delay: anime.stagger(4, {from: 'center'})
// })
.add({
  rotate: anime.stagger([-90, 90], {grid: grid, from: 'center'}),
  delay: anime.stagger(50, {grid: grid, from: 'center'})
})
// .add({
//   translateX: 0,
//   translateY: 0,
//   scale: .5,
//   scaleX: 1,
//   rotate: 180,
//   duration: 1000,
//   delay: anime.stagger(100, {grid: grid, from: 'center'})
// })
// .add({
//   scaleY: 0.8,
//   scale: 1,
//   delay: anime.stagger(20, {grid: grid, from: 'center'})
// })
.add({
  translateX: () => anime.random(-10, 10),
  translateY: () => anime.random(-10, 10),
  delay: anime.stagger(2, {from: 'last'})
})
.add({
  translateX: anime.stagger('0rem', {grid: grid, from: 'center', axis: 'x'}),
  translateY: anime.stagger('0rem', {grid: grid, from: 'center', axis: 'y'}),
  rotate: 0,
  scaleX: 0.9,
  scaleY: 0.9,
  delay: anime.stagger(4, {from: 'center'})
})

.add({
  rotate: 0,
  scaleX: 1,
  scaleY: 1,
  scale: 1,
  delay: anime.stagger(4, {from: 'center'})
})

staggersAnimation.play();