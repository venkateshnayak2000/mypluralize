import * as pluralize from 'pluralize'
/**
* 15 commit from server
* @Method: Returns the plural form of any noun.
* @Param {string}
* @Return {string}
*/
export function getPlural (str: any) : string {
  return pluralize.plural(str); //19th comment from Master branch
}
