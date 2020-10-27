import * as pluralize from 'pluralize'
/**
* comit with new comment
* @Method: Returns the plural form of any noun.
* @Param {string}
* @Return {string}
*/
export function getPlural (str: any) : string {
  return pluralize.plural(str)
  
}
