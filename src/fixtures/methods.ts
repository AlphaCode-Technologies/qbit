/**
 * @author Dulan Sudasinghe
 * @createdDate 26.12.2024
 *
 * @description Log function that logs the message with a title
 */

globalThis.log = Object.freeze((key: string, ...args: any[]) => {
  if (typeof key !== 'string') {
    console.error('Invalid key provided to log function');
    return;
  }

  const title = `__${key.toLocaleUpperCase().replaceAll(' ', '_')}__`;
  console.log(title, ...args);
});
