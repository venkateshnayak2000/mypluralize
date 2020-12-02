import * as pluralize from 'pluralize'
/**
* Change made on branch
* @Method: Returns the plural form of any noun.
* @Param {string}
* @Return {string}
*/
export function getPlural (str: any) : string {
  return pluralize.plural(str); //19th comment from dev branch
}
