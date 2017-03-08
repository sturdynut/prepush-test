const target = process.env.npm_lifecycle_event;

console.log('TARGET => ' + target);

throw Error('Break the things');