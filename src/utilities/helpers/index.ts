/**
 * Add all global constants, fixtures in this file
 *
 * Author: Dulan Sudasinghe
 * Date: 21.12.2024
 */

/**
 * Blank function, used as a placeholder or in places
 * where a function is required but no action is needed.
 * or if component is disabled and actions needs to be replaced
 * due to security reasons. (E.g:- in case of disabled buttons, the user should not be able to run
 * any actions by manually enabling the component through the browser console)
 */
export const fn = Object.freeze(() => {});

/**
 * Log function that logs the message with a title
 */
export const log = Object.freeze((key: string, ...args: any[]) => {
  const title = `__${key.toLocaleUpperCase().replaceAll(' ', '_')}__`;

  console.log(title, ...args);
});
