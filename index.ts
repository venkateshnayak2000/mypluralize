import * as pluralize from 'pluralize'
/**
* @Method: Returns the plural form of any noun.
* @Param {string}
* @Return {string}
* with comment
*/
export function getPlural (str: any) : string {
  return pluralize.plural(str)
  
}
