import * as pluralize from 'pluralize'
/**
* 15 commit from server server again
* @Method: Returns the plural form of any noun.
* @Param {string}
* @Return {string}
*/
export function getPlural (str: any) : string { //Master change 3
  return pluralize.plural(str); //Dev changes 9
}
