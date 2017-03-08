const target = process.env.npm_lifecycle_event;

console.log('TARGET => ' + target);

if (target === undefined) {
  throw Error('target is not set!');
}