const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var appendedKitties = [...kittens, name];
  return appendedKitties;
}

function prependKitten(name) {
  var prependedKitties = [name, ...kittens];
  return prependedKitties;
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}
